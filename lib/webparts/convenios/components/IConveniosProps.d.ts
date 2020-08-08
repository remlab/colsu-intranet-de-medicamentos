import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IPickerTerms } from '@pnp/spfx-property-controls/lib/PropertyFieldTermPicker';
export interface IConveniosModel {
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
export interface IConveniosProps {
    list: string;
    title: string;
    subtitle: string;
    headerClassname: string;
    boxImage: boolean;
    boxsBySlide: number;
    terms: IPickerTerms;
    context: WebPartContext;
    inDesignMode: boolean;
}
//# sourceMappingURL=IConveniosProps.d.ts.map