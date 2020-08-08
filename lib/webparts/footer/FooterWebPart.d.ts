import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IFooterWebPartProps {
}
export default class FooterWebPart extends BaseClientSideWebPart<IFooterWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
}
//# sourceMappingURL=FooterWebPart.d.ts.map