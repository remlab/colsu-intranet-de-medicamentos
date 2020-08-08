import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IConvocatoriasProps {
  title: string;
  subtitle: string;
  list: string;
  selectedItem: IConvocatoriasModel;
  context: WebPartContext;
  inDesignMode: boolean;
  onSelectItem(item: IConvocatoriasModel) : void;
  link: string;
}

export interface IConvocatoriasModel {
  Id: number;
  Title: string;
  Subt_x00ed_tulo?: string;
  Resumen: string;
  Enlace: {
    Url: string;
  };
}