import * as React from 'react';
import * as ReactDom from 'react-dom';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";

import { DisplayMode, Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration, PropertyPaneToggle, PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

// import { PropertyFieldSPListPicker, PropertyFieldSPListPickerOrderBy } from 'sp-client-custom-fields/lib/PropertyFieldSPListPicker';
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import { PropertyFieldNumericInput } from 'sp-client-custom-fields/lib/PropertyFieldNumericInput';

import * as strings from 'BannerPrincipalWebPartStrings';
import BannerPrincipal from './components/BannerPrincipal';
import { IBannerPrincipalProps, IBannerPrincipalModel } from './components/IBannerPrincipalProps';

export interface IBannerPrincipalWebPartProps {
  title: string;
  subtitle: string;
  hasTitle: boolean;
  list: string;
  slides: number;
  selectedItem: IBannerPrincipalModel;
}

export default class BannerPrincipalWebPart extends BaseClientSideWebPart<IBannerPrincipalWebPartProps> {

  public onInit(): Promise<void> {
    this.properties.selectedItem = null;
    return super.onInit().then(_ => {
      sp.setup({
        spfxContext: this.context
      });
    });
  }

  protected onSelectItem = (item) => {
    this.properties.selectedItem = item;
  }

  public render(): void {
    const element: React.ReactElement<IBannerPrincipalProps> = React.createElement(BannerPrincipal, {
      context: this.context,
      inDesignMode: this.displayMode === DisplayMode.Edit,
      onSelectItem: this.onSelectItem,
      ...this.properties
    });
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
                PropertyPaneTextField("selectedItem.Title", {
                  label: "Título"
                }),
                PropertyPaneTextField("selectedItem.Subt_x00ed_tulo", {
                  label: "Subtítulo"
                }),
                PropertyPaneTextField("selectedItem.Resumen", {
                  label: "Resumen",
                  multiline: true,
                }),
                PropertyPaneToggle("selectedItem.TarjetaActiva", {
                  label: "Tarjeta Activa"
                }),
                PropertyPaneTextField("selectedItem.Enlace.Url", {
                  label: "Link"
                }),
              ]
            }
          ]
        }
      ]
    };
  }

  private mainPane(): IPropertyPaneConfiguration {

    const titleSubtitle = [
      PropertyPaneTextField("title", {
        label: "Título"
      }),
      PropertyPaneTextField("subtitle", {
        label: "Subtítulo"
      })
    ];

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
                PropertyFieldNumericInput("slides", {
                  label: 'Número máximo de slides',
                  initialValue: this.properties.slides,
                  min: 0,
                  max: 10,
                  step: 1,
                  precision: 0,
                  size: 10,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'slidesFieldId'
                }),
                PropertyPaneToggle("hasTitle", {
                  label: "Mostrar titulo / subtítulo"
                }),
                ...(this.properties.hasTitle) ? titleSubtitle : []
              ]
            }
          ]
        }
      ]
    };
  }
}
