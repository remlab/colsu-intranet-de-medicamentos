import * as React from 'react';
import * as ReactDom from 'react-dom';
import { DisplayMode, Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneLink,
  PropertyPaneButton,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import { IPropertyFieldGroupOrPerson, PropertyFieldPeoplePicker, PrincipalType } from '@pnp/spfx-property-controls/lib/PropertyFieldPeoplePicker';

import * as strings from 'OrganigramaWebPartStrings';
import Organigrama from './components/Organigrama';
import { IOrganigramaProps, IOrganigramaModel } from './components/IOrganigramaProps';

export interface IOrganigramaWebPartProps {
  list: string;
  title: string;
  subtitle: string;
  selectedItem: IOrganigramaModel;
  person: IPropertyFieldGroupOrPerson[];
}

export default class OrganigramaWebPart extends BaseClientSideWebPart<IOrganigramaWebPartProps> {

  public onSelectItem = (item) => {
    this.properties.person = null;
    this.properties.selectedItem = item;
  }

  public render(): void {
    const element: React.ReactElement<IOrganigramaProps> = React.createElement(Organigrama,
      {
        context: this.context,
        inDesignMode: this.displayMode === DisplayMode.Edit,
        onSelectItem: this.onSelectItem,
        ...this.properties
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return (this.context.propertyPane.isRenderedByWebPart()) ? this.itemPanel() : this.mainPanel();
  }  

  private itemPanel(): IPropertyPaneConfiguration {
    return {
      pages: [{
        header: {
          description: "Personalizar la configuración general"
        },
        groups: [
          {
            groupName: "Selecciona",
            groupFields: [
              PropertyFieldPeoplePicker("person", {
                label: "Persona",
                initialData: [],
                allowDuplicate: false,
                multiSelect: false,
                principalType: [PrincipalType.Users],
                onPropertyChange: this.onPropertyPaneFieldChanged,
                context: this.context,
                properties: this.properties,
                onGetErrorMessage: null,
                deferredValidationTime: 0,
                key: 'peopleFieldId'
              }),
              PropertyPaneButton("copy", {
                text: "Copiar",
                icon: "Copy",
                onClick: () => {
                  if (Array.isArray(this.properties.person) && this.properties.person.length > 0) {
                    const [ persona ] = this.properties.person;
                    this.properties.selectedItem.Title = persona.fullName;
                    this.properties.selectedItem.Cargo = persona.jobTitle;
                    if (persona.imageUrl !== "" ) this.properties.selectedItem.Picture = { Url: persona.imageUrl };
                  }
                }
              })
            ]
          },
          {
            groupName: "Elementos",
            groupFields: [
              PropertyPaneTextField("selectedItem.Title", {
                label: "Nombre"
              }),
              PropertyPaneTextField("selectedItem.Cargo", {
                label: "Cargo"
              }),
              PropertyPaneTextField("selectedItem.yammer.Url", {
                label: "Link Yammer"
              }),
              PropertyPaneTextField("selectedItem.Picture.Url", {
                label: "Foto URL"
              }),
            ]
          }
        ]
      }]
    };
  }

  private mainPanel(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Personalizar la configuración general"
          },
          groups: [
            {
              groupName: "Elementos",
              groupFields: [
                PropertyPaneTextField("title", {
                  label: "Título"
                }),
                PropertyPaneTextField("subtitle", {
                  label: "Subtítulo"
                }),
                PropertyFieldListPicker("list", {
                  label: 'Seleccione una lista',
                  selectedList: this.properties.list,
                  includeHidden: false,
                  orderBy: PropertyFieldListPickerOrderBy.Title,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  context: this.context,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'listPickerFieldId'
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
