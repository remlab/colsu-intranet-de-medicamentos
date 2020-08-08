import * as React from 'react';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

import styles from './NoticiasDestacado.module.scss';
import { INoticiasDestacadoProps, INoticiasDestacadoModel } from './INoticiasDestacadoProps';

import { IntranetMedicamentosCRUDList, IntranetMedicamentosPageList } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';

class NoticiasDestacadoItem extends React.Component<{ data: INoticiasDestacadoModel, listName: string; }, { file: any }> {
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
    const { Title, BannerImageUrl, Description, OData__OriginalSourceUrl } = this.props.data;
    if (!this.state.file) return <p>Loading!</p>;
    return (
      <div className={styles.sectionDestacado}>
        <div className={styles.titleSection_featured}>
          { this.props.children }
        </div>
        <div className={styles.sectionDestacado__featured}>
          <div className={styles.sectionDestacado__featured__content}>
            <h3 className={styles.subTitle}>{Title}</h3>
            {Description && <p className={styles.contentText}>{Description} [...]</p>}
            <a className={styles.secondaryButton} href={OData__OriginalSourceUrl || this.state.file.File.ServerRelativeUrl}> Continúa la lectura </a>
          </div>
          {
            BannerImageUrl && BannerImageUrl.Url ?
              <div className={styles.sectionDestacado__featured__image}>
                <img src={BannerImageUrl.Url} alt={Title} /> 
              </div>
              :
              <p>No image!</p>
          }
        </div>
      </div>
    );
  }
}

export default class NoticiasDestacado extends React.Component<INoticiasDestacadoProps, {}> {
  public render(): React.ReactElement<INoticiasDestacadoProps> {
    const { title, subtitle, list, terms, context } = this.props;

    if (!Array.isArray(terms) || terms.length === 0)
      return <h1>Error! [tags] not found!</h1>;

    const [term] = terms;
    const filterTag = term.name;

    if (list === undefined || list === null || list === '')
      return <h1>Error! [indicadores] list not found!</h1>;

    if (!context.pageContext)
      return <h1>Error! absoluteUrl not found!</h1>;

    if (!context.spHttpClient)
      return <h1>Error! spHttpClient not found!</h1>;

    return (
      <div className={styles.noticiasDestacado}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column["ms-lgPush1"]}>

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
                          const [item] = items;
                          const data = item as INoticiasDestacadoModel;
                          return (
                            <NoticiasDestacadoItem listName={listName} data={data}>
                              <h2>{title} <strong>{subtitle}</strong></h2>
                            </NoticiasDestacadoItem>
                          );
                        }
                      }
                    </IntranetMedicamentosPageList>
                  )
                }
              </IntranetMedicamentosCRUDList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
