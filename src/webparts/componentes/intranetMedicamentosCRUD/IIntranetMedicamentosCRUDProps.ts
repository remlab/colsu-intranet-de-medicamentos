import * as React from 'react';
import { SPHttpClient } from '@microsoft/sp-http';
import { IListItem, IList } from './IListItem';
import { IPropertyPaneAccessor } from '@microsoft/sp-webpart-base';

interface IIntranetMedicamentosCRUDParentProps {
  data: IListItem[];
  items: JSX.Element[];
}

export interface IIntranetMedicamentosCRUDChildrenProps {
  item: IListItem;
  handleCreate(): void;
  handleUpdate(): void;
}

export interface IIntranetMedicamentosCRUDProps {
  propertyPane: IPropertyPaneAccessor;
  inDesignMode: boolean;
  listName: string;
  spHttpClient: SPHttpClient;
  siteUrl: string;
  include: string;
  filter?: string;
  limit?: number;
  actions?(props: IIntranetMedicamentosCRUDChildrenProps): React.ReactElement;
  ParentComponent?(props: IIntranetMedicamentosCRUDParentProps): React.ReactElement;
  children(props: IIntranetMedicamentosCRUDChildrenProps): React.ReactElement;
  onSaveAction?(data: IListItem): void;
  onEditAction?(data: IListItem): void;
  onDeleteAction?(data: IListItem): void;
}

export interface IIntranetMedicamentosPageListProps {
  propertyPane: IPropertyPaneAccessor;
  inDesignMode: boolean;
  listName: string;
  filterTag: string;
  children(props: {
    items: IListItem[];
    status: string
  }): React.ReactElement;
}