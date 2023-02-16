import { z } from "zod";
import getInventories from "../../../services/inventory/getInventories";
import getInventoryByBarcode from "../../../services/inventory/getInventoryByBarcode";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const inventoryRouter = createTRPCRouter(
  {
    getList: protectedProcedure
      .query(() => getInventories()),
      
    getBarcode: protectedProcedure
      .input(z.object({ barcode: z.number() }))
      .query(({ input }) => getInventoryByBarcode(input.barcode)),
  },

)
    