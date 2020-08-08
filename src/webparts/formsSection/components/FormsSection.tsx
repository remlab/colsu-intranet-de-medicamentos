import * as React from 'react';
import styles from './FormsSection.module.scss';
import { IFormsSectionProps } from './IFormsSectionProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class FormsSection extends React.Component<IFormsSectionProps, {}> {
  public render(): React.ReactElement<IFormsSectionProps> {
    const src = 'https://forms.office.com/Pages/ResponsePage.aspx?id=LECteWyuVkeuCWUfx6Tgq5Ob8rPICZxHlFo1kGKwE6pUMEZHUzBVTlVTVVA4QzZOMkpDUkdXRTRNMS4u&lang=es-ES&themecolor=0078d4&oembedsso=true&hostId=2678a516bd614b03b5b73695674ed0dd&origin=FormsWebPart&preview=true';
    return (
      <div className={ styles.formsSection }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: 70}}>
              <img style={{width: '100%', height: 105}} src ="https://remagencia.com/media/colsubsidio/forms_head.png" />
            </div>
            <iframe className={ styles.iframe } src={src}></iframe>
          </div>
        </div>
      </div>
    );
  }
}
