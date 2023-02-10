import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

import testService from "../../../services/test/testService";

export const testRouter = createTRPCRouter({
  greeting: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => testService(input.name)),
});

