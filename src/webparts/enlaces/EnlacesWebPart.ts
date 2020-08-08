import * as React from 'react';
import * as ReactDom from 'react-dom';
import { DisplayMode, Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import { clone } from '@microsoft/sp-lodash-subset';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'EnlacesWebPartStrings';
import Enlaces from './components/Enlaces';
import { IEnlacesProps } from './components/IEnlacesProps';

interface IEnlace {
  title: string;
  link: string;
}

export interface IEnlacesWebPartProps {
  title: string;
  enlaces: IEnlace[];
}

export default class EnlacesWebPart extends BaseClientSideWebPart <IEnlacesWebPartProps> {

  private selectedIndex = 0;

  public onSelectItem = (index) => {
    this.selectedIndex = index;
  }

  public onDuplicateItem = (index) => {
    const item : IEnlace = clone(this.properties.enlaces[index]);
    this.properties.enlaces.push(item);
    this.render();
  }

  public onDeleteItem = (index) => {
    if (!window.confirm(`Seguro que deseas eliminar "${index}"?`)) {
      return;
    }
    this.properties.enlaces = this.properties.enlaces.filter((v, i) => i !== index);
    this.selectedIndex = 0;
    this.render();
  }

  public render(): void {
    const element: React.ReactElement<IEnlacesProps> = React.createElement(
      Enlaces,
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
            description: "Personalizar la configuración general"
          },
          groups: [
            {
              groupName: "Elementos",
              groupFields: [
                PropertyPaneTextField(`enlaces[${this.selectedIndex}].title`, {
                  label: "Título"
                }),
                PropertyPaneTextField(`enlaces[${this.selectedIndex}].link`, {
                  label: "Enlace"
                })
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
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
