import { IPropertyPaneAccessor } from '@microsoft/sp-webpart-base';
export interface IEnlacesProps {
    title: string;
    enlaces: {
        title: string;
        link: string;
    }[];
    propertyPane: IPropertyPaneAccessor;
    inDesignMode: boolean;
    onSelectItem(index: number): void;
    onDeleteItem(index: number): void;
    onDuplicateItem(index: number): void;
}
//# sourceMappingURL=IEnlacesProps.d.ts.map