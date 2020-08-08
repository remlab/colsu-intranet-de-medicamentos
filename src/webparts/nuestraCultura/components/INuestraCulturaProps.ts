import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IPickerTerms } from '@pnp/spfx-property-controls/lib/PropertyFieldTermPicker';

export interface INuestraCulturaModel {
  Id: number;
  Title: string;
  Description: string;
  BannerImageUrl?: {
    Url: string;
    Description: string;
  };
  Tags: {
    Label: string;
  }[];
}

export interface INuestraCulturaProps {
  list: string;
  terms: IPickerTerms;
  context: WebPartContext;
  inDesignMode: boolean;
}
