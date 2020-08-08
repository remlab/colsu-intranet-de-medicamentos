import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IExplorarAreasModel } from './components/IExplorarAreasProps';
export interface IExplorarAreasWebPartProps {
    title: string;
    subtitle: string;
    items: IExplorarAreasModel[];
}
export default class ExplorarAreasWebPart extends BaseClientSideWebPart<IExplorarAreasWebPartProps> {
    private selectedIndex;
    onSelectItem: (index: number) => void;
    onDuplicateItem: (index: number) => void;
    onDeleteItem: (index: number) => void;
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    private itemPanel;
    private mainPane;
}
//# sourceMappingURL=ExplorarAreasWebPart.d.ts.map