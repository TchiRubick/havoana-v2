import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

import inventoryService from "../../../services/test/inventoryService";

export const inventoryRouter = createTRPCRouter({
    invent: publicProcedure
    .input(z.object({ name: z.string(), barrcode: z.string(),
         price: z.number(),cost: z.number(),quantity: z.number() }))
    .mutation(({ input }) => inventoryService(input.name, input.barrcode,
         input.price, input.cost, input.quantity)),
});