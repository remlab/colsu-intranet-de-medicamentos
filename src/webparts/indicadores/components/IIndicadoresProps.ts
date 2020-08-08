import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IIndicadoresProps {
  list: string;
  title: string;
  subtitle: string;
  selectedItem: IIndicadoresModel;
  context: WebPartContext;
  inDesignMode: boolean;
  onSelectItem(item: IIndicadoresModel) : void;
}

export interface IIndicadoresModel {
  Id: number;
  Title: string;
  Valor: string;
  Formato: string;
}