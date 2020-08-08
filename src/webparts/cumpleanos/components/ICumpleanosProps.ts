import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface ICumpleanosModel {
  Id: number;
  Title: string;
  Cargo: string;
  Fecha: string;
  Yammer?: {
    Description: string;
    Url: string;
  };
}

export interface ICumpleanosProps {
  title: string;
  subtitle: string;
  list: string;
  image: string;
  inDesignMode: boolean;
  context: WebPartContext;
  onSelectImage(imageUrl) : void;
  onSelectItem(data: ICumpleanosModel): void;
}
