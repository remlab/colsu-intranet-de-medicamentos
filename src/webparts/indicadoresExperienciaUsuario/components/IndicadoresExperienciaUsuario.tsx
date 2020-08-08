import * as React from 'react';
import classnames from 'classnames';

import styles from './IndicadoresExperienciaUsuario.module.scss';

import { IIndicadoresExperienciaUsuarioProps } from './IIndicadoresExperienciaUsuarioProps';
import { escape } from '@microsoft/sp-lodash-subset';
import BlockTitle from '../../componentes/blockTitle/blockTitle';
import BlockCard from '../../componentes/blockCard/blockCard';

import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';

export default class IndicadoresExperienciaUsuario extends React.Component<IIndicadoresExperienciaUsuarioProps, {}> {
  public render(): React.ReactElement<IIndicadoresExperienciaUsuarioProps> {
    const {
      title,
      subtitle,
      indicadores,
      propertyPane,
      inDesignMode,
      onSelectItem,
      onDeleteItem,
      onDuplicateItem } = this.props;

      const hexBackground = (hex) => {
          var c;
          if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
              c= hex.substring(1).split('');
              if(c.length== 3){
                  c= [c[0], c[0], c[1], c[1], c[2], c[2]];
              }
              c= '0x'+c.join('');
              return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.3)';
          }
          throw new Error('Bad Hex');
      };

      const hexColor = (hex) => {
          var c;
          if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
              c= hex.substring(1).split('');
              if(c.length== 3){
                  c= [c[0], c[0], c[1], c[1], c[2], c[2]];
              }
              c= '0x'+c.join('');
              return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
          }
          throw new Error('Bad Hex');
      };

    return (
      <div className={classnames(['ms-Grid', styles.experience])} dir="ltr">
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
            <BlockTitle type={'title__center'}>
              <span>{title}</span>  <strong>{subtitle}</strong>
            </BlockTitle>
        </div>

        <div className="ms-Grid-row">
          <div className="experience__indicators">

            {
              indicadores.map((data, index) => (
                <div key={index} className="ms-Grid-col ms-sm12 ms-md6 ms-lg6 ms-xl4">
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
                  <BlockCard margin={'2rem'} padding={'2rem'}>
                      {/* <div className={styles.card__title}><h3>{data.Title}</h3></div>
                      {data.Subt_x00ed_tulo && <div className={styles.card__subTitle}><p>{data.Subt_x00ed_tulo}</p></div>}
                      {data.Resumen && <div className={styles.card__description}><p>{data.Resumen}</p></div>}
                      {data.Enlace && <div className={styles.card__cta}><a href={data.Enlace.Url}> VER MÁS </a></div>} */}

                    <h3 className={styles.card_experience__title}>{data.titulo}</h3>
                    <h4 className={styles.card_experience__indicator} style={{ backgroundColor: data.color }}>{data.valor}</h4>
                    <div className={styles.card_experience__polls}>
                      <div className="ms-Grid-row">

                        <div className={classnames(['ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-xl6', styles.flex_style ])}>
                          <i className="ms-Icon ms-Icon--BarChart4" aria-hidden="true" style={{backgroundColor: hexBackground(data.color), color: hexColor(data.color) }}></i>
                          <div className={styles.poll_content}>
                            <h4 className={styles.poll_content__title} dangerouslySetInnerHTML={{ __html: data.opcionA.titulo }}></h4>
                            <p className={styles.poll_content__value}>{data.opcionA.valor}</p>
                          </div>
                        </div>

                        <div className={classnames(['ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-xl6', styles.flex_style ])}>
                          <i className="ms-Icon ms-Icon--BarChart4" aria-hidden="true" style={{backgroundColor: hexBackground(data.color), color: hexColor(data.color) }}></i>
                          <div className={styles.poll_content} >
                            <h4 className={styles.poll_content__title} dangerouslySetInnerHTML={{ __html: data.opcionB.titulo }}></h4>
                            <p className={styles.poll_content__value} >{data.opcionB.valor}</p>
                          </div>
                        </div>

                      </div>
                    </div>
                    <a href={data.enlace} className={styles.card_experience__button}>AMPLIAR INFORMACIÓN</a>
                  </BlockCard>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}
