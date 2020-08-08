import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IBannerPrincipalModel {
  Id: number;
  Title: string;
  Subt_x00ed_tulo: string;
  Imagen: {
    Url: string;
  };
  ImagenTarjeta: {
    Url: string;
  };
  TarjetaActiva: boolean;
  Resumen: string;
  Enlace?: {
    Url: string;
  };
  Modified?: string;
}

export interface IBannerPrincipalProps {
  inDesignMode: boolean;
  context: WebPartContext;
  title: string;
  subtitle: string;
  hasTitle: boolean;
  list: string;
  slides: number;
  selectedItem: IBannerPrincipalModel;
  onSelectItem(item: IBannerPrincipalModel) : void; 
}
