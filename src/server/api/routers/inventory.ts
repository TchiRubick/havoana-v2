import { z } from "zod";
import getInventories from "../../../services/inventory/getInventories";
import getInventoryByBarcode from "../../../services/inventory/getInventoryByBarcode";

import { createTRPCRouter, protectedProcedure } from "../trpc";

import inventoryService from "../../../services/inventory/inventoryService";

import getDatabase from "../../../services/inventory/getDatabase";

import update from "../../../services/inventory/updateData";

export const inventoryRouter = createTRPCRouter(
  {
    getList: protectedProcedure
      .query(() => getInventories()),
      
    getBarcode: protectedProcedure
      .input(z.object({ barrcode: z.string() }))
      .query(({ input }) => getInventoryByBarcode(input.barrcode)),

    invent: protectedProcedure
      .input(z.object({ name: z.string(), barrcode: z.string(),
                        price: z.number(),cost: z.number(),quantity: z.number() }))
      .mutation(({ input }) => inventoryService(input.name, input.barrcode,
                                                input.price, input.cost, input.quantity)),
    update: protectedProcedure
      .input(z.object({ name: z.string().optional(), barrcode: z.string().optional(),
                        price: z.string().optional(),cost: z.string().optional(),quantity: z.string().optional(), id: z.number().optional() }))
      .mutation(({ input }) => update(input.name, input.barrcode,input.price,
                                                 input.cost, input.quantity,input.id)),
    getData: protectedProcedure
       .query(() => getDatabase()),

        
  },

  

)
    