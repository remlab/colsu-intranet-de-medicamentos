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
import classnames from 'classnames';
import { IntranetMedicamentosCRUDList, IntranetMedicamentosCRUD } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';
import BlockTitle from '../../componentes/blockTitle/blockTitle';
import BlockCard from '../../componentes/blockCard/blockCard';
import BlockButton from '../../componentes/blockButton/blockButton';
import 'office-ui-fabric-react/dist/css/fabric.css';
import styles from './Convocatorias.module.scss';
import { chunk } from '@microsoft/sp-lodash-subset';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import Swiper from 'react-id-swiper';
import "swiper/css/swiper.css";
var Convocatorias = /** @class */ (function (_super) {
    __extends(Convocatorias, _super);
    function Convocatorias() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.crud = null;
        return _this;
    }
    Convocatorias.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, subtitle = _a.subtitle, list = _a.list, link = _a.link, context = _a.context, inDesignMode = _a.inDesignMode;
        if (list === undefined || list === null || list === '')
            return React.createElement("h1", null, "Error! [convocatorias] list not found!");
        if (!context.pageContext)
            return React.createElement("h1", null, "Error! absoluteUrl not found!");
        if (!context.spHttpClient)
            return React.createElement("h1", null, "Error! spHttpClient not found!");
        return (React.createElement("div", { className: classnames(['ms-Grid', styles.announcement]) },
            React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                React.createElement(BlockTitle, { type: 'title__center' },
                    React.createElement("span", null, title),
                    "  ",
                    React.createElement("strong", null, subtitle))),
            React.createElement(IntranetMedicamentosCRUDList, { listId: list, spHttpClient: context.spHttpClient, siteUrl: context.pageContext.web.absoluteUrl }, function (listName) { return (React.createElement(IntranetMedicamentosCRUD, { propertyPane: context.propertyPane, inDesignMode: inDesignMode, ref: function (el) { return _this.crud = el; }, listName: listName, spHttpClient: context.spHttpClient, siteUrl: context.pageContext.web.absoluteUrl, include: "Subt_x00ed_tulo,Resumen,Enlace", onEditAction: function (data) {
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
                        React.createElement(TooltipHost, { id: "tooltip_duplicate", content: "Duplicar item", className: "ToolbarButtonTooltip", directionalHint: DirectionalHint.topCenter },
                            React.createElement(IconButton, { onClick: function () {
                                    var _a = item, Title = _a.Title, Subt_x00ed_tulo = _a.Subt_x00ed_tulo, Resumen = _a.Resumen, Enlace = _a.Enlace;
                                    if (_this.crud) {
                                        var newData = {
                                            Title: Title,
                                            Subt_x00ed_tulo: Subt_x00ed_tulo,
                                            Resumen: Resumen,
                                            Enlace: Enlace
                                        };
                                        _this.crud.listItemTempData = newData;
                                        handleCreate();
                                        if (_this.props.context.propertyPane.isPropertyPaneOpen())
                                            _this.props.context.propertyPane.close();
                                    }
                                }, iconProps: { iconName: "Page" }, title: "Duplicar item", ariaLabel: "Duplicar item", "aria-describedby": "tooltip_duplicate", className: "ToolbarButton CanvasControlToolbar-item" }))));
                }, ParentComponent: function (_a) {
                    var items = _a.items;
                    var slides = chunk(items, 4);
                    return (React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                        React.createElement(Swiper, null, slides.map(function (slide, index) { return (React.createElement("div", { key: index, className: "ms-Grid-row slide" }, slide)); }))));
                } }, function (_a) {
                var item = _a.item;
                var data = item;
                return ((React.createElement("div", { className: inDesignMode ? "" : "ms-Grid-col ms-sm12 ms-md12 ms-lg6" },
                    React.createElement(BlockCard, { margin: '2rem', padding: '2rem' },
                        React.createElement("div", { className: styles.card__title },
                            React.createElement("h3", null, data.Title)),
                        data.Subt_x00ed_tulo && React.createElement("div", { className: styles.card__subTitle },
                            React.createElement("p", null, data.Subt_x00ed_tulo)),
                        data.Resumen && React.createElement("div", { className: styles.card__description },
                            React.createElement("p", null, data.Resumen)),
                        data.Enlace && React.createElement("div", { className: styles.card__cta },
                            React.createElement("a", { href: data.Enlace.Url }, " VER M\u00C1S "))))));
            })); }),
            link && React.createElement(BlockButton, { data_url: link, margin: 2 }, "VER TODAS LAS CONVOCATOIAS")));
    };
    return Convocatorias;
}(React.Component));
export default Convocatorias;
//# sourceMappingURL=Convocatorias.js.map