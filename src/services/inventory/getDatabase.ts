import { PrismaClient } from '@prisma/client';
import Inventory from '../../components/Inventory';

const prisma = new PrismaClient();

const getDatabase = async () =>{

    const Invent =  await prisma.inventory.findMany();
        
        return Invent;
}


export default getDatabase;