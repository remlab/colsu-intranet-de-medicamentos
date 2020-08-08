import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
interface IEnlace {
    title: string;
    link: string;
}
export interface IEnlacesWebPartProps {
    title: string;
    enlaces: IEnlace[];
}
export default class EnlacesWebPart extends BaseClientSideWebPart<IEnlacesWebPartProps> {
    private selectedIndex;
    onSelectItem: (index: any) => void;
    onDuplicateItem: (index: any) => void;
    onDeleteItem: (index: any) => void;
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    private itemPanel;
    protected mainPane(): IPropertyPaneConfiguration;
}
export {};
//# sourceMappingURL=EnlacesWebPart.d.ts.map