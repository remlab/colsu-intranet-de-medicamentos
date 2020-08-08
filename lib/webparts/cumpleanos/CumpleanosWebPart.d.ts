import "@pnp/sp/webs";
import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { ICumpleanosModel } from './components/ICumpleanosProps';
export interface ICumpleanosWebPartProps {
    title: string;
    subtitle: string;
    list: string;
    image: string;
    selectedItem: ICumpleanosModel;
}
export default class CumpleanosWebPart extends BaseClientSideWebPart<ICumpleanosWebPartProps> {
    onInit(): Promise<void>;
    protected onSelectItem: (item: any) => void;
    onSelectImage: (imageUrl: any) => void;
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    protected itemPanel(): IPropertyPaneConfiguration;
    protected mainPane(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=CumpleanosWebPart.d.ts.map