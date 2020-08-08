import { IFilePickerResult } from '@pnp/spfx-controls-react/lib/FilePicker';
interface INewsSlide {
    cardTitle: string;
    cardSubtitle: string;
    cardBrief: string;
    cardImage: IFilePickerResult;
}
export interface INewsState {
    slides: INewsSlide[];
}
export {};
//# sourceMappingURL=INewsState.d.ts.map