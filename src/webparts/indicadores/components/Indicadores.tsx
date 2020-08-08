import * as React from 'react';
import styles from './Indicadores.module.scss';
import { IIndicadoresProps, IIndicadoresModel } from './IIndicadoresProps';

import { chunk } from '@microsoft/sp-lodash-subset';

import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import { IntlProvider, FormattedNumber } from 'react-intl';
import Carousel from 'nuka-carousel';

import { IntranetMedicamentosCRUDList, IntranetMedicamentosCRUD } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';

const IndicadoresSlide = ({ slide }) => (<div className={styles.indicators_content__metrics__row}>{slide}</div>);

class IndicadoresCarousel extends React.Component<{ items: JSX.Element[]; }> {
  public render() {
    const { items } = this.props;
    const slides : JSX.Element[][] = chunk(items, 4);
    return (
      <Carousel
        defaultControlsConfig={{
          nextButtonStyle: {
            display: 'none',
          },
          prevButtonStyle: {
            display: 'none',
          },
          pagingDotsStyle: {
            fill: '#26b0dc'
          },
        }}
        slidesToShow={1}
        cellSpacing={10}
        heightMode='max'
        wrapAround>
          {
            slides.map((slide, index) => <IndicadoresSlide key={index} slide={slide} />)
          }
      </Carousel>
    );
  }
}

class Indicador extends React.Component<{ data: IIndicadoresModel }> {
  get formatedValue(): JSX.Element {
    const { Formato, Valor } = this.props.data;
    const value = parseFloat(Valor);
    switch (Formato) {
      case "MONEDA":
        return <FormattedNumber
          value={value}
          style="currency"
          currency="COP"
          currencySign="standard"
          currencyDisplay="narrowSymbol"
          minimumFractionDigits={0} />;
      case "PORCENTAJE":
        return <FormattedNumber value={value} style="percent" />;
    }
  }
  public render() {
    const { data } = this.props;
    return (
      <div className={styles.indicators_content__metrics__metric}>
        <p className={styles.metric__description}>{data.Title}</p>
        <p className={styles.metric__value}>{this.formatedValue}</p>
      </div>
    );
  }
}
export default class Indicadores extends React.Component<IIndicadoresProps, {}> {

  public crud: IntranetMedicamentosCRUD = null;

  public render(): React.ReactElement<IIndicadoresProps> {
    const { list, context } = this.props;

    if (list === undefined || list === null || list === '')
      return <h1>Error! [indicadores] list not found!</h1>;

    if (!context.pageContext)
      return <h1>Error! absoluteUrl not found!</h1>;

    if (!context.spHttpClient)
      return <h1>Error! spHttpClient not found!</h1>;

    return (
      <IntlProvider locale="es-CO">
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
                include="Valor,Formato"
                onEditAction={(data) => {
                  if (this.crud) this.crud.listItemTempData = data;
                  const item = data as IIndicadoresModel;
                  this.props.onSelectItem(item);
                }}
                onDeleteAction={(data) => {
                  if (this.crud) this.crud.listItemTempData = data;
                  const item = data as IIndicadoresModel;
                  this.props.onSelectItem(item);
                }}
                actions={({ item, handleCreate }) => {
                  return (<>
                    <TooltipHost
                      id="tooltip_new"
                      content="Agregar indicador"
                      className="ToolbarButtonTooltip"
                      directionalHint={DirectionalHint.topCenter}>
                      <IconButton onClick={() => {
                        const {
                          Title,
                          Valor,
                          Formato
                        } = item as IIndicadoresModel;
                        if (this.crud) {
                          const newData = {
                            Title: `${Title} (copia)`,
                            Valor,
                            Formato
                          } as IIndicadoresModel;
                          this.crud.listItemTempData = newData;
                          handleCreate();
                          if (this.props.context.propertyPane.isPropertyPaneOpen()) this.props.context.propertyPane.close();
                        }
                      }} iconProps={{ iconName: "Add" }} title="Agregar indicador" ariaLabel="Agregar indicador" aria-describedby="tooltip_new" className="ToolbarButton CanvasControlToolbar-item" />
                    </TooltipHost>
                  </>
                  );
                }}
                ParentComponent={
                  ({ items, data }) => {
                    return (
                      <div className={styles.indicadores}>
                        <div className={styles.container}>
                          <div className={styles.row}>
                            <div className={styles.column["ms-lgPush1"]}>
                              <div className={styles.section_indicators}>
                                <div className={styles.indicators_header}>
                                  <h2> {this.props.title} <strong> {this.props.subtitle} </strong> </h2>
                                </div>
                                <div className={styles.indicators_content}>                                
                                  <div className={styles.indicators_content__metrics}>                                    
                                    <IndicadoresCarousel items={items} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                }>
                {
                  ({ item }) => {
                    const data = item as IIndicadoresModel;
                    return ((<Indicador data={data} />));
                  }
                }
              </IntranetMedicamentosCRUD>
            )
          }
        </IntranetMedicamentosCRUDList>
      </IntlProvider>
    );
  }
}
