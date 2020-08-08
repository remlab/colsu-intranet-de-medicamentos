import * as React from 'react';
import * as ReactDom from 'react-dom';
import { DisplayMode, Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';

import * as strings from 'CadenaValorWebPartStrings';
import CadenaValor from './components/CadenaValor';
import { ICadenaValorProps, ICadenaValorModel } from './components/ICadenaValorProps';

export interface ICadenaValorWebPartProps {
  title: string;
  subtitle: string;
  link: string;
  list: string;
  color: string;
  selectedItem: ICadenaValorModel;
}

export default class CadenaValorWebPart extends BaseClientSideWebPart<ICadenaValorWebPartProps> {

  public onSelectItem = (item) => {
    this.properties.selectedItem = item;
  }

  public render(): void {
    const element: React.ReactElement<ICadenaValorProps> = React.createElement(
      CadenaValor,
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
              PropertyPaneTextField("selectedItem.Posici_x00f3_n", {
                label: "Posición"
              }),
              PropertyPaneTextField("selectedItem.Descripci_x00f3_n", {
                label: "Descripción",
                multiline: true
              }),
              PropertyFieldColorPicker("Color", {
                label: "Color",
                selectedColor: this.properties.selectedItem.Color,
                onPropertyChange: this.onPropertyPaneFieldChanged,
                properties: this.properties.selectedItem,
                disabled: false,
                isHidden: false,
                alphaSliderHidden: true,
                style: PropertyFieldColorPickerStyle.Inline,
                iconName: 'Precipitation',
                key: 'colorFieldId'
              })
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
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
