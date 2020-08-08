import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IConvocatoriasModel } from './components/IConvocatoriasProps';
export interface IConvocatoriasWebPartProps {
    title: string;
    subtitle: string;
    link: string;
    list: string;
    selectedItem: IConvocatoriasModel;
}
export default class ConvocatoriasWebPart extends BaseClientSideWebPart<IConvocatoriasWebPartProps> {
    onSelectItem: (item: any) => void;
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    protected itemPanel(): IPropertyPaneConfiguration;
    protected mainPane(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=ConvocatoriasWebPart.d.ts.map