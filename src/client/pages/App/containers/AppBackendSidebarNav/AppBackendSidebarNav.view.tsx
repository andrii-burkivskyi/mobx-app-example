
import React, { Component } from "react";
import { observer } from "mobx-react";

import dashboardIcon from "../../../../icons/dashboard.svg";
import entityIcon from "../../../../icons/entity.svg";
import { Routes } from "../../../../core/routes";

import { AppSidebarNavItem } from "../AppSidebarNavItem/AppSidebarNavItem.view";

import { AppBackendSidebarNavStore } from "./AppBackendSidebarNav.store";

@observer
export class AppBackendSidebarNavView extends Component<ViewOf<AppBackendSidebarNavStore>> {
    render() {
        const { model } = this.props;
        return (
            <>
                <AppSidebarNavItem to={Routes.BACKEND} params={model.params} svg={dashboardIcon} exact />
                <AppSidebarNavItem to={Routes.BACKEND_ENTITY} params={model.params} svg={entityIcon} exact />
            </>
        );
    }
}
