import React, { Component } from "react";
import { observer } from "mobx-react";

import Link from "../../../../components/Link/Link";
import Icon from "../../../../components/Icon/Icon";

import styles from "./app-sidebar-nav-item.scss";

interface ComponentProps {
    to: string,
    params?: CommonMap,
    svg: string,
    exact?: boolean
}

@observer
export class AppSidebarNavItem extends Component<ComponentProps> {
    render() {
        return (
            <Link className={styles.link} to={this.props.to} params={this.props.params}  exact={this.props.exact} >
                <Icon className={styles.icon} svg={this.props.svg} />
            </Link>
        );
    }
}
