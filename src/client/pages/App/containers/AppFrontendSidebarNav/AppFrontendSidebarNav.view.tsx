
import React, { Component } from "react";
import { observer } from "mobx-react";

import dashboardIcon from "../../../../icons/dashboard.svg";
import { Routes } from "../../../../core/routes";

import { AppFrontendSidebarNavStore } from "./AppFrontendSidebarNav.store";
import { AppSidebarNavItem } from "../AppSidebarNavItem/AppSidebarNavItem.view";


@observer
export class AppFrontendSidebarNavView extends Component<ViewOf<AppFrontendSidebarNavStore>> {
    render() {
        const { model } = this.props;
        return (
            <>
                <AppSidebarNavItem to={Routes.FRONTEND} params={model.params} svg={dashboardIcon} exact />
            </>
        );
    }
}
