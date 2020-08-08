import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface ICadenaValorProps {
  title: string;
  subtitle: string;
  list: string;
  selectedItem: ICadenaValorModel;
  context: WebPartContext;
  inDesignMode: boolean;
  onSelectItem(item: ICadenaValorModel) : void;
}

export interface ICadenaValorModel {
  Id: number;
  Title: string;
  Color: string;
  Posici_x00f3_n: number;
  Descripci_x00f3_n: string;
}