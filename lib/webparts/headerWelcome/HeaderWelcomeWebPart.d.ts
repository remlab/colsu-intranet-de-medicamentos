import { Version } from '@microsoft/sp-core-library';
import "@pnp/sp/webs";
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IHeaderWelcomeModel } from './components/IHeaderWelcomeProps';
export interface IHeaderWelcomeWebPartProps {
    title: string;
    type: string;
    image: string;
    items: IHeaderWelcomeModel[];
    hideTitle: boolean;
    titleColor: string;
    breadcrumb: {
        title: string;
        link: string;
    };
}
export default class HeaderWelcomeWebPart extends BaseClientSideWebPart<IHeaderWelcomeWebPartProps> {
    private selectedIndex;
    onInit(): Promise<void>;
    onSelectItem: (index: number) => void;
    onDuplicateItem: (index: number) => void;
    onDeleteItem: (index: number) => void;
    onSetImage: (image: string) => void;
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    private itemPanel;
    protected mainPane(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=HeaderWelcomeWebPart.d.ts.map