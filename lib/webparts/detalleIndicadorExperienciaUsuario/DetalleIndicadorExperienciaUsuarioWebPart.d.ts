import "@pnp/sp/webs";
import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IIndicadorExperienciaUsuarioModel } from './components/IDetalleIndicadorExperienciaUsuarioProps';
export interface IDetalleIndicadorExperienciaUsuarioWebPartProps {
    title: string;
    subtitle: string;
    breadcrumb: {
        title: string;
        link: string;
    };
    indicadores: IIndicadorExperienciaUsuarioModel[];
    type: string;
}
export default class DetalleIndicadorExperienciaUsuarioWebPart extends BaseClientSideWebPart<IDetalleIndicadorExperienciaUsuarioWebPartProps> {
    private selectedIndex;
    onInit(): Promise<void>;
    onSelectItem: (index: any) => void;
    onDuplicateItem: (index: any) => void;
    onDeleteItem: (index: any) => void;
    setImageIndicador: (index: any, image: any) => void;
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    private itemPanel;
    private mainPane;
}
//# sourceMappingURL=DetalleIndicadorExperienciaUsuarioWebPart.d.ts.map