import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as moment from 'moment';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";

import { DisplayMode, Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import { PropertyFieldDateTimePicker, DateConvention } from '@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker';

import { IDateTimeFieldValue } from "@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker";


import Cumpleanos from './components/Cumpleanos';
import { ICumpleanosProps, ICumpleanosModel } from './components/ICumpleanosProps';

export interface ICumpleanosWebPartProps {
  title: string;
  subtitle: string;
  list: string;
  image: string;
  selectedItem: ICumpleanosModel;
}

export default class CumpleanosWebPart extends BaseClientSideWebPart<ICumpleanosWebPartProps> {

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

  public onSelectImage = (imageUrl) => {
    this.properties.image = imageUrl;
  }

  public render(): void {
    const element: React.ReactElement<ICumpleanosProps> = React.createElement(
      Cumpleanos,
      {
        context: this.context,
        inDesignMode: this.displayMode === DisplayMode.Edit,
        onSelectImage: this.onSelectImage,
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
      pages: [
        {
          header: {
            description: "Personalizar la configuración del item"
          },
          groups: [
            {
              groupName: "Elementos",
              groupFields: [
                PropertyPaneTextField("selectedItem.Title", {
                  label: "Título"
                }),
                PropertyPaneTextField("selectedItem.Cargo", {
                  label: "Cargo"
                }),
                PropertyFieldDateTimePicker(`Fecha`, {
                  label: "Fecha de cumpleaños",
                  initialDate: {
                    value: new Date(this.properties.selectedItem.Fecha),
                    displayValue: moment(this.properties.selectedItem.Fecha).format('D MMM')
                  },
                  dateConvention: DateConvention.Date,
                  onPropertyChange: (propertyPath, oldValue, newValue: IDateTimeFieldValue) => {
                    this.properties.selectedItem.Fecha = newValue.value.toISOString();
                  },
                  properties: this.properties.selectedItem,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'dateFieldId',
                  showLabels: false
                }),
                PropertyPaneTextField("selectedItem.Yammer.Url", {
                  label: "Yammer"
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
            }
          ]
        }
      ]
    };
  }
}
