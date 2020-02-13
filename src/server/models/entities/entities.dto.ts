import { Field, Int, ObjectType } from 'type-graphql';
import { PaginationDTO } from "../app/pagination/pagination.dto";
import { ProjectDTO } from "../projects/projects.dto";

@ObjectType()
export class EntityDTO {
    @Field(() => Int)
    id!: number;

    @Field()
    name!: string;

    @Field(type => ProjectDTO, { defaultValue: {}})
    project!: ProjectDTO;
}

@ObjectType()
export class EntityPaginationDTO extends PaginationDTO(EntityDTO) {};