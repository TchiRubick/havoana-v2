const inventoryService = (name: string, barrcode: string, cost:number, price:number, quantity:number): string | number => `${name}, ${barrcode}, ${cost}, ${price}, ${quantity} `;

export default inventoryService;