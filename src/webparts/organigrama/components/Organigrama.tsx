import * as React from 'react';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

import styles from './Organigrama.module.scss';
import { IOrganigramaProps, IOrganigramaModel } from './IOrganigramaProps';

import { IntranetMedicamentosCRUDList, IntranetMedicamentosCRUD } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';

import { Tree, TreeNode } from 'react-organizational-chart';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';

import styled from 'styled-components';

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  /*border: 1px solid red;*/
`;

class Persona extends React.Component<{
  Title: string;
  Cargo: string;
  Picture: {
    Url: string;
  };
  yammer: {
    Url: string;
  };
}, {}> {
  public render() {
    return (
      <>
        {
          this.props.Picture && this.props.Picture.Url && this.props.Picture.Url !== "" ?
            <img src={this.props.Picture.Url} alt={this.props.Title} /> :
            <img src="http://aremlab.com/media/colsubsidio/institucional/org/user3.svg" alt="User" />
        }
        {this.props.Title && <h3>{this.props.Title.toLowerCase()}</h3>}
        {this.props.Cargo && <p>{this.props.Cargo.toLowerCase()}</p>}
        {this.props.yammer && this.props.yammer.Url && this.props.yammer.Url !== "" ? <a className={styles.yammerButton} href={this.props.yammer.Url}><img src="http://aremlab.com/media/colsubsidio/institucional/org/yammer.png" alt={`Yammer ${this.props.Title}`} /></a> : <div></div>}
      </>
    );
  }
}

export default class Organigrama extends React.Component<IOrganigramaProps, {}> {

  public crud: IntranetMedicamentosCRUD = null;

  public render(): React.ReactElement<IOrganigramaProps> {

    const { title, subtitle, list, context } = this.props;

    if (list === undefined || list === null || list === '')
      return <h1>Error! organigrama list not found!</h1>;

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
              include="Picture,level,yammer,Cargo,Modified"
              ParentComponent={({ data }) => {
                if (data.length === 0) return <h1>No data items found</h1>;

                const pData = data as IOrganigramaModel[];
                let result: IOrganigramaModel = null;
                for (let i = 0; i < pData.length; i++) {
                  let item: IOrganigramaModel = pData[i];
                  const filter = pData.filter(({ level }) => level === item.Id);
                  item.children = filter.length > 0 ? filter : null;
                  if (item.level === null) result = item;
                }

                const Label = (item: IOrganigramaModel) => {
                  const { Id, Title, Picture, yammer, Cargo, level } = item;
                  return (
                    <StyledNode>
                      <div style={{ position: "relative", paddingTop: this.props.inDesignMode ? 36 : 0 }}>
                        {
                          this.props.inDesignMode &&
                          <Stack horizontal styles={{
                            root: {
                              position: "absolute",
                              top: 0,
                              zIndex: 1,
                              transition: 'all 0.3s ease 0s'
                            }
                          }}>
                            <TooltipHost
                              id={`tooltip_edit`}
                              content="Editar item"
                              className="ToolbarButtonTooltip"
                              directionalHint={DirectionalHint.topCenter}>
                              <IconButton onClick={() => {
                                this.props.onSelectItem(item);
                                this.props.context.propertyPane.open();
                              }} className="ToolbarButton CanvasControlToolbar-item" iconProps={{ iconName: "Edit" }} title="Editar" ariaLabel="Editar" aria-describedby={`tooltip_edit`} />
                            </TooltipHost>
                            <TooltipHost
                              id={`tooltip_save`}
                              content="Guardar item"
                              className="ToolbarButtonTooltip"
                              directionalHint={DirectionalHint.topCenter}>
                              <IconButton onClick={() => {
                                if (this.crud && this.props.selectedItem && this.props.selectedItem.Id === Id) {
                                  let uData = { ...item, ...this.props.selectedItem };
                                  delete uData.children;
                                  this.crud.listItemTempData = uData;
                                  this.crud.updateItem();
                                }
                                if (this.props.context.propertyPane.isPropertyPaneOpen()) this.props.context.propertyPane.close();
                              }} className="ToolbarButton CanvasControlToolbar-item" iconProps={{ iconName: "Save" }} title="Guardar" ariaLabel="Guardar" aria-describedby={`tooltip_save`} />
                            </TooltipHost>
                            {
                              level !== null && (
                                <TooltipHost
                                  id={`tooltip_delete`}
                                  content="Eliminar item"
                                  className="ToolbarButtonTooltip"
                                  directionalHint={DirectionalHint.topCenter}>
                                  <IconButton onClick={() => {
                                    if (this.crud) {
                                      this.crud.listItemTempData = { Id, Title };
                                      this.crud.deleteItem();
                                    }
                                    if (this.props.context.propertyPane.isPropertyPaneOpen()) this.props.context.propertyPane.close();
                                  }} className="ToolbarButton CanvasControlToolbar-item" iconProps={{ iconName: "Delete" }} title="Eliminar" ariaLabel="Eliminar" aria-describedby={`tooltip_delete`} />
                                </TooltipHost>
                              )
                            }
                            <TooltipHost
                              id="tooltip_add_person"
                              content="Nueva persona"
                              className="ToolbarButtonTooltip"
                              directionalHint={DirectionalHint.topCenter}>
                              <IconButton onClick={() => {
                                if (this.crud) {
                                  const newData = {
                                    Title: "Nueva persona",
                                    Picture: {
                                      Url: "http://aremlab.com/media/colsubsidio/institucional/org/user3.svg"
                                    },
                                    level: Id
                                  } as IOrganigramaModel;
                                  this.crud.listItemTempData = newData;
                                  this.crud.createItem();
                                }
                              }} iconProps={{ iconName: "Add" }} title="Nueva persona" ariaLabel="Nueva persona" aria-describedby="tooltip_add_person" className="ToolbarButton CanvasControlToolbar-item" />
                            </TooltipHost>
                          </Stack>
                        }
                        <div className={styles.org__card}>
                          <Persona {...{Title, Cargo, Picture, yammer, ...(this.props.selectedItem && this.props.selectedItem.Id === Id) ? this.props.selectedItem : {}}} />
                        </div>
                      </div>
                    </StyledNode>
                  );
                };

                const Node = ({ Component, childrenProps, childrenItems }) => (
                  <Component {...childrenProps}>
                    {(childrenItems && Array.isArray(childrenItems) && childrenItems.length > 0) && childrenItems.map((item, index) => <Node key={index} Component={TreeNode} childrenProps={{ label: <Label {...item} /> }} childrenItems={item.children} />)}
                  </Component>
                );

                return (
                  <div className={styles.organigrama}>
                    <div className={styles.container}>
                      <div className={styles.row}>
                        <div className={styles.column["ms-lgPush1"]}>
                          <div className={styles.section_orgChart}>
                            <div className={styles.org_header}>
                              <h2>{title} <strong>{subtitle}</strong></h2>
                            </div>
                            <div className={styles.org_content}>
                              <Node
                                Component={Tree}
                                childrenProps={{
                                  lineWidth: "2px",
                                  lineColor: "#BDCEF1",
                                  lineBorderRadius: "4px",
                                  lineHeight: '20px',
                                  nodePadding: '5px',
                                  label: <Label  {...result} />
                                }}
                                childrenItems={result.children} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }}
            >
              {
                () => (<div></div>)
              }
            </IntranetMedicamentosCRUD>
          )
        }
      </IntranetMedicamentosCRUDList>
    );
  }
}
