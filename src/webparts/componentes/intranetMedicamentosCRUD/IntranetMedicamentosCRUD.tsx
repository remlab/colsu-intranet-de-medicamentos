import * as React from 'react';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";

// import styles from './IntranetMedicamentosCRUD.module.scss';
import { IIntranetMedicamentosCRUD } from './IIntranetMedicamentosCRUD';
import { IIntranetMedicamentosCRUDProps, IIntranetMedicamentosCRUDChildrenProps, IIntranetMedicamentosPageListProps } from './IIntranetMedicamentosCRUDProps';
import { IIntranetMedicamentosCRUDState } from './IIntranetMedicamentosCRUDState';
import { IListItem, IList } from './IListItem';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';

import styles from './IntranetMedicamentosCRUD.module.scss';

export class IntranetMedicamentosCRUDList extends React.Component<{
  listId: string;
  spHttpClient: SPHttpClient;
  siteUrl: string;
  children(listTitle: string): React.ReactElement
}, {
  status: string;
  lists: IList[];
}> {

  constructor(props) {
    super(props);
    this.state = {
      status: 'Ready...',
      lists: []
    };
  }

  public static defaultProps = {
    limit: null
  };

  public componentDidMount() {
    this.getLists();
  }

  protected getListTitleById(): string {
    const lists: IList[] = this.state.lists.filter(it => it.Id === this.props.listId);
    return lists.length > 0 ? lists[lists.length - 1].Title : null;
  }

  protected getLists(): void {
    this.setState({
      status: 'Retrieving lists...',
      lists: []
    });
    this.props.spHttpClient.get(`${this.props.siteUrl}/_api/web/lists?$select=Title,Id`,
      SPHttpClient.configurations.v1,
      {
        headers: {
          'Accept': 'application/json;odata=nometadata',
          'odata-version': ''
        }
      })
      .then((response: SPHttpClientResponse): Promise<{ value: IListItem[] }> => {
        if (response.status === 400) throw "Not found";
        return response.json();
      })
      .then((response: { value }): void => {
        this.setState({
          status: `Successfully loaded ${response.value.length} lists`,
          lists: response.value
        });
      }, (error: any): void => {
        this.setState({
          status: 'Loading all lists failed with error: ' + error,
          lists: []
        });
      });
  }

  public render() {
    if (this.state.lists.length === 0)
      return (<h1>{this.state.status}</h1>);

    const listTitle = this.getListTitleById();
    if (!listTitle) return (<h1>{this.state.status}</h1>);

    return (this.props.children(listTitle));
  }
}

export class IntranetMedicamentosCRUD extends React.Component<IIntranetMedicamentosCRUDProps, IIntranetMedicamentosCRUDState> implements IIntranetMedicamentosCRUD {

  public listItemEntityTypeName: string = undefined;

  public listItemTempData: IListItem = null;

  constructor(props: IIntranetMedicamentosCRUDProps, state: IIntranetMedicamentosCRUDState) {
    super(props);

    this.state = {
      status: this.listNotConfigured(props) || this.spHttpClientNotConfigured(props) ? 'Please configure list or httpclient in Web Part properties' : 'Ready',
      items: []
    };

    this.createItem = this.createItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  public componentDidMount() {
    this.readItems();
  }

  public componentDidUpdate(prevProps) {
    if (this.props.listName !== prevProps.listName) this.readItems();
  }

  public componentWillReceiveProps(nextProps: IIntranetMedicamentosCRUDProps): void {
    // this.listItemEntityTypeName = undefined;
    // this.setState({
    //   status: this.listNotConfigured(nextProps) || this.spHttpClientNotConfigured(nextProps) ? 'Please configure list or httpclient in Web Part properties' : 'Ready',
    //   items: []
    // });
  }

  public render(): React.ReactElement<IIntranetMedicamentosCRUDProps> {
    const { items, status } = this.state;

    if (this.props.children && typeof this.props.children !== "function") return <h1>Error [children] is not a function.</h1>;
    if (this.props.ParentComponent && typeof this.props.ParentComponent !== "function") return <h1>Error [ParentComponent] is not a function.</h1>;
    if (items.length === 0) {
      return (
        <Placeholder
          contentClassName="ms-Grid-col ms-sm12 ms-md12 ms-lg12"
          iconName='Edit'
          iconText='La lista no contiene items'
          description='Por favor agregue el primer item'
          buttonLabel='Agregar'
          onConfigure={() => { this.createItem(); }} />
      );
    }

    const ItemComponent = ({ item }) => {
      const callbackProps: IIntranetMedicamentosCRUDChildrenProps = { item, handleCreate: this.createItem, handleUpdate: this.updateItem };
      return (
        <div className={styles.container} style={{ paddingTop: this.props.inDesignMode ? 36 : 0 }}>
          {
            this.props.inDesignMode && (
              <Stack horizontal styles={{
                root: {
                  position: "absolute",
                  top: 0,
                  zIndex: 1,
                  transition: 'all 0.3s ease 0s'
                }
              }}>
                <TooltipHost
                  id="tooltip_edit"
                  content="Editar item"
                  className="ToolbarButtonTooltip"
                  directionalHint={DirectionalHint.topCenter}>
                  <IconButton onClick={() => {
                    if (typeof this.props.onEditAction === "function") this.props.onEditAction(item);
                    this.props.propertyPane.open();
                  }} iconProps={{ iconName: "Edit" }} title="Editar item" ariaLabel="Editar item" aria-describedby="tooltip_edit" className="ToolbarButton CanvasControlToolbar-item" />
                </TooltipHost>
                <TooltipHost
                  id={`tooltip_save`}
                  content="Guardar item"
                  className="ToolbarButtonTooltip"
                  directionalHint={DirectionalHint.topCenter}>
                  <IconButton onClick={() => {
                    if (this.props.propertyPane.isPropertyPaneOpen()) this.props.propertyPane.close();
                    if (typeof this.props.onSaveAction === "function") this.props.onSaveAction(item);
                    this.updateItem();
                  }} className="ToolbarButton CanvasControlToolbar-item" iconProps={{ iconName: "Save" }} title="Guardar" ariaLabel="Guardar" aria-describedby={`tooltip_save`} />
                </TooltipHost>
                <TooltipHost
                  id={`tooltip_delete`}
                  content="Eliminar item"
                  className="ToolbarButtonTooltip"
                  directionalHint={DirectionalHint.topCenter}>
                  <IconButton onClick={() => {
                    if (typeof this.props.onDeleteAction === "function") this.props.onDeleteAction(item);
                    if (!this.listItemTempData) this.listItemTempData = item;
                    if (this.props.propertyPane.isPropertyPaneOpen()) this.props.propertyPane.close();
                    this.deleteItem();
                  }} className="ToolbarButton CanvasControlToolbar-item" iconProps={{ iconName: "Delete" }} title="Eliminar" ariaLabel="Eliminar" aria-describedby={`tooltip_delete`} />
                </TooltipHost>
                {
                  this.props.actions && typeof this.props.actions === "function" && this.props.actions(callbackProps)
                }
              </Stack>
            )
          }
          {
            this.props.children && this.props.children(callbackProps)
          }
        </div>
      );
    };

    const result = items.map((item: IListItem, i: number) => <ItemComponent key={item.Id} item={item} />);

    if (this.props.ParentComponent) return this.props.ParentComponent({
      items: result,
      data: items
    });

    return (<>{result}</>);
  }

  public createItem(): void {
    this.setState({
      status: 'Creating item...',
      items: []
    });

    this.getListItemEntityTypeName()
      .then((listItemEntityTypeName: string): Promise<SPHttpClientResponse> => {
        const body: string = JSON.stringify({
          '__metadata': {
            'type': listItemEntityTypeName
          },
          ...this.listItemTempData ? this.listItemTempData : {}
        });
        return this.props.spHttpClient.post(`${this.props.siteUrl}/_api/web/lists/getbytitle('${this.props.listName}')/items`,
          SPHttpClient.configurations.v1,
          {
            headers: {
              'Accept': 'application/json;odata=nometadata',
              'Content-type': 'application/json;odata=verbose',
              'odata-version': ''
            },
            body
          });
      })
      .then((response: SPHttpClientResponse): Promise<IListItem> => {
        if (response.status === 400) throw "Not found";
        return response.json();
      })
      .then((item: IListItem): void => {
        this.setState({
          status: `Item '${item.Title}' (ID: ${item.Id}) successfully created`,
          items: []
        });
        this.readItems();
      })
      .catch((error: any): void => {
        this.setState({
          status: 'Error while creating the item: ' + error,
          items: []
        });
      });
  }

  public readItem(): void {
    this.setState({
      status: 'Loading latest items...',
      items: []
    });
    this.getLatestItemId()
      .then((itemId: number): Promise<SPHttpClientResponse> => {
        if (itemId === -1) {
          throw new Error('No items found in the list');
        }

        this.setState({
          status: `Loading information about item ID: ${itemId}...`,
          items: []
        });
        return this.props.spHttpClient.get(`${this.props.siteUrl}/_api/web/lists/getbytitle('${this.props.listName}')/items(${itemId})?$select=Title,Id`,
          SPHttpClient.configurations.v1,
          {
            headers: {
              'Accept': 'application/json;odata=nometadata',
              'odata-version': ''
            }
          });
      })
      .then((response: SPHttpClientResponse): Promise<IListItem> => {
        if (response.status === 400) throw "Not found";
        return response.json();
      })
      .then((item: IListItem): void => {
        this.setState({
          status: `Item ID: ${item.Id}, Title: ${item.Title}`,
          items: []
        });
      })
      .catch((error: any): void => {
        this.setState({
          status: 'Loading latest item failed with error: ' + error,
          items: []
        });
      });
  }

  public readItems(): void {
    this.setState({
      status: `Loading all items for ${this.props.listName}...`,
      items: []
    });
    this.props.spHttpClient.get(`${this.props.siteUrl}/_api/web/lists/getbytitle('${this.props.listName}')/items?$select=Title,Id,${this.props.include}${this.props.limit ? `&$top=${this.props.limit}` : ``}${this.props.filter ? `&$filter=${this.props.filter}` : ``}`,
      SPHttpClient.configurations.v1,
      {
        headers: {
          'Accept': 'application/json;odata=nometadata',
          'odata-version': ''
        }
      })
      .then((response: SPHttpClientResponse): Promise<{ value: IListItem[] }> => {
        if (response.status === 400) throw "Not found";
        return response.json();
      })
      .then((response: { value: IListItem[] }): void => {
        this.setState({
          status: `Successfully loaded ${response.value.length} items`,
          items: response.value
        });
      })
      .catch((error: any): void => {
        this.setState({
          status: 'Loading all items failed with error: ' + error,
          items: []
        });
      });
  }

  public getLatestItemId(): Promise<number> {
    return new Promise<number>((resolve: (itemId: number) => void, reject: (error: any) => void): void => {
      this.props.spHttpClient.get(`${this.props.siteUrl}/_api/web/lists/getbytitle('${this.props.listName}')/items?$orderby=Id desc&$top=1&$select=id`,
        SPHttpClient.configurations.v1,
        {
          headers: {
            'Accept': 'application/json;odata=nometadata',
            'odata-version': ''
          }
        })
        .then((response: SPHttpClientResponse): Promise<{ value: { Id: number }[] }> => {
          if (response.status === 400) throw "Not found";
          return response.json();
        }, (error: any): void => {
          reject(error);
        })
        .then((response: { value: { Id: number }[] }): void => {
          if (response.value.length === 0) {
            resolve(-1);
          }
          else {
            resolve(response.value[0].Id);
          }
        });
    });
  }

  public updateItem(): void {
    let latestItemId: number = this.listItemTempData.Id;
    let etag: string = undefined;
    let listItemEntityTypeName: string = undefined;
    this.getListItemEntityTypeName()
      .then((listItemType: string): Promise<SPHttpClientResponse> => {
        listItemEntityTypeName = listItemType;
        this.setState({
          status: `Loading information about item ID: ${latestItemId}...`,
          items: []
        });
        return this.props.spHttpClient.get(`${this.props.siteUrl}/_api/web/lists/getbytitle('${this.props.listName}')/items(${latestItemId})?$select=Id`,
          SPHttpClient.configurations.v1,
          {
            headers: {
              'Accept': 'application/json;odata=nometadata',
              'odata-version': ''
            }
          });
      })
      .then((response: SPHttpClientResponse): Promise<IListItem> => {
        if (response.status === 400) throw "Not found";
        etag = response.headers.get('ETag');
        return response.json();
      })
      .then((item: IListItem): Promise<SPHttpClientResponse> => {
        this.setState({
          status: `Updating item with ID: ${latestItemId}...`,
          items: []
        });
        const body: string = JSON.stringify({
          '__metadata': {
            'type': listItemEntityTypeName
          },
          ...this.listItemTempData ? this.listItemTempData : {}
        });
        return this.props.spHttpClient.post(`${this.props.siteUrl}/_api/web/lists/getbytitle('${this.props.listName}')/items(${item.Id})`,
          SPHttpClient.configurations.v1,
          {
            headers: {
              'Accept': 'application/json;odata=nometadata',
              'Content-type': 'application/json;odata=verbose',
              'odata-version': '',
              'IF-MATCH': etag,
              'X-HTTP-Method': 'MERGE'
            },
            body
          });
      })
      .then((response: SPHttpClientResponse): void => {
        if (response.status === 400) throw "Not found";
        this.setState({
          status: `Item with ID: ${latestItemId} successfully updated`,
          items: []
        });
        this.readItems();
      })
      .catch((error: any): void => {
        this.setState({
          status: `Error updating item: ${error}`
        });
      });
  }

  public deleteItem(): void {
    if (!window.confirm(`Seguro que deseas eliminar "${this.listItemTempData.Title}"?`)) {
      return;
    }

    let latestItemId: number = this.listItemTempData.Id;
    let etag: string = undefined;
    this.setState({
      status: `Loading information about item ID: ${latestItemId}...`,
      items: []
    });
    this.props.spHttpClient.get(`${this.props.siteUrl}/_api/web/lists/getbytitle('${this.props.listName}')/items(${latestItemId})?$select=Id`,
      SPHttpClient.configurations.v1,
      {
        headers: {
          'Accept': 'application/json;odata=nometadata',
          'odata-version': ''
        }
      })
      .then((response: SPHttpClientResponse): Promise<IListItem> => {
        if (response.status === 400) throw "Not found";
        etag = response.headers.get('ETag');
        return response.json();
      })
      .then((item: IListItem): Promise<SPHttpClientResponse> => {
        this.setState({
          status: `Deleting item with ID: ${latestItemId}...`,
          items: []
        });
        return this.props.spHttpClient.post(`${this.props.siteUrl}/_api/web/lists/getbytitle('${this.props.listName}')/items(${item.Id})`,
          SPHttpClient.configurations.v1,
          {
            headers: {
              'Accept': 'application/json;odata=nometadata',
              'Content-type': 'application/json;odata=verbose',
              'odata-version': '',
              'IF-MATCH': etag,
              'X-HTTP-Method': 'DELETE'
            }
          });
      })
      .then((response: SPHttpClientResponse): void => {
        if (response.status === 400) throw "Not found";
        this.setState({
          status: `Item with ID: ${latestItemId} successfully deleted`,
          items: []
        });
        this.readItems();
      })
      .catch((error: any): void => {
        this.setState({
          status: `Error deleting item: ${error}`,
          items: []
        });
      });
  }

  public spHttpClientNotConfigured(props: IIntranetMedicamentosCRUDProps): boolean {
    return props.spHttpClient === undefined || props.spHttpClient === null;
  }

  public listNotConfigured(props: IIntranetMedicamentosCRUDProps): boolean {
    return props.listName === undefined ||
      props.listName === null ||
      props.listName.length === 0;
  }

  public getListItemEntityTypeName(): Promise<string> {
    return new Promise<string>((resolve: (listItemEntityTypeName: string) => void, reject: (error: any) => void): void => {
      if (this.listItemEntityTypeName) {
        resolve(this.listItemEntityTypeName);
        return;
      }

      this.props.spHttpClient.get(`${this.props.siteUrl}/_api/web/lists/getbytitle('${this.props.listName}')?$select=ListItemEntityTypeFullName`,
        SPHttpClient.configurations.v1,
        {
          headers: {
            'Accept': 'application/json;odata=nometadata',
            'odata-version': ''
          }
        })
        .then((response: SPHttpClientResponse): Promise<{ ListItemEntityTypeFullName: string }> => {
          if (response.status === 400) throw "Not found";
          return response.json();
        }, (error: any): void => {
          reject(error);
        })
        .then((response: { ListItemEntityTypeFullName: string }): void => {
          this.listItemEntityTypeName = response.ListItemEntityTypeFullName;
          resolve(this.listItemEntityTypeName);
        });
    });
  }
}

export class IntranetMedicamentosPageList extends React.Component<IIntranetMedicamentosPageListProps, IIntranetMedicamentosCRUDState> {

  constructor(props) {
    super(props);
    this.state = {
      status: this.listNotConfigured(props) ? 'Please configure list in Web Part properties' : 'Ready',
      items: []
    };
  }

  public componentDidMount() {
    this.readItems();
  }

  public componentDidUpdate(prevProps) {
    if (this.props.listName !== prevProps.listName) this.readItems();
  }

  public listNotConfigured(props: IIntranetMedicamentosCRUDProps): boolean {
    return props.listName === undefined ||
      props.listName === null ||
      props.listName.length === 0;
  }

  public readItems(): void {
    this.setState({
      status: `Loading all items for ${this.props.listName}...`,
      items: []
    });

    sp.web.lists.getByTitle(this.props.listName)
      .getItemsByCAMLQuery({
        ViewXml: `
          <View>
            <Query>
              <Where>
                <Eq>
                  <FieldRef Name="Tags"/>
                  <Value Type="TaxonomyFieldType">${this.props.filterTag}</Value>
                </Eq>
              </Where>
            </Query>
          </View>`,
      })
      .then((value: IListItem[]): void => {
        this.setState({
          status: `Successfully loaded ${value.length} items`,
          items: value
        });
      })
      .catch((error: any): void => {
        this.setState({
          status: 'Loading all items failed with error: ' + error,
          items: []
        });
      });
  }
  public render() {
    const { items, status } = this.state;

    if (this.props.children && typeof this.props.children !== "function") return <h1>Error [children] is not a function.</h1>;
    if (items.length === 0) return <h1>{status}</h1>;

    return this.props.children({ items, status });
  }
}