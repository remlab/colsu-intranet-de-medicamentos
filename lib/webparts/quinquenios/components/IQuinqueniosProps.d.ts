import { WebPartContext } from "@microsoft/sp-webpart-base";
export interface IQuinqueniosModel {
    Id: number;
    Title: string;
    A_x00f1_os: number;
    Cargo: string;
    Foto: {
        Description: string;
        Url: string;
    };
    Yammer: {
        Description: string;
        Url: string;
    };
}
export interface IQuinqueniosProps {
    title: string;
    subtitle: string;
    text1: string;
    text2: string;
    sign: {
        text: string;
        image: string;
    };
    list: string;
    inDesignMode: boolean;
    context: WebPartContext;
    onSelectSignImage(data: string): void;
    onSelectItem(data: IQuinqueniosModel): void;
}
//# sourceMappingURL=IQuinqueniosProps.d.ts.map