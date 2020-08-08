import { IPropertyPaneAccessor } from '@microsoft/sp-webpart-base';
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPHttpClient } from '@microsoft/sp-http';

export interface IHeaderWelcomeModel {
  title: string;
  link: string;
}

export interface IHeaderWelcomeProps {
  title: string;
  type: string;
  image: string;
  titleColor: string;
  breadcrumb: {
    title: string;
    link: string;
  };
  hideTitle: boolean;
  spHttpClient: SPHttpClient;
  siteUrl: string;
  context: WebPartContext;
  items: IHeaderWelcomeModel[];
  propertyPane: IPropertyPaneAccessor;
  inDesignMode: boolean;
  onSelectItem(index: number) : void;
  onDeleteItem(index: number) : void;
  onDuplicateItem(index: number) : void;
  onSetImage(image: string): void;
}
