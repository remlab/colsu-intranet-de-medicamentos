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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import classnames from 'classnames';
import styles from './Convenios.module.scss';
import { chunk } from '@microsoft/sp-lodash-subset';
import BlockTitle from '../../componentes/blockTitle/blockTitle';
import Swiper from 'react-id-swiper';
import "swiper/css/swiper.css";
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
var widthView = window.innerWidth;
// const heightView = window.innerHeight;
import { IntranetMedicamentosCRUDList, IntranetMedicamentosPageList } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';
var Convenio = /** @class */ (function (_super) {
    __extends(Convenio, _super);
    function Convenio(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { file: null };
        return _this;
    }
    Convenio.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.web.lists.getByTitle(this.props.listName)
                            .items
                            .getById(this.props.data.Id)
                            .select("File")
                            .expand("File")
                            .get()];
                    case 1:
                        file = _a.sent();
                        this.setState({ file: file });
                        return [2 /*return*/];
                }
            });
        });
    };
    Convenio.prototype.render = function () {
        if (!this.state.file)
            return React.createElement("p", null, "Loading!");
        return (React.createElement("a", { href: this.state.file.File.ServerRelativeUrl, title: this.state.file.File.Name }, this.props.data.BannerImageUrl && this.props.data.BannerImageUrl.Url && this.props.boxImage ?
            React.createElement("img", { src: this.props.data.BannerImageUrl.Url, alt: this.props.data.Title }) :
            React.createElement("p", null, this.props.data.Title)));
    };
    return Convenio;
}(React.Component));
var Convenios = /** @class */ (function (_super) {
    __extends(Convenios, _super);
    function Convenios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Convenios.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, subtitle = _a.subtitle, boxImage = _a.boxImage, boxsBySlide = _a.boxsBySlide, list = _a.list, terms = _a.terms, context = _a.context, headerClassname = _a.headerClassname;
        if (!Array.isArray(terms) || terms.length === 0)
            return React.createElement("h1", null, "Error! [tags] not found!");
        var term = terms[0];
        var filterTag = term.name;
        if (list === undefined || list === null || list === '')
            return React.createElement("h1", null, "Error! [indicadores] list not found!");
        if (!context.pageContext)
            return React.createElement("h1", null, "Error! absoluteUrl not found!");
        if (!context.spHttpClient)
            return React.createElement("h1", null, "Error! spHttpClient not found!");
        return (React.createElement("div", { className: styles.convenios },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column['ms-lgPush1'] },
                        React.createElement(BlockTitle, { type: headerClassname },
                            React.createElement("span", null, title),
                            " ",
                            React.createElement("strong", null, subtitle)),
                        React.createElement(IntranetMedicamentosCRUDList, { listId: list, spHttpClient: context.spHttpClient, siteUrl: context.pageContext.web.absoluteUrl }, function (listName) { return (React.createElement(IntranetMedicamentosPageList, { propertyPane: _this.props.context.propertyPane, inDesignMode: _this.props.inDesignMode, listName: listName, filterTag: filterTag }, function (_a) {
                            var items = _a.items, status = _a.status;
                            if (items.length === 0)
                                return React.createElement("h1", null, status);
                            var slides = chunk(items, boxsBySlide);
                            return (React.createElement(Swiper, __assign({}, {
                                pagination: {
                                    el: '.swiper-pagination',
                                    type: 'bullets',
                                    clickable: true
                                },
                            }), slides.map(function (slide, pindex) { return (React.createElement("div", { key: pindex, className: "ms-Grid-row slide" }, slide.map(function (item, cindex) {
                                var data = item;
                                return (React.createElement("div", { className: classnames('ms-Grid-col ms-sm12 ms-md12 ms-lg6 ms-xl3', styles.convenioCenter) },
                                    React.createElement("div", { className: styles.convenioCard },
                                        React.createElement(Convenio, { key: cindex, data: data, listName: listName, boxImage: boxImage }))));
                            }))); })));
                        })); }))))));
    };
    return Convenios;
}(React.Component));
export default Convenios;
//# sourceMappingURL=Convenios.js.map