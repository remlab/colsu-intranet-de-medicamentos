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
import styles from './MediosPago.module.scss';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
var MediosPago = /** @class */ (function (_super) {
    __extends(MediosPago, _super);
    function MediosPago() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediosPago.prototype.render = function () {
        var _a = this.props, title = _a.title, subtitle = _a.subtitle, footerText = _a.footerText, paymentMethods = _a.paymentMethods, propertyPane = _a.propertyPane, inDesignMode = _a.inDesignMode, onSelectItem = _a.onSelectItem, onDeleteItem = _a.onDeleteItem, onDuplicateItem = _a.onDuplicateItem;
        var getColorClass = function (index) {
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
        return (React.createElement("div", { className: styles.mediosPago },
            React.createElement("div", { className: styles.mediosPago__header },
                React.createElement("h2", null,
                    title,
                    " ",
                    React.createElement("strong", null, subtitle))),
            React.createElement("div", { className: styles.mediosPago__content }, paymentMethods.map(function (paymentMethod, index) { return (React.createElement("div", { className: styles.mediosPago__content__paymentMethod, style: { paddingTop: inDesignMode ? 36 : 0 }, key: index },
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
                React.createElement("a", { target: "_blank", href: paymentMethod.link || '#', style: { textDecoration: 'none', color: '#000000' } },
                    React.createElement("div", { className: classnames([styles.mediosPago__content__paymentMethod__Image, getColorClass(index)]) },
                        React.createElement("img", { src: paymentMethod.image, alt: "" })),
                    React.createElement("div", { className: styles.mediosPago__content__paymentMethod__titleLine },
                        React.createElement("div", { className: styles.mediosPago__content__paymentMethod__title, dangerouslySetInnerHTML: { __html: paymentMethod.title } }),
                        paymentMethod.applyAttention && React.createElement("span", { className: styles.mediosPago__content__paymentMethod__titleLine__asterisk }, "*")),
                    paymentMethod.subtitle && React.createElement("div", { className: styles.mediosPago__content__paymentMethod__subtitle, dangerouslySetInnerHTML: { __html: paymentMethod.subtitle } })))); })),
            React.createElement("div", { className: styles.mediosPago__footer },
                React.createElement("span", { className: styles.mediosPago__footer__asterisk }, "*"),
                React.createElement("div", { className: styles.mediosPago__footer__footerText, dangerouslySetInnerHTML: { __html: footerText } }))));
    };
    return MediosPago;
}(React.Component));
export default MediosPago;
//# sourceMappingURL=MediosPago.js.map