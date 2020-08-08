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
import styles from './ExplorarAreas.module.scss';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import BlockTitle from '../../componentes/blockTitle/blockTitle';
import Iconos from './Iconos';
var ExplorarAreas = /** @class */ (function (_super) {
    __extends(ExplorarAreas, _super);
    function ExplorarAreas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExplorarAreas.prototype.render = function () {
        var _a = this.props, title = _a.title, subtitle = _a.subtitle, items = _a.items, propertyPane = _a.propertyPane, inDesignMode = _a.inDesignMode, onSelectItem = _a.onSelectItem, onDeleteItem = _a.onDeleteItem, onDuplicateItem = _a.onDuplicateItem;
        return (React.createElement("div", { className: styles.explorarAreas },
            React.createElement(BlockTitle, { type: 'title__left' },
                React.createElement("span", null,
                    title,
                    " ",
                    React.createElement("strong", null, subtitle))),
            React.createElement("div", { className: "ms-Grid", dir: "ltr" }, items.map(function (item, index) { return (React.createElement("div", { className: classnames(['ms-Grid-col ms-sm12 ms-md6 ms-lg4 ms-xl3', styles.explorarAreas__link__container]), style: { paddingTop: inDesignMode ? 36 : 0 } },
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
                React.createElement("a", { key: index, href: item.link, className: styles.explorarAreas__link },
                    React.createElement("p", { className: styles.explorarAreas__text, dangerouslySetInnerHTML: { __html: item.title } }),
                    React.createElement("div", { className: styles.explorarAreas__icon, style: { backgroundColor: item.color } },
                        React.createElement(Iconos, { name: item.icon }))))); }))));
    };
    return ExplorarAreas;
}(React.Component));
export default ExplorarAreas;
//# sourceMappingURL=ExplorarAreas.js.map