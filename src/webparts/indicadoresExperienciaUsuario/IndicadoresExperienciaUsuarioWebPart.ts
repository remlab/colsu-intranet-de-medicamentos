import * as React from 'react';
import * as ReactDom from 'react-dom';
import { DisplayMode, Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneLink,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';

import * as strings from 'IndicadoresExperienciaUsuarioWebPartStrings';

import { clone } from '@microsoft/sp-lodash-subset';
import IndicadoresExperienciaUsuario from './components/IndicadoresExperienciaUsuario';
import { IIndicadoresExperienciaUsuarioProps, IIndicadoresExperienciaUsuarioModel } from './components/IIndicadoresExperienciaUsuarioProps';

export interface IIndicadoresExperienciaUsuarioWebPartProps {
  title: string;
  subtitle: string;
  indicadores: IIndicadoresExperienciaUsuarioModel[];
}

export default class IndicadoresExperienciaUsuarioWebPart extends BaseClientSideWebPart<IIndicadoresExperienciaUsuarioWebPartProps> {

  private selectedIndex = 0;

  public onSelectItem = (index) => {
    this.selectedIndex = index;
  }

  public onDuplicateItem = (index) => {
    const item: IIndicadoresExperienciaUsuarioModel = clone(this.properties.indicadores[index]);
    this.properties.indicadores.push(item);
    this.render();
  }

  public onDeleteItem = (index) => {
    if (!window.confirm(`Seguro que deseas eliminar "${index}"?`)) {
      return;
    }
    this.properties.indicadores = this.properties.indicadores.filter((v, i) => i !== index);
    this.selectedIndex = 0;
    this.render();
  }

  public render(): void {
    const element: React.ReactElement<IIndicadoresExperienciaUsuarioProps> = React.createElement(
      IndicadoresExperienciaUsuario,
      {
        propertyPane: this.context.propertyPane,
        inDesignMode: this.displayMode === DisplayMode.Edit,
        onSelectItem: this.onSelectItem,
        onDeleteItem: this.onDeleteItem,
        onDuplicateItem: this.onDuplicateItem,
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

  private itemPanel(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Personalizar la configuración del indicador"
          },
          groups: [{
            groupName: "Elementos",
            groupFields: [
              PropertyPaneTextField(`indicadores[${this.selectedIndex}].titulo`, {
                label: "Título"
              }),
              PropertyPaneTextField(`indicadores[${this.selectedIndex}].valor`, {
                label: "Valor"
              }),
              PropertyPaneTextField(`indicadores[${this.selectedIndex}].enlace`, {
                label: "Enlace"
              }),
              PropertyFieldColorPicker("color", {
                label: "Color",
                selectedColor: this.properties.indicadores[this.selectedIndex].color,
                onPropertyChange: this.onPropertyPaneFieldChanged,
                properties: this.properties.indicadores[this.selectedIndex],
                disabled: false,
                isHidden: false,
                alphaSliderHidden: true,
                style: PropertyFieldColorPickerStyle.Inline,
                iconName: 'Precipitation',
                key: 'colorFieldId'
              })
            ]
          }, {
            groupName: "Opción A",
            groupFields: [
              PropertyPaneTextField(`indicadores[${this.selectedIndex}].opcionA.titulo`, {
                label: "Título"
              }),
              PropertyPaneTextField(`indicadores[${this.selectedIndex}].opcionA.valor`, {
                label: "Valor"
              }),
            ]
          }, {
            groupName: "Opción B",
            groupFields: [
              PropertyPaneTextField(`indicadores[${this.selectedIndex}].opcionB.titulo`, {
                label: "Título"
              }),
              PropertyPaneTextField(`indicadores[${this.selectedIndex}].opcionB.valor`, {
                label: "Valor"
              }),
            ]
          }]
        }
      ]
    };
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
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
