import * as React from 'react';
import classnames from 'classnames';

import styles from './Convenios.module.scss';
// import './ConveniosCustom.css';

import { IConveniosProps, IConveniosModel } from './IConveniosProps';
import { IConveniosState } from './IConveniosState';

import { chunk } from '@microsoft/sp-lodash-subset';
import BlockTitle from '../../componentes/blockTitle/blockTitle';

import Swiper from 'react-id-swiper';
import "swiper/css/swiper.css";

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

const widthView = window.innerWidth;
// const heightView = window.innerHeight;

import { IntranetMedicamentosCRUDList, IntranetMedicamentosPageList } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';

class Convenio extends React.Component<{ data: IConveniosModel, listName: string; boxImage: boolean; }, { file: any }> {
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
          this.props.data.BannerImageUrl && this.props.data.BannerImageUrl.Url && this.props.boxImage ?
            <img src={this.props.data.BannerImageUrl.Url} alt={this.props.data.Title} /> :
            <p>{this.props.data.Title}</p>
        }
      </a>
    );
  }
}

export default class Convenios extends React.Component<IConveniosProps, IConveniosState> {

  public render(): React.ReactElement<IConveniosProps> {
    const { title, subtitle, boxImage, boxsBySlide, list, terms, context, headerClassname } = this.props;

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
      <div className={styles.convenios}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column['ms-lgPush1']}>
              <BlockTitle type={headerClassname}>
                <span>{title}</span> <strong>{subtitle}</strong>
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
                          const slides = chunk(items, boxsBySlide);
                          return (
                            <Swiper {...{
                              pagination: {
                                el: '.swiper-pagination',
                                type: 'bullets',
                                clickable: true
                              },
                            }}>
                              {
                                slides.map((slide, pindex) => (
                                  <div key={pindex} className="ms-Grid-row slide">
                                    {
                                      slide.map((item, cindex) => {
                                        const data = item as IConveniosModel;
                                        return (
                                          <div className={classnames('ms-Grid-col ms-sm12 ms-md12 ms-lg6 ms-xl3', styles.convenioCenter)}>
                                            <div className={styles.convenioCard}>
                                              <Convenio key={cindex} data={data} listName={listName} boxImage={boxImage} />
                                            </div>
                                          </div>
                                        );
                                      })
                                    }
                                  </div>
                                ))
                              }
                            </Swiper>
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