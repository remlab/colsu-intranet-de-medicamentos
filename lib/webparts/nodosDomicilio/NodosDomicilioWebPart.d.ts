import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPickerTerms } from '@pnp/spfx-property-controls/lib/PropertyFieldTermPicker';
export interface INodosDomicilioWebPartProps {
    title: string;
    subtitle: string;
    list: string;
    terms: IPickerTerms;
}
export default class NodosDomicilioWebPart extends BaseClientSideWebPart<INodosDomicilioWebPartProps> {
    onInit(): Promise<void>;
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=NodosDomicilioWebPart.d.ts.map