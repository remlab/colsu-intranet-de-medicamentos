import * as React from 'react';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import classnames from 'classnames';

import { INoticiasProps, INoticiasModel } from './INoticiasProps';

import { IntranetMedicamentosCRUDList, IntranetMedicamentosPageList } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';
// import Carousel from 'nuka-carousel';
import Swiper from 'react-id-swiper';

import styles from './Noticias.module.scss';
import "./Noticias.css";
import "swiper/css/swiper.css";


class Noticia extends React.Component<{ data: INoticiasModel, listName: string; }, { file: any }> {
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
    return (
      <div className={classnames(["swiper-slide", styles.news])}>
        {
          BannerImageUrl && BannerImageUrl.Url ?
            <img src={BannerImageUrl.Url} alt={Title} /> :
            <p>No image!</p>
        }
        <div className={styles.news_content}>
          <h4 className={styles.news__title}>{Title}</h4>
          {Description && <p className={styles.news__description}>{Description}</p>}
          {this.state.file && <a href={OData__OriginalSourceUrl || this.state.file.File.ServerRelativeUrl} title={this.state.file.File.Name}>Ver detalle</a>}
        </div>
      </div>
    );
  }
}

export default class Noticias extends React.Component<INoticiasProps, {}> {

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0
    };
    window.addEventListener("resize", this.update);
  }

  public componentDidMount() {
    this.update();
  }

  public update = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }

  public render(): React.ReactElement<INoticiasProps> {

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
      <div className={styles.noticias}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column['ms-lgPush1']}>

              {/* <p>height: {this.state.height}</p> */}
              {/* <p>width: {this.state.width}</p> */}
              <div className={styles.section_news}>
                <div className={styles.section_news__newsCarousel}>
                  <div className={styles.titleSection}>
                    <h2>
                      {title} <strong>{subtitle}</strong>
                    </h2>
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
                                <Swiper
                                {...{
                                    containerClass: styles.bannerSwipper,
                                    navigation: {
                                      nextEl: '.swiper-button-next',
                                      prevEl: '.swiper-button-prev'
                                    },
                                    slidesPerView: 1,
                                    spaceBetween: 50,
                                    renderPrevButton: () => <div className={classnames(["swiper-button-next", styles.bannerSwipper__ButtonPrev])}></div>,
                                    renderNextButton: () => <div className={classnames(["swiper-button-prev", styles.bannerSwipper__ButtonNext])}></div>,
                                    breakpoints: {
                                      768: {
                                        slidesPerView: 2,
                                      },
                                    }
                                  }}
                                  >
                                  {
                                    items.map((item, index) => {
                                      const data = item as INoticiasModel;
                                      return (<Noticia key={index} data={data} listName={listName} />);
                                    })
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
        </div>
      </div>
    );
  }
}
