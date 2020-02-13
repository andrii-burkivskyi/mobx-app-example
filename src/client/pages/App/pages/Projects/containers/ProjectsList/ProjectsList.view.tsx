

import * as  React from "react";
import { observer } from "mobx-react";

import editIcon from "../../../../../../icons/edit.svg";
import deleteIcon from "../../../../../../icons/delete.svg";

import { Routes } from "../../../../../../core/routes";

import Link from "../../../../../../components/Link/Link";
import Icon from "../../../../../../components/Icon/Icon";


import { ProjectsListStore } from "./ProjectsList.store";
import styles from "./projects-list.scss";

@observer
export class ProjectsListView extends React.Component<ViewOf<ProjectsListStore>> {
    render() {
        const { model } = this.props;
        return (
            <>
                {
                    model.requests.projects.data.map((project) => (
                        <div
                            key={project.id}
                            className={styles.container}
                            style={{ boxShadow: `0 -4px 0 0 ${project.color}` }}
                        >
                            <div className={styles.header}>
                                <button
                                    data-modal-id={model.modals.project.id}
                                    className={styles.control_button}
                                    onClick={() => model.modals.project.toggle(project)}
                                >
                                    <Icon className={styles.control_icon} svg={editIcon} />
                                </button>

                                <button className={styles.control_button} onClick={project.delete}>
                                    <Icon className={styles.control_icon} svg={deleteIcon} />
                                </button>
                            </div>
                            <Link
                                className={styles.content}
                                to={Routes.PROJECT}
                                params={{ projectId: project.id }}
                            >
                                <h3 className={styles.title}>{project.name}</h3>
                                <span className={styles.url}>{project.url}</span>
                            </Link>
                        </div>

                    ))
                }
            </>
        );
    }
}
