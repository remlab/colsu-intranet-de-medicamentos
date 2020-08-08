import * as React from 'react';
import * as ReactDom from 'react-dom';
import { DisplayMode, Version } from '@microsoft/sp-core-library';

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";

import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown,
  PropertyPaneToggle
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
import { PropertyFieldCodeEditor, PropertyFieldCodeEditorLanguages } from '@pnp/spfx-property-controls/lib/PropertyFieldCodeEditor';

import * as strings from 'HeaderWelcomeWebPartStrings';

import { clone } from '@microsoft/sp-lodash-subset';
import HeaderWelcome from './components/HeaderWelcome';
import { IHeaderWelcomeProps, IHeaderWelcomeModel } from './components/IHeaderWelcomeProps';

export interface IHeaderWelcomeWebPartProps {
  title: string;
  type: string;
  image: string;
  items: IHeaderWelcomeModel[];
  hideTitle: boolean;
  titleColor: string;
  breadcrumb: {
    title: string;
    link: string;
  };
}

export default class HeaderWelcomeWebPart extends BaseClientSideWebPart<IHeaderWelcomeWebPartProps> {

  private selectedIndex = 0;

  public onInit(): Promise<void> {
    return super.onInit().then(_ => {
      sp.setup({
        spfxContext: this.context
      });
    });
  }

  public onSelectItem = (index: number) => {
    this.selectedIndex = index;
  }

  public onDuplicateItem = (index: number) => {
    const item: IHeaderWelcomeModel = clone(this.properties.items[index]);
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


  public onSetImage = (image: string) => {
    this.properties.image = image;
  }

  public render(): void {
    const element: React.ReactElement<IHeaderWelcomeProps> = React.createElement(
      HeaderWelcome,
      {
        propertyPane: this.context.propertyPane,
        inDesignMode: this.displayMode === DisplayMode.Edit,
        onSelectItem: this.onSelectItem,
        onDeleteItem: this.onDeleteItem,
        onDuplicateItem: this.onDuplicateItem,
        onSetImage: this.onSetImage,
        context: this.context,
        spHttpClient: this.context.spHttpClient,
        siteUrl: this.context.pageContext.web.absoluteUrl,
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
                PropertyPaneTextField(`items[${this.selectedIndex}].title`, {
                  label: "Título",
                }),
                PropertyPaneTextField(`items[${this.selectedIndex}].link`, {
                  label: "Enlace"
                }),
              ]
            }
          ]
        }
      ]
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
                PropertyPaneDropdown("type", {
                  label: "Estilo encabezado",
                  options: [{
                    key: "saludo",
                    text: "Saludo",
                  }, {
                    key: "interna",
                    text: "Interna página",
                  }]
                }),
                PropertyPaneToggle("hideTitle", {
                  label: "Ocultar título"
                }),
                PropertyFieldColorPicker("titleColor", {
                  label: "Color título",
                  selectedColor: this.properties.titleColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  isHidden: false,
                  alphaSliderHidden: true,
                  style: PropertyFieldColorPickerStyle.Inline,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                })
              ]
            }, {
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
