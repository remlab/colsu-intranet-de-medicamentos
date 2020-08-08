import * as React from 'react';
import * as ReactDom from 'react-dom';
import { DisplayMode, Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import { PropertyFieldCodeEditor, PropertyFieldCodeEditorLanguages } from '@pnp/spfx-property-controls/lib/PropertyFieldCodeEditor';
import { clone } from '@microsoft/sp-lodash-subset';

import * as strings from 'MediosPagoWebPartStrings';
import MediosPago from './components/MediosPago';
import { IMediosPagoProps } from './components/IMediosPagoProps';

interface IPaymentMethod {
  title: string;
  subtitle: string;
  image: string;
  applyAttention: boolean;
  link: string;
}

export interface IMediosPagoWebPartProps {
  title: string;
  subtitle: string;
  paymentMethods: IPaymentMethod[];
  footerText: string;
}

export default class MediosPagoWebPart extends BaseClientSideWebPart <IMediosPagoWebPartProps> {

  private selectedIndex = 0;

  public onSelectItem = (index) => {
    this.selectedIndex = index;
  }

  public onDuplicateItem = (index) => {
    const item : IPaymentMethod = clone(this.properties.paymentMethods[index]);
    this.properties.paymentMethods.push(item);
    this.render();
  }

  public onDeleteItem = (index) => {
    if (!window.confirm(`Seguro que deseas eliminar "${index}"?`)) {
      return;
    }
    this.properties.paymentMethods = this.properties.paymentMethods.filter((v, i) => i !== index);
    this.selectedIndex = 0;
    this.render();
  }

  public render(): void {
    const element: React.ReactElement<IMediosPagoProps> = React.createElement(
      MediosPago,
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
                PropertyFieldCodeEditor(`paymentMethods[${this.selectedIndex}].title`, {
                  label: 'Título',
                  panelTitle: 'Título',
                  initialValue: this.properties.paymentMethods[this.selectedIndex].title,
                  onPropertyChange: (propertyPath, oldValue, newValue) => this.properties.paymentMethods[this.selectedIndex].title = newValue,
                  properties: this.properties,
                  disabled: false,
                  key: 'titleFieldId',
                  language: PropertyFieldCodeEditorLanguages.HTML
                }),
                PropertyFieldCodeEditor(`paymentMethods[${this.selectedIndex}].subtitle`, {
                  label: 'Subtítulo',
                  panelTitle: 'Subtítulo',
                  initialValue: this.properties.paymentMethods[this.selectedIndex].subtitle,
                  onPropertyChange: (propertyPath, oldValue, newValue) => this.properties.paymentMethods[this.selectedIndex].subtitle = newValue,
                  properties: this.properties,
                  disabled: false,
                  key: 'subtitleFieldId',
                  language: PropertyFieldCodeEditorLanguages.HTML
                }),
                PropertyPaneTextField(`paymentMethods[${this.selectedIndex}].link`, {
                  label: "Enlace"
                }),
                PropertyPaneTextField(`paymentMethods[${this.selectedIndex}].image`, {
                  label: "URL Imagen"
                }),
                PropertyPaneToggle(`paymentMethods[${this.selectedIndex}].applyAttention`, {
                  label: "Aplica restricciones"
                }),
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
                }),
                PropertyFieldCodeEditor("footerText", {
                  label: 'Texto restricciones',
                  panelTitle: 'Texto restricciones',
                  initialValue: this.properties.footerText,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  key: 'footerTextFieldId',
                  language: PropertyFieldCodeEditorLanguages.HTML
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
