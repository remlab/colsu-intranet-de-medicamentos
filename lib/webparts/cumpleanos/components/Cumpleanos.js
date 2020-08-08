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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import classnames from 'classnames';
import * as moment from 'moment';
import 'moment/locale/es';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/sites";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import { FilePicker } from '@pnp/spfx-controls-react/lib/FilePicker';
import { IntranetMedicamentosCRUDList, IntranetMedicamentosCRUD } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import { chunk } from '@microsoft/sp-lodash-subset';
import Swiper from 'react-id-swiper';
import styles from './Cumpleanos.module.scss';
import BlockTitle from '../../componentes/blockTitle/blockTitle';
var MediaImage = function (_a) {
    var inDesignMode = _a.inDesignMode, image = _a.image, context = _a.context, onSelectImage = _a.onSelectImage;
    var _b = React.useState(image), selectedImage = _b[0], setSelectedImage = _b[1];
    React.useEffect(function () {
        onSelectImage(selectedImage);
    }, [selectedImage]);
    return (React.createElement("div", { className: styles.media },
        React.createElement("img", { src: selectedImage, alt: "" }),
        inDesignMode && (React.createElement("div", { className: styles.bannerAction },
            React.createElement(FilePicker, { accepts: [".gif", ".jpg", ".jpeg", ".bmp", ".dib", ".tif", ".tiff", ".ico", ".png", ".jxr", ".svg"], buttonIcon: "FileImage", buttonLabel: selectedImage ? "Cambiar imagen" : "Agregar imagen", onSave: function (pImage) {
                    if (!Boolean(pImage.fileAbsoluteUrl)) {
                        pImage.downloadFileContent()
                            .then(function (file) {
                            var uploadFiles = sp.web.getFolderByServerRelativeUrl(context.pageContext.web.serverRelativeUrl + "/SiteAssets").files;
                            if (file.size <= 10485760) {
                                return uploadFiles.add(file.name, file, true);
                            }
                            return uploadFiles.addChunked(file.name, file, function (data) { console.log(data); }, true);
                        })
                            .then(function (result) {
                            setSelectedImage(result.data.ServerRelativeUrl);
                        })
                            .catch(function (err) { return console.log(err); });
                        return;
                    }
                    setSelectedImage(pImage.fileAbsoluteUrl);
                }, onChanged: function (pImage) { setSelectedImage(pImage.fileAbsoluteUrl); }, context: context })))));
};
var Cumpleanos = /** @class */ (function (_super) {
    __extends(Cumpleanos, _super);
    function Cumpleanos() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.crud = null;
        return _this;
    }
    Cumpleanos.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, subtitle = _a.subtitle, image = _a.image, list = _a.list, inDesignMode = _a.inDesignMode, context = _a.context, onSelectImage = _a.onSelectImage, onSelectItem = _a.onSelectItem;
        if (list === undefined || list === null || list === '')
            return React.createElement("h1", null, "Error! [birthday] list not found!");
        if (!context.pageContext)
            return React.createElement("h1", null, "Error! absoluteUrl not found!");
        if (!context.spHttpClient)
            return React.createElement("h1", null, "Error! spHttpClient not found!");
        return (React.createElement("div", { className: classnames(["ms-Grid", styles.birthday]), dir: "ltr" },
            React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                React.createElement(BlockTitle, { type: 'title__center' },
                    React.createElement("span", null, title),
                    "  ",
                    React.createElement("strong", null, subtitle))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-xl5" },
                    React.createElement(IntranetMedicamentosCRUDList, { listId: list, spHttpClient: context.spHttpClient, siteUrl: context.pageContext.web.absoluteUrl }, function (listName) { return (React.createElement(IntranetMedicamentosCRUD, { propertyPane: context.propertyPane, inDesignMode: inDesignMode, ref: function (el) { return _this.crud = el; }, listName: listName, spHttpClient: context.spHttpClient, siteUrl: context.pageContext.web.absoluteUrl, include: "Fecha,Cargo,Yammer,Modified", 
                        // filter={`month(Fecha) eq ${new Date().getMonth()}`}
                        onEditAction: function (data) {
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
                                            var _a = item, Title = _a.Title, Fecha = _a.Fecha, Cargo = _a.Cargo, Yammer = _a.Yammer;
                                            if (_this.crud) {
                                                var newData = {
                                                    Title: Title,
                                                    Fecha: Fecha,
                                                    Cargo: Cargo,
                                                    Yammer: Yammer
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
                            var slides = chunk(items, 5);
                            return (React.createElement(Swiper, __assign({}, {
                                pagination: {
                                    el: '.swiper-pagination',
                                    type: 'bullets',
                                    clickable: true
                                },
                            }), slides.map(function (slide, pindex) { return (React.createElement("div", { key: pindex, className: styles.calendar }, slide)); })));
                        } }, function (_a) {
                        var item = _a.item;
                        var data = item;
                        var date = moment(data.Fecha);
                        return (React.createElement("div", { className: styles.schedule },
                            React.createElement("div", { className: styles.date },
                                React.createElement("h3", null, date.format("D")),
                                React.createElement("p", null, date.format("MMM"))),
                            React.createElement("div", { className: styles.people },
                                React.createElement("h4", null, data.Title),
                                React.createElement("p", null, data.Cargo)),
                            React.createElement("div", { className: styles.cta }, Boolean(data.Yammer) && (React.createElement("a", { href: data.Yammer.Url },
                                "Felic\u00EDtame",
                                React.createElement("i", null,
                                    React.createElement("img", { src: "http://aremlab.com/media/colsubsidio/gestion/yammer_.png", alt: "" })))))));
                    })); })),
                React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-xl2" }, " "),
                React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-xl5" },
                    React.createElement(MediaImage, { inDesignMode: inDesignMode, context: context, onSelectImage: onSelectImage, image: image })))));
    };
    return Cumpleanos;
}(React.Component));
export default Cumpleanos;
//# sourceMappingURL=Cumpleanos.js.map