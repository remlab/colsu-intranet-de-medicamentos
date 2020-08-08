var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import styles from './Organigrama.module.scss';
import { IntranetMedicamentosCRUDList, IntranetMedicamentosCRUD } from '../../componentes/intranetMedicamentosCRUD/IntranetMedicamentosCRUD';
import { Tree, TreeNode } from 'react-organizational-chart';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import styled from 'styled-components';
var StyledNode = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 5px;\n  border-radius: 8px;\n  display: inline-block;\n  /*border: 1px solid red;*/\n"], ["\n  padding: 5px;\n  border-radius: 8px;\n  display: inline-block;\n  /*border: 1px solid red;*/\n"])));
var Persona = /** @class */ (function (_super) {
    __extends(Persona, _super);
    function Persona() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Persona.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            this.props.Picture && this.props.Picture.Url && this.props.Picture.Url !== "" ?
                React.createElement("img", { src: this.props.Picture.Url, alt: this.props.Title }) :
                React.createElement("img", { src: "http://aremlab.com/media/colsubsidio/institucional/org/user3.svg", alt: "User" }),
            this.props.Title && React.createElement("h3", null, this.props.Title.toLowerCase()),
            this.props.Cargo && React.createElement("p", null, this.props.Cargo.toLowerCase()),
            this.props.yammer && this.props.yammer.Url && this.props.yammer.Url !== "" ? React.createElement("a", { className: styles.yammerButton, href: this.props.yammer.Url },
                React.createElement("img", { src: "http://aremlab.com/media/colsubsidio/institucional/org/yammer.png", alt: "Yammer " + this.props.Title })) : React.createElement("div", null)));
    };
    return Persona;
}(React.Component));
var Organigrama = /** @class */ (function (_super) {
    __extends(Organigrama, _super);
    function Organigrama() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.crud = null;
        return _this;
    }
    Organigrama.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, subtitle = _a.subtitle, list = _a.list, context = _a.context;
        if (list === undefined || list === null || list === '')
            return React.createElement("h1", null, "Error! organigrama list not found!");
        if (!context.pageContext)
            return React.createElement("h1", null, "Error! absoluteUrl not found!");
        if (!context.spHttpClient)
            return React.createElement("h1", null, "Error! spHttpClient not found!");
        return (React.createElement(IntranetMedicamentosCRUDList, { listId: list, spHttpClient: context.spHttpClient, siteUrl: context.pageContext.web.absoluteUrl }, function (listName) { return (React.createElement(IntranetMedicamentosCRUD, { propertyPane: _this.props.context.propertyPane, inDesignMode: _this.props.inDesignMode, ref: function (el) { return _this.crud = el; }, listName: listName, spHttpClient: context.spHttpClient, siteUrl: context.pageContext.web.absoluteUrl, include: "Picture,level,yammer,Cargo,Modified", ParentComponent: function (_a) {
                var data = _a.data;
                if (data.length === 0)
                    return React.createElement("h1", null, "No data items found");
                var pData = data;
                var result = null;
                var _loop_1 = function (i) {
                    var item = pData[i];
                    var filter = pData.filter(function (_a) {
                        var level = _a.level;
                        return level === item.Id;
                    });
                    item.children = filter.length > 0 ? filter : null;
                    if (item.level === null)
                        result = item;
                };
                for (var i = 0; i < pData.length; i++) {
                    _loop_1(i);
                }
                var Label = function (item) {
                    var Id = item.Id, Title = item.Title, Picture = item.Picture, yammer = item.yammer, Cargo = item.Cargo, level = item.level;
                    return (React.createElement(StyledNode, null,
                        React.createElement("div", { style: { position: "relative", paddingTop: _this.props.inDesignMode ? 36 : 0 } },
                            _this.props.inDesignMode &&
                                React.createElement(Stack, { horizontal: true, styles: {
                                        root: {
                                            position: "absolute",
                                            top: 0,
                                            zIndex: 1,
                                            transition: 'all 0.3s ease 0s'
                                        }
                                    } },
                                    React.createElement(TooltipHost, { id: "tooltip_edit", content: "Editar item", className: "ToolbarButtonTooltip", directionalHint: DirectionalHint.topCenter },
                                        React.createElement(IconButton, { onClick: function () {
                                                _this.props.onSelectItem(item);
                                                _this.props.context.propertyPane.open();
                                            }, className: "ToolbarButton CanvasControlToolbar-item", iconProps: { iconName: "Edit" }, title: "Editar", ariaLabel: "Editar", "aria-describedby": "tooltip_edit" })),
                                    React.createElement(TooltipHost, { id: "tooltip_save", content: "Guardar item", className: "ToolbarButtonTooltip", directionalHint: DirectionalHint.topCenter },
                                        React.createElement(IconButton, { onClick: function () {
                                                if (_this.crud && _this.props.selectedItem && _this.props.selectedItem.Id === Id) {
                                                    var uData = __assign({}, item, _this.props.selectedItem);
                                                    delete uData.children;
                                                    _this.crud.listItemTempData = uData;
                                                    _this.crud.updateItem();
                                                }
                                                if (_this.props.context.propertyPane.isPropertyPaneOpen())
                                                    _this.props.context.propertyPane.close();
                                            }, className: "ToolbarButton CanvasControlToolbar-item", iconProps: { iconName: "Save" }, title: "Guardar", ariaLabel: "Guardar", "aria-describedby": "tooltip_save" })),
                                    level !== null && (React.createElement(TooltipHost, { id: "tooltip_delete", content: "Eliminar item", className: "ToolbarButtonTooltip", directionalHint: DirectionalHint.topCenter },
                                        React.createElement(IconButton, { onClick: function () {
                                                if (_this.crud) {
                                                    _this.crud.listItemTempData = { Id: Id, Title: Title };
                                                    _this.crud.deleteItem();
                                                }
                                                if (_this.props.context.propertyPane.isPropertyPaneOpen())
                                                    _this.props.context.propertyPane.close();
                                            }, className: "ToolbarButton CanvasControlToolbar-item", iconProps: { iconName: "Delete" }, title: "Eliminar", ariaLabel: "Eliminar", "aria-describedby": "tooltip_delete" }))),
                                    React.createElement(TooltipHost, { id: "tooltip_add_person", content: "Nueva persona", className: "ToolbarButtonTooltip", directionalHint: DirectionalHint.topCenter },
                                        React.createElement(IconButton, { onClick: function () {
                                                if (_this.crud) {
                                                    var newData = {
                                                        Title: "Nueva persona",
                                                        Picture: {
                                                            Url: "http://aremlab.com/media/colsubsidio/institucional/org/user3.svg"
                                                        },
                                                        level: Id
                                                    };
                                                    _this.crud.listItemTempData = newData;
                                                    _this.crud.createItem();
                                                }
                                            }, iconProps: { iconName: "Add" }, title: "Nueva persona", ariaLabel: "Nueva persona", "aria-describedby": "tooltip_add_person", className: "ToolbarButton CanvasControlToolbar-item" }))),
                            React.createElement("div", { className: styles.org__card },
                                React.createElement(Persona, __assign({}, __assign({ Title: Title, Cargo: Cargo, Picture: Picture, yammer: yammer }, (_this.props.selectedItem && _this.props.selectedItem.Id === Id) ? _this.props.selectedItem : {})))))));
                };
                var Node = function (_a) {
                    var Component = _a.Component, childrenProps = _a.childrenProps, childrenItems = _a.childrenItems;
                    return (React.createElement(Component, __assign({}, childrenProps), (childrenItems && Array.isArray(childrenItems) && childrenItems.length > 0) && childrenItems.map(function (item, index) { return React.createElement(Node, { key: index, Component: TreeNode, childrenProps: { label: React.createElement(Label, __assign({}, item)) }, childrenItems: item.children }); })));
                };
                return (React.createElement("div", { className: styles.organigrama },
                    React.createElement("div", { className: styles.container },
                        React.createElement("div", { className: styles.row },
                            React.createElement("div", { className: styles.column["ms-lgPush1"] },
                                React.createElement("div", { className: styles.section_orgChart },
                                    React.createElement("div", { className: styles.org_header },
                                        React.createElement("h2", null,
                                            title,
                                            " ",
                                            React.createElement("strong", null, subtitle))),
                                    React.createElement("div", { className: styles.org_content },
                                        React.createElement(Node, { Component: Tree, childrenProps: {
                                                lineWidth: "2px",
                                                lineColor: "#BDCEF1",
                                                lineBorderRadius: "4px",
                                                lineHeight: '20px',
                                                nodePadding: '5px',
                                                label: React.createElement(Label, __assign({}, result))
                                            }, childrenItems: result.children }))))))));
            } }, function () { return (React.createElement("div", null)); })); }));
    };
    return Organigrama;
}(React.Component));
export default Organigrama;
var templateObject_1;
//# sourceMappingURL=Organigrama.js.map