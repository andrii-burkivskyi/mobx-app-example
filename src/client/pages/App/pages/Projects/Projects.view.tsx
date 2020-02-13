
import React, { Component } from "react";
import { observer } from "mobx-react";

import Scrollbar from "../../../../components/Scrollbar/Scrollbar";

import Modal from "../../../../components/Modal/Modal";
import Icon from "../../../../components/Icon/Icon";
import addIcon from "../../../../icons/add.svg";


import {ProjectsListView} from "./containers/ProjectsList/ProjectsList.view"
import { ProjectsStore } from "./Projects.store";

import styles from "./projects.scss";

@observer
export class ProjectsView extends Component<ViewOf<ProjectsStore>> {
    render() {
        const { model } = this.props;
        return (
            <Scrollbar>
                <div className={styles.container}>
                    <ProjectsListView model={model.list} />

                    <button
                        data-modal-id={model.modals.project.id}
                        className={styles.add_project_button}
                        onClick={model.addNewProject}
                    >
                        <Icon className={styles.add_project_icon} svg={addIcon} />
                    </button>

                    <Modal model={model.modals.project} />
                </div>
            </Scrollbar>
        );
    }
}
