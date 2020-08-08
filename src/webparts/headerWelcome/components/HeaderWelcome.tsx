import * as React from 'react';
import classnames from 'classnames';
import styles from './HeaderWelcome.module.scss';
import { IHeaderWelcomeProps, IHeaderWelcomeModel } from './IHeaderWelcomeProps';

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/sites";
import "@pnp/sp/files";
import "@pnp/sp/folders";

import { FilePicker, IFilePickerResult } from '@pnp/spfx-controls-react/lib/FilePicker';
import { ContextualMenu, ContextualMenuItemType, IContextualMenuItem } from 'office-ui-fabric-react/lib/ContextualMenu';
import { useConstCallback } from '@uifabric/react-hooks';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

interface ICurrentUser {
  Id: number;
  Title: string;
  FirstName: string;
}

const ContextualTitleMenu = ({ title, items, propertyPane, inDesignMode, onSelectItem, onDeleteItem, onDuplicateItem }) => {
  if (!Boolean(items)) return <p>Configurar webpart</p>;

  const menuItems: IContextualMenuItem[] = items.map((item: IHeaderWelcomeModel, index: number) => ({
    key: `context_${index}`,
    text: item.title,
    href: item.link,
    split: true,
    ...{
      ...inDesignMode ? {
        subMenuProps: {
          items: [{
            key: 'edit_item_' + index,
            text: 'Editar item',
            iconProps: {
              iconName: 'Edit',
            },
            onClick: () => {
              onSelectItem(index);
              if (propertyPane.isPropertyPaneOpen()) {
                propertyPane.close();
              } else {
                propertyPane.open();
              }
            }
          }, {
            key: 'delete_item_' + index,
            text: 'Eliminar item',
            iconProps: {
              iconName: 'Delete',
            },
            onClick: () => {
              onDeleteItem(index);
              if (propertyPane.isPropertyPaneOpen()) propertyPane.close();
            }
          }, {
            key: 'duplicate_item_' + index,
            text: 'Duplicar item',
            iconProps: {
              iconName: 'Page',
            },
            onClick: () => {
              onDuplicateItem(index);
              if (propertyPane.isPropertyPaneOpen()) propertyPane.close();
            }
          }]
        }
      } : {}
    }
  }));
  const linkRef = React.useRef(null);
  const [showContextualMenu, setShowContextualMenu] = React.useState(false);
  const onShowContextualMenu = useConstCallback(() => setShowContextualMenu(true));
  const onHideContextualMenu = useConstCallback(() => setShowContextualMenu(false));
  return (
    <>
      <a href="#" ref={linkRef} onClick={onShowContextualMenu} className={classnames({ [styles.subTitle]: true, [styles.subTitle__selected]: showContextualMenu })}> <Icon className={styles.iconMenu} iconName="CollapseMenu" /> {title} </a>
      <ContextualMenu
        items={menuItems}
        hidden={!showContextualMenu}
        target={linkRef.current}
        onItemClick={onHideContextualMenu}
        onDismiss={onHideContextualMenu}
      />
    </>
  );
};

const MediaImage = ({ inDesignMode, image, context, onSelectImage }) => {
  const [selectedImage, setSelectedImage] = React.useState(image);
  React.useEffect(() => {
    onSelectImage(selectedImage);
  }, [selectedImage]);
  return (<div className={styles.bannerImage}>
    <img src={selectedImage} alt="" />
    {
      inDesignMode && (
        <div className={styles.bannerAction} style={{ position: Boolean(selectedImage) ? `absolute` : `relative` }}>
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

export default class HeaderWelcome extends React.Component<IHeaderWelcomeProps, { currentUser: ICurrentUser }> {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }
  public componentDidMount() {
    if (!Boolean(this.props.type) || this.props.type === "saludo") {
      this.props.spHttpClient.get(`${this.props.siteUrl}/_api/Web/CurrentUser?$select=Id,Title`,
        SPHttpClient.configurations.v1,
        {
          headers: {
            'Accept': 'application/json;odata=nometadata',
            'odata-version': ''
          }
        })
        .then((response: SPHttpClientResponse): Promise<any> => {
          if (response.status === 400) throw "Not found";
          return response.json();
        })
        .then((loggedUser): Promise<any> => {
          return this.props.spHttpClient.get(`${this.props.siteUrl}/_api/Web/SiteUserInfoList/Items(${loggedUser.Id})?$select=Id,Title,FirstName`,
            SPHttpClient.configurations.v1,
            {
              headers: {
                'Accept': 'application/json;odata=nometadata',
                'odata-version': ''
              }
            });
        })
        .then((response: SPHttpClientResponse): Promise<ICurrentUser> => {
          if (response.status === 400) throw "Not found";
          return response.json();
        })
        .then((currentUser: ICurrentUser): void => {
          this.setState({ currentUser });
        })
        .catch((err) => console.log(err));
    }
  }
  public render(): React.ReactElement<IHeaderWelcomeProps> {
    const { inDesignMode, type, context, breadcrumb, image, title, hideTitle, titleColor, onSetImage } = this.props;
    return (
      <div className={styles.headerWelcome}>
        <div className={styles.container}>
          {{
            ['interna']: (
              <div className={styles.banner}>
                <div className={styles.bannerContainer}>
                  <MediaImage
                    inDesignMode={inDesignMode}
                    context={context}
                    onSelectImage={onSetImage}
                    image={image} />
                  {
                    !Boolean(hideTitle) && (
                      <h1 style={{ color: titleColor || `#fff` }}>{title}</h1>
                    )
                  }
                </div>
                {
                  (Boolean(breadcrumb) && Boolean(breadcrumb.link) && Boolean(breadcrumb.title)) &&
                  <div className={styles.breadCrum}>
                    <a href={breadcrumb.link}>
                      <span>{breadcrumb.title}</span>
                    </a>
                    &nbsp;/&nbsp;
                    <span>{title}</span>
                  </div>
                }
              </div>
            ),
            ['saludo']: (
              <div className={styles.row}>
                <div className={styles.column["ms-lgPush1"]}>
                  <div className={styles.section_welcome}>
                    <h1 className={styles.title}>Hola, {this.state.currentUser && <span>{this.state.currentUser.FirstName}</span>}</h1>
                    {!Boolean(hideTitle) && <ContextualTitleMenu {...this.props} />}
                  </div>
                </div>
              </div>
            )
          }[type || 'saludo']}
        </div>
      </div>
    );
  }
}