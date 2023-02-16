import { findOneByName } from "../../mock/mockInventories";

const getInventoryByName = (name: string) => findOneByName(name);

export default getInventoryByName;
