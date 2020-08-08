import * as React from 'react';
import styles from './CanalesDomicilio.module.scss';

import { ICanalesDomicilioProps } from './ICanalesDomicilioProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class CanalesDomicilio extends React.Component<ICanalesDomicilioProps, {}> {
  public render(): React.ReactElement<ICanalesDomicilioProps> {
    const { title, subtitle, phone, whatsapp, website } = this.props;
    return (
      <div className={styles.section_deliveryChannels}>
        <div className={styles.section_deliveryChannels__header}>
          <h2>{title} <strong>{subtitle}</strong></h2>
        </div>
        <div className={styles.section_deliveryChannels__content}>
          <img src="https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/canal-comercial/SiteAssets/SitePages/canal-comercial/icon1.svg" alt="" />
          <a href="">{phone}</a>
        </div>
        <div className={styles.section_deliveryChannels__content}>
          <img src="https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/canal-comercial/SiteAssets/SitePages/canal-comercial/icon3.svg" alt="" />
          <a href="">{whatsapp}</a>
        </div>
        <div className={styles.section_deliveryChannels__content}>
          <img src="https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/canal-comercial/SiteAssets/SitePages/canal-comercial/icon4.svg" alt="" />
          <a href="">{website}</a>
        </div>
      </div>
    );
  }
}
