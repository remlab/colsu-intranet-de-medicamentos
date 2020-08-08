import { IList, IListItem } from './IListItem';

export interface IIntranetMedicamentosCRUDState {
  status: string;
  items: IListItem[];
}