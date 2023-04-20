import { findOneByBarcode } from "../../mock/mockInventories";
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();
const getInventoryByBarcode = async (barrcode: string) =>{
    const Invent = await prisma.inventory.findFirst({
        where: { barrcode},
      });
      return Invent;
}
//const getInventoryByBarcode = (barcode: number) => findOneByBarcode(barcode);

export default getInventoryByBarcode;
