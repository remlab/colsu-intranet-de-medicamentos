import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IIndicadoresModel } from './components/IIndicadoresProps';
export interface IIndicadoresWebPartProps {
    list: string;
    title: string;
    subtitle: string;
    selectedItem: IIndicadoresModel;
}
export default class IndicadoresWebPart extends BaseClientSideWebPart<IIndicadoresWebPartProps> {
    onSelectItem: (item: any) => void;
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    private mainPane;
    private itemPanel;
}
//# sourceMappingURL=IndicadoresWebPart.d.ts.map