import * as React from 'react';
import * as ReactDom from 'react-dom';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";

import { DisplayMode, Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { clone } from '@microsoft/sp-lodash-subset';

import * as strings from 'DetalleIndicadorExperienciaUsuarioWebPartStrings';
import DetalleIndicadorExperienciaUsuario from './components/DetalleIndicadorExperienciaUsuario';
import { IDetalleIndicadorExperienciaUsuarioProps, IIndicadorExperienciaUsuarioModel } from './components/IDetalleIndicadorExperienciaUsuarioProps';

import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';

export interface IDetalleIndicadorExperienciaUsuarioWebPartProps {
  title: string;
  subtitle: string;
  breadcrumb: {
    title: string;
    link: string;
  };
  indicadores: IIndicadorExperienciaUsuarioModel[];
  type: string;
}

export default class DetalleIndicadorExperienciaUsuarioWebPart extends BaseClientSideWebPart<IDetalleIndicadorExperienciaUsuarioWebPartProps> {

  private selectedIndex = 0;

  public onInit(): Promise<void> {
    return super.onInit().then(_ => {
      sp.setup({
        spfxContext: this.context
      });
    });
  }

  public onSelectItem = (index) => {
    this.selectedIndex = index;
  }

  public onDuplicateItem = (index) => {
    const item: IIndicadorExperienciaUsuarioModel = clone(this.properties.indicadores[index]);
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

  public setImageIndicador = (index, image) => {
    this.properties.indicadores[index].image = image;
  }

  public render(): void {
    const element: React.ReactElement<IDetalleIndicadorExperienciaUsuarioProps> = React.createElement(
      DetalleIndicadorExperienciaUsuario,
      {
        propertyPane: this.context.propertyPane,
        inDesignMode: this.displayMode === DisplayMode.Edit,
        context: this.context,
        setImageIndicador: this.setImageIndicador,
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
              PropertyPaneDropdown(`indicadores[${this.selectedIndex}].icono`, {
                label: "Icono",
                options: [
                  { key: "Time",  text: "Time", },
                  { key: "Heart", text: "Heart", },
                  { key: "Shop",  text: "Shop", },
                  { key: "Stats", text: "Stats", },
                  { key: "Pills", text: "Pills", },
                ]
              }),
              PropertyPaneTextField(`indicadores[${this.selectedIndex}].valor`, {
                label: "Valor"
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
            description: "Personalizar la configuración"
          },
          groups: [
            {
              groupName: "General",
              groupFields: [
                PropertyPaneTextField("title", {
                  label: "Título"
                }),
                PropertyPaneTextField("subtitle", {
                  label: "Subtítulo"
                }),
                PropertyPaneDropdown("type", {
                  label: "Tipo",
                  options: [{
                    key: "main",
                    text: "Principal",
                  },{
                    key: "secondary",
                    text: "Secundario",
                  }]
                }),
              ]
            },{
              groupName: "Miga de pan",
              groupFields: [
                PropertyPaneTextField("breadcrumb.title", {
                  label: "Título"
                }),
                PropertyPaneTextField("breadcrumb.link", {
                  label: "Enlace"
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
