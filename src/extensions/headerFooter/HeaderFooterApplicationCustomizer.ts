import * as React from 'react';
import * as ReactDom from 'react-dom';

import { override } from '@microsoft/decorators';
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName,
} from '@microsoft/sp-application-base';

import { Navigator, NavigatorBottom, INavigatorProps } from './components';

import styles from './HeaderFooter.module.scss';
import * as strings from 'HeaderFooterApplicationCustomizerStrings';

export interface IHeaderFooterApplicationCustomizerProperties { }

export default class HeaderFooterApplicationCustomizer
  extends BaseApplicationCustomizer<IHeaderFooterApplicationCustomizerProperties> {

  private _topPlaceholder: PlaceholderContent | undefined;
  private _bottomPlaceholder: PlaceholderContent | undefined;
  
  private _onDispose(): void { }

  private _renderPlaceHolders(): void {
    if (!this._topPlaceholder) {
      this._topPlaceholder = this.context.placeholderProvider.tryCreateContent(
        PlaceholderName.Top,
        { onDispose: this._onDispose }
      );

      if (!this._topPlaceholder) {
        console.error("The expected placeholder (Top) was not found.");
        return;
      }

      const navigator: React.ReactElement<INavigatorProps> = React.createElement(Navigator, {});
      ReactDom.render(navigator, this._topPlaceholder.domElement);
    }
    // if (!this._bottomPlaceholder) {
    //   this._bottomPlaceholder = this.context.placeholderProvider.tryCreateContent(
    //     PlaceholderName.Bottom,
    //     { onDispose: this._onDispose }
    //   );

    //   if (!this._bottomPlaceholder) {
    //     console.error("The expected placeholder (Top) was not found.");
    //     return;
    //   }

    //   const navigatorBottom: React.ReactElement<INavigatorProps> = React.createElement(NavigatorBottom, {});
    //   ReactDom.render(navigatorBottom, this._bottomPlaceholder.domElement);
    // }
  }

  @override
  public onInit(): Promise<void> {
    this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);
    return Promise.resolve<void>();
  }
}
