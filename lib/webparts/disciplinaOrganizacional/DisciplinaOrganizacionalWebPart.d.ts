import "@pnp/sp/webs";
import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPickerTerms } from '@pnp/spfx-property-controls/lib/PropertyFieldTermPicker';
export interface IDisciplinaOrganizacionalWebPartProps {
    title: string;
    subtitle: string;
    list: string;
    terms: IPickerTerms;
}
export default class DisciplinaOrganizacionalWebPart extends BaseClientSideWebPart<IDisciplinaOrganizacionalWebPartProps> {
    onInit(): Promise<void>;
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=DisciplinaOrganizacionalWebPart.d.ts.map