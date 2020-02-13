import createProject from "./CreateProject.gql";
import updateProject from "./UpdateProject.gql";
import deleteProject from "./DeleteProject.gql";
import getProject from "./GetProject.gql";
import getProjectsList from "./GetProjectsList.gql";

export default {
    create: createProject,
    update: updateProject,
    delete: deleteProject,
    get: getProject,
    getList: getProjectsList
};