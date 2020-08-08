import * as React from 'react';
import * as ReactDom from 'react-dom';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";

import { DisplayMode, Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import { PropertyFieldCodeEditor, PropertyFieldCodeEditorLanguages } from '@pnp/spfx-property-controls/lib/PropertyFieldCodeEditor';
import { PropertyFieldNumericInput } from 'sp-client-custom-fields/lib/PropertyFieldNumericInput';

import Quinquenios from './components/Quinquenios';
import { IQuinqueniosProps, IQuinqueniosModel } from './components/IQuinqueniosProps';

export interface IQuinqueniosWebPartProps {
  title: string;
  subtitle: string;
  text1: string;
  text2: string;
  sign: {
    text: string;
    image: string;
  };
  list: string;
  selectedItem: IQuinqueniosModel;
}

export default class QuinqueniosWebPart extends BaseClientSideWebPart<IQuinqueniosWebPartProps> {

  public onInit(): Promise<void> {
    this.properties.selectedItem = null;
    return super.onInit().then(_ => {
      sp.setup({
        spfxContext: this.context
      });
    });
  }

  protected onSelectItem = (item: IQuinqueniosModel) => {
    this.properties.selectedItem = item;
  }

  public onSelectSignImage = (data: string) => {
    this.properties.sign.image = data;
  }

  public render(): void {
    const element: React.ReactElement<IQuinqueniosProps> = React.createElement(
      Quinquenios,
      {
        context: this.context,
        inDesignMode: this.displayMode === DisplayMode.Edit,
        onSelectSignImage: this.onSelectSignImage,
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
            groupName: "Elementos",
            groupFields: [
              PropertyPaneTextField("selectedItem.Title", {
                label: "Nombre"
              }),
              PropertyPaneTextField("selectedItem.Cargo", {
                label: "Cargo"
              }),
              PropertyFieldNumericInput("A_x00f1_os", {
                label: 'Años trabajando para Colsubsidio',
                initialValue: this.properties.selectedItem.A_x00f1_os,
                min: 0,
                max: 100,
                step: 1,
                precision: 0,
                size: 10,
                disabled: false,
                onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                render: this.render.bind(this),
                disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                properties: this.properties.selectedItem,
                onGetErrorMessage: null,
                deferredValidationTime: 0,
                key: 'yearsFieldId'
              }),
              PropertyPaneTextField("selectedItem.Foto.Url", {
                label: "Foto"
              }),
              PropertyPaneTextField("selectedItem.Yammer.Url", {
                label: "Yammer"
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
                PropertyFieldListPicker('list', {
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
            }, {
              groupName: "Textos encabezado",
              groupFields: [
                PropertyFieldCodeEditor(`text1`, {
                  label: 'Texto 1',
                  panelTitle: 'Texto 1',
                  initialValue: this.properties.text1,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  disabled: false,
                  key: 'text1FieldId',
                  language: PropertyFieldCodeEditorLanguages.HTML
                }),
                PropertyFieldCodeEditor(`text2`, {
                  label: 'Texto 2',
                  panelTitle: 'Texto 2',
                  initialValue: this.properties.text2,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  disabled: false,
                  key: 'text2FieldId',
                  language: PropertyFieldCodeEditorLanguages.HTML
                }),
              ]
            }, {
              groupName: "Firma pie de página",
              groupFields: [
                PropertyFieldCodeEditor(`text`, {
                  label: 'Texto firma',
                  panelTitle: 'Texto firma',
                  initialValue: this.properties.sign.text,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties.sign,
                  disabled: false,
                  key: 'text1FieldId',
                  language: PropertyFieldCodeEditorLanguages.HTML
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
