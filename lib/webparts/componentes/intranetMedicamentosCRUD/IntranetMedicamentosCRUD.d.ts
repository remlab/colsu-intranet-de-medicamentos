import * as React from 'react';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { IIntranetMedicamentosCRUD } from './IIntranetMedicamentosCRUD';
import { IIntranetMedicamentosCRUDProps, IIntranetMedicamentosPageListProps } from './IIntranetMedicamentosCRUDProps';
import { IIntranetMedicamentosCRUDState } from './IIntranetMedicamentosCRUDState';
import { IListItem, IList } from './IListItem';
import { SPHttpClient } from '@microsoft/sp-http';
export declare class IntranetMedicamentosCRUDList extends React.Component<{
    listId: string;
    spHttpClient: SPHttpClient;
    siteUrl: string;
    children(listTitle: string): React.ReactElement;
}, {
    status: string;
    lists: IList[];
}> {
    constructor(props: any);
    static defaultProps: {
        limit: any;
    };
    componentDidMount(): void;
    protected getListTitleById(): string;
    protected getLists(): void;
    render(): JSX.Element;
}
export declare class IntranetMedicamentosCRUD extends React.Component<IIntranetMedicamentosCRUDProps, IIntranetMedicamentosCRUDState> implements IIntranetMedicamentosCRUD {
    listItemEntityTypeName: string;
    listItemTempData: IListItem;
    constructor(props: IIntranetMedicamentosCRUDProps, state: IIntranetMedicamentosCRUDState);
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillReceiveProps(nextProps: IIntranetMedicamentosCRUDProps): void;
    render(): React.ReactElement<IIntranetMedicamentosCRUDProps>;
    createItem(): void;
    readItem(): void;
    readItems(): void;
    getLatestItemId(): Promise<number>;
    updateItem(): void;
    deleteItem(): void;
    spHttpClientNotConfigured(props: IIntranetMedicamentosCRUDProps): boolean;
    listNotConfigured(props: IIntranetMedicamentosCRUDProps): boolean;
    getListItemEntityTypeName(): Promise<string>;
}
export declare class IntranetMedicamentosPageList extends React.Component<IIntranetMedicamentosPageListProps, IIntranetMedicamentosCRUDState> {
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    listNotConfigured(props: IIntranetMedicamentosCRUDProps): boolean;
    readItems(): void;
    render(): JSX.Element;
}
//# sourceMappingURL=IntranetMedicamentosCRUD.d.ts.map