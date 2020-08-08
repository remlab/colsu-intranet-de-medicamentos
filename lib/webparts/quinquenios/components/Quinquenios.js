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
var _this = this;
import * as React from 'react';
import classnames from 'classnames';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/sites";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import styles from './Quinquenios.module.scss';
import BlockTitle from '../../componentes/blockTitle/blockTitle';
import { FilePicker } from '@pnp/spfx-controls-react/lib/FilePicker';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import { IntranetMedicamentosCRUDList, IntranetMedicamentosCRUD } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';
import { chunk } from '@microsoft/sp-lodash-subset';
var SignComponent = function (_a) {
    var data = _a.data, inDesignMode = _a.inDesignMode, onSelectImage = _a.onSelectImage, context = _a.context;
    var _b = React.useState(data.image), selectedImage = _b[0], setSelectedImage = _b[1];
    React.useEffect(function () {
        onSelectImage(selectedImage);
    }, [selectedImage]);
    return (React.createElement("div", { className: "ms-Grid-row" },
        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
            React.createElement("div", { className: styles.sign },
                React.createElement("img", { src: selectedImage, alt: "" }),
                inDesignMode && (React.createElement("div", { className: styles.bannerAction },
                    React.createElement(FilePicker, { accepts: [".gif", ".jpg", ".jpeg", ".bmp", ".dib", ".tif", ".tiff", ".ico", ".png", ".jxr", ".svg"], buttonIcon: "FileImage", buttonLabel: selectedImage ? "Cambiar imagen" : "Agregar imagen", onSave: function (pImage) {
                            if (!Boolean(pImage.fileAbsoluteUrl)) {
                                pImage.downloadFileContent()
                                    .then(function (file) {
                                    var uploadFiles = sp.web.getFolderByServerRelativeUrl(_this.props.context.pageContext.web.serverRelativeUrl + "/SiteAssets").files;
                                    if (file.size <= 10485760) {
                                        return uploadFiles.add(file.name, file, true);
                                    }
                                    return uploadFiles.addChunked(file.name, file, function (result) { console.log(result); }, true);
                                })
                                    .then(function (result) {
                                    setSelectedImage(result.data.ServerRelativeUrl);
                                })
                                    .catch(function (err) { return console.log(err); });
                                return;
                            }
                            setSelectedImage(pImage.fileAbsoluteUrl);
                        }, onChanged: function (pImage) { setSelectedImage(pImage.fileAbsoluteUrl); }, context: context }))),
                React.createElement("div", { dangerouslySetInnerHTML: { __html: data.text } })))));
};
var Quinquenios = /** @class */ (function (_super) {
    __extends(Quinquenios, _super);
    function Quinquenios() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.crud = null;
        return _this;
    }
    Quinquenios.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, subtitle = _a.subtitle, list = _a.list, inDesignMode = _a.inDesignMode, context = _a.context, text1 = _a.text1, text2 = _a.text2, sign = _a.sign, onSelectSignImage = _a.onSelectSignImage, onSelectItem = _a.onSelectItem;
        if (list === undefined || list === null || list === '')
            return React.createElement("h1", null, "Error! [quinquenios] list not found!");
        if (!context.pageContext)
            return React.createElement("h1", null, "Error! absoluteUrl not found!");
        if (!context.spHttpClient)
            return React.createElement("h1", null, "Error! spHttpClient not found!");
        return (React.createElement("div", { className: classnames(["ms-Grid", styles.quinquenniums]) },
            React.createElement("div", { className: classnames(["ms-Grid", styles.culture]), dir: "ltr" },
                React.createElement(BlockTitle, { type: 'title__center' },
                    React.createElement("span", null, title),
                    "  ",
                    React.createElement("strong", null, subtitle)),
                React.createElement("div", { className: classnames(["ms-Grid-row", styles.head]) },
                    React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg6", dangerouslySetInnerHTML: { __html: text1 } }),
                    React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg6", dangerouslySetInnerHTML: { __html: text2 } })),
                React.createElement(IntranetMedicamentosCRUDList, { listId: list, spHttpClient: context.spHttpClient, siteUrl: context.pageContext.web.absoluteUrl }, function (listName) { return (React.createElement(IntranetMedicamentosCRUD, { propertyPane: context.propertyPane, inDesignMode: inDesignMode, ref: function (el) { return _this.crud = el; }, listName: listName, spHttpClient: context.spHttpClient, siteUrl: context.pageContext.web.absoluteUrl, include: "A_x00f1_os,Cargo,Yammer,Foto", onEditAction: function (data) {
                        if (_this.crud)
                            _this.crud.listItemTempData = data;
                        onSelectItem(data);
                    }, onDeleteAction: function (data) {
                        if (_this.crud)
                            _this.crud.listItemTempData = data;
                        onSelectItem(data);
                    }, actions: function (_a) {
                        var item = _a.item, handleCreate = _a.handleCreate;
                        return (React.createElement(React.Fragment, null,
                            React.createElement(TooltipHost, { id: "tooltip_duplicate", content: "Duplicar", className: "ToolbarButtonTooltip", directionalHint: DirectionalHint.topCenter },
                                React.createElement(IconButton, { onClick: function () {
                                        var _a = item, Title = _a.Title, Cargo = _a.Cargo, A_x00f1_os = _a.A_x00f1_os, Yammer = _a.Yammer, Foto = _a.Foto;
                                        if (_this.crud) {
                                            var newData = {
                                                Title: Title,
                                                Cargo: Cargo,
                                                A_x00f1_os: A_x00f1_os,
                                                Yammer: Yammer,
                                                Foto: Foto
                                            };
                                            _this.crud.listItemTempData = newData;
                                            handleCreate();
                                            onSelectItem(newData);
                                            if (context.propertyPane.isPropertyPaneOpen())
                                                context.propertyPane.close();
                                        }
                                    }, iconProps: { iconName: "Page" }, title: "Duplicar", ariaLabel: "Duplicar", "aria-describedby": "tooltip_duplicate", className: "ToolbarButton CanvasControlToolbar-item" }))));
                    }, ParentComponent: function (_a) {
                        var items = _a.items;
                        if (items.length === 0)
                            return React.createElement("h1", null, status);
                        var rows = chunk(items, 4);
                        return (React.createElement(React.Fragment, null, rows.map(function (row, pindex) { return (React.createElement("div", { key: pindex, className: "ms-Grid-row" }, row.map(function (cell, index) { return (React.createElement("div", { key: index, className: "ms-Grid-col ms-sm12 ms-md12 ms-lg4 ms-xl3" }, cell)); }))); })));
                    } }, function (_a) {
                    var item = _a.item;
                    var data = item;
                    return (React.createElement("div", { className: styles.cardUser, style: { backgroundImage: "url(" + data.Foto.Url + ")", backgroundPosition: 'top center', backgroundSize: 'cover' } },
                        React.createElement("div", { className: styles.cardUser__date },
                            React.createElement("h3", null, data.A_x00f1_os),
                            React.createElement("p", null, "a\u00F1os")),
                        React.createElement("div", { className: styles.cardUser__description },
                            React.createElement("h3", null, data.Title),
                            React.createElement("p", null, data.Cargo)),
                        React.createElement("div", { className: styles.cardUser__iconSocial }, data.Yammer && React.createElement("a", { href: data.Yammer.Url },
                            React.createElement("img", { src: "http://aremlab.com/media/colsubsidio/gestion/quinquenios/yammer.png", alt: "" })))));
                })); }),
                React.createElement(SignComponent, { data: sign, inDesignMode: inDesignMode, context: context, onSelectImage: onSelectSignImage }))));
    };
    return Quinquenios;
}(React.Component));
export default Quinquenios;
//# sourceMappingURL=Quinquenios.js.map