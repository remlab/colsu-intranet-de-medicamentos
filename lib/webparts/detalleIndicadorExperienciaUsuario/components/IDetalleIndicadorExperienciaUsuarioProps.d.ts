import { IPropertyPaneAccessor } from '@microsoft/sp-webpart-base';
import { WebPartContext } from "@microsoft/sp-webpart-base";
export interface IIndicadorExperienciaUsuarioModel {
    titulo: string;
    icono: string;
    valor: string;
    color: string;
    image?: string;
}
export interface IDetalleIndicadorExperienciaUsuarioProps {
    title: string;
    subtitle: string;
    type: string;
    breadcrumb: {
        title: string;
        link: string;
    };
    propertyPane: IPropertyPaneAccessor;
    context: WebPartContext;
    setImageIndicador(index: number, image: string): void;
    inDesignMode: boolean;
    indicadores: IIndicadorExperienciaUsuarioModel[];
    onSelectItem(index: number): void;
    onDeleteItem(index: number): void;
    onDuplicateItem(index: number): void;
}
//# sourceMappingURL=IDetalleIndicadorExperienciaUsuarioProps.d.ts.map