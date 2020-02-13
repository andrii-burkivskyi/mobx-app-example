import { ProjectsService } from "./projects.service";
import { CreateProjectInput } from "./inputs/create-project-input";
import { UpdateProjectInput } from "./inputs/update-project-input";
import { DeleteProjectInput } from "./inputs/delete-project-input";
import { ProjectFilterInput } from "./inputs/project-filters-input";
import { EntitiesService } from "../entities/entities.service";
import { IPaginationInput } from "../app/pagination/pagination.input";
export declare class ProjectsResolver {
    private readonly projectsService;
    private readonly entitiesService;
    constructor(projectsService: ProjectsService, entitiesService: EntitiesService);
    project(id: number): Promise<import("./projects.entity").ProjectEntity>;
    projects(input: IPaginationInput<ProjectFilterInput>): Promise<{
        items: import("./projects.entity").ProjectEntity[];
        totalItems: number;
        take: number;
        page: number;
    }>;
    createProject(input: CreateProjectInput): Promise<import("./projects.entity").ProjectEntity>;
    updateProject(input: UpdateProjectInput): Promise<import("./projects.entity").ProjectEntity>;
    deleteProject(input: DeleteProjectInput): Promise<number>;
}
