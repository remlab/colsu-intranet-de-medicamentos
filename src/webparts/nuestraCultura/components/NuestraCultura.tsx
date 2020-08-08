import * as React from 'react';
import classnames from 'classnames';

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

import styles from './NuestraCultura.module.scss';
import { INuestraCulturaProps, INuestraCulturaModel } from './INuestraCulturaProps';

import { IntranetMedicamentosCRUDList, IntranetMedicamentosPageList } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';

const NuestraCulturaComponent = ({ listName, data }) => {
  const [file, setFile] = React.useState(null);
  React.useEffect(() => {
    sp.web.lists.getByTitle(listName)
      .items
      .getById(data.Id)
      .select(`File`)
      .expand(`File`)
      .get()
      .then(response => setFile(response))
      .catch(err => console.log(err));
  }, []);
  if (!Boolean(file)) return <p>Cargando...</p>;
  return (<div className={classnames(["ms-Grid", styles.nuestraCultura])} dir="ltr">
    <div className="ms-Grid-row" style={{display: 'flex', alignItems:'center', flexWrap: 'wrap'}}>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg4">
        <div className={styles.nuestraCultura__media}>
          {data.BannerImageUrl && <img src={data.BannerImageUrl.Url} alt={data.Title} />}
        </div>
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg8" style={{display: 'flex'}}>
        <a href={file.File.ServerRelativeUrl} title={file.File.Name} className={styles.nuestraCultura__cta} style={{width: '100%'}} >
          <h2>{data.Title}</h2>
          <p>{data.Description}</p>
        </a>
      </div>
    </div>
  </div>);
};

export default class NuestraCultura extends React.Component<INuestraCulturaProps, {}> {
  public render(): React.ReactElement<INuestraCulturaProps> {
    const { list, terms, context, inDesignMode } = this.props;

    if (!Array.isArray(terms) || terms.length === 0)
      return <h1>Error! [tags] not found!</h1>;

    const [term] = terms;
    const filterTag = term.name;

    if (list === undefined || list === null || list === '')
      return <h1>Error! [pages] list not found!</h1>;

    if (!context.pageContext)
      return <h1>Error! absoluteUrl not found!</h1>;

    return (
      <IntranetMedicamentosCRUDList
        listId={list}
        spHttpClient={context.spHttpClient}
        siteUrl={context.pageContext.web.absoluteUrl}>
        {
          (listName) => (
            <IntranetMedicamentosPageList
              propertyPane={context.propertyPane}
              inDesignMode={inDesignMode}
              listName={listName}
              filterTag={filterTag}>
              {
                ({ items, status }) => {
                  if (items.length === 0) return <h1>{status} No items found!</h1>;
                  const data = items[items.length - 1] as INuestraCulturaModel;
                  return (<NuestraCulturaComponent listName={listName} data={data} />);
                }
              }
            </IntranetMedicamentosPageList>
          )
        }
      </IntranetMedicamentosCRUDList>
    );
  }
}
