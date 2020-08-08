import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { ICadenaValorModel } from './components/ICadenaValorProps';
export interface ICadenaValorWebPartProps {
    title: string;
    subtitle: string;
    link: string;
    list: string;
    color: string;
    selectedItem: ICadenaValorModel;
}
export default class CadenaValorWebPart extends BaseClientSideWebPart<ICadenaValorWebPartProps> {
    onSelectItem: (item: any) => void;
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    protected itemPanel(): IPropertyPaneConfiguration;
    protected mainPane(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=CadenaValorWebPart.d.ts.map