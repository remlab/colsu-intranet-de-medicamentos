import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IOrganigramaProps {
  list: string;
  title: string;
  subtitle: string;
  selectedItem: IOrganigramaModel;
  context: WebPartContext;
  inDesignMode: boolean;
  onSelectItem(item: IOrganigramaModel) : void;
}

export interface IOrganigramaModel {
  Id: number;
  Title: string;
  Picture: {
    Url: string;
  };
  level: number;
  yammer?: {
    Description: string;
    Url: string;
  };
  Cargo: string;
  Modified?: string;
  children?: IOrganigramaModel[];
}