import * as React from 'react';
import * as moment from 'moment';
import classnames from 'classnames';

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/sites";
import "@pnp/sp/files";
import "@pnp/sp/folders";

import { IntranetMedicamentosCRUDList, IntranetMedicamentosCRUD } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';

import { FilePicker, IFilePickerResult } from '@pnp/spfx-controls-react/lib/FilePicker';
import { WebPartContext } from "@microsoft/sp-webpart-base";

import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

import Swiper from 'react-id-swiper';

import { IBannerPrincipalModel, IBannerPrincipalProps } from './IBannerPrincipalProps';
import { IBannerPrincipalState } from './IBannerPrincipalState';
import { isEqual } from '@microsoft/sp-lodash-subset';

import styles from './BannerPrincipal.module.scss';
import "swiper/css/swiper.css";

class BannerCarousel extends React.Component<{
  items: JSX.Element[];
}, any> {
  public render() {
    return (
      <div className={styles.bannerPrincipal}>
        <div className={styles.section_header}>
          <div className={styles.section_header__banner}>
            <Swiper {...{
              lazy: true,
              containerClass: styles.bannerSwipper,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              },
              renderPrevButton: () => <div className={classnames(["swiper-button-next", styles.bannerSwipper__ButtonPrev])}></div>,
              renderNextButton: () => <div className={classnames(["swiper-button-prev", styles.bannerSwipper__ButtonNext])}></div>,
            }}>
              {
                this.props.items.map((el) => {
                  return (
                    <div>
                      {el}
                    </div>
                  );
                })
              }
            </Swiper>
          </div>
        </div>
      </div>
    );
  }
}

const Placeholder = ({ iconName, iconText, description, children }) => (
  <div className={styles.placeholder}>
    <div>
      <Icon iconName={iconName} className={styles.placeholder__icon} />
      <span className={styles.placeholder__iconText}>{iconText}</span>
    </div>
    <span className={styles.placeholder__description}>{description}</span>
    {children}
  </div>
);

class BannerSlideImage extends React.Component<any, any>{
  public render() {
    return (
      <div className={styles.banner__content}>
        <img src={this.props.slideImage.fileAbsoluteUrl} className="swiper-lazy" alt="" />
        <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
      </div>
    );
  }
}

class BannerSlide extends React.Component<{
  index?: number;
  id: number;
  context: WebPartContext;
  onSlideChange(data: IBannerPrincipalModel): void;
  cardDate: string;
  cardTitle: string;
  cardSubtitle: string;
  cardBrief: string;
  slideImage?: IFilePickerResult;
  cardImage?: IFilePickerResult;
  cardLink?: string;
  cardEnabled: boolean;
  inDesignMode: boolean;
  hasTitle: boolean;
}, {
  slideImage: IFilePickerResult;
  cardImage: IFilePickerResult;
  cardTitle: string;
  cardSubtitle: string;
  cardBrief: string;
  cardEnabled: boolean;
}> {
  constructor(props) {
    super(props);
    this.state = {
      cardTitle: props.cardTitle,
      cardSubtitle: props.cardSubtitle,
      cardBrief: props.cardBrief,
      slideImage: props.slideImage,
      cardImage: props.cardImage,
      cardEnabled: props.cardEnabled,
    };
  }

  protected handleSlideChange = () => {
    this.props.onSlideChange({
      Id: this.props.id,
      Title: this.state.cardTitle,
      Subt_x00ed_tulo: this.state.cardSubtitle,
      Resumen: this.state.cardBrief,
      TarjetaActiva: this.state.cardEnabled,
      Imagen: {
        Url: this.state.slideImage && this.state.slideImage.fileAbsoluteUrl ? this.state.slideImage.fileAbsoluteUrl : null
      },
      ImagenTarjeta: {
        Url: this.state.cardImage && this.state.cardImage.fileAbsoluteUrl ? this.state.cardImage.fileAbsoluteUrl : null
      }
    });
  }

  public render() {
    if (this.state.slideImage === null || this.state.slideImage.fileAbsoluteUrl === null) {
      return (
        <Placeholder
          iconName='Edit'
          iconText='Slide no contiene una imagen'
          description='Por favor agregue una imagen al slide'>
          {
            this.props.inDesignMode ?
              <FilePicker
                accepts={[".gif", ".jpg", ".jpeg", ".bmp", ".dib", ".tif", ".tiff", ".ico", ".png", ".jxr", ".svg"]}
                buttonIcon="FileImage"
                buttonLabel="Agregar imagen"
                onSave={(slideImage: IFilePickerResult) => {
                  if (!Boolean(slideImage.fileAbsoluteUrl)) {
                    slideImage.downloadFileContent()
                      .then(file => {
                        const uploadFiles = sp.web.getFolderByServerRelativeUrl(`${this.props.context.pageContext.web.serverRelativeUrl}/SiteAssets`).files;
                        if (file.size <= 10485760) {
                          return uploadFiles.add(file.name, file, true);
                        }
                        return uploadFiles.addChunked(file.name, file, data => { console.log(data); }, true);
                      })
                      .then((result) => {
                        this.setState({
                          slideImage: {
                            ...slideImage,
                            fileAbsoluteUrl: result.data.ServerRelativeUrl
                          }
                        }, this.handleSlideChange);
                      })
                      .catch(err => console.log(err));
                    return;
                  }
                  this.setState({ slideImage }, this.handleSlideChange);
                }}
                onChanged={(slideImage: IFilePickerResult) => { this.setState({ slideImage }, this.handleSlideChange); }}
                context={this.props.context}
              /> :
              <span>Agregar una imagen en modo Editor.<br />*Se recomienda subir una imagen con las siguientes dimensiones: 1680 x 550 Pixeles</span>
          }
        </Placeholder>
      );
    }

    return (
      <div className={styles.section_header__banner}>
        <BannerSlideImage slideImage={this.state.slideImage} />
        <div className={styles.controllerBanner}>
          {
            this.props.inDesignMode &&
            <>
            <div className={styles.bannerAction}>
              <FilePicker
                accepts={[".gif", ".jpg", ".jpeg", ".bmp", ".dib", ".tif", ".tiff", ".ico", ".png", ".jxr", ".svg"]}
                buttonIcon="FileImage"
                buttonLabel="Cambiar imagen"
                onSave={(slideImage: IFilePickerResult) => {
                  if (!Boolean(slideImage.fileAbsoluteUrl)) {
                    slideImage.downloadFileContent()
                      .then(file => {
                        const uploadFiles = sp.web.getFolderByServerRelativeUrl(`${this.props.context.pageContext.web.serverRelativeUrl}/SiteAssets`).files;
                        if (file.size <= 10485760) {
                          return uploadFiles.add(file.name, file, true);
                        }
                        return uploadFiles.addChunked(file.name, file, data => { console.log(data); }, true);
                      })
                      .then((result) => {
                        this.setState({
                          slideImage: {
                            ...slideImage,
                            fileAbsoluteUrl: result.data.ServerRelativeUrl
                          }
                        }, this.handleSlideChange);
                      })
                      .catch(err => console.log(err));
                    return;
                  }
                  this.setState({ slideImage }, this.handleSlideChange);
                }}
                onChanged={(slideImage: IFilePickerResult) => { this.setState({ slideImage }, this.handleSlideChange); }}
                context={this.props.context}
              />
            </div>
            <div className={styles.bannerAction}><p>*Se recomienda subir una imagen con las siguientes dimensiones: 1680 x 550 Pixeles</p></div>
            </>
          }
        </div>
        <div className={styles.bannerCard} style={{ display: this.state.cardEnabled ? "block" : "none" }}>
          <h3 className={styles.cardDate}>{moment(this.props.cardDate).format('DD[/]MM[/]YYYY')}</h3>
          <h3 className={styles.cardTitle}>{this.state.cardTitle}</h3>
          <p className={styles.cardSubTitle}>{this.state.cardSubtitle}</p>
          <div className={styles.cardImageContainer}>
            {
              this.props.inDesignMode &&
              <div className={styles.bannerAction}>
                <FilePicker
                  accepts={[".gif", ".jpg", ".jpeg", ".bmp", ".dib", ".tif", ".tiff", ".ico", ".png", ".jxr", ".svg"]}
                  buttonIcon="FileImage"
                  buttonLabel={this.state.cardImage ? `Cambiar imagen` : `Agregar imagen`}
                  onSave={(cardImage: IFilePickerResult) => {
                    if (!Boolean(cardImage.fileAbsoluteUrl)) {
                      cardImage.downloadFileContent()
                        .then(file => {
                          const uploadFiles = sp.web.getFolderByServerRelativeUrl(`${this.props.context.pageContext.web.serverRelativeUrl}/SiteAssets`).files;
                          if (file.size <= 10485760) {
                            return uploadFiles.add(file.name, file, true);
                          }
                          return uploadFiles.addChunked(file.name, file, data => { console.log(data); }, true);
                        })
                        .then((result) => {
                          this.setState({
                            cardImage: {
                              ...cardImage,
                              fileAbsoluteUrl: result.data.ServerRelativeUrl
                            }
                          }, this.handleSlideChange);
                        })
                        .catch(err => console.log(err));
                      return;
                    }
                    this.setState({ cardImage }, this.handleSlideChange);
                  }}
                  onChanged={(cardImage: IFilePickerResult) => { this.setState({ cardImage }, this.handleSlideChange); }}
                  context={this.props.context}
                />
              </div>
            }
            {
              this.state.cardImage &&
              (<img className={styles.cardImage} src={this.state.cardImage.fileAbsoluteUrl} alt="" />)
            }
          </div>
          <p className={styles.cardBrief}>{this.state.cardBrief}</p>
          {this.props.cardLink && <a href={this.props.cardLink} className={styles.cardCta}>
            Ampliar Información
          </a>}
        </div>
        {this.props.hasTitle && <p className={styles.section_dynamics__banner__description}>{this.state.cardTitle}</p>}
      </div>
    );
  }
}

export default class BannerPrincipal extends React.Component<IBannerPrincipalProps, IBannerPrincipalState> {

  protected crud: IntranetMedicamentosCRUD = null;

  public render(): React.ReactElement<IBannerPrincipalProps> {

    const { list, context, selectedItem } = this.props;

    if (list === undefined || list === null || list === '')
      return <h1>Error! banner list not found!</h1>;

    if (!context.pageContext)
      return <h1>Error! absoluteUrl not found!</h1>;

    if (!context.spHttpClient)
      return <h1>Error! spHttpClient not found!</h1>;

    return (
      <IntranetMedicamentosCRUDList
        listId={list}
        spHttpClient={context.spHttpClient}
        siteUrl={context.pageContext.web.absoluteUrl}>
        {
          (listName) => (
            <IntranetMedicamentosCRUD
              propertyPane={this.props.context.propertyPane}
              inDesignMode={this.props.inDesignMode}
              ref={el => this.crud = el}
              listName={listName}
              spHttpClient={context.spHttpClient}
              siteUrl={context.pageContext.web.absoluteUrl}
              include="Imagen,Enlace,TarjetaActiva,ImagenTarjeta,Subt_x00ed_tulo,Resumen,Modified"
              limit={this.props.slides}
              // onSaveAction={onSelectedItem}
              onEditAction={(data: IBannerPrincipalModel) => {
                if (this.crud) this.crud.listItemTempData = data;
                this.props.onSelectItem(data);
              }}
              onDeleteAction={(data: IBannerPrincipalModel) => {
                if (this.crud) this.crud.listItemTempData = data;
                this.props.onSelectItem(data);
              }}
              actions={({ item, handleCreate, handleUpdate }) => {
                const {
                  TarjetaActiva
                } = item as IBannerPrincipalModel;
                const actionLabel = TarjetaActiva ? "Ocultar tarjeta" : "Mostrar tarjeta";
                return (<>
                  <TooltipHost
                    id="tooltip_hide_card"
                    content={actionLabel}
                    className="ToolbarButtonTooltip"
                    directionalHint={DirectionalHint.topCenter}>
                    <IconButton onClick={() => {
                      if (this.crud) {
                        const newData = { ...item, TarjetaActiva: !TarjetaActiva } as IBannerPrincipalModel;
                        this.crud.listItemTempData = newData;
                        handleUpdate();
                        this.props.onSelectItem(newData);
                      }
                      if (this.props.context.propertyPane.isPropertyPaneOpen()) this.props.context.propertyPane.close();
                    }} iconProps={{ iconName: TarjetaActiva ? "Hide" : "RedEye" }} title={actionLabel} ariaLabel={actionLabel} aria-describedby="tooltip_hide_card" className="ToolbarButton CanvasControlToolbar-item" />
                  </TooltipHost>
                  <TooltipHost
                    id="tooltip_new_card"
                    content="Duplicar slide"
                    className="ToolbarButtonTooltip"
                    directionalHint={DirectionalHint.topCenter}>
                    <IconButton onClick={() => {
                      const {
                        Title,
                        Imagen,
                        Subt_x00ed_tulo,
                        Resumen,
                        Enlace,
                        ImagenTarjeta
                      } = item as IBannerPrincipalModel;
                      if (this.crud) {
                        const newData = {
                          Title,
                          Imagen,
                          Subt_x00ed_tulo,
                          Resumen,
                          Enlace,
                          ImagenTarjeta,
                          TarjetaActiva: true
                        } as IBannerPrincipalModel;
                        this.crud.listItemTempData = newData;
                        handleCreate();
                        this.props.onSelectItem(newData);
                        if (context.propertyPane.isPropertyPaneOpen()) this.props.context.propertyPane.close();
                      }
                    }} iconProps={{ iconName: "Page" }} title="Duplicar slide" ariaLabel="Duplicar slide" aria-describedby="tooltip_new_card" className="ToolbarButton CanvasControlToolbar-item" />
                  </TooltipHost>
                </>
                );
              }}
              ParentComponent={
                ({ items }) => (
                  <>
                    {
                      this.props.hasTitle && (
                        <div className={styles.bannerPrincipal__header}>
                          <h2>{this.props.title} <strong>{this.props.subtitle}</strong></h2>
                        </div>
                      )
                    }
                    <BannerCarousel items={items} />
                  </>
                )
              }>
              {
                ({ item }) => {
                  const {
                    Id,
                    Title,
                    Subt_x00ed_tulo,
                    Imagen,
                    ImagenTarjeta,
                    TarjetaActiva,
                    Resumen,
                    Modified,
                    Enlace
                  } = item as IBannerPrincipalModel;
                  const DefaultOpts = { fileName: null, fileNameWithoutExtension: null, downloadFileContent: null };
                  const handleSlideChange = (newData: IBannerPrincipalModel) => {
                    const mustUpdate = !isEqual(newData, {
                      Id,
                      Title,
                      Subt_x00ed_tulo,
                      Imagen: {
                        Url: Imagen && Imagen.Url ? Imagen.Url : null
                      },
                      ImagenTarjeta: {
                        Url: ImagenTarjeta && ImagenTarjeta.Url ? ImagenTarjeta.Url : null
                      },
                      TarjetaActiva,
                      Resumen
                    });
                    if (this.props.context.propertyPane.isPropertyPaneOpen()) this.props.context.propertyPane.close();
                    if (mustUpdate && this.crud) this.crud.listItemTempData = newData;
                  };
                  return (
                    <BannerSlide
                      hasTitle={this.props.hasTitle}
                      inDesignMode={this.props.inDesignMode}
                      onSlideChange={handleSlideChange}
                      id={Id}
                      context={this.props.context}
                      cardDate={Modified}
                      cardTitle={Title}
                      cardSubtitle={Subt_x00ed_tulo}
                      cardBrief={Resumen}
                      cardEnabled={TarjetaActiva}
                      cardImage={ImagenTarjeta && ImagenTarjeta.Url ? { ...DefaultOpts, fileAbsoluteUrl: ImagenTarjeta.Url } : null}
                      cardLink={Enlace && Enlace.Url ? Enlace.Url : null}
                      slideImage={Imagen && Imagen.Url ? { ...DefaultOpts, fileAbsoluteUrl: Imagen.Url } : null} />
                  );
                }
              }
            </IntranetMedicamentosCRUD>
          )
        }
      </IntranetMedicamentosCRUDList>
    );
  }
}
