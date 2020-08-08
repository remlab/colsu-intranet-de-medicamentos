import * as React from 'react';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import * as ReactDom from 'react-dom';
import { DisplayMode, Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown,
  PropertyPaneToggle,
  PropertyPaneSlider
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import { PropertyFieldTermPicker, IPickerTerms } from '@pnp/spfx-property-controls/lib/PropertyFieldTermPicker';

import * as strings from 'ConveniosWebPartStrings';
import Convenios from './components/Convenios';
import { IConveniosProps } from './components/IConveniosProps';

export interface IConveniosWebPartProps {
  title: string;
  subtitle: string;
  headerClassname: string;
  boxImage: boolean;
  boxsBySlide: number;
  list: string;
  terms: IPickerTerms;
}

export default class ConveniosWebPart extends BaseClientSideWebPart<IConveniosWebPartProps> {

  public onInit(): Promise<void> {

    return super.onInit().then(_ => {
      sp.setup({
        spfxContext: this.context
      });
    });
  }

  public render(): void {
    const element: React.ReactElement<IConveniosProps> = React.createElement(
      Convenios,
      {
        context: this.context,
        inDesignMode: this.displayMode === DisplayMode.Edit,
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
                PropertyPaneDropdown("headerClassname", {
                  label: "Estilo encabezado",
                  options: [{
                    key: "title__default",
                    text: "Default",
                  }, {
                    key: "title__left",
                    text: "Izquierda",
                  }, {
                    key: "title__center",
                    text: "Centro",
                  }]
                }),
                PropertyPaneToggle("boxImage", {
                  label: "Ocultar / mostrar imagen por título"
                }),
                PropertyPaneSlider("boxsBySlide", {
                  label: "Número cajas por slide",
                  min: 2,
                  max: 10
                }),
                PropertyFieldListPicker("list", {
                  label: 'Seleccione una biblioteca de páginas',
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
                PropertyFieldTermPicker("terms", {
                  label: "Seleccione la categoría",
                  panelTitle: "Seleccione la categoría",
                  initialValues: this.properties.terms,
                  allowMultipleSelections: false,
                  excludeSystemGroup: true,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  context: this.context,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  // limitByGroupNameOrID: 'People',
                  limitByTermsetNameOrID: 'Tags',
                  key: 'termSetsPickerFieldId'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
