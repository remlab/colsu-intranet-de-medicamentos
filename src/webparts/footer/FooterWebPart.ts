import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'FooterWebPartStrings';
import Footer from './components/Footer';
import { IFooterProps } from './components/IFooterProps';

export interface IFooterWebPartProps {}

export default class FooterWebPart extends BaseClientSideWebPart <IFooterWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IFooterProps> = React.createElement(
      Footer,
      {}
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
