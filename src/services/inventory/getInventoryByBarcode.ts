import { findOneByBarcode } from "../../mock/mockInventories";

const getInventoryByBarcode = (barcode: number) => findOneByBarcode(barcode);

export default getInventoryByBarcode;
