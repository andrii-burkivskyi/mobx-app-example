import * as React from "react";
import { observer } from "mobx-react";
import { AppStore } from "./App.store";

import logoIcon from "../../icons/logo.svg";

import Link from "../../components/Link/Link";
import Icon from "../../components/Icon/Icon";

import { Routes } from "../../core/routes";
import { ModuleView } from "../../core/decorators/module/Module.view";

import { AppHeaderNavModule } from "./containers/AppHeaderNav";

import { SidebarNavModulesList, PagesModulesList } from ".";

import styles from "./app.scss";

@observer
export class AppView extends React.Component<ViewOf<AppStore>> {
    render() {
        const {model} = this.props;
        return (
            <div className={styles.container} >
                <header className={styles.header}>
                    <Link to={Routes.HOME} ><Icon className={styles.logo} svg={logoIcon} /></Link>
                    <ModuleView module={model.module.children.get(AppHeaderNavModule)} />
                </header>
                <div className={styles.body}>
                    <aside className={styles.sidebar}>
                        <ModuleView module={model.module.children.get(SidebarNavModulesList)} />
                    </aside>
                    <div className={styles.content}>
                        <ModuleView module={model.module.children.get(PagesModulesList)} />
                    </div>
                </div>
            </div>
        );
    }
} 