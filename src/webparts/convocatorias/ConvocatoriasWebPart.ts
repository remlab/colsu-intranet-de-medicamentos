import * as React from 'react';
import * as ReactDom from 'react-dom';
import { DisplayMode, Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';

import * as strings from 'ConvocatoriasWebPartStrings';
import Convocatorias from './components/Convocatorias';
import { IConvocatoriasProps, IConvocatoriasModel } from './components/IConvocatoriasProps';

export interface IConvocatoriasWebPartProps {
  title: string;
  subtitle: string;
  link: string;
  list: string;
  selectedItem: IConvocatoriasModel;
}

export default class ConvocatoriasWebPart extends BaseClientSideWebPart <IConvocatoriasWebPartProps> {

  public onSelectItem = (item) => {
    this.properties.selectedItem = item;
  }

  public render(): void {
    const element: React.ReactElement<IConvocatoriasProps> = React.createElement(
      Convocatorias,
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
    return (this.context.propertyPane.isRenderedByWebPart()) ? this.itemPanel() : this.mainPane();
  }

  protected itemPanel(): IPropertyPaneConfiguration {
    return {
      pages: [{
        header: {
          description: "Personalizar la configuración del item"
        },
        groups: [
          {
            groupName: "Selecciona",
            groupFields: [
              PropertyPaneTextField("selectedItem.Title", {
                label: "Título"
              }),
              PropertyPaneTextField("selectedItem.Subt_x00ed_tulo", {
                label: "Subtitle"
              }),
              PropertyPaneTextField("selectedItem.Resumen", {
                label: "Resumen",
                multiline: true
              }),
              PropertyPaneTextField("selectedItem.Enlace.Url", {
                label: "Link"
              }),
            ]
          }
        ]
      }]
    };
  }

  protected mainPane(): IPropertyPaneConfiguration {
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
                PropertyPaneTextField("link", {
                  label: "Enlace (Todas las convocatorias)"
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
