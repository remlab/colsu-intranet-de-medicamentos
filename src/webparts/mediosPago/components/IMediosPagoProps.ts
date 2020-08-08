import { IPropertyPaneAccessor } from '@microsoft/sp-webpart-base';

export interface IMediosPagoProps {
  title: string;
  subtitle: string;
  paymentMethods: {
    title: string;
    subtitle: string;
    image: string;
    applyAttention: boolean;
    link: string;
  }[];
  footerText: string;
  propertyPane: IPropertyPaneAccessor;
  inDesignMode: boolean;
  onSelectItem(index: number) : void;
  onDeleteItem(index: number) : void;
  onDuplicateItem(index: number) : void;
}
