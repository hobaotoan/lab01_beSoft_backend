import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class ItemInput {
    @Field()
    readonly username: string;
    @Field()
    readonly password: string;
    @Field()
    readonly email: string;
    @Field()
    readonly phone: string;
}
