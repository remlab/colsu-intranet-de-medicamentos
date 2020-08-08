import * as React from 'react';
import styles from './Navigator.module.scss';
import { INavigatorProps } from './INavigatorProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {
     BaseApplicationCustomizer, 
     PlaceholderContent,
     PlaceholderName
   } from '@microsoft/sp-application-base';

   import { Icon } from 'office-ui-fabric-react/lib/Icon';

export class Navigator extends React.Component<INavigatorProps, {}> {
  public render(): React.ReactElement<INavigatorProps> {
    return (
      <div className={styles.app}>
       <div className={styles.top}>
         <div className={styles.section_header}>
          <div className={styles.header}>
            <a href="/sites/IntranetdeMedicamentos"><img className={styles.header__logo} src="http://aremlab.com/media/colsubsidio/institucional/header/logo_colsub.png" alt=""/></a>
            <ul className={styles.header__nav}>
              <li><a href="http://windtiintrane01/isolucion/" target="_blank">
                <img src="http://aremlab.com/media/colsubsidio/institucional/header/link1.svg" alt=""/></a></li>
              <li><a href="https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SitePages/ServiciosCompartidosV2.aspx" target="_blank">
                <img src="http://aremlab.com/media/colsubsidio/institucional/header/link2.svg" alt=""/></a></li>
              <li><a href="https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SitePages/convocatorias-internas.aspx" target="_blank">
                <img src="http://aremlab.com/media/colsubsidio/institucional/header/link3.svg" alt=""/></a></li>
            </ul>
            <div className={styles.hamburguer}> <Icon style={{color: 'white', fontSize: 25,  marginRight: '1rem'}} iconName="CollapseMenu" /> </div>
          </div>
          <div className={styles.headerMobile}>
            <ul className={styles.header__nav}>
              <li><a href="http://windtiintrane01/isolucion/" target="_blank">
                <img src="http://aremlab.com/media/colsubsidio/institucional/header/link1.svg" alt=""/></a></li>
              <li><a href="https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SitePages/ServiciosCompartidosV2.aspx" target="_blank">
                <img src="http://aremlab.com/media/colsubsidio/institucional/header/link2.svg" alt=""/></a></li>
              <li><a href="https://colsubsidio365.sharepoint.com/sites/IntranetCorporativa/SitePages/convocatorias-internas.aspx" target="_blank">
                <img src="http://aremlab.com/media/colsubsidio/institucional/header/link3.svg" alt=""/></a></li>
            </ul>
          </div>
        </div>
       </div>
     </div>
    );
  }
}

export class NavigatorBottom extends React.Component<INavigatorProps, {}> {
  public render(): React.ReactElement<INavigatorProps> {
    return (
      <div className={styles.app}>
       New
     </div>
    );
  }
}
