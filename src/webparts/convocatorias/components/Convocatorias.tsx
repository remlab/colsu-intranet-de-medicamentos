import * as React from 'react';
import classnames from 'classnames';

import { IntranetMedicamentosCRUDList, IntranetMedicamentosCRUD } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';
import BlockTitle from '../../componentes/blockTitle/blockTitle';
import BlockCard from '../../componentes/blockCard/blockCard';
import BlockButton from '../../componentes/blockButton/blockButton';

import 'office-ui-fabric-react/dist/css/fabric.css';
import styles from './Convocatorias.module.scss';

import { IConvocatoriasProps, IConvocatoriasModel } from './IConvocatoriasProps';
import { chunk } from '@microsoft/sp-lodash-subset';

import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import Swiper from 'react-id-swiper';
import "swiper/css/swiper.css";

export default class Convocatorias extends React.Component<IConvocatoriasProps, {}> {

  public crud: IntranetMedicamentosCRUD = null;

  public render(): React.ReactElement<IConvocatoriasProps> {
    const { title, subtitle, list, link, context, inDesignMode } = this.props;

    if (list === undefined || list === null || list === '')
      return <h1>Error! [convocatorias] list not found!</h1>;

    if (!context.pageContext)
      return <h1>Error! absoluteUrl not found!</h1>;

    if (!context.spHttpClient)
      return <h1>Error! spHttpClient not found!</h1>;

    return (
      <div className={classnames(['ms-Grid', styles.announcement])}>
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
          <BlockTitle type={'title__center'}>
            <span>{title}</span>  <strong>{subtitle}</strong>
          </BlockTitle>
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
                include="Subt_x00ed_tulo,Resumen,Enlace"
                onEditAction={(data) => {
                  if (this.crud) this.crud.listItemTempData = data;
                  const item = data as IConvocatoriasModel;
                  this.props.onSelectItem(item);
                }}
                onDeleteAction={(data) => {
                  if (this.crud) this.crud.listItemTempData = data;
                  const item = data as IConvocatoriasModel;
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
                          Subt_x00ed_tulo,
                          Resumen,
                          Enlace
                        } = item as IConvocatoriasModel;
                        if (this.crud) {
                          const newData = {
                            Title,
                            Subt_x00ed_tulo,
                            Resumen,
                            Enlace
                          } as IConvocatoriasModel;
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
                  ({ items }) => {
                    const slides: JSX.Element[][] = chunk(items, 4);
                    return (
                      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                        <Swiper>
                          {
                            slides.map((slide, index) => (
                              <div key={index} className="ms-Grid-row slide">
                                {slide}
                              </div>
                            ))
                          }
                        </Swiper>
                      </div>
                    );
                  }
                }>
                {
                  ({ item }) => {
                    const data = item as IConvocatoriasModel;
                    return ((
                      <div className={inDesignMode ? `` : `ms-Grid-col ms-sm12 ms-md12 ms-lg6`}>
                        <BlockCard margin={'2rem'} padding={'2rem'}>
                            <div className={styles.card__title}><h3>{data.Title}</h3></div>
                            {data.Subt_x00ed_tulo && <div className={styles.card__subTitle}><p>{data.Subt_x00ed_tulo}</p></div>}
                            {data.Resumen && <div className={styles.card__description}><p>{data.Resumen}</p></div>}
                            {data.Enlace && <div className={styles.card__cta}><a href={data.Enlace.Url}> VER MÁS </a></div>}
                        </BlockCard>
                      </div>
                    ));
                  }
                }
              </IntranetMedicamentosCRUD>
            )
          }
        </IntranetMedicamentosCRUDList>
        {link && <BlockButton data_url={link} margin={2} >VER TODAS LAS CONVOCATOIAS</BlockButton> }
      </div>
    );
  }
}
