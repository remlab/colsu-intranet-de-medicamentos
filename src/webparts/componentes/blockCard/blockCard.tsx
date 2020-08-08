import * as React from 'react';

import styles from './blockCard.module.scss';

const BlockCard = ({ children, margin, padding, textAlign }) => {
  return (
    <div>
      <div className={styles.card} style={{margin: `${margin}`, padding: `${padding}`, textAlign: textAlign}}>
          { children }
      </div>
    </div>
  );
};

BlockCard.defaultProps = {margin: '1', padding: '1', textAlign: 'left'};

export default BlockCard;


