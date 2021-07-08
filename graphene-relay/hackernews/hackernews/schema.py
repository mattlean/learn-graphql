import graphene
import graphql_jwt
from graphene import relay

import links.schema
import links.schema_relay
import users.schema

from graphql import GraphQLError

class Query(
    users.schema.Query,
    links.schema.Query,
    links.schema_relay.RelayQuery,
    graphene.ObjectType
):
    foo = graphene.String()
    goodbye = graphene.String()
    hello = graphene.String(name=graphene.String(default_value="stranger"))
    node = relay.Node.Field()

    def resolve_foo(root, info):
        raise GraphQLError('Oh no something went wrong!')

    def resolve_goodbye(root, info):
        return 'See ya!'

    def resolve_hello(root, info, name):
        return f'Hello {name}!'

class Mutation(
    users.schema.Mutation,
    links.schema.Mutation,
    links.schema_relay.RelayMutation,
    graphene.ObjectType
):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)
