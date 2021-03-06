import { InputType, Field } from 'type-graphql';
import { IdFilterInput, StringFilterInput } from "../../app/filter";
import { PaginationInput } from "../../app/pagination/pagination.input";

@InputType()
export class ProjectFilterInput {
  @Field(type => IdFilterInput, { nullable: true })
  id?: IdFilterInput;

  @Field(type => StringFilterInput, { nullable: true })
  name?: StringFilterInput;

  @Field(type => StringFilterInput, { nullable: true })
  color?: StringFilterInput;

  @Field(type => StringFilterInput, { nullable: true })
  url?: StringFilterInput;
}

@InputType()
export class ProjectPaginationInput extends PaginationInput(ProjectFilterInput) {};
