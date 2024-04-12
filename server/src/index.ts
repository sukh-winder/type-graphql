import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";

import { getApolloConfig } from "./config";

async function main() {
  const app = express();
  const PORT = 4000;

  app.use(express.json());
  await getApolloConfig().then(async (config) => {
    console.log("initializing apollo server");
    console.log("initialized the apollo server successfully");

    const apolloServer = new ApolloServer(config);

    await apolloServer.start().catch((error) => {
      console.log(`failed starting apollo server: ${error.message}`);

      console.log("exiting process");
      process.exit();
    });

    apolloServer.applyMiddleware({ app });
    app.listen(PORT, () => {
      console.log(`🚀 Subscriptions ready at http://localhost:${PORT}`);
    });
  });
}

main();
