import * as React from 'react';
import "@pnp/sp/webs";
import "@pnp/sp/sites";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import { IQuinqueniosProps } from './IQuinqueniosProps';
import { IntranetMedicamentosCRUD } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';
export default class Quinquenios extends React.Component<IQuinqueniosProps, {}> {
    protected crud: IntranetMedicamentosCRUD;
    render(): React.ReactElement<IQuinqueniosProps>;
}
//# sourceMappingURL=Quinquenios.d.ts.map