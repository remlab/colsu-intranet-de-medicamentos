import * as React from 'react';
import classnames from 'classnames';

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

import styles from './DisciplinaOrganizacional.module.scss';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { IDisciplinaOrganizacionalProps, IDisciplinaOrganizacionalModel } from './IDisciplinaOrganizacionalProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { IntranetMedicamentosCRUDList, IntranetMedicamentosPageList } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';
import BlockTitle from '../../componentes/blockTitle/blockTitle';
import BlockCard from '../../componentes/blockCard/blockCard';

class Documento extends React.Component<{ data: IDisciplinaOrganizacionalModel, listName: string; }, { file: any }> {
  constructor(props) {
    super(props);
    this.state = { file: null };
  }
  public async componentDidMount() {
    const file = await sp.web.lists.getByTitle(this.props.listName)
      .items
      .getById(this.props.data.Id)
      .select(`File`)
      .expand(`File`)
      .get();
    this.setState({ file });
  }
  public render() {
    const { Title } = this.props.data;
    if (!this.state.file) return <p>Loading!</p>;
    return (
      <a className="ms-Grid-col ms-sm12 ms-md6 ms-lg6" style={{textDecoration: 'none' }} href={this.state.file.File.ServerRelativeUrl} title={this.state.file.File.Name}>
        <BlockCard padding={'2rem 1rem'}>
          <div style={{height: 100}}>
            <div className={styles.card__icon}><img src="http://aremlab.com/media/colsubsidio/gestion/icon_pdf.png" alt="" /></div>
            <div className={styles.card__title}><h3>{Title}</h3></div>
          </div>
        </BlockCard>
      </a>
    );
  }
}

export default class DisciplinaOrganizacional extends React.Component<IDisciplinaOrganizacionalProps, {}> {
  public render(): React.ReactElement<IDisciplinaOrganizacionalProps> {
    const { title, subtitle, list, terms, context } = this.props;

    if (!Array.isArray(terms) || terms.length === 0)
      return <h1>Error! [tags] not found!</h1>;

    const [term] = terms;
    const filterTag = term.name;

    if (list === undefined || list === null || list === '')
      return <h1>Error! [documentos] list not found!</h1>;

    if (!context.pageContext)
      return <h1>Error! absoluteUrl not found!</h1>;

    if (!context.spHttpClient)
      return <h1>Error! spHttpClient not found!</h1>;

    return (
      <div className={classnames(['ms-Grid', styles.organization])}  dir="ltr">
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">

        <BlockTitle type={'title__left'} >
          <span>{title}</span>  <strong>{subtitle}</strong>
        </BlockTitle>

          <IntranetMedicamentosCRUDList
            listId={list}
            spHttpClient={context.spHttpClient}
            siteUrl={context.pageContext.web.absoluteUrl}>
            {
              (listName) => (
                <IntranetMedicamentosPageList
                  propertyPane={this.props.context.propertyPane}
                  inDesignMode={this.props.inDesignMode}
                  listName={listName}
                  filterTag={filterTag}>
                  {
                    ({ items, status }) => {
                      if (items.length === 0) return <h1>{status}</h1>;
                      return (
                        <div className="ms-Grid-row">
                          {
                            items.map((item, index) => {
                              const data = item as IDisciplinaOrganizacionalModel;
                              return (<Documento key={index} listName={listName} data={data} />);
                            })
                          }
                        </div>
                      );
                    }
                  }
                </IntranetMedicamentosPageList>
              )
            }
          </IntranetMedicamentosCRUDList>
        </div>
      </div>
    );
  }
}
