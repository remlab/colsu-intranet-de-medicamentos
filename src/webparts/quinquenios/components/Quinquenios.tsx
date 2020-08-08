import * as React from 'react';
import classnames from 'classnames';

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/sites";
import "@pnp/sp/files";
import "@pnp/sp/folders";

import styles from './Quinquenios.module.scss';
import { IQuinqueniosProps, IQuinqueniosModel } from './IQuinqueniosProps';

import BlockTitle from '../../componentes/blockTitle/blockTitle';

import { FilePicker, IFilePickerResult } from '@pnp/spfx-controls-react/lib/FilePicker';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';

import { IntranetMedicamentosCRUDList, IntranetMedicamentosCRUD } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';

import { chunk } from '@microsoft/sp-lodash-subset';

const SignComponent = ({ data, inDesignMode, onSelectImage, context }) => {
  const [selectedImage, setSelectedImage] = React.useState(data.image);
  React.useEffect(() => {
    onSelectImage(selectedImage);
  }, [selectedImage]);
  return (
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
        <div className={styles.sign}>
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
                          const uploadFiles = sp.web.getFolderByServerRelativeUrl(`${this.props.context.pageContext.web.serverRelativeUrl}/SiteAssets`).files;
                          if (file.size <= 10485760) {
                            return uploadFiles.add(file.name, file, true);
                          }
                          return uploadFiles.addChunked(file.name, file, result => { console.log(result); }, true);
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
          <div dangerouslySetInnerHTML={{ __html: data.text }}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default class Quinquenios extends React.Component<IQuinqueniosProps, {}> {
  protected crud: IntranetMedicamentosCRUD = null;
  public render(): React.ReactElement<IQuinqueniosProps> {
    const { title, subtitle, list, inDesignMode, context, text1, text2, sign, onSelectSignImage, onSelectItem } = this.props;
    if (list === undefined || list === null || list === '')
      return <h1>Error! [quinquenios] list not found!</h1>;

    if (!context.pageContext)
      return <h1>Error! absoluteUrl not found!</h1>;

    if (!context.spHttpClient)
      return <h1>Error! spHttpClient not found!</h1>;
    return (
      <div className={classnames(["ms-Grid", styles.quinquenniums])}>
        <div className={classnames(["ms-Grid", styles.culture])} dir="ltr">
          <BlockTitle type={'title__center'}>
            <span>{title}</span>  <strong>{subtitle}</strong>
          </BlockTitle>
          <div className={classnames(["ms-Grid-row", styles.head])}>
            <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6" dangerouslySetInnerHTML={{ __html: text1 }}>
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6" dangerouslySetInnerHTML={{ __html: text2 }}>
            </div>
          </div>
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
                  include="A_x00f1_os,Cargo,Yammer,Foto"
                  onEditAction={(data: IQuinqueniosModel) => {
                    if (this.crud) this.crud.listItemTempData = data;
                    onSelectItem(data);
                  }}
                  onDeleteAction={(data: IQuinqueniosModel) => {
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
                            Cargo,
                            A_x00f1_os,
                            Yammer,
                            Foto
                          } = item as IQuinqueniosModel;
                          if (this.crud) {
                            const newData = {
                              Title,
                              Cargo,
                              A_x00f1_os,
                              Yammer,
                              Foto
                            } as IQuinqueniosModel;
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
                      const rows: JSX.Element[][] = chunk(items, 4);
                      return (
                        <>
                          {
                            rows.map((row, pindex) => (
                              <div key={pindex} className="ms-Grid-row">
                                {
                                  row.map((cell, index) => (
                                    <div key={index} className="ms-Grid-col ms-sm12 ms-md12 ms-lg4 ms-xl3">
                                      {cell}
                                    </div>
                                  ))
                                }
                              </div>
                            ))
                          }
                        </>);
                    }
                  }>
                  {
                    ({ item }) => {
                      const data = item as IQuinqueniosModel;
                      return (
                        <div className={styles.cardUser} style={{ backgroundImage: `url(${data.Foto.Url})`, backgroundPosition: 'top center', backgroundSize: 'cover' }}>
                          <div className={styles.cardUser__date}>
                            <h3>{data.A_x00f1_os}</h3>
                            <p>años</p>
                          </div>
                          <div className={styles.cardUser__description}>
                            <h3>{data.Title}</h3>
                            <p>{data.Cargo}</p>
                          </div>
                          <div className={styles.cardUser__iconSocial}>
                            {data.Yammer && <a href={data.Yammer.Url}>
                              <img src="http://aremlab.com/media/colsubsidio/gestion/quinquenios/yammer.png" alt="" />
                            </a>}
                          </div>
                        </div>
                      );
                    }
                  }
                </IntranetMedicamentosCRUD>
              )
            }
          </IntranetMedicamentosCRUDList>
          <SignComponent data={sign} inDesignMode={inDesignMode} context={context} onSelectImage={onSelectSignImage} />
        </div>
      </div>
    );
  }
}
