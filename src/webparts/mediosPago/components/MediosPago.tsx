import * as React from 'react';
import classnames from 'classnames';

import styles from './MediosPago.module.scss';
import { IMediosPagoProps } from './IMediosPagoProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';

export default class MediosPago extends React.Component<IMediosPagoProps, {}> {
  public render(): React.ReactElement<IMediosPagoProps> {
    const {
      title,
      subtitle,
      footerText,
      paymentMethods,
      propertyPane,
      inDesignMode,
      onSelectItem,
      onDeleteItem,
      onDuplicateItem } = this.props;
    const getColorClass = (index) => {
      switch (index) {
        case 0:
          return styles.mediosPago__content__paymentMethod__Image__0;
        case 1:
          return styles.mediosPago__content__paymentMethod__Image__1;
        case 2:
          return styles.mediosPago__content__paymentMethod__Image__2;
        case 3:
          return styles.mediosPago__content__paymentMethod__Image__3;
        default:
          return styles.mediosPago__content__paymentMethod__Image__0;
      }
    };
    return (
      <div className={styles.mediosPago}>
        <div className={styles.mediosPago__header}>
          <h2>{title} <strong>{subtitle}</strong></h2>
        </div>
        <div className={styles.mediosPago__content}>
          {
            paymentMethods.map((paymentMethod, index) => (
              <div className={styles.mediosPago__content__paymentMethod} style={{ paddingTop: inDesignMode ? 36 : 0 }} key={index}>
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
                <a target="_blank" href={paymentMethod.link || '#'} style={{ textDecoration: 'none', color: '#000000' }}>
                  <div className={classnames([styles.mediosPago__content__paymentMethod__Image, getColorClass(index)])}>
                    <img src={paymentMethod.image} alt="" />
                  </div>
                  <div className={styles.mediosPago__content__paymentMethod__titleLine}>
                    <div className={styles.mediosPago__content__paymentMethod__title} dangerouslySetInnerHTML={{ __html: paymentMethod.title }}></div>
                    {paymentMethod.applyAttention && <span className={styles.mediosPago__content__paymentMethod__titleLine__asterisk}>*</span>}
                  </div>
                  {paymentMethod.subtitle && <div className={styles.mediosPago__content__paymentMethod__subtitle} dangerouslySetInnerHTML={{ __html: paymentMethod.subtitle }}></div>}
                </a>
              </div>
            ))
          }
        </div>
        <div className={styles.mediosPago__footer}>
          <span className={styles.mediosPago__footer__asterisk}>*</span>
          <div className={styles.mediosPago__footer__footerText} dangerouslySetInnerHTML={{ __html: footerText }}></div>
        </div>
      </div>
    );
  }
}
