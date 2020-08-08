import * as React from 'react';
import classnames from 'classnames';

import styles from './CadenaValor.module.scss';

import { ICadenaValorProps, ICadenaValorModel } from './ICadenaValorProps';
import { groupBy } from '@microsoft/sp-lodash-subset';

import { IntranetMedicamentosCRUDList, IntranetMedicamentosCRUD } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';

import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

import BlockTitle from '../../componentes/blockTitle/blockTitle';

const CadenaValorItem = ({ item }) => {
  const data = item as ICadenaValorModel;
  const [hideDialog, setHideDialog] = React.useState(true);
  const _showDialog = (): void => {
    setHideDialog(false);
  };
  const _closeDialog = (): void => {
    setHideDialog(true);
  };
  return (
    <>
      <a href="#" onClick={_showDialog} className={classnames({
        [styles.cadena_valor__levelOne]: data.Posici_x00f3_n === 1,
        [styles.cadena_valor__levelTwo]: data.Posici_x00f3_n === 2,
        [styles.cadena_valor__levelTree]: data.Posici_x00f3_n >= 3,
      })} style={{ borderBottomColor: data.Color }}>
        <h4>{data.Title}</h4>
      </a>
      <Dialog
        hidden={hideDialog}
        onDismiss={_closeDialog}
        dialogContentProps={{
          type: DialogType.largeHeader,
          title: data.Title
        }}
        modalProps={{
          isBlocking: false,
          styles: { main: { maxWidth: '60vw !important' } },
        }}
      >
        <p>{data.Descripci_x00f3_n}</p>
        <DialogFooter>
          <DefaultButton onClick={_closeDialog} text="Ok" />
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default class CadenaValor extends React.Component<ICadenaValorProps, {}> {

  public crud: IntranetMedicamentosCRUD = null;

  public render(): React.ReactElement<ICadenaValorProps> {
    const { title, subtitle, list, context, inDesignMode } = this.props;

    if (list === undefined || list === null || list === '')
      return <h1>Error! [cadena de valor] list not found!</h1>;

    if (!context.pageContext)
      return <h1>Error! absoluteUrl not found!</h1>;

    if (!context.spHttpClient)
      return <h1>Error! spHttpClient not found!</h1>;

    return (
      <div className="ms-Grid cadena_valor" dir="ltr">
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
          <BlockTitle type={'title__center'}>
            <span>{title}</span>  <strong>{subtitle}</strong>
          </BlockTitle>
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
                  include="Color,Posici_x00f3_n,Descripci_x00f3_n"
                  onEditAction={(data) => {
                    if (this.crud) this.crud.listItemTempData = data;
                    const item = data as ICadenaValorModel;
                    this.props.onSelectItem(item);
                  }}
                  onDeleteAction={(data) => {
                    if (this.crud) this.crud.listItemTempData = data;
                    const item = data as ICadenaValorModel;
                    this.props.onSelectItem(item);
                  }}
                  actions={({ item, handleCreate }) => {
                    return (<>
                      <TooltipHost
                        id="tooltip_duplicate"
                        content="Duplicar item"
                        className="ToolbarButtonTooltip"
                        directionalHint={DirectionalHint.topCenter}>
                        <IconButton onClick={() => {
                          const {
                            Title,
                            Posici_x00f3_n,
                            Descripci_x00f3_n,
                            Color
                          } = item as ICadenaValorModel;
                          if (this.crud) {
                            const newData = {
                              Title,
                              Posici_x00f3_n,
                              Descripci_x00f3_n,
                              Color
                            } as ICadenaValorModel;
                            this.crud.listItemTempData = newData;
                            handleCreate();
                            if (this.props.context.propertyPane.isPropertyPaneOpen()) this.props.context.propertyPane.close();
                          }
                        }} iconProps={{ iconName: "Page" }} title="Duplicar item" ariaLabel="Duplicar item" aria-describedby="tooltip_duplicate" className="ToolbarButton CanvasControlToolbar-item" />
                      </TooltipHost>
                    </>
                    );
                  }}
                  ParentComponent={
                    ({ items, data }) => {
                      const elements = groupBy(items, 'key');
                      const result = groupBy(data, 'Posici_x00f3_n');
                      const positions = Object.keys(result);
                      return (
                        <div className="ms-Grid-row">
                          {
                            positions.map((pos, pindex) => (
                              <div key={pindex} className={`ms-Grid-col ms-sm12 ms-md12 ms-lg12`}>
                                <div className="ms-Grid-row">
                                  {
                                    result[pos].map((dt: ICadenaValorModel) => {
                                      const [element] = elements[dt.Id];
                                      const cols = 12 / (result[pos].length <= 4 ? result[pos].length : 4);
                                      return (<div className={`ms-Grid-col ms-sm12 ms-md12 ms-lg${cols < 6 ? 6 : cols} ms-xl${cols}`}>{element}</div>);
                                    })
                                  }
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      );
                    }
                  }>
                  {
                    ({ item }) => (<CadenaValorItem item={item} />)
                  }
                </IntranetMedicamentosCRUD>
              )
            }
          </IntranetMedicamentosCRUDList>
        </div>
      </div >
    );
  }
}
