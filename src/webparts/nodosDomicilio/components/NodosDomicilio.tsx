import * as React from 'react';
import styles from './NodosDomicilio.module.scss';

import { INodosDomicilioProps, INodosDomicilioModel } from './INodosDomicilioProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { IntranetMedicamentosCRUDList, IntranetMedicamentosPageList } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

class Nodo extends React.Component<{ data: INodosDomicilioModel, listName: string; }, { file: any }> {
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
    if (!this.state.file) return <p>Loading!</p>;
    return (
      <a href={this.state.file.File.ServerRelativeUrl} title={this.state.file.File.Name}>
        {
          this.props.data.BannerImageUrl && this.props.data.BannerImageUrl.Url ?
            <img src={this.props.data.BannerImageUrl.Url} alt={this.props.data.Title} /> :
            <p>No image!</p>
        }
      </a>
    );
  }
}

export default class NodosDomicilio extends React.Component<INodosDomicilioProps, {}> {
  public render(): React.ReactElement<INodosDomicilioProps> {

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
      <div className={styles.section_deliveryNodes}>
        <div className={styles.section_deliveryNodes__header}>
          <h2>{title} <strong>{subtitle}</strong></h2>
        </div>
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
                      <div className={styles.section_deliveryNodes__content}>
                        {
                          items.map((item, index) => {
                            const data = item as INodosDomicilioModel;
                            return (<Nodo data={data} listName={listName} />);
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
    );
  }
}
