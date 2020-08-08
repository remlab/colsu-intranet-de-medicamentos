import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IPickerTerms } from '@pnp/spfx-property-controls/lib/PropertyFieldTermPicker';

export interface IDisciplinaOrganizacionalProps {
  title: string;
  subtitle: string;
  list: string;
  terms: IPickerTerms;
  context: WebPartContext;
  inDesignMode: boolean;
}

export interface IDisciplinaOrganizacionalModel {
  Id: number;
  Title: string;
}