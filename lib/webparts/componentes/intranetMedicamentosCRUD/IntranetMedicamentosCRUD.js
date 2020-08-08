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
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import { SPHttpClient } from '@microsoft/sp-http';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import styles from './IntranetMedicamentosCRUD.module.scss';
var IntranetMedicamentosCRUDList = /** @class */ (function (_super) {
    __extends(IntranetMedicamentosCRUDList, _super);
    function IntranetMedicamentosCRUDList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            status: 'Ready...',
            lists: []
        };
        return _this;
    }
    IntranetMedicamentosCRUDList.prototype.componentDidMount = function () {
        this.getLists();
    };
    IntranetMedicamentosCRUDList.prototype.getListTitleById = function () {
        var _this = this;
        var lists = this.state.lists.filter(function (it) { return it.Id === _this.props.listId; });
        return lists.length > 0 ? lists[lists.length - 1].Title : null;
    };
    IntranetMedicamentosCRUDList.prototype.getLists = function () {
        var _this = this;
        this.setState({
            status: 'Retrieving lists...',
            lists: []
        });
        this.props.spHttpClient.get(this.props.siteUrl + "/_api/web/lists?$select=Title,Id", SPHttpClient.configurations.v1, {
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
            .then(function (response) {
            _this.setState({
                status: "Successfully loaded " + response.value.length + " lists",
                lists: response.value
            });
        }, function (error) {
            _this.setState({
                status: 'Loading all lists failed with error: ' + error,
                lists: []
            });
        });
    };
    IntranetMedicamentosCRUDList.prototype.render = function () {
        if (this.state.lists.length === 0)
            return (React.createElement("h1", null, this.state.status));
        var listTitle = this.getListTitleById();
        if (!listTitle)
            return (React.createElement("h1", null, this.state.status));
        return (this.props.children(listTitle));
    };
    IntranetMedicamentosCRUDList.defaultProps = {
        limit: null
    };
    return IntranetMedicamentosCRUDList;
}(React.Component));
export { IntranetMedicamentosCRUDList };
var IntranetMedicamentosCRUD = /** @class */ (function (_super) {
    __extends(IntranetMedicamentosCRUD, _super);
    function IntranetMedicamentosCRUD(props, state) {
        var _this = _super.call(this, props) || this;
        _this.listItemEntityTypeName = undefined;
        _this.listItemTempData = null;
        _this.state = {
            status: _this.listNotConfigured(props) || _this.spHttpClientNotConfigured(props) ? 'Please configure list or httpclient in Web Part properties' : 'Ready',
            items: []
        };
        _this.createItem = _this.createItem.bind(_this);
        _this.updateItem = _this.updateItem.bind(_this);
        return _this;
    }
    IntranetMedicamentosCRUD.prototype.componentDidMount = function () {
        this.readItems();
    };
    IntranetMedicamentosCRUD.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.listName !== prevProps.listName)
            this.readItems();
    };
    IntranetMedicamentosCRUD.prototype.componentWillReceiveProps = function (nextProps) {
        // this.listItemEntityTypeName = undefined;
        // this.setState({
        //   status: this.listNotConfigured(nextProps) || this.spHttpClientNotConfigured(nextProps) ? 'Please configure list or httpclient in Web Part properties' : 'Ready',
        //   items: []
        // });
    };
    IntranetMedicamentosCRUD.prototype.render = function () {
        var _this = this;
        var _a = this.state, items = _a.items, status = _a.status;
        if (this.props.children && typeof this.props.children !== "function")
            return React.createElement("h1", null, "Error [children] is not a function.");
        if (this.props.ParentComponent && typeof this.props.ParentComponent !== "function")
            return React.createElement("h1", null, "Error [ParentComponent] is not a function.");
        if (items.length === 0) {
            return (React.createElement(Placeholder, { contentClassName: "ms-Grid-col ms-sm12 ms-md12 ms-lg12", iconName: 'Edit', iconText: 'La lista no contiene items', description: 'Por favor agregue el primer item', buttonLabel: 'Agregar', onConfigure: function () { _this.createItem(); } }));
        }
        var ItemComponent = function (_a) {
            var item = _a.item;
            var callbackProps = { item: item, handleCreate: _this.createItem, handleUpdate: _this.updateItem };
            return (React.createElement("div", { className: styles.container, style: { paddingTop: _this.props.inDesignMode ? 36 : 0 } },
                _this.props.inDesignMode && (React.createElement(Stack, { horizontal: true, styles: {
                        root: {
                            position: "absolute",
                            top: 0,
                            zIndex: 1,
                            transition: 'all 0.3s ease 0s'
                        }
                    } },
                    React.createElement(TooltipHost, { id: "tooltip_edit", content: "Editar item", className: "ToolbarButtonTooltip", directionalHint: DirectionalHint.topCenter },
                        React.createElement(IconButton, { onClick: function () {
                                if (typeof _this.props.onEditAction === "function")
                                    _this.props.onEditAction(item);
                                _this.props.propertyPane.open();
                            }, iconProps: { iconName: "Edit" }, title: "Editar item", ariaLabel: "Editar item", "aria-describedby": "tooltip_edit", className: "ToolbarButton CanvasControlToolbar-item" })),
                    React.createElement(TooltipHost, { id: "tooltip_save", content: "Guardar item", className: "ToolbarButtonTooltip", directionalHint: DirectionalHint.topCenter },
                        React.createElement(IconButton, { onClick: function () {
                                if (_this.props.propertyPane.isPropertyPaneOpen())
                                    _this.props.propertyPane.close();
                                if (typeof _this.props.onSaveAction === "function")
                                    _this.props.onSaveAction(item);
                                _this.updateItem();
                            }, className: "ToolbarButton CanvasControlToolbar-item", iconProps: { iconName: "Save" }, title: "Guardar", ariaLabel: "Guardar", "aria-describedby": "tooltip_save" })),
                    React.createElement(TooltipHost, { id: "tooltip_delete", content: "Eliminar item", className: "ToolbarButtonTooltip", directionalHint: DirectionalHint.topCenter },
                        React.createElement(IconButton, { onClick: function () {
                                if (typeof _this.props.onDeleteAction === "function")
                                    _this.props.onDeleteAction(item);
                                if (!_this.listItemTempData)
                                    _this.listItemTempData = item;
                                if (_this.props.propertyPane.isPropertyPaneOpen())
                                    _this.props.propertyPane.close();
                                _this.deleteItem();
                            }, className: "ToolbarButton CanvasControlToolbar-item", iconProps: { iconName: "Delete" }, title: "Eliminar", ariaLabel: "Eliminar", "aria-describedby": "tooltip_delete" })),
                    _this.props.actions && typeof _this.props.actions === "function" && _this.props.actions(callbackProps))),
                _this.props.children && _this.props.children(callbackProps)));
        };
        var result = items.map(function (item, i) { return React.createElement(ItemComponent, { key: item.Id, item: item }); });
        if (this.props.ParentComponent)
            return this.props.ParentComponent({
                items: result,
                data: items
            });
        return (React.createElement(React.Fragment, null, result));
    };
    IntranetMedicamentosCRUD.prototype.createItem = function () {
        var _this = this;
        this.setState({
            status: 'Creating item...',
            items: []
        });
        this.getListItemEntityTypeName()
            .then(function (listItemEntityTypeName) {
            var body = JSON.stringify(__assign({ '__metadata': {
                    'type': listItemEntityTypeName
                } }, _this.listItemTempData ? _this.listItemTempData : {}));
            return _this.props.spHttpClient.post(_this.props.siteUrl + "/_api/web/lists/getbytitle('" + _this.props.listName + "')/items", SPHttpClient.configurations.v1, {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'Content-type': 'application/json;odata=verbose',
                    'odata-version': ''
                },
                body: body
            });
        })
            .then(function (response) {
            if (response.status === 400)
                throw "Not found";
            return response.json();
        })
            .then(function (item) {
            _this.setState({
                status: "Item '" + item.Title + "' (ID: " + item.Id + ") successfully created",
                items: []
            });
            _this.readItems();
        })
            .catch(function (error) {
            _this.setState({
                status: 'Error while creating the item: ' + error,
                items: []
            });
        });
    };
    IntranetMedicamentosCRUD.prototype.readItem = function () {
        var _this = this;
        this.setState({
            status: 'Loading latest items...',
            items: []
        });
        this.getLatestItemId()
            .then(function (itemId) {
            if (itemId === -1) {
                throw new Error('No items found in the list');
            }
            _this.setState({
                status: "Loading information about item ID: " + itemId + "...",
                items: []
            });
            return _this.props.spHttpClient.get(_this.props.siteUrl + "/_api/web/lists/getbytitle('" + _this.props.listName + "')/items(" + itemId + ")?$select=Title,Id", SPHttpClient.configurations.v1, {
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
            .then(function (item) {
            _this.setState({
                status: "Item ID: " + item.Id + ", Title: " + item.Title,
                items: []
            });
        })
            .catch(function (error) {
            _this.setState({
                status: 'Loading latest item failed with error: ' + error,
                items: []
            });
        });
    };
    IntranetMedicamentosCRUD.prototype.readItems = function () {
        var _this = this;
        this.setState({
            status: "Loading all items for " + this.props.listName + "...",
            items: []
        });
        this.props.spHttpClient.get(this.props.siteUrl + "/_api/web/lists/getbytitle('" + this.props.listName + "')/items?$select=Title,Id," + this.props.include + (this.props.limit ? "&$top=" + this.props.limit : "") + (this.props.filter ? "&$filter=" + this.props.filter : ""), SPHttpClient.configurations.v1, {
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
            .then(function (response) {
            _this.setState({
                status: "Successfully loaded " + response.value.length + " items",
                items: response.value
            });
        })
            .catch(function (error) {
            _this.setState({
                status: 'Loading all items failed with error: ' + error,
                items: []
            });
        });
    };
    IntranetMedicamentosCRUD.prototype.getLatestItemId = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.props.spHttpClient.get(_this.props.siteUrl + "/_api/web/lists/getbytitle('" + _this.props.listName + "')/items?$orderby=Id desc&$top=1&$select=id", SPHttpClient.configurations.v1, {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'odata-version': ''
                }
            })
                .then(function (response) {
                if (response.status === 400)
                    throw "Not found";
                return response.json();
            }, function (error) {
                reject(error);
            })
                .then(function (response) {
                if (response.value.length === 0) {
                    resolve(-1);
                }
                else {
                    resolve(response.value[0].Id);
                }
            });
        });
    };
    IntranetMedicamentosCRUD.prototype.updateItem = function () {
        var _this = this;
        var latestItemId = this.listItemTempData.Id;
        var etag = undefined;
        var listItemEntityTypeName = undefined;
        this.getListItemEntityTypeName()
            .then(function (listItemType) {
            listItemEntityTypeName = listItemType;
            _this.setState({
                status: "Loading information about item ID: " + latestItemId + "...",
                items: []
            });
            return _this.props.spHttpClient.get(_this.props.siteUrl + "/_api/web/lists/getbytitle('" + _this.props.listName + "')/items(" + latestItemId + ")?$select=Id", SPHttpClient.configurations.v1, {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'odata-version': ''
                }
            });
        })
            .then(function (response) {
            if (response.status === 400)
                throw "Not found";
            etag = response.headers.get('ETag');
            return response.json();
        })
            .then(function (item) {
            _this.setState({
                status: "Updating item with ID: " + latestItemId + "...",
                items: []
            });
            var body = JSON.stringify(__assign({ '__metadata': {
                    'type': listItemEntityTypeName
                } }, _this.listItemTempData ? _this.listItemTempData : {}));
            return _this.props.spHttpClient.post(_this.props.siteUrl + "/_api/web/lists/getbytitle('" + _this.props.listName + "')/items(" + item.Id + ")", SPHttpClient.configurations.v1, {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'Content-type': 'application/json;odata=verbose',
                    'odata-version': '',
                    'IF-MATCH': etag,
                    'X-HTTP-Method': 'MERGE'
                },
                body: body
            });
        })
            .then(function (response) {
            if (response.status === 400)
                throw "Not found";
            _this.setState({
                status: "Item with ID: " + latestItemId + " successfully updated",
                items: []
            });
            _this.readItems();
        })
            .catch(function (error) {
            _this.setState({
                status: "Error updating item: " + error
            });
        });
    };
    IntranetMedicamentosCRUD.prototype.deleteItem = function () {
        var _this = this;
        if (!window.confirm("Seguro que deseas eliminar \"" + this.listItemTempData.Title + "\"?")) {
            return;
        }
        var latestItemId = this.listItemTempData.Id;
        var etag = undefined;
        this.setState({
            status: "Loading information about item ID: " + latestItemId + "...",
            items: []
        });
        this.props.spHttpClient.get(this.props.siteUrl + "/_api/web/lists/getbytitle('" + this.props.listName + "')/items(" + latestItemId + ")?$select=Id", SPHttpClient.configurations.v1, {
            headers: {
                'Accept': 'application/json;odata=nometadata',
                'odata-version': ''
            }
        })
            .then(function (response) {
            if (response.status === 400)
                throw "Not found";
            etag = response.headers.get('ETag');
            return response.json();
        })
            .then(function (item) {
            _this.setState({
                status: "Deleting item with ID: " + latestItemId + "...",
                items: []
            });
            return _this.props.spHttpClient.post(_this.props.siteUrl + "/_api/web/lists/getbytitle('" + _this.props.listName + "')/items(" + item.Id + ")", SPHttpClient.configurations.v1, {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'Content-type': 'application/json;odata=verbose',
                    'odata-version': '',
                    'IF-MATCH': etag,
                    'X-HTTP-Method': 'DELETE'
                }
            });
        })
            .then(function (response) {
            if (response.status === 400)
                throw "Not found";
            _this.setState({
                status: "Item with ID: " + latestItemId + " successfully deleted",
                items: []
            });
            _this.readItems();
        })
            .catch(function (error) {
            _this.setState({
                status: "Error deleting item: " + error,
                items: []
            });
        });
    };
    IntranetMedicamentosCRUD.prototype.spHttpClientNotConfigured = function (props) {
        return props.spHttpClient === undefined || props.spHttpClient === null;
    };
    IntranetMedicamentosCRUD.prototype.listNotConfigured = function (props) {
        return props.listName === undefined ||
            props.listName === null ||
            props.listName.length === 0;
    };
    IntranetMedicamentosCRUD.prototype.getListItemEntityTypeName = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.listItemEntityTypeName) {
                resolve(_this.listItemEntityTypeName);
                return;
            }
            _this.props.spHttpClient.get(_this.props.siteUrl + "/_api/web/lists/getbytitle('" + _this.props.listName + "')?$select=ListItemEntityTypeFullName", SPHttpClient.configurations.v1, {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'odata-version': ''
                }
            })
                .then(function (response) {
                if (response.status === 400)
                    throw "Not found";
                return response.json();
            }, function (error) {
                reject(error);
            })
                .then(function (response) {
                _this.listItemEntityTypeName = response.ListItemEntityTypeFullName;
                resolve(_this.listItemEntityTypeName);
            });
        });
    };
    return IntranetMedicamentosCRUD;
}(React.Component));
export { IntranetMedicamentosCRUD };
var IntranetMedicamentosPageList = /** @class */ (function (_super) {
    __extends(IntranetMedicamentosPageList, _super);
    function IntranetMedicamentosPageList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            status: _this.listNotConfigured(props) ? 'Please configure list in Web Part properties' : 'Ready',
            items: []
        };
        return _this;
    }
    IntranetMedicamentosPageList.prototype.componentDidMount = function () {
        this.readItems();
    };
    IntranetMedicamentosPageList.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.listName !== prevProps.listName)
            this.readItems();
    };
    IntranetMedicamentosPageList.prototype.listNotConfigured = function (props) {
        return props.listName === undefined ||
            props.listName === null ||
            props.listName.length === 0;
    };
    IntranetMedicamentosPageList.prototype.readItems = function () {
        var _this = this;
        this.setState({
            status: "Loading all items for " + this.props.listName + "...",
            items: []
        });
        sp.web.lists.getByTitle(this.props.listName)
            .getItemsByCAMLQuery({
            ViewXml: "\n          <View>\n            <Query>\n              <Where>\n                <Eq>\n                  <FieldRef Name=\"Tags\"/>\n                  <Value Type=\"TaxonomyFieldType\">" + this.props.filterTag + "</Value>\n                </Eq>\n              </Where>\n            </Query>\n          </View>",
        })
            .then(function (value) {
            _this.setState({
                status: "Successfully loaded " + value.length + " items",
                items: value
            });
        })
            .catch(function (error) {
            _this.setState({
                status: 'Loading all items failed with error: ' + error,
                items: []
            });
        });
    };
    IntranetMedicamentosPageList.prototype.render = function () {
        var _a = this.state, items = _a.items, status = _a.status;
        if (this.props.children && typeof this.props.children !== "function")
            return React.createElement("h1", null, "Error [children] is not a function.");
        if (items.length === 0)
            return React.createElement("h1", null, status);
        return this.props.children({ items: items, status: status });
    };
    return IntranetMedicamentosPageList;
}(React.Component));
export { IntranetMedicamentosPageList };
//# sourceMappingURL=IntranetMedicamentosCRUD.js.map