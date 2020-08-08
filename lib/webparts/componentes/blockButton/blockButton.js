import * as React from 'react';
import styles from './blockButton.module.scss';
export default (function (_a) {
    var children = _a.children, data_url = _a.data_url, margin = _a.margin;
    return (React.createElement("div", null,
        React.createElement("div", { className: styles.cta, style: { margin: margin + "rem" } },
            React.createElement("a", { href: data_url },
                " ",
                children,
                " "))));
});
//# sourceMappingURL=blockButton.js.map