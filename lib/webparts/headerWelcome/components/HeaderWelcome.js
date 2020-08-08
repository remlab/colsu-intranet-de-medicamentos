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
import styles from './HeaderWelcome.module.scss';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/sites";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import { FilePicker } from '@pnp/spfx-controls-react/lib/FilePicker';
import { ContextualMenu } from 'office-ui-fabric-react/lib/ContextualMenu';
import { useConstCallback } from '@uifabric/react-hooks';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { SPHttpClient } from '@microsoft/sp-http';
var ContextualTitleMenu = function (_a) {
    var title = _a.title, items = _a.items, propertyPane = _a.propertyPane, inDesignMode = _a.inDesignMode, onSelectItem = _a.onSelectItem, onDeleteItem = _a.onDeleteItem, onDuplicateItem = _a.onDuplicateItem;
    var _b;
    if (!Boolean(items))
        return React.createElement("p", null, "Configurar webpart");
    var menuItems = items.map(function (item, index) { return (__assign({ key: "context_" + index, text: item.title, href: item.link, split: true }, __assign({}, inDesignMode ? {
        subMenuProps: {
            items: [{
                    key: 'edit_item_' + index,
                    text: 'Editar item',
                    iconProps: {
                        iconName: 'Edit',
                    },
                    onClick: function () {
                        onSelectItem(index);
                        if (propertyPane.isPropertyPaneOpen()) {
                            propertyPane.close();
                        }
                        else {
                            propertyPane.open();
                        }
                    }
                }, {
                    key: 'delete_item_' + index,
                    text: 'Eliminar item',
                    iconProps: {
                        iconName: 'Delete',
                    },
                    onClick: function () {
                        onDeleteItem(index);
                        if (propertyPane.isPropertyPaneOpen())
                            propertyPane.close();
                    }
                }, {
                    key: 'duplicate_item_' + index,
                    text: 'Duplicar item',
                    iconProps: {
                        iconName: 'Page',
                    },
                    onClick: function () {
                        onDuplicateItem(index);
                        if (propertyPane.isPropertyPaneOpen())
                            propertyPane.close();
                    }
                }]
        }
    } : {}))); });
    var linkRef = React.useRef(null);
    var _c = React.useState(false), showContextualMenu = _c[0], setShowContextualMenu = _c[1];
    var onShowContextualMenu = useConstCallback(function () { return setShowContextualMenu(true); });
    var onHideContextualMenu = useConstCallback(function () { return setShowContextualMenu(false); });
    return (React.createElement(React.Fragment, null,
        React.createElement("a", { href: "#", ref: linkRef, onClick: onShowContextualMenu, className: classnames((_b = {}, _b[styles.subTitle] = true, _b[styles.subTitle__selected] = showContextualMenu, _b)) },
            " ",
            React.createElement(Icon, { className: styles.iconMenu, iconName: "CollapseMenu" }),
            " ",
            title,
            " "),
        React.createElement(ContextualMenu, { items: menuItems, hidden: !showContextualMenu, target: linkRef.current, onItemClick: onHideContextualMenu, onDismiss: onHideContextualMenu })));
};
var MediaImage = function (_a) {
    var inDesignMode = _a.inDesignMode, image = _a.image, context = _a.context, onSelectImage = _a.onSelectImage;
    var _b = React.useState(image), selectedImage = _b[0], setSelectedImage = _b[1];
    React.useEffect(function () {
        onSelectImage(selectedImage);
    }, [selectedImage]);
    return (React.createElement("div", { className: styles.bannerImage },
        React.createElement("img", { src: selectedImage, alt: "" }),
        inDesignMode && (React.createElement("div", { className: styles.bannerAction, style: { position: Boolean(selectedImage) ? "absolute" : "relative" } },
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
var HeaderWelcome = /** @class */ (function (_super) {
    __extends(HeaderWelcome, _super);
    function HeaderWelcome(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            currentUser: null
        };
        return _this;
    }
    HeaderWelcome.prototype.componentDidMount = function () {
        var _this = this;
        if (!Boolean(this.props.type) || this.props.type === "saludo") {
            this.props.spHttpClient.get(this.props.siteUrl + "/_api/Web/CurrentUser?$select=Id,Title", SPHttpClient.configurations.v1, {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'odata-version': ''
                }
            })
                .then(function (response) {
                if (response.status === 400)
                    throw "Not found";
                return response.json();
            })
                .then(function (loggedUser) {
                return _this.props.spHttpClient.get(_this.props.siteUrl + "/_api/Web/SiteUserInfoList/Items(" + loggedUser.Id + ")?$select=Id,Title,FirstName", SPHttpClient.configurations.v1, {
                    headers: {
                        'Accept': 'application/json;odata=nometadata',
                        'odata-version': ''
                    }
                });
            })
                .then(function (response) {
                if (response.status === 400)
                    throw "Not found";
                return response.json();
            })
                .then(function (currentUser) {
                _this.setState({ currentUser: currentUser });
            })
                .catch(function (err) { return console.log(err); });
        }
    };
    HeaderWelcome.prototype.render = function () {
        var _a;
        var _b = this.props, inDesignMode = _b.inDesignMode, type = _b.type, context = _b.context, breadcrumb = _b.breadcrumb, image = _b.image, title = _b.title, hideTitle = _b.hideTitle, titleColor = _b.titleColor, onSetImage = _b.onSetImage;
        return (React.createElement("div", { className: styles.headerWelcome },
            React.createElement("div", { className: styles.container }, (_a = {},
                _a['interna'] = (React.createElement("div", { className: styles.banner },
                    React.createElement("div", { className: styles.bannerContainer },
                        React.createElement(MediaImage, { inDesignMode: inDesignMode, context: context, onSelectImage: onSetImage, image: image }),
                        !Boolean(hideTitle) && (React.createElement("h1", { style: { color: titleColor || "#fff" } }, title))),
                    (Boolean(breadcrumb) && Boolean(breadcrumb.link) && Boolean(breadcrumb.title)) &&
                        React.createElement("div", { className: styles.breadCrum },
                            React.createElement("a", { href: breadcrumb.link },
                                React.createElement("span", null, breadcrumb.title)),
                            "\u00A0/\u00A0",
                            React.createElement("span", null, title)))),
                _a['saludo'] = (React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column["ms-lgPush1"] },
                        React.createElement("div", { className: styles.section_welcome },
                            React.createElement("h1", { className: styles.title },
                                "Hola, ",
                                this.state.currentUser && React.createElement("span", null, this.state.currentUser.FirstName)),
                            !Boolean(hideTitle) && React.createElement(ContextualTitleMenu, __assign({}, this.props)))))),
                _a)[type || 'saludo'])));
    };
    return HeaderWelcome;
}(React.Component));
export default HeaderWelcome;
//# sourceMappingURL=HeaderWelcome.js.map