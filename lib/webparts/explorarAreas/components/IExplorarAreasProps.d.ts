import { IPropertyPaneAccessor } from '@microsoft/sp-webpart-base';
export interface IExplorarAreasModel {
    title: string;
    icon: string;
    color: string;
    link: string;
}
export interface IExplorarAreasProps {
    title: string;
    subtitle: string;
    items: IExplorarAreasModel[];
    propertyPane: IPropertyPaneAccessor;
    inDesignMode: boolean;
    onSelectItem(index: number): void;
    onDeleteItem(index: number): void;
    onDuplicateItem(index: number): void;
}
//# sourceMappingURL=IExplorarAreasProps.d.ts.map