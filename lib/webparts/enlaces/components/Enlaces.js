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
import styles from './Enlaces.module.scss';
import BlockTitle from '../../componentes/blockTitle/blockTitle';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
var Enlaces = /** @class */ (function (_super) {
    __extends(Enlaces, _super);
    function Enlaces() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Enlaces.prototype.render = function () {
        var _a = this.props, title = _a.title, enlaces = _a.enlaces, propertyPane = _a.propertyPane, inDesignMode = _a.inDesignMode, onSelectItem = _a.onSelectItem, onDeleteItem = _a.onDeleteItem, onDuplicateItem = _a.onDuplicateItem;
        return (React.createElement("div", { className: classnames(['ms-Grid', styles.links]), dir: "ltr" },
            React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                React.createElement(BlockTitle, { type: "title__left" },
                    React.createElement("span", null, title)),
                React.createElement("div", { className: "ms-Grid-row" },
                    React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                        React.createElement("div", { className: styles.links__card },
                            React.createElement("ul", null, enlaces.map(function (enlace, index) { return (React.createElement("li", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg6", key: index, style: { paddingTop: inDesignMode ? 36 : 0 } },
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
                                React.createElement("a", { href: enlace.link }, enlace.title))); }))))))));
    };
    return Enlaces;
}(React.Component));
export default Enlaces;
//# sourceMappingURL=Enlaces.js.map