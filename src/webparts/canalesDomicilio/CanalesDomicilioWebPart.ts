import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'CanalesDomicilioWebPartStrings';
import CanalesDomicilio from './components/CanalesDomicilio';
import { ICanalesDomicilioProps } from './components/ICanalesDomicilioProps';

export interface ICanalesDomicilioWebPartProps {
  title: string;
  subtitle: string;
  phone: string;
  whatsapp: string;
  website: string;
}

export default class CanalesDomicilioWebPart extends BaseClientSideWebPart<ICanalesDomicilioWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ICanalesDomicilioProps> = React.createElement(
      CanalesDomicilio,
      {
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
                PropertyPaneTextField("title", {
                  label: "Título"
                }),
                PropertyPaneTextField("subtitle", {
                  label: "Subtítulo"
                }),
                PropertyPaneTextField("phone", {
                  label: "Teléfonos"
                }),
                PropertyPaneTextField("whatsapp", {
                  label: "WhatsApp"
                }),
                PropertyPaneTextField("website", {
                  label: "Website"
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
