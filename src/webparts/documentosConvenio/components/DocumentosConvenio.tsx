import * as React from 'react';
import { sp } from "@pnp/sp/presets/all";
import { SharingLinkKind, IShareLinkResponse } from "@pnp/sp/sharing";
import { initializeFileTypeIcons, getFileTypeIconProps } from "@uifabric/file-type-icons";

import { Icon } from 'office-ui-fabric-react/lib/Icon';
import styles from './DocumentosConvenio.module.scss';

import { IntranetMedicamentosCRUDList, IntranetMedicamentosPageList } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';

import { IDocumentosConvenioProps, IDocumentosConvenioModel } from './IDocumentosConvenioProps';
import { escape } from '@microsoft/sp-lodash-subset';

initializeFileTypeIcons();

class DocumentoConvenio extends React.Component<{ data: IDocumentosConvenioModel, listName: string; }, { file: any, shareLink: IShareLinkResponse }> {
  constructor(props) {
    super(props);
    this.state = { file: null, shareLink: null };
  }
  public async componentDidMount() {
    const file = await sp.web.lists.getByTitle(this.props.listName)
      .items
      .getById(this.props.data.Id)
      .select(`File`)
      .expand(`File`)
      .get();
    const shareLink: IShareLinkResponse = await sp.web.getFolderByServerRelativeUrl(file.File.ServerRelativeUrl)
      .getShareLink(SharingLinkKind.OrganizationView);
    this.setState({ file, shareLink });
  }
  protected getFileUrl = () => {
    const url: string = this.state.file.File.ServerRelativeUrl;
    if ((/\.(url)$/i).test(url)) {
      return null;
    }
    return url;
  }
  protected getFileIconProps = () => {
    const filename : string = this.state.file.File.Name;
    const [ext] = filename.match(/\.[0-9a-z]+$/i);
    const iconprops = getFileTypeIconProps({ extension: ext, size: 48, imageFileType: 'png' });
    return { ...iconprops };
  }
  public render() {
    const { Title, Descripci_x00f3_n } = this.props.data;
    if (!Boolean(this.state.file)) return (
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6 ms-xl3">
        <div className={styles.partner}>
          <div className={styles.partner_content}>
            <p>Un momento</p>
          </div>
        </div>
      </div>
    );
    return (
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6 ms-xl3">
        <div className={styles.partner}>
          <div className={styles.partner_head}>
            <div className={styles.partner_head_icon}>
              <Icon {...this.getFileIconProps()} />
            </div>
            <div className={styles.partner_head_actions}>
              {/* {Boolean(this.getFileUrl()) && <a href={this.getFileUrl()} download><img src="http://aremlab.com/media/colsubsidio/institucional/convenios/download.png" alt="" /></a>} */}
              {(this.state.shareLink && Boolean(this.state.shareLink.sharingLinkInfo.Url)) && <a target="_blank" href={this.state.shareLink.sharingLinkInfo.Url} title={Title}><img src="http://aremlab.com/media/colsubsidio/institucional/convenios/eye.png" alt="" /></a>}
            </div>
          </div>
          <div className={styles.partner_content}>
            <h3>{Title}</h3>
            <p>{Descripci_x00f3_n}</p>
          </div>
          {(this.state.shareLink && Boolean(this.state.shareLink.sharingLinkInfo.Url)) && <a className={styles.documentButton} target="_blank" href={this.state.shareLink.sharingLinkInfo.Url} title={Title}>ir al documento</a>}
        </div>
      </div>
    );
  }
}
export default class DocumentosConvenio extends React.Component<IDocumentosConvenioProps, {}> {
  public render(): React.ReactElement<IDocumentosConvenioProps> {

    const { list, terms, context } = this.props;

    if (!Array.isArray(terms) || terms.length === 0)
      return <h1>Error! [tags] not found!</h1>;

    const [term] = terms;
    const filterTag = term.name;

    if (list === undefined || list === null || list === '')
      return <h1>Error! [documentos] list not found!</h1>;

    if (!context.pageContext)
      return <h1>Error! absoluteUrl not found!</h1>;

    if (!context.spHttpClient)
      return <h1>Error! spHttpClient not found!</h1>;

    return (
      <div className={styles.partners_content}>
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
                      <div className="ms-Grid" dir="ltr">
                        <div className="ms-Grid-row">
                          {
                            items.map((item, index) => {
                              const data = item as IDocumentosConvenioModel;
                              return (<DocumentoConvenio key={index} listName={listName} data={data} />);
                            })
                          }
                        </div>
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
