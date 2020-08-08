import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IPickerTerms } from '@pnp/spfx-property-controls/lib/PropertyFieldTermPicker';

export interface IDocumentosConvenioProps {
  list: string;
  terms: IPickerTerms;
  context: WebPartContext;
  inDesignMode: boolean;
}

export interface IDocumentosConvenioModel {
  Id: number;
  Title: string;
  Descripci_x00f3_n: string;
}