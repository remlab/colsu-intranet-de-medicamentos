import * as React from 'react';
import classnames from 'classnames';
import styles from './ExplorarAreas.module.scss';
import { IExplorarAreasProps, IExplorarAreasModel } from './IExplorarAreasProps';

import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';

import BlockTitle from '../../componentes/blockTitle/blockTitle';

import Iconos from './Iconos';

export default class ExplorarAreas extends React.Component<IExplorarAreasProps, {}> {
  public render(): React.ReactElement<IExplorarAreasProps> {
    const { title, subtitle, items, propertyPane, inDesignMode,  onSelectItem,  onDeleteItem,  onDuplicateItem } = this.props;
    return (
      <div className={styles.explorarAreas}>
        <BlockTitle type={'title__left'}><span>{title} <strong>{subtitle}</strong></span></BlockTitle>
        <div className="ms-Grid" dir="ltr">
          {
            items.map((item: IExplorarAreasModel, index) => (
              <div className={classnames(['ms-Grid-col ms-sm12 ms-md6 ms-lg4 ms-xl3', styles.explorarAreas__link__container])} style={{ paddingTop: inDesignMode ? 36 : 0 }}>
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
                <a key={index} href={item.link} className={styles.explorarAreas__link}>
                  <p className={styles.explorarAreas__text} dangerouslySetInnerHTML={{ __html: item.title }}></p>
                  <div className={styles.explorarAreas__icon} style={{ backgroundColor: item.color }}>
                    <Iconos name={item.icon} />
                  </div>
                </a>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
