import React, { Component } from "react";
import { observer } from "mobx-react";

import Icon from "../../../../components/Icon/Icon";
import Link from "../../../../components/Link/Link";

import frontendIcon from "../../../../icons/frontend.svg";
import backendIcon from "../../../../icons/backend.svg";

import { t } from "../../../../utils/i18n/translations";
import { Routes } from "../../../../core/routes";

import { AppHeaderNavStore } from "./AppHeaderNav.store";
import styles from "./app-header-nav.scss";

@observer
export class AppHeaderNavView extends Component<ViewOf<AppHeaderNavStore>> {
    render() {
        const { model } = this.props;
        return (
            <div className={styles.container}>
                <Link className={styles.menu_item} to={Routes.FRONTEND} params={model.params} >
                    <Icon className={styles.menu_item_icon} svg={frontendIcon}/>
                    <span className={styles.menu_item_text}>
                        {t(model.i18n.frontend)}
                    </span>
                </Link>
                <Link className={styles.menu_item} to={Routes.BACKEND} params={model.params} >
                    <Icon className={styles.menu_item_icon} svg={backendIcon}/>
                    <span className={styles.menu_item_text}>
                        {t(model.i18n.backend)}
                    </span>
                </Link>
            </div>
        );
    }
}

