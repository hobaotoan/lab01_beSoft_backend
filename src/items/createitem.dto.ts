import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class ItemType {
    @Field(() => ID)
    readonly id?: string;
    @Field()
    readonly username: string;
    @Field()
    readonly password: string;
    @Field()
    readonly email: string;
    @Field()
    readonly phone: string;

}