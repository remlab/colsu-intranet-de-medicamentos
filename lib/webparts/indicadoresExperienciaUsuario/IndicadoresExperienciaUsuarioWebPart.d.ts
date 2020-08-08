import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IIndicadoresExperienciaUsuarioModel } from './components/IIndicadoresExperienciaUsuarioProps';
export interface IIndicadoresExperienciaUsuarioWebPartProps {
    title: string;
    subtitle: string;
    indicadores: IIndicadoresExperienciaUsuarioModel[];
}
export default class IndicadoresExperienciaUsuarioWebPart extends BaseClientSideWebPart<IIndicadoresExperienciaUsuarioWebPartProps> {
    private selectedIndex;
    onSelectItem: (index: any) => void;
    onDuplicateItem: (index: any) => void;
    onDeleteItem: (index: any) => void;
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    private itemPanel;
    private mainPane;
}
//# sourceMappingURL=IndicadoresExperienciaUsuarioWebPart.d.ts.map