import { HelloResolver } from "../resolvers";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { buildSchema } from "type-graphql";
import { ApolloServerExpressConfig } from "apollo-server-express";

export const getApolloConfig =
  async (): Promise<ApolloServerExpressConfig> => ({
    schema: await buildSchema({
      resolvers: [HelloResolver],
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });
