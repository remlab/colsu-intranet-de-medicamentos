import * as React from 'react';
import { IIntranetMedicamentosCRUDProps } from './IIntranetMedicamentosCRUDProps';
export interface IIntranetMedicamentosCRUD {
    listItemEntityTypeName: String;
    componentWillReceiveProps(nextProps: IIntranetMedicamentosCRUDProps): void;
    render(): React.ReactElement<IIntranetMedicamentosCRUDProps>;
    createItem(data: any): void;
    readItem(): void;
    readItems(): void;
    getLatestItemId(): Promise<number>;
    updateItem(data: any): void;
    deleteItem(): void;
    listNotConfigured(props: IIntranetMedicamentosCRUDProps): boolean;
    getListItemEntityTypeName(): Promise<string>;
}
//# sourceMappingURL=IIntranetMedicamentosCRUD.d.ts.map