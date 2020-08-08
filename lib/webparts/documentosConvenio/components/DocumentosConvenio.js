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
import { sp } from "@pnp/sp/presets/all";
import { SharingLinkKind } from "@pnp/sp/sharing";
import { initializeFileTypeIcons, getFileTypeIconProps } from "@uifabric/file-type-icons";
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import styles from './DocumentosConvenio.module.scss';
import { IntranetMedicamentosCRUDList, IntranetMedicamentosPageList } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';
initializeFileTypeIcons();
var DocumentoConvenio = /** @class */ (function (_super) {
    __extends(DocumentoConvenio, _super);
    function DocumentoConvenio(props) {
        var _this = _super.call(this, props) || this;
        _this.getFileUrl = function () {
            var url = _this.state.file.File.ServerRelativeUrl;
            if ((/\.(url)$/i).test(url)) {
                return null;
            }
            return url;
        };
        _this.getFileIconProps = function () {
            var filename = _this.state.file.File.Name;
            var ext = filename.match(/\.[0-9a-z]+$/i)[0];
            var iconprops = getFileTypeIconProps({ extension: ext, size: 48, imageFileType: 'png' });
            return __assign({}, iconprops);
        };
        _this.state = { file: null, shareLink: null };
        return _this;
    }
    DocumentoConvenio.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var file, shareLink;
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
                        return [4 /*yield*/, sp.web.getFolderByServerRelativeUrl(file.File.ServerRelativeUrl)
                                .getShareLink(SharingLinkKind.OrganizationView)];
                    case 2:
                        shareLink = _a.sent();
                        this.setState({ file: file, shareLink: shareLink });
                        return [2 /*return*/];
                }
            });
        });
    };
    DocumentoConvenio.prototype.render = function () {
        var _a = this.props.data, Title = _a.Title, Descripci_x00f3_n = _a.Descripci_x00f3_n;
        if (!Boolean(this.state.file))
            return (React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg6 ms-xl3" },
                React.createElement("div", { className: styles.partner },
                    React.createElement("div", { className: styles.partner_content },
                        React.createElement("p", null, "Un momento")))));
        return (React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg6 ms-xl3" },
            React.createElement("div", { className: styles.partner },
                React.createElement("div", { className: styles.partner_head },
                    React.createElement("div", { className: styles.partner_head_icon },
                        React.createElement(Icon, __assign({}, this.getFileIconProps()))),
                    React.createElement("div", { className: styles.partner_head_actions }, (this.state.shareLink && Boolean(this.state.shareLink.sharingLinkInfo.Url)) && React.createElement("a", { target: "_blank", href: this.state.shareLink.sharingLinkInfo.Url, title: Title },
                        React.createElement("img", { src: "http://aremlab.com/media/colsubsidio/institucional/convenios/eye.png", alt: "" })))),
                React.createElement("div", { className: styles.partner_content },
                    React.createElement("h3", null, Title),
                    React.createElement("p", null, Descripci_x00f3_n)),
                (this.state.shareLink && Boolean(this.state.shareLink.sharingLinkInfo.Url)) && React.createElement("a", { className: styles.documentButton, target: "_blank", href: this.state.shareLink.sharingLinkInfo.Url, title: Title }, "ir al documento"))));
    };
    return DocumentoConvenio;
}(React.Component));
var DocumentosConvenio = /** @class */ (function (_super) {
    __extends(DocumentosConvenio, _super);
    function DocumentosConvenio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentosConvenio.prototype.render = function () {
        var _this = this;
        var _a = this.props, list = _a.list, terms = _a.terms, context = _a.context;
        if (!Array.isArray(terms) || terms.length === 0)
            return React.createElement("h1", null, "Error! [tags] not found!");
        var term = terms[0];
        var filterTag = term.name;
        if (list === undefined || list === null || list === '')
            return React.createElement("h1", null, "Error! [documentos] list not found!");
        if (!context.pageContext)
            return React.createElement("h1", null, "Error! absoluteUrl not found!");
        if (!context.spHttpClient)
            return React.createElement("h1", null, "Error! spHttpClient not found!");
        return (React.createElement("div", { className: styles.partners_content },
            React.createElement(IntranetMedicamentosCRUDList, { listId: list, spHttpClient: context.spHttpClient, siteUrl: context.pageContext.web.absoluteUrl }, function (listName) { return (React.createElement(IntranetMedicamentosPageList, { propertyPane: _this.props.context.propertyPane, inDesignMode: _this.props.inDesignMode, listName: listName, filterTag: filterTag }, function (_a) {
                var items = _a.items, status = _a.status;
                if (items.length === 0)
                    return React.createElement("h1", null, status);
                return (React.createElement("div", { className: "ms-Grid", dir: "ltr" },
                    React.createElement("div", { className: "ms-Grid-row" }, items.map(function (item, index) {
                        var data = item;
                        return (React.createElement(DocumentoConvenio, { key: index, listName: listName, data: data }));
                    }))));
            })); })));
    };
    return DocumentosConvenio;
}(React.Component));
export default DocumentosConvenio;
//# sourceMappingURL=DocumentosConvenio.js.map