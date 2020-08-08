import { IFilePickerResult } from '@pnp/spfx-controls-react/lib/FilePicker';

interface IBannerSlide {
  cardTitle: string;
  cardSubtitle: string;
  cardBrief: string;
  slideImage: IFilePickerResult;
  cardImage: IFilePickerResult;
}

export interface IBannerPrincipalState {}