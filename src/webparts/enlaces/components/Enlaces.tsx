import * as React from 'react';
import classnames from 'classnames';

import styles from './Enlaces.module.scss';
import { IEnlacesProps } from './IEnlacesProps';
import { escape } from '@microsoft/sp-lodash-subset';

import BlockTitle from '../../componentes/blockTitle/blockTitle';

import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';

export default class Enlaces extends React.Component<IEnlacesProps, {}> {
  public render(): React.ReactElement<IEnlacesProps> {
    const {
      title,
      enlaces,
      propertyPane,
      inDesignMode,
      onSelectItem,
      onDeleteItem,
      onDuplicateItem } = this.props;
    return (
      <div className={classnames(['ms-Grid', styles.links])}  dir="ltr">
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
          <BlockTitle type="title__left">
            <span>{title}</span> 
          </BlockTitle>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
              <div className={styles.links__card}>
                <ul>
                  {
                    enlaces.map((enlace, index) => (
                      <li className="ms-Grid-col ms-sm12 ms-md6 ms-lg6" key={index} style={{ paddingTop: inDesignMode ? 36 : 0 }}>
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
                        <a href={enlace.link}>{enlace.title}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
