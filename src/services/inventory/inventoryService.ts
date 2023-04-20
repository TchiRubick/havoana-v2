import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


//const inventoryServlmlmice = (name: string, barrcode: string, cost:number, price:number, quantity:number): string => `${name}, ${barrcode}, ${cost}, ${price}, ${quantity} `;

const inventoryService = async (name: string, barrcode: string, cost:number, price:number, quantity:number) => {
"text"
  const Inventory =  await prisma.inventory.create({
        data:{
            barrcode: barrcode,
            name: name,
            cost: cost,
            price: price,
            quantity: quantity,
        }
    })
    

    return Inventory;
}
    

export default inventoryService;