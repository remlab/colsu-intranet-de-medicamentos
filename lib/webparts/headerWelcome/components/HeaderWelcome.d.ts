import * as React from 'react';
import { IHeaderWelcomeProps } from './IHeaderWelcomeProps';
import "@pnp/sp/webs";
import "@pnp/sp/sites";
import "@pnp/sp/files";
import "@pnp/sp/folders";
interface ICurrentUser {
    Id: number;
    Title: string;
    FirstName: string;
}
export default class HeaderWelcome extends React.Component<IHeaderWelcomeProps, {
    currentUser: ICurrentUser;
}> {
    constructor(props: any);
    componentDidMount(): void;
    render(): React.ReactElement<IHeaderWelcomeProps>;
}
export {};
//# sourceMappingURL=HeaderWelcome.d.ts.map