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
import styles from './IndicadoresExperienciaUsuario.module.scss';
import BlockTitle from '../../componentes/blockTitle/blockTitle';
import BlockCard from '../../componentes/blockCard/blockCard';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
var IndicadoresExperienciaUsuario = /** @class */ (function (_super) {
    __extends(IndicadoresExperienciaUsuario, _super);
    function IndicadoresExperienciaUsuario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndicadoresExperienciaUsuario.prototype.render = function () {
        var _a = this.props, title = _a.title, subtitle = _a.subtitle, indicadores = _a.indicadores, propertyPane = _a.propertyPane, inDesignMode = _a.inDesignMode, onSelectItem = _a.onSelectItem, onDeleteItem = _a.onDeleteItem, onDuplicateItem = _a.onDuplicateItem;
        var hexBackground = function (hex) {
            var c;
            if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
                c = hex.substring(1).split('');
                if (c.length == 3) {
                    c = [c[0], c[0], c[1], c[1], c[2], c[2]];
                }
                c = '0x' + c.join('');
                return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',0.3)';
            }
            throw new Error('Bad Hex');
        };
        var hexColor = function (hex) {
            var c;
            if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
                c = hex.substring(1).split('');
                if (c.length == 3) {
                    c = [c[0], c[0], c[1], c[1], c[2], c[2]];
                }
                c = '0x' + c.join('');
                return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)';
            }
            throw new Error('Bad Hex');
        };
        return (React.createElement("div", { className: classnames(['ms-Grid', styles.experience]), dir: "ltr" },
            React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                React.createElement(BlockTitle, { type: 'title__center' },
                    React.createElement("span", null, title),
                    "  ",
                    React.createElement("strong", null, subtitle))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "experience__indicators" }, indicadores.map(function (data, index) { return (React.createElement("div", { key: index, className: "ms-Grid-col ms-sm12 ms-md6 ms-lg6 ms-xl4" },
                    inDesignMode && (React.createElement(Stack, { horizontal: true, styles: {
                            root: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                zIndex: 1,
                                transition: 'all 0.3s ease 0s'
                            }
                        } },
                        React.createElement(TooltipHost, { id: "tooltip_edit", content: "Editar item", className: "ToolbarButtonTooltip", directionalHint: DirectionalHint.topCenter },
                            React.createElement(IconButton, { onClick: function () {
                                    onSelectItem(index);
                                    if (propertyPane.isPropertyPaneOpen()) {
                                        propertyPane.close();
                                    }
                                    else {
                                        propertyPane.open();
                                    }
                                }, iconProps: { iconName: "Edit" }, title: "Editar item", ariaLabel: "Editar item", "aria-describedby": "tooltip_edit", className: "ToolbarButton CanvasControlToolbar-item" })),
                        React.createElement(TooltipHost, { id: "tooltip_delete", content: "Eliminar item", className: "ToolbarButtonTooltip", directionalHint: DirectionalHint.topCenter },
                            React.createElement(IconButton, { onClick: function () {
                                    onDeleteItem(index);
                                    if (propertyPane.isPropertyPaneOpen())
                                        propertyPane.close();
                                }, className: "ToolbarButton CanvasControlToolbar-item", iconProps: { iconName: "Delete" }, title: "Eliminar", ariaLabel: "Eliminar", "aria-describedby": "tooltip_delete" })),
                        React.createElement(TooltipHost, { id: "tooltip_duplicate", content: "Duplicar item", className: "ToolbarButtonTooltip", directionalHint: DirectionalHint.topCenter },
                            React.createElement(IconButton, { onClick: function () {
                                    onDuplicateItem(index);
                                    if (propertyPane.isPropertyPaneOpen())
                                        propertyPane.close();
                                }, className: "ToolbarButton CanvasControlToolbar-item", iconProps: { iconName: "Page" }, title: "Duplicar", ariaLabel: "Duplicar", "aria-describedby": "tooltip_duplicate" })))),
                    React.createElement(BlockCard, { margin: '2rem', padding: '2rem' },
                        React.createElement("h3", { className: styles.card_experience__title }, data.titulo),
                        React.createElement("h4", { className: styles.card_experience__indicator, style: { backgroundColor: data.color } }, data.valor),
                        React.createElement("div", { className: styles.card_experience__polls },
                            React.createElement("div", { className: "ms-Grid-row" },
                                React.createElement("div", { className: classnames(['ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-xl6', styles.flex_style]) },
                                    React.createElement("i", { className: "ms-Icon ms-Icon--BarChart4", "aria-hidden": "true", style: { backgroundColor: hexBackground(data.color), color: hexColor(data.color) } }),
                                    React.createElement("div", { className: styles.poll_content },
                                        React.createElement("h4", { className: styles.poll_content__title, dangerouslySetInnerHTML: { __html: data.opcionA.titulo } }),
                                        React.createElement("p", { className: styles.poll_content__value }, data.opcionA.valor))),
                                React.createElement("div", { className: classnames(['ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-xl6', styles.flex_style]) },
                                    React.createElement("i", { className: "ms-Icon ms-Icon--BarChart4", "aria-hidden": "true", style: { backgroundColor: hexBackground(data.color), color: hexColor(data.color) } }),
                                    React.createElement("div", { className: styles.poll_content },
                                        React.createElement("h4", { className: styles.poll_content__title, dangerouslySetInnerHTML: { __html: data.opcionB.titulo } }),
                                        React.createElement("p", { className: styles.poll_content__value }, data.opcionB.valor))))),
                        React.createElement("a", { href: data.enlace, className: styles.card_experience__button }, "AMPLIAR INFORMACI\u00D3N")))); })))));
    };
    return IndicadoresExperienciaUsuario;
}(React.Component));
export default IndicadoresExperienciaUsuario;
//# sourceMappingURL=IndicadoresExperienciaUsuario.js.map