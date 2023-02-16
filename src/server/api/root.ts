import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { testRouter } from "./routers/test";
import { inventoryRouter } from "./routers/inventoryRoot";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  test: testRouter,
  inventoryRoot: inventoryRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
