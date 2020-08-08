import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface ICanalesDomicilioWebPartProps {
    title: string;
    subtitle: string;
    phone: string;
    whatsapp: string;
    website: string;
}
export default class CanalesDomicilioWebPart extends BaseClientSideWebPart<ICanalesDomicilioWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=CanalesDomicilioWebPart.d.ts.map