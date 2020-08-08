import * as React from 'react';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import * as ReactDom from 'react-dom';
import { DisplayMode, Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import { PropertyFieldTermPicker, IPickerTerms } from '@pnp/spfx-property-controls/lib/PropertyFieldTermPicker';

import * as strings from 'NuestraCulturaWebPartStrings';
import NuestraCultura from './components/NuestraCultura';
import { INuestraCulturaProps } from './components/INuestraCulturaProps';

export interface INuestraCulturaWebPartProps {
  list: string;
  terms: IPickerTerms;
}

export default class NuestraCulturaWebPart extends BaseClientSideWebPart <INuestraCulturaWebPartProps> {

  public onInit(): Promise<void> {

    return super.onInit().then(_ => {
      sp.setup({
        spfxContext: this.context
      });
    });
  }

  public render(): void {
    const element: React.ReactElement<INuestraCulturaProps> = React.createElement(
      NuestraCultura,
      {
        context: this.context,
        inDesignMode: this.displayMode === DisplayMode.Edit,
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
                PropertyFieldListPicker("list", {
                  label: 'Seleccione una biblioteca de páginas',
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
                PropertyFieldTermPicker("terms", {
                  label: "Seleccione la categoría",
                  panelTitle: "Seleccione la categoría",
                  initialValues: this.properties.terms,
                  allowMultipleSelections: false,
                  excludeSystemGroup: true,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  context: this.context,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  // limitByGroupNameOrID: 'People',
                  limitByTermsetNameOrID: 'Tags',
                  key: 'termSetsPickerFieldId'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
