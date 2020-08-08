import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
interface IPaymentMethod {
    title: string;
    subtitle: string;
    image: string;
    applyAttention: boolean;
    link: string;
}
export interface IMediosPagoWebPartProps {
    title: string;
    subtitle: string;
    paymentMethods: IPaymentMethod[];
    footerText: string;
}
export default class MediosPagoWebPart extends BaseClientSideWebPart<IMediosPagoWebPartProps> {
    private selectedIndex;
    onSelectItem: (index: any) => void;
    onDuplicateItem: (index: any) => void;
    onDeleteItem: (index: any) => void;
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    private itemPanel;
    private mainPane;
}
export {};
//# sourceMappingURL=MediosPagoWebPart.d.ts.map