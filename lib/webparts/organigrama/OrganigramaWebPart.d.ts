import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyFieldGroupOrPerson } from '@pnp/spfx-property-controls/lib/PropertyFieldPeoplePicker';
import { IOrganigramaModel } from './components/IOrganigramaProps';
export interface IOrganigramaWebPartProps {
    list: string;
    title: string;
    subtitle: string;
    selectedItem: IOrganigramaModel;
    person: IPropertyFieldGroupOrPerson[];
}
export default class OrganigramaWebPart extends BaseClientSideWebPart<IOrganigramaWebPartProps> {
    onSelectItem: (item: any) => void;
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    private itemPanel;
    private mainPanel;
}
//# sourceMappingURL=OrganigramaWebPart.d.ts.map