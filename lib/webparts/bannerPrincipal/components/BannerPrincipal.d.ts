import * as React from 'react';
import "@pnp/sp/webs";
import "@pnp/sp/sites";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import { IntranetMedicamentosCRUD } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';
import { IBannerPrincipalProps } from './IBannerPrincipalProps';
import { IBannerPrincipalState } from './IBannerPrincipalState';
import "swiper/css/swiper.css";
export default class BannerPrincipal extends React.Component<IBannerPrincipalProps, IBannerPrincipalState> {
    protected crud: IntranetMedicamentosCRUD;
    render(): React.ReactElement<IBannerPrincipalProps>;
}
//# sourceMappingURL=BannerPrincipal.d.ts.map