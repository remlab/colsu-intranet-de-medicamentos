import * as React from 'react';
import * as ReactDom from 'react-dom';
import { DisplayMode, Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';

import * as strings from 'IndicadoresWebPartStrings';
import Indicadores from './components/Indicadores';
import { IIndicadoresProps, IIndicadoresModel } from './components/IIndicadoresProps';

export interface IIndicadoresWebPartProps {
  list: string;
  title: string;
  subtitle: string;
  selectedItem: IIndicadoresModel;
}

export default class IndicadoresWebPart extends BaseClientSideWebPart<IIndicadoresWebPartProps> {

  public onSelectItem = (item) => {
    this.properties.selectedItem = item;
  }

  public render(): void {
    const element: React.ReactElement<IIndicadoresProps> = React.createElement(
      Indicadores,
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

  private mainPane(): IPropertyPaneConfiguration {
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
              PropertyPaneTextField("selectedItem.Title", {
                label: "Título"
              }),
              PropertyPaneTextField("selectedItem.Valor", {
                label: "Valor"
              }),
              PropertyPaneDropdown("selectedItem.Formato", {
                label: "Formato",
                options: [{
                  key: "MONEDA",
                  text: "Moneda",
                },{
                  key: "PORCENTAJE",
                  text: "Porcentaje",
                }]
              }),
            ]
          }
        ]
      }]
    };
  }
}
