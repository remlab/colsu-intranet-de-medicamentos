import "@pnp/sp/webs";
import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IBannerPrincipalModel } from './components/IBannerPrincipalProps';
export interface IBannerPrincipalWebPartProps {
    title: string;
    subtitle: string;
    hasTitle: boolean;
    list: string;
    slides: number;
    selectedItem: IBannerPrincipalModel;
}
export default class BannerPrincipalWebPart extends BaseClientSideWebPart<IBannerPrincipalWebPartProps> {
    onInit(): Promise<void>;
    protected onSelectItem: (item: any) => void;
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    private itemPanel;
    private mainPane;
}
//# sourceMappingURL=BannerPrincipalWebPart.d.ts.map