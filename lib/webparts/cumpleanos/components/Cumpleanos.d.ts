import * as React from 'react';
import 'moment/locale/es';
import "@pnp/sp/webs";
import "@pnp/sp/sites";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import { IntranetMedicamentosCRUD } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';
import { ICumpleanosProps } from './ICumpleanosProps';
export default class Cumpleanos extends React.Component<ICumpleanosProps, {}> {
    protected crud: IntranetMedicamentosCRUD;
    render(): React.ReactElement<ICumpleanosProps>;
}
//# sourceMappingURL=Cumpleanos.d.ts.map