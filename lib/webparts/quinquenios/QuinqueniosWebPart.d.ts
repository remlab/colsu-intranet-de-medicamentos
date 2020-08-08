import "@pnp/sp/webs";
import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IQuinqueniosModel } from './components/IQuinqueniosProps';
export interface IQuinqueniosWebPartProps {
    title: string;
    subtitle: string;
    text1: string;
    text2: string;
    sign: {
        text: string;
        image: string;
    };
    list: string;
    selectedItem: IQuinqueniosModel;
}
export default class QuinqueniosWebPart extends BaseClientSideWebPart<IQuinqueniosWebPartProps> {
    onInit(): Promise<void>;
    protected onSelectItem: (item: IQuinqueniosModel) => void;
    onSelectSignImage: (data: string) => void;
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    protected itemPanel(): IPropertyPaneConfiguration;
    protected mainPane(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=QuinqueniosWebPart.d.ts.map