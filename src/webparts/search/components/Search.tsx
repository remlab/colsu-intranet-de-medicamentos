import * as React from 'react';
import styles from './Search.module.scss';
import { ISearchProps } from './ISearchProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Search extends React.Component<ISearchProps, {}> {
  public render(): React.ReactElement<ISearchProps> {
    return (
      <div className={ styles.search }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column["ms-lgPush1"] }>
             <div className={styles.section_search}>
                <div className={styles.search__container}>
                  <form action="" className={styles.search__container__form}>
                      <img src="http://aremlab.com/media/colsubsidio/institucional/search/lupa.png" alt=""/>
                     <input type="text" name="name" placeholder="Ingresa tu consulta" />
                     <button>Buscar</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
