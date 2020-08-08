import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IPickerTerms } from '@pnp/spfx-property-controls/lib/PropertyFieldTermPicker';

export interface INoticiasDestacadoProps {
  list: string;
  title: string;
  subtitle: string;
  terms: IPickerTerms;
  context: WebPartContext;
  inDesignMode: boolean;
}

export interface INoticiasDestacadoModel {
  Id: number;
  Title: string;
  BannerImageUrl?: {
    Url: string;
    Description: string;
  };
  Tags: {
    Label: string;
  }[];
  Description?: string;
  OData__OriginalSourceUrl?: string;
}