import { z } from "zod";
import getInventories from "../../../services/inventory/getInventories";
import getInventoryByBarcode from "../../../services/inventory/getInventoryByBarcode";

import { createTRPCRouter, protectedProcedure } from "../trpc";

import inventoryService from "../../../services/test/inventoryService";

export const inventoryRouter = createTRPCRouter(
  {
    getList: protectedProcedure
      .query(() => getInventories()),
      
    getBarcode: protectedProcedure
      .input(z.object({ barcode: z.number() }))
      .query(({ input }) => getInventoryByBarcode(input.barcode)),

    invent: protectedProcedure
      .input(z.object({ name: z.string(), barrcode: z.string(),
                        price: z.number(),cost: z.number(),quantity: z.number() }))
      .mutation(({ input }) => inventoryService(input.name, input.barrcode,
                                                input.price, input.cost, input.quantity)),
  },

  

)
    