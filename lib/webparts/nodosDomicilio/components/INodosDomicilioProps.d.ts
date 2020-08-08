import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IPickerTerms } from '@pnp/spfx-property-controls/lib/PropertyFieldTermPicker';
export interface INodosDomicilioModel {
    Id: number;
    Title: string;
    BannerImageUrl?: {
        Url: string;
        Description: string;
    };
    Tags: {
        Label: string;
    }[];
}
export interface INodosDomicilioProps {
    list: string;
    title: string;
    subtitle: string;
    terms: IPickerTerms;
    context: WebPartContext;
    inDesignMode: boolean;
}
//# sourceMappingURL=INodosDomicilioProps.d.ts.map