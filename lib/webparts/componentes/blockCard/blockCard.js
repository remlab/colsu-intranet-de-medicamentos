import * as React from 'react';
import styles from './blockCard.module.scss';
var BlockCard = function (_a) {
    var children = _a.children, margin = _a.margin, padding = _a.padding, textAlign = _a.textAlign;
    return (React.createElement("div", null,
        React.createElement("div", { className: styles.card, style: { margin: "" + margin, padding: "" + padding, textAlign: textAlign } }, children)));
};
BlockCard.defaultProps = { margin: '1', padding: '1', textAlign: 'left' };
export default BlockCard;
//# sourceMappingURL=blockCard.js.map