import * as React from 'react';
import * as ReactDom from 'react-dom';
import { DisplayMode, Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ExplorarAreasWebPartStrings';
import { clone } from '@microsoft/sp-lodash-subset';

import ExplorarAreas from './components/ExplorarAreas';
import { IExplorarAreasProps, IExplorarAreasModel } from './components/IExplorarAreasProps';
import { PropertyFieldCodeEditor, PropertyFieldCodeEditorLanguages } from '@pnp/spfx-property-controls/lib/PropertyFieldCodeEditor';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';

export interface IExplorarAreasWebPartProps {
  title: string;
  subtitle: string;
  items: IExplorarAreasModel[];
}

export default class ExplorarAreasWebPart extends BaseClientSideWebPart<IExplorarAreasWebPartProps> {

  private selectedIndex = 0;

  public onSelectItem = (index: number) => {
    this.selectedIndex = index;
  }

  public onDuplicateItem = (index: number) => {
    const item: IExplorarAreasModel = clone(this.properties.items[index]);
    this.properties.items.push(item);
    this.render();
  }

  public onDeleteItem = (index: number) => {
    if (!window.confirm(`Seguro que deseas eliminar "${index}"?`)) {
      return;
    }
    this.properties.items = this.properties.items.filter((v, i) => i !== index);
    this.selectedIndex = 0;
    this.render();
  }


  public render(): void {
    const element: React.ReactElement<IExplorarAreasProps> = React.createElement(
      ExplorarAreas,
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
            description: "Personalizar la configuración del item"
          },
          groups: [
            {
              groupName: "Elementos",
              groupFields: [
                PropertyFieldCodeEditor(`items[${this.selectedIndex}].title`, {
                  label: 'Título',
                  panelTitle: 'Título',
                  initialValue: this.properties.items[this.selectedIndex].title,
                  onPropertyChange: (propertyPath, oldValue, newValue) => this.properties.items[this.selectedIndex].title = newValue,
                  properties: this.properties,
                  disabled: false,
                  key: 'titleFieldId',
                  language: PropertyFieldCodeEditorLanguages.HTML
                }),
                PropertyPaneTextField(`items[${this.selectedIndex}].link`, {
                  label: "Enlace"
                }),
                PropertyPaneDropdown(`items[${this.selectedIndex}].icon`, {
                  label: "Icono",
                  options: [
                    { key: "bottle",  text: "Pastillas", },
                    { key: "cart", text: "Carrito", },
                    { key: "message",  text: "Mensaje", },
                    { key: "payroll", text: "Planilla", },
                    { key: "human", text: "Gestión", },
                    { key: "nurse", text: "Atención", },
                    { key: "services", text: "Formula", },
                    { key: "group", text: "Comunidad", },
                  ]
                }),
                PropertyFieldColorPicker("color", {
                  label: "Color",
                  selectedColor: this.properties.items[this.selectedIndex].color,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties.items[this.selectedIndex],
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
