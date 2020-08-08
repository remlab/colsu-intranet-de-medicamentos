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
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/sites";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import BlockTitle from '../../componentes/blockTitle/blockTitle';
import BlockCard from '../../componentes/blockCard/blockCard';
import styles from './DetalleIndicadorExperienciaUsuario.module.scss';
import { FilePicker } from '@pnp/spfx-controls-react/lib/FilePicker';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import Iconos from './Iconos';
var Indicador = function (_a) {
    var index = _a.index, data = _a.data, inDesignMode = _a.inDesignMode, context = _a.context, setImageIndicador = _a.setImageIndicador;
    var _b = data, titulo = _b.titulo, valor = _b.valor, icono = _b.icono, color = _b.color, image = _b.image;
    var _c = React.useState(true), hideDialog = _c[0], setHideDialog = _c[1];
    var _d = React.useState(image), contentImage = _d[0], setContentImage = _d[1];
    var _showDialog = function () {
        setHideDialog(false);
    };
    var _closeDialog = function () {
        setHideDialog(true);
    };
    React.useEffect(function () {
        setImageIndicador(index, contentImage);
    }, [contentImage]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles.cardExperience },
            React.createElement(Iconos, { name: icono, color: color, className: color }),
            React.createElement("div", null,
                React.createElement("h3", { className: styles.card_experience_detail__title }, titulo),
                React.createElement("h4", null, valor)),
            (Boolean(image) || inDesignMode) &&
                React.createElement("a", { onClick: _showDialog, href: "#", className: styles.channels_button },
                    React.createElement("i", { className: "ms-Icon ms-Icon--Add", "aria-hidden": "true" }))),
        React.createElement(Dialog, { hidden: hideDialog, onDismiss: _closeDialog, dialogContentProps: {
                type: DialogType.largeHeader,
                title: titulo
            }, modalProps: {
                isBlocking: false,
                styles: { main: { maxWidth: '80vw !important', maxHeight: '70vh' } },
            } },
            React.createElement("p", null,
                Boolean(contentImage) && React.createElement("img", { className: styles.detalleIndicadorExperienciaUsuario__indicador__image, alt: titulo, src: contentImage }),
                inDesignMode &&
                    React.createElement("div", { className: styles.detalleIndicadorExperienciaUsuario__indicador__filepicker },
                        React.createElement(FilePicker, { accepts: [".gif", ".jpg", ".jpeg", ".bmp", ".dib", ".tif", ".tiff", ".ico", ".png", ".jxr", ".svg"], buttonIcon: "FileImage", buttonLabel: (Boolean(contentImage) ? 'Cambiar' : 'Agregar') + " imagen", onSave: function (pickerImage) {
                                if (!Boolean(pickerImage.fileAbsoluteUrl)) {
                                    pickerImage.downloadFileContent()
                                        .then(function (file) {
                                        var uploadFiles = sp.web.getFolderByServerRelativeUrl(context.pageContext.web.serverRelativeUrl + "/SiteAssets").files;
                                        if (file.size <= 10485760) {
                                            return uploadFiles.add(file.name, file, true);
                                        }
                                        return uploadFiles.addChunked(file.name, file, function (result) { console.log(result); }, true);
                                    })
                                        .then(function (result) {
                                        setContentImage(result.data.ServerRelativeUrl);
                                    })
                                        .catch(function (err) { return console.log(err); });
                                    return;
                                }
                                setContentImage(pickerImage.fileAbsoluteUrl);
                            }, onChanged: function (pickerImage) { return setContentImage(pickerImage.fileAbsoluteUrl); }, context: context }))),
            React.createElement(DialogFooter, null,
                React.createElement(DefaultButton, { onClick: _closeDialog, text: "Ok" })))));
};
var DetalleIndicadorExperienciaUsuario = /** @class */ (function (_super) {
    __extends(DetalleIndicadorExperienciaUsuario, _super);
    function DetalleIndicadorExperienciaUsuario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetalleIndicadorExperienciaUsuario.prototype.render = function () {
        var _a;
        var _b = this.props, title = _b.title, subtitle = _b.subtitle, indicadores = _b.indicadores, type = _b.type, breadcrumb = _b.breadcrumb, propertyPane = _b.propertyPane, inDesignMode = _b.inDesignMode, context = _b.context, setImageIndicador = _b.setImageIndicador, onSelectItem = _b.onSelectItem, onDeleteItem = _b.onDeleteItem, onDuplicateItem = _b.onDuplicateItem;
        return (React.createElement("div", { className: "container" },
            React.createElement("div", { className: classnames('ms-Grid', styles.experience_detail), dir: "ltr" }, (_a = {},
                _a["main"] = (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                        React.createElement("div", { className: "titleSection__sub__center" },
                            React.createElement(BlockTitle, { type: 'title__center' },
                                React.createElement("span", null, title),
                                "  ",
                                React.createElement("strong", null, subtitle))),
                        (Boolean(breadcrumb.link) && Boolean(breadcrumb.title)) &&
                            React.createElement("div", { className: styles.breadCrum },
                                React.createElement("a", { href: breadcrumb.link },
                                    React.createElement("span", null, breadcrumb.title)), " / ",
                                React.createElement("span", null, title),
                                "  ",
                                React.createElement("strong", null, subtitle))),
                    React.createElement("div", { className: "ms-Grid-row" },
                        React.createElement("div", { className: "ms-Grid-col ms-sm0 ms-md0 ms-lg1" }),
                        Boolean(indicadores) && indicadores.map(function (indicador, index) { return (React.createElement("div", { key: index, className: "ms-Grid-col ms-sm12 ms-md12 ms-lg3 ms-xl2" },
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
                            React.createElement(BlockCard, { margin: '2rem 0', padding: '1rem', textAlign: 'center' },
                                React.createElement("h3", { className: styles.card_experience_detail__title }, indicador.titulo),
                                React.createElement(Iconos, { name: indicador.icono, color: indicador.color, className: indicador.color }),
                                React.createElement("h4", { className: styles.card_experience_detail__value }, indicador.valor)))); }),
                        React.createElement("div", { className: "ms-Grid-col ms-sm1 ms-md1 ms-lg1" })))),
                _a["secondary"] = (React.createElement("div", { className: "ms-Grid-row" },
                    React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                        React.createElement("div", { className: "titleSection__sub__left" },
                            React.createElement(BlockTitle, { type: 'title__left' },
                                React.createElement("span", null, title),
                                "  ",
                                React.createElement("strong", null, subtitle)))),
                    React.createElement("div", { className: styles.experience_detail__channels }, Boolean(indicadores) && indicadores.map(function (indicador, index) { return (React.createElement("div", { key: index, className: "ms-Grid-col ms-sm12 ms-md6 ms-lg4 ms-xl4" },
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
                        React.createElement(Indicador, { index: index, data: indicador, context: context, inDesignMode: inDesignMode, setImageIndicador: setImageIndicador }))); })))),
                _a)[type])));
    };
    return DetalleIndicadorExperienciaUsuario;
}(React.Component));
export default DetalleIndicadorExperienciaUsuario;
//# sourceMappingURL=DetalleIndicadorExperienciaUsuario.js.map