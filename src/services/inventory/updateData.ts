import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updateData = async (name: string | undefined, barrcode: string | undefined, cost:string | undefined, 
    price:string | undefined, quantity:string | undefined, id: number | undefined) => {
  const Inventor =  await prisma.inventory.update({
    where: {id},
        data:{
            barrcode: barrcode,
            name: name,
            cost: cost,
            price: price,
            quantity: quantity,
        },
    })
    

    return Inventor;
}
    

export default updateData;