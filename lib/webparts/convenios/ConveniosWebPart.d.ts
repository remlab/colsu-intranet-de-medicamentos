import "@pnp/sp/webs";
import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPickerTerms } from '@pnp/spfx-property-controls/lib/PropertyFieldTermPicker';
export interface IConveniosWebPartProps {
    title: string;
    subtitle: string;
    headerClassname: string;
    boxImage: boolean;
    boxsBySlide: number;
    list: string;
    terms: IPickerTerms;
}
export default class ConveniosWebPart extends BaseClientSideWebPart<IConveniosWebPartProps> {
    onInit(): Promise<void>;
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=ConveniosWebPart.d.ts.map