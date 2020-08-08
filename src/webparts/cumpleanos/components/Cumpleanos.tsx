import * as React from 'react';
import classnames from 'classnames';
import * as moment from 'moment';
import 'moment/locale/es';

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/sites";
import "@pnp/sp/files";
import "@pnp/sp/folders";

import { FilePicker, IFilePickerResult } from '@pnp/spfx-controls-react/lib/FilePicker';
import { IntranetMedicamentosCRUDList, IntranetMedicamentosCRUD } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';

import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';

import { chunk } from '@microsoft/sp-lodash-subset';
import Swiper from 'react-id-swiper';

import styles from './Cumpleanos.module.scss';
import { ICumpleanosProps, ICumpleanosModel } from './ICumpleanosProps';

import BlockTitle from '../../componentes/blockTitle/blockTitle';

const MediaImage = ({ inDesignMode, image, context, onSelectImage }) => {
  const [selectedImage, setSelectedImage] = React.useState(image);
  React.useEffect(() => {
    onSelectImage(selectedImage);
  }, [selectedImage]);
  return (<div className={styles.media}>
    <img src={selectedImage} alt="" />
    {
      inDesignMode && (
        <div className={styles.bannerAction}>
          <FilePicker
            accepts={[".gif", ".jpg", ".jpeg", ".bmp", ".dib", ".tif", ".tiff", ".ico", ".png", ".jxr", ".svg"]}
            buttonIcon="FileImage"
            buttonLabel={selectedImage ? `Cambiar imagen` : `Agregar imagen`}
            onSave={(pImage: IFilePickerResult) => {
              if (!Boolean(pImage.fileAbsoluteUrl)) {
                pImage.downloadFileContent()
                  .then(file => {
                    const uploadFiles = sp.web.getFolderByServerRelativeUrl(`${context.pageContext.web.serverRelativeUrl}/SiteAssets`).files;
                    if (file.size <= 10485760) {
                      return uploadFiles.add(file.name, file, true);
                    }
                    return uploadFiles.addChunked(file.name, file, data => { console.log(data); }, true);
                  })
                  .then((result) => {
                    setSelectedImage(result.data.ServerRelativeUrl);
                  })
                  .catch(err => console.log(err));
                return;
              }
              setSelectedImage(pImage.fileAbsoluteUrl);
            }}
            onChanged={(pImage: IFilePickerResult) => { setSelectedImage(pImage.fileAbsoluteUrl); }}
            context={context}
          />
        </div>
      )
    }
  </div>);
};

export default class Cumpleanos extends React.Component<ICumpleanosProps, {}> {

  protected crud: IntranetMedicamentosCRUD = null;

  public render(): React.ReactElement<ICumpleanosProps> {
    const { title, subtitle, image, list, inDesignMode, context, onSelectImage, onSelectItem } = this.props;

    if (list === undefined || list === null || list === '')
      return <h1>Error! [birthday] list not found!</h1>;

    if (!context.pageContext)
      return <h1>Error! absoluteUrl not found!</h1>;

    if (!context.spHttpClient)
      return <h1>Error! spHttpClient not found!</h1>;

    return (
      <div className={classnames(["ms-Grid", styles.birthday])} dir="ltr">
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
          <BlockTitle type={'title__center'}>
            <span>{title}</span>  <strong>{subtitle}</strong>
          </BlockTitle>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-xl5">
            <IntranetMedicamentosCRUDList
              listId={list}
              spHttpClient={context.spHttpClient}
              siteUrl={context.pageContext.web.absoluteUrl}>
              {
                (listName) => (
                  <IntranetMedicamentosCRUD
                    propertyPane={context.propertyPane}
                    inDesignMode={inDesignMode}
                    ref={el => this.crud = el}
                    listName={listName}
                    spHttpClient={context.spHttpClient}
                    siteUrl={context.pageContext.web.absoluteUrl}
                    include="Fecha,Cargo,Yammer,Modified"
                    // filter={`month(Fecha) eq ${new Date().getMonth()}`}
                    onEditAction={(data: ICumpleanosModel) => {
                      if (this.crud) this.crud.listItemTempData = data;
                      onSelectItem(data);
                    }}
                    onDeleteAction={(data: ICumpleanosModel) => {
                      if (this.crud) this.crud.listItemTempData = data;
                      onSelectItem(data);
                    }}
                    actions={({ item, handleCreate }) => {
                      return (<>
                        <TooltipHost
                          id="tooltip_duplicate"
                          content="Duplicar"
                          className="ToolbarButtonTooltip"
                          directionalHint={DirectionalHint.topCenter}>
                          <IconButton onClick={() => {
                            const {
                              Title,
                              Fecha,
                              Cargo,
                              Yammer
                            } = item as ICumpleanosModel;
                            if (this.crud) {
                              const newData = {
                                Title,
                                Fecha,
                                Cargo,
                                Yammer
                              } as ICumpleanosModel;
                              this.crud.listItemTempData = newData;
                              handleCreate();
                              onSelectItem(newData);
                              if (context.propertyPane.isPropertyPaneOpen()) context.propertyPane.close();
                            }
                          }} iconProps={{ iconName: "Page" }} title="Duplicar" ariaLabel="Duplicar" aria-describedby="tooltip_duplicate" className="ToolbarButton CanvasControlToolbar-item" />
                        </TooltipHost>
                      </>
                      );
                    }}
                    ParentComponent={
                      ({ items }) => {
                        if (items.length === 0) return <h1>{status}</h1>;
                        const slides: JSX.Element[][] = chunk(items, 5);
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
                                <div key={pindex} className={styles.calendar}>
                                  {slide}
                                </div>
                              ))
                            }
                          </Swiper>
                        );
                      }
                    }>
                    {
                      ({ item }) => {
                        const data = item as ICumpleanosModel;
                        const date = moment(data.Fecha);
                        return (
                          <div className={styles.schedule}>
                            <div className={styles.date}>
                              <h3>{date.format("D")}</h3>
                              <p>{date.format("MMM")}</p>
                            </div>
                            <div className={styles.people}>
                              <h4>{data.Title}</h4>
                              <p>{data.Cargo}</p>
                            </div>
                            <div className={styles.cta}>
                              {
                                Boolean(data.Yammer) && (<a href={data.Yammer.Url}>
                                  Felicítame
                                  <i><img src="http://aremlab.com/media/colsubsidio/gestion/yammer_.png" alt="" /></i>
                                </a>)
                              }
                            </div>
                          </div>
                        );
                      }
                    }
                  </IntranetMedicamentosCRUD>
                )
              }
            </IntranetMedicamentosCRUDList>
          </div>
          <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-xl2"> </div>
          <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-xl5">
            <MediaImage inDesignMode={inDesignMode} context={context} onSelectImage={onSelectImage} image={image} />
          </div>
        </div>
      </div>
    );
  }
}
