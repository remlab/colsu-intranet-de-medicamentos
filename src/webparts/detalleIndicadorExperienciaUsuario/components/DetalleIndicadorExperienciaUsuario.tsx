import * as React from 'react';
import classnames from 'classnames';

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/sites";
import "@pnp/sp/files";
import "@pnp/sp/folders";

import BlockTitle from '../../componentes/blockTitle/blockTitle';
import BlockCard from '../../componentes/blockCard/blockCard';

import styles from './DetalleIndicadorExperienciaUsuario.module.scss';

import { IDetalleIndicadorExperienciaUsuarioProps, IIndicadorExperienciaUsuarioModel } from './IDetalleIndicadorExperienciaUsuarioProps';
import { FilePicker, IFilePickerResult } from '@pnp/spfx-controls-react/lib/FilePicker';

import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

import Iconos from './Iconos';

const Indicador = ({ index, data, inDesignMode, context, setImageIndicador }) => {
  const { titulo, valor, icono, color, image } = data as IIndicadorExperienciaUsuarioModel;
  const [hideDialog, setHideDialog] = React.useState(true);
  const [contentImage, setContentImage] = React.useState(image);
  const _showDialog = (): void => {
    setHideDialog(false);
  };
  const _closeDialog = (): void => {
    setHideDialog(true);
  };
  React.useEffect(() => {
    setImageIndicador(index, contentImage);
  }, [contentImage]);

  return (
    <>
      <div className={styles.cardExperience}>
        <Iconos name={icono} color={color} className={color} />
        <div>
          <h3 className={styles.card_experience_detail__title}>{titulo}</h3>
          <h4>{valor}</h4>
        </div>
        {
          (Boolean(image) || inDesignMode) &&
          <a onClick={_showDialog} href="#" className={styles.channels_button}>
            <i className="ms-Icon ms-Icon--Add" aria-hidden="true"></i>
          </a>
        }
      </div>
      <Dialog
        hidden={hideDialog}
        onDismiss={_closeDialog}
        dialogContentProps={{
          type: DialogType.largeHeader,
          title: titulo
        }}
        modalProps={{
          isBlocking: false,
          styles: { main: { maxWidth: '80vw !important', maxHeight: '70vh' } },
        }}
      >
        <p>
          {Boolean(contentImage) && <img className={styles.detalleIndicadorExperienciaUsuario__indicador__image} alt={titulo} src={contentImage} />}
          {
            inDesignMode &&
            <div className={styles.detalleIndicadorExperienciaUsuario__indicador__filepicker}>
              <FilePicker
                accepts={[".gif", ".jpg", ".jpeg", ".bmp", ".dib", ".tif", ".tiff", ".ico", ".png", ".jxr", ".svg"]}
                buttonIcon="FileImage"
                buttonLabel={`${Boolean(contentImage) ? 'Cambiar' : 'Agregar'} imagen`}
                onSave={(pickerImage: IFilePickerResult) => {
                  if (!Boolean(pickerImage.fileAbsoluteUrl)) {
                    pickerImage.downloadFileContent()
                      .then(file => {
                        const uploadFiles = sp.web.getFolderByServerRelativeUrl(`${context.pageContext.web.serverRelativeUrl}/SiteAssets`).files;
                        if (file.size <= 10485760) {
                          return uploadFiles.add(file.name, file, true);
                        }
                        return uploadFiles.addChunked(file.name, file, result => { console.log(result); }, true);
                      })
                      .then((result) => {
                        setContentImage(result.data.ServerRelativeUrl);
                      })
                      .catch(err => console.log(err));
                    return;
                  }
                  setContentImage(pickerImage.fileAbsoluteUrl);
                }}
                onChanged={(pickerImage: IFilePickerResult) => setContentImage(pickerImage.fileAbsoluteUrl)}
                context={context}
              />
            </div>
          }
        </p>
        <DialogFooter>
          <DefaultButton onClick={_closeDialog} text="Ok" />
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default class DetalleIndicadorExperienciaUsuario extends React.Component<IDetalleIndicadorExperienciaUsuarioProps, {}> {
  public render(): React.ReactElement<IDetalleIndicadorExperienciaUsuarioProps> {
    const {
      title,
      subtitle,
      indicadores,
      type,
      breadcrumb,
      propertyPane,
      inDesignMode,
      context,
      setImageIndicador,
      onSelectItem,
      onDeleteItem,
      onDuplicateItem } = this.props;

    return (
      <div className="container">
        <div className={classnames('ms-Grid', styles.experience_detail)} dir="ltr">
          {{
            ["main"]: (<>
              <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                <div className="titleSection__sub__center">
                  <BlockTitle type={'title__center'}>
                    <span>{title}</span>  <strong>{subtitle}</strong>
                  </BlockTitle>
                </div>
                {
                  (Boolean(breadcrumb.link) && Boolean(breadcrumb.title)) &&
                  <div className={styles.breadCrum}>
                    <a href={breadcrumb.link}>
                      <span>{breadcrumb.title}</span>
                    </a>
                    {` / `}
                    <span>{title}</span>  <strong>{subtitle}</strong>
                  </div>
                }
              </div>
              <div className="ms-Grid-row" >
                <div className="ms-Grid-col ms-sm0 ms-md0 ms-lg1"></div>
                {
                  Boolean(indicadores) && indicadores.map((indicador, index) => (
                    <div key={index} className="ms-Grid-col ms-sm12 ms-md12 ms-lg3 ms-xl2">
                      {
                        inDesignMode && (
                          <Stack horizontal styles={{
                            root: {
                              position: "absolute",
                              top: 0,
                              left: 0,
                              zIndex: 1,
                              transition: 'all 0.3s ease 0s'
                            }
                          }}>
                            <TooltipHost
                              id="tooltip_edit"
                              content="Editar item"
                              className="ToolbarButtonTooltip"
                              directionalHint={DirectionalHint.topCenter}>
                              <IconButton onClick={() => {
                                onSelectItem(index);
                                if (propertyPane.isPropertyPaneOpen()) {
                                  propertyPane.close();
                                } else {
                                  propertyPane.open();
                                }
                              }} iconProps={{ iconName: "Edit" }} title="Editar item" ariaLabel="Editar item" aria-describedby="tooltip_edit" className="ToolbarButton CanvasControlToolbar-item" />
                            </TooltipHost>
                            <TooltipHost
                              id={`tooltip_delete`}
                              content="Eliminar item"
                              className="ToolbarButtonTooltip"
                              directionalHint={DirectionalHint.topCenter}>
                              <IconButton onClick={() => {
                                onDeleteItem(index);
                                if (propertyPane.isPropertyPaneOpen()) propertyPane.close();
                              }} className="ToolbarButton CanvasControlToolbar-item" iconProps={{ iconName: "Delete" }} title="Eliminar" ariaLabel="Eliminar" aria-describedby={`tooltip_delete`} />
                            </TooltipHost>
                            <TooltipHost
                              id={`tooltip_duplicate`}
                              content="Duplicar item"
                              className="ToolbarButtonTooltip"
                              directionalHint={DirectionalHint.topCenter}>
                              <IconButton onClick={() => {
                                onDuplicateItem(index);
                                if (propertyPane.isPropertyPaneOpen()) propertyPane.close();
                              }} className="ToolbarButton CanvasControlToolbar-item" iconProps={{ iconName: "Page" }} title="Duplicar" ariaLabel="Duplicar" aria-describedby={`tooltip_duplicate`} />
                            </TooltipHost>
                          </Stack>
                        )
                      }
                      <BlockCard margin={'2rem 0'} padding={'1rem'} textAlign={'center'}>
                        <h3 className={styles.card_experience_detail__title}>{indicador.titulo}</h3>
                        <Iconos name={indicador.icono} color={indicador.color} className={indicador.color} />
                        <h4 className={styles.card_experience_detail__value}>{indicador.valor}</h4>
                      </BlockCard>
                    </div>
                  ))
                }
                <div className="ms-Grid-col ms-sm1 ms-md1 ms-lg1"></div>
              </div>
            </>),
            ["secondary"]: (<div className="ms-Grid-row" >
              <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                <div className="titleSection__sub__left">
                  <BlockTitle type={'title__left'}>
                    <span>{title}</span>  <strong>{subtitle}</strong>
                  </BlockTitle>
                </div>
              </div>
              <div className={styles.experience_detail__channels}>
                {
                  Boolean(indicadores) && indicadores.map((indicador, index) => (
                    <div key={index} className="ms-Grid-col ms-sm12 ms-md6 ms-lg4 ms-xl4">
                      {
                        inDesignMode && (
                          <Stack horizontal styles={{
                            root: {
                              position: "absolute",
                              top: 0,
                              left: 0,
                              zIndex: 1,
                              transition: 'all 0.3s ease 0s'
                            }
                          }}>
                            <TooltipHost
                              id="tooltip_edit"
                              content="Editar item"
                              className="ToolbarButtonTooltip"
                              directionalHint={DirectionalHint.topCenter}>
                              <IconButton onClick={() => {
                                onSelectItem(index);
                                if (propertyPane.isPropertyPaneOpen()) {
                                  propertyPane.close();
                                } else {
                                  propertyPane.open();
                                }
                              }} iconProps={{ iconName: "Edit" }} title="Editar item" ariaLabel="Editar item" aria-describedby="tooltip_edit" className="ToolbarButton CanvasControlToolbar-item" />
                            </TooltipHost>
                            <TooltipHost
                              id={`tooltip_delete`}
                              content="Eliminar item"
                              className="ToolbarButtonTooltip"
                              directionalHint={DirectionalHint.topCenter}>
                              <IconButton onClick={() => {
                                onDeleteItem(index);
                                if (propertyPane.isPropertyPaneOpen()) propertyPane.close();
                              }} className="ToolbarButton CanvasControlToolbar-item" iconProps={{ iconName: "Delete" }} title="Eliminar" ariaLabel="Eliminar" aria-describedby={`tooltip_delete`} />
                            </TooltipHost>
                            <TooltipHost
                              id={`tooltip_duplicate`}
                              content="Duplicar item"
                              className="ToolbarButtonTooltip"
                              directionalHint={DirectionalHint.topCenter}>
                              <IconButton onClick={() => {
                                onDuplicateItem(index);
                                if (propertyPane.isPropertyPaneOpen()) propertyPane.close();
                              }} className="ToolbarButton CanvasControlToolbar-item" iconProps={{ iconName: "Page" }} title="Duplicar" ariaLabel="Duplicar" aria-describedby={`tooltip_duplicate`} />
                            </TooltipHost>
                          </Stack>
                        )
                      }
                      <Indicador index={index} data={indicador} context={context} inDesignMode={inDesignMode} setImageIndicador={setImageIndicador} />
                    </div>
                  ))
                }
              </div>
            </div>)
          }[type]}
        </div>
      </div>
    );
  }
}
