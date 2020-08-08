import { IPropertyPaneAccessor } from '@microsoft/sp-webpart-base';

interface IIndicadoresExperienciaUsuarioOptionModel {
  titulo: string;
  valor: string;
}

export interface IIndicadoresExperienciaUsuarioModel {
  titulo: string;
  valor: string;
  color: string;
  enlace: string;
  opcionA: IIndicadoresExperienciaUsuarioOptionModel;
  opcionB: IIndicadoresExperienciaUsuarioOptionModel;
}

export interface IIndicadoresExperienciaUsuarioProps {
  title: string;
  subtitle: string;
  indicadores: IIndicadoresExperienciaUsuarioModel[];
  propertyPane: IPropertyPaneAccessor;
  inDesignMode: boolean;
  onSelectItem(index: number) : void;
  onDeleteItem(index: number) : void;
  onDuplicateItem(index: number) : void;
}
