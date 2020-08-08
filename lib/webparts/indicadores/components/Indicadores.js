var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './Indicadores.module.scss';
import { chunk } from '@microsoft/sp-lodash-subset';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import { IntlProvider, FormattedNumber } from 'react-intl';
import Carousel from 'nuka-carousel';
import { IntranetMedicamentosCRUDList, IntranetMedicamentosCRUD } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';
var IndicadoresSlide = function (_a) {
    var slide = _a.slide;
    return (React.createElement("div", { className: styles.indicators_content__metrics__row }, slide));
};
var IndicadoresCarousel = /** @class */ (function (_super) {
    __extends(IndicadoresCarousel, _super);
    function IndicadoresCarousel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndicadoresCarousel.prototype.render = function () {
        var items = this.props.items;
        var slides = chunk(items, 4);
        return (React.createElement(Carousel, { defaultControlsConfig: {
                nextButtonStyle: {
                    display: 'none',
                },
                prevButtonStyle: {
                    display: 'none',
                },
                pagingDotsStyle: {
                    fill: '#26b0dc'
                },
            }, slidesToShow: 1, cellSpacing: 10, heightMode: 'max', wrapAround: true }, slides.map(function (slide, index) { return React.createElement(IndicadoresSlide, { key: index, slide: slide }); })));
    };
    return IndicadoresCarousel;
}(React.Component));
var Indicador = /** @class */ (function (_super) {
    __extends(Indicador, _super);
    function Indicador() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Indicador.prototype, "formatedValue", {
        get: function () {
            var _a = this.props.data, Formato = _a.Formato, Valor = _a.Valor;
            var value = parseFloat(Valor);
            switch (Formato) {
                case "MONEDA":
                    return React.createElement(FormattedNumber, { value: value, style: "currency", currency: "COP", currencySign: "standard", currencyDisplay: "narrowSymbol", minimumFractionDigits: 0 });
                case "PORCENTAJE":
                    return React.createElement(FormattedNumber, { value: value, style: "percent" });
            }
        },
        enumerable: true,
        configurable: true
    });
    Indicador.prototype.render = function () {
        var data = this.props.data;
        return (React.createElement("div", { className: styles.indicators_content__metrics__metric },
            React.createElement("p", { className: styles.metric__description }, data.Title),
            React.createElement("p", { className: styles.metric__value }, this.formatedValue)));
    };
    return Indicador;
}(React.Component));
var Indicadores = /** @class */ (function (_super) {
    __extends(Indicadores, _super);
    function Indicadores() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.crud = null;
        return _this;
    }
    Indicadores.prototype.render = function () {
        var _this = this;
        var _a = this.props, list = _a.list, context = _a.context;
        if (list === undefined || list === null || list === '')
            return React.createElement("h1", null, "Error! [indicadores] list not found!");
        if (!context.pageContext)
            return React.createElement("h1", null, "Error! absoluteUrl not found!");
        if (!context.spHttpClient)
            return React.createElement("h1", null, "Error! spHttpClient not found!");
        return (React.createElement(IntlProvider, { locale: "es-CO" },
            React.createElement(IntranetMedicamentosCRUDList, { listId: list, spHttpClient: context.spHttpClient, siteUrl: context.pageContext.web.absoluteUrl }, function (listName) { return (React.createElement(IntranetMedicamentosCRUD, { propertyPane: _this.props.context.propertyPane, inDesignMode: _this.props.inDesignMode, ref: function (el) { return _this.crud = el; }, listName: listName, spHttpClient: context.spHttpClient, siteUrl: context.pageContext.web.absoluteUrl, include: "Valor,Formato", onEditAction: function (data) {
                    if (_this.crud)
                        _this.crud.listItemTempData = data;
                    var item = data;
                    _this.props.onSelectItem(item);
                }, onDeleteAction: function (data) {
                    if (_this.crud)
                        _this.crud.listItemTempData = data;
                    var item = data;
                    _this.props.onSelectItem(item);
                }, actions: function (_a) {
                    var item = _a.item, handleCreate = _a.handleCreate;
                    return (React.createElement(React.Fragment, null,
                        React.createElement(TooltipHost, { id: "tooltip_new", content: "Agregar indicador", className: "ToolbarButtonTooltip", directionalHint: DirectionalHint.topCenter },
                            React.createElement(IconButton, { onClick: function () {
                                    var _a = item, Title = _a.Title, Valor = _a.Valor, Formato = _a.Formato;
                                    if (_this.crud) {
                                        var newData = {
                                            Title: Title + " (copia)",
                                            Valor: Valor,
                                            Formato: Formato
                                        };
                                        _this.crud.listItemTempData = newData;
                                        handleCreate();
                                        if (_this.props.context.propertyPane.isPropertyPaneOpen())
                                            _this.props.context.propertyPane.close();
                                    }
                                }, iconProps: { iconName: "Add" }, title: "Agregar indicador", ariaLabel: "Agregar indicador", "aria-describedby": "tooltip_new", className: "ToolbarButton CanvasControlToolbar-item" }))));
                }, ParentComponent: function (_a) {
                    var items = _a.items, data = _a.data;
                    return (React.createElement("div", { className: styles.indicadores },
                        React.createElement("div", { className: styles.container },
                            React.createElement("div", { className: styles.row },
                                React.createElement("div", { className: styles.column["ms-lgPush1"] },
                                    React.createElement("div", { className: styles.section_indicators },
                                        React.createElement("div", { className: styles.indicators_header },
                                            React.createElement("h2", null,
                                                " ",
                                                _this.props.title,
                                                " ",
                                                React.createElement("strong", null,
                                                    " ",
                                                    _this.props.subtitle,
                                                    " "),
                                                " ")),
                                        React.createElement("div", { className: styles.indicators_content },
                                            React.createElement("div", { className: styles.indicators_content__metrics },
                                                React.createElement(IndicadoresCarousel, { items: items })))))))));
                } }, function (_a) {
                var item = _a.item;
                var data = item;
                return ((React.createElement(Indicador, { data: data })));
            })); })));
    };
    return Indicadores;
}(React.Component));
export default Indicadores;
//# sourceMappingURL=Indicadores.js.map