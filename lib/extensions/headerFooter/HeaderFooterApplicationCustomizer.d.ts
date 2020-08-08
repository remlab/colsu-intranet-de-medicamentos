import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
export interface IHeaderFooterApplicationCustomizerProperties {
}
export default class HeaderFooterApplicationCustomizer extends BaseApplicationCustomizer<IHeaderFooterApplicationCustomizerProperties> {
    private _topPlaceholder;
    private _bottomPlaceholder;
    private _onDispose;
    private _renderPlaceHolders;
    onInit(): Promise<void>;
}
//# sourceMappingURL=HeaderFooterApplicationCustomizer.d.ts.map