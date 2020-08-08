import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IPickerTerms } from '@pnp/spfx-property-controls/lib/PropertyFieldTermPicker';
export interface INoticiasProps {
    list: string;
    title: string;
    subtitle: string;
    terms: IPickerTerms;
    context: WebPartContext;
    inDesignMode: boolean;
}
export interface INoticiasModel {
    Id: number;
    Title: string;
    BannerImageUrl?: {
        Url: string;
        Description: string;
    };
    Tags: {
        Label: string;
    }[];
    Description?: string;
    OData__OriginalSourceUrl?: string;
}
//# sourceMappingURL=INoticiasProps.d.ts.map