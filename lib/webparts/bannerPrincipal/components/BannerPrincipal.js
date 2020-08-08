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
import * as moment from 'moment';
import classnames from 'classnames';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/sites";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import { IntranetMedicamentosCRUDList, IntranetMedicamentosCRUD } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';
import { FilePicker } from '@pnp/spfx-controls-react/lib/FilePicker';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import Swiper from 'react-id-swiper';
import { isEqual } from '@microsoft/sp-lodash-subset';
import styles from './BannerPrincipal.module.scss';
import "swiper/css/swiper.css";
var BannerCarousel = /** @class */ (function (_super) {
    __extends(BannerCarousel, _super);
    function BannerCarousel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BannerCarousel.prototype.render = function () {
        return (React.createElement("div", { className: styles.bannerPrincipal },
            React.createElement("div", { className: styles.section_header },
                React.createElement("div", { className: styles.section_header__banner },
                    React.createElement(Swiper, __assign({}, {
                        lazy: true,
                        containerClass: styles.bannerSwipper,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        },
                        renderPrevButton: function () { return React.createElement("div", { className: classnames(["swiper-button-next", styles.bannerSwipper__ButtonPrev]) }); },
                        renderNextButton: function () { return React.createElement("div", { className: classnames(["swiper-button-prev", styles.bannerSwipper__ButtonNext]) }); },
                    }), this.props.items.map(function (el) {
                        return (React.createElement("div", null, el));
                    }))))));
    };
    return BannerCarousel;
}(React.Component));
var Placeholder = function (_a) {
    var iconName = _a.iconName, iconText = _a.iconText, description = _a.description, children = _a.children;
    return (React.createElement("div", { className: styles.placeholder },
        React.createElement("div", null,
            React.createElement(Icon, { iconName: iconName, className: styles.placeholder__icon }),
            React.createElement("span", { className: styles.placeholder__iconText }, iconText)),
        React.createElement("span", { className: styles.placeholder__description }, description),
        children));
};
var BannerSlideImage = /** @class */ (function (_super) {
    __extends(BannerSlideImage, _super);
    function BannerSlideImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BannerSlideImage.prototype.render = function () {
        return (React.createElement("div", { className: styles.banner__content },
            React.createElement("img", { src: this.props.slideImage.fileAbsoluteUrl, className: "swiper-lazy", alt: "" }),
            React.createElement("div", { className: "swiper-lazy-preloader swiper-lazy-preloader-white" })));
    };
    return BannerSlideImage;
}(React.Component));
var BannerSlide = /** @class */ (function (_super) {
    __extends(BannerSlide, _super);
    function BannerSlide(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSlideChange = function () {
            _this.props.onSlideChange({
                Id: _this.props.id,
                Title: _this.state.cardTitle,
                Subt_x00ed_tulo: _this.state.cardSubtitle,
                Resumen: _this.state.cardBrief,
                TarjetaActiva: _this.state.cardEnabled,
                Imagen: {
                    Url: _this.state.slideImage && _this.state.slideImage.fileAbsoluteUrl ? _this.state.slideImage.fileAbsoluteUrl : null
                },
                ImagenTarjeta: {
                    Url: _this.state.cardImage && _this.state.cardImage.fileAbsoluteUrl ? _this.state.cardImage.fileAbsoluteUrl : null
                }
            });
        };
        _this.state = {
            cardTitle: props.cardTitle,
            cardSubtitle: props.cardSubtitle,
            cardBrief: props.cardBrief,
            slideImage: props.slideImage,
            cardImage: props.cardImage,
            cardEnabled: props.cardEnabled,
        };
        return _this;
    }
    BannerSlide.prototype.render = function () {
        var _this = this;
        if (this.state.slideImage === null || this.state.slideImage.fileAbsoluteUrl === null) {
            return (React.createElement(Placeholder, { iconName: 'Edit', iconText: 'Slide no contiene una imagen', description: 'Por favor agregue una imagen al slide' }, this.props.inDesignMode ?
                React.createElement(FilePicker, { accepts: [".gif", ".jpg", ".jpeg", ".bmp", ".dib", ".tif", ".tiff", ".ico", ".png", ".jxr", ".svg"], buttonIcon: "FileImage", buttonLabel: "Agregar imagen", onSave: function (slideImage) {
                        if (!Boolean(slideImage.fileAbsoluteUrl)) {
                            slideImage.downloadFileContent()
                                .then(function (file) {
                                var uploadFiles = sp.web.getFolderByServerRelativeUrl(_this.props.context.pageContext.web.serverRelativeUrl + "/SiteAssets").files;
                                if (file.size <= 10485760) {
                                    return uploadFiles.add(file.name, file, true);
                                }
                                return uploadFiles.addChunked(file.name, file, function (data) { console.log(data); }, true);
                            })
                                .then(function (result) {
                                _this.setState({
                                    slideImage: __assign({}, slideImage, { fileAbsoluteUrl: result.data.ServerRelativeUrl })
                                }, _this.handleSlideChange);
                            })
                                .catch(function (err) { return console.log(err); });
                            return;
                        }
                        _this.setState({ slideImage: slideImage }, _this.handleSlideChange);
                    }, onChanged: function (slideImage) { _this.setState({ slideImage: slideImage }, _this.handleSlideChange); }, context: this.props.context }) :
                React.createElement("span", null,
                    "Agregar una imagen en modo Editor.",
                    React.createElement("br", null),
                    "*Se recomienda subir una imagen con las siguientes dimensiones: 1680 x 550 Pixeles")));
        }
        return (React.createElement("div", { className: styles.section_header__banner },
            React.createElement(BannerSlideImage, { slideImage: this.state.slideImage }),
            React.createElement("div", { className: styles.controllerBanner }, this.props.inDesignMode &&
                React.createElement(React.Fragment, null,
                    React.createElement("div", { className: styles.bannerAction },
                        React.createElement(FilePicker, { accepts: [".gif", ".jpg", ".jpeg", ".bmp", ".dib", ".tif", ".tiff", ".ico", ".png", ".jxr", ".svg"], buttonIcon: "FileImage", buttonLabel: "Cambiar imagen", onSave: function (slideImage) {
                                if (!Boolean(slideImage.fileAbsoluteUrl)) {
                                    slideImage.downloadFileContent()
                                        .then(function (file) {
                                        var uploadFiles = sp.web.getFolderByServerRelativeUrl(_this.props.context.pageContext.web.serverRelativeUrl + "/SiteAssets").files;
                                        if (file.size <= 10485760) {
                                            return uploadFiles.add(file.name, file, true);
                                        }
                                        return uploadFiles.addChunked(file.name, file, function (data) { console.log(data); }, true);
                                    })
                                        .then(function (result) {
                                        _this.setState({
                                            slideImage: __assign({}, slideImage, { fileAbsoluteUrl: result.data.ServerRelativeUrl })
                                        }, _this.handleSlideChange);
                                    })
                                        .catch(function (err) { return console.log(err); });
                                    return;
                                }
                                _this.setState({ slideImage: slideImage }, _this.handleSlideChange);
                            }, onChanged: function (slideImage) { _this.setState({ slideImage: slideImage }, _this.handleSlideChange); }, context: this.props.context })),
                    React.createElement("div", { className: styles.bannerAction },
                        React.createElement("p", null, "*Se recomienda subir una imagen con las siguientes dimensiones: 1680 x 550 Pixeles")))),
            React.createElement("div", { className: styles.bannerCard, style: { display: this.state.cardEnabled ? "block" : "none" } },
                React.createElement("h3", { className: styles.cardDate }, moment(this.props.cardDate).format('DD[/]MM[/]YYYY')),
                React.createElement("h3", { className: styles.cardTitle }, this.state.cardTitle),
                React.createElement("p", { className: styles.cardSubTitle }, this.state.cardSubtitle),
                React.createElement("div", { className: styles.cardImageContainer },
                    this.props.inDesignMode &&
                        React.createElement("div", { className: styles.bannerAction },
                            React.createElement(FilePicker, { accepts: [".gif", ".jpg", ".jpeg", ".bmp", ".dib", ".tif", ".tiff", ".ico", ".png", ".jxr", ".svg"], buttonIcon: "FileImage", buttonLabel: this.state.cardImage ? "Cambiar imagen" : "Agregar imagen", onSave: function (cardImage) {
                                    if (!Boolean(cardImage.fileAbsoluteUrl)) {
                                        cardImage.downloadFileContent()
                                            .then(function (file) {
                                            var uploadFiles = sp.web.getFolderByServerRelativeUrl(_this.props.context.pageContext.web.serverRelativeUrl + "/SiteAssets").files;
                                            if (file.size <= 10485760) {
                                                return uploadFiles.add(file.name, file, true);
                                            }
                                            return uploadFiles.addChunked(file.name, file, function (data) { console.log(data); }, true);
                                        })
                                            .then(function (result) {
                                            _this.setState({
                                                cardImage: __assign({}, cardImage, { fileAbsoluteUrl: result.data.ServerRelativeUrl })
                                            }, _this.handleSlideChange);
                                        })
                                            .catch(function (err) { return console.log(err); });
                                        return;
                                    }
                                    _this.setState({ cardImage: cardImage }, _this.handleSlideChange);
                                }, onChanged: function (cardImage) { _this.setState({ cardImage: cardImage }, _this.handleSlideChange); }, context: this.props.context })),
                    this.state.cardImage &&
                        (React.createElement("img", { className: styles.cardImage, src: this.state.cardImage.fileAbsoluteUrl, alt: "" }))),
                React.createElement("p", { className: styles.cardBrief }, this.state.cardBrief),
                this.props.cardLink && React.createElement("a", { href: this.props.cardLink, className: styles.cardCta }, "Ampliar Informaci\u00F3n")),
            this.props.hasTitle && React.createElement("p", { className: styles.section_dynamics__banner__description }, this.state.cardTitle)));
    };
    return BannerSlide;
}(React.Component));
var BannerPrincipal = /** @class */ (function (_super) {
    __extends(BannerPrincipal, _super);
    function BannerPrincipal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.crud = null;
        return _this;
    }
    BannerPrincipal.prototype.render = function () {
        var _this = this;
        var _a = this.props, list = _a.list, context = _a.context, selectedItem = _a.selectedItem;
        if (list === undefined || list === null || list === '')
            return React.createElement("h1", null, "Error! banner list not found!");
        if (!context.pageContext)
            return React.createElement("h1", null, "Error! absoluteUrl not found!");
        if (!context.spHttpClient)
            return React.createElement("h1", null, "Error! spHttpClient not found!");
        return (React.createElement(IntranetMedicamentosCRUDList, { listId: list, spHttpClient: context.spHttpClient, siteUrl: context.pageContext.web.absoluteUrl }, function (listName) { return (React.createElement(IntranetMedicamentosCRUD, { propertyPane: _this.props.context.propertyPane, inDesignMode: _this.props.inDesignMode, ref: function (el) { return _this.crud = el; }, listName: listName, spHttpClient: context.spHttpClient, siteUrl: context.pageContext.web.absoluteUrl, include: "Imagen,Enlace,TarjetaActiva,ImagenTarjeta,Subt_x00ed_tulo,Resumen,Modified", limit: _this.props.slides, 
            // onSaveAction={onSelectedItem}
            onEditAction: function (data) {
                if (_this.crud)
                    _this.crud.listItemTempData = data;
                _this.props.onSelectItem(data);
            }, onDeleteAction: function (data) {
                if (_this.crud)
                    _this.crud.listItemTempData = data;
                _this.props.onSelectItem(data);
            }, actions: function (_a) {
                var item = _a.item, handleCreate = _a.handleCreate, handleUpdate = _a.handleUpdate;
                var TarjetaActiva = item.TarjetaActiva;
                var actionLabel = TarjetaActiva ? "Ocultar tarjeta" : "Mostrar tarjeta";
                return (React.createElement(React.Fragment, null,
                    React.createElement(TooltipHost, { id: "tooltip_hide_card", content: actionLabel, className: "ToolbarButtonTooltip", directionalHint: DirectionalHint.topCenter },
                        React.createElement(IconButton, { onClick: function () {
                                if (_this.crud) {
                                    var newData = __assign({}, item, { TarjetaActiva: !TarjetaActiva });
                                    _this.crud.listItemTempData = newData;
                                    handleUpdate();
                                    _this.props.onSelectItem(newData);
                                }
                                if (_this.props.context.propertyPane.isPropertyPaneOpen())
                                    _this.props.context.propertyPane.close();
                            }, iconProps: { iconName: TarjetaActiva ? "Hide" : "RedEye" }, title: actionLabel, ariaLabel: actionLabel, "aria-describedby": "tooltip_hide_card", className: "ToolbarButton CanvasControlToolbar-item" })),
                    React.createElement(TooltipHost, { id: "tooltip_new_card", content: "Duplicar slide", className: "ToolbarButtonTooltip", directionalHint: DirectionalHint.topCenter },
                        React.createElement(IconButton, { onClick: function () {
                                var _a = item, Title = _a.Title, Imagen = _a.Imagen, Subt_x00ed_tulo = _a.Subt_x00ed_tulo, Resumen = _a.Resumen, Enlace = _a.Enlace, ImagenTarjeta = _a.ImagenTarjeta;
                                if (_this.crud) {
                                    var newData = {
                                        Title: Title,
                                        Imagen: Imagen,
                                        Subt_x00ed_tulo: Subt_x00ed_tulo,
                                        Resumen: Resumen,
                                        Enlace: Enlace,
                                        ImagenTarjeta: ImagenTarjeta,
                                        TarjetaActiva: true
                                    };
                                    _this.crud.listItemTempData = newData;
                                    handleCreate();
                                    _this.props.onSelectItem(newData);
                                    if (context.propertyPane.isPropertyPaneOpen())
                                        _this.props.context.propertyPane.close();
                                }
                            }, iconProps: { iconName: "Page" }, title: "Duplicar slide", ariaLabel: "Duplicar slide", "aria-describedby": "tooltip_new_card", className: "ToolbarButton CanvasControlToolbar-item" }))));
            }, ParentComponent: function (_a) {
                var items = _a.items;
                return (React.createElement(React.Fragment, null,
                    _this.props.hasTitle && (React.createElement("div", { className: styles.bannerPrincipal__header },
                        React.createElement("h2", null,
                            _this.props.title,
                            " ",
                            React.createElement("strong", null, _this.props.subtitle)))),
                    React.createElement(BannerCarousel, { items: items })));
            } }, function (_a) {
            var item = _a.item;
            var _b = item, Id = _b.Id, Title = _b.Title, Subt_x00ed_tulo = _b.Subt_x00ed_tulo, Imagen = _b.Imagen, ImagenTarjeta = _b.ImagenTarjeta, TarjetaActiva = _b.TarjetaActiva, Resumen = _b.Resumen, Modified = _b.Modified, Enlace = _b.Enlace;
            var DefaultOpts = { fileName: null, fileNameWithoutExtension: null, downloadFileContent: null };
            var handleSlideChange = function (newData) {
                var mustUpdate = !isEqual(newData, {
                    Id: Id,
                    Title: Title,
                    Subt_x00ed_tulo: Subt_x00ed_tulo,
                    Imagen: {
                        Url: Imagen && Imagen.Url ? Imagen.Url : null
                    },
                    ImagenTarjeta: {
                        Url: ImagenTarjeta && ImagenTarjeta.Url ? ImagenTarjeta.Url : null
                    },
                    TarjetaActiva: TarjetaActiva,
                    Resumen: Resumen
                });
                if (_this.props.context.propertyPane.isPropertyPaneOpen())
                    _this.props.context.propertyPane.close();
                if (mustUpdate && _this.crud)
                    _this.crud.listItemTempData = newData;
            };
            return (React.createElement(BannerSlide, { hasTitle: _this.props.hasTitle, inDesignMode: _this.props.inDesignMode, onSlideChange: handleSlideChange, id: Id, context: _this.props.context, cardDate: Modified, cardTitle: Title, cardSubtitle: Subt_x00ed_tulo, cardBrief: Resumen, cardEnabled: TarjetaActiva, cardImage: ImagenTarjeta && ImagenTarjeta.Url ? __assign({}, DefaultOpts, { fileAbsoluteUrl: ImagenTarjeta.Url }) : null, cardLink: Enlace && Enlace.Url ? Enlace.Url : null, slideImage: Imagen && Imagen.Url ? __assign({}, DefaultOpts, { fileAbsoluteUrl: Imagen.Url }) : null }));
        })); }));
    };
    return BannerPrincipal;
}(React.Component));
export default BannerPrincipal;
//# sourceMappingURL=BannerPrincipal.js.map