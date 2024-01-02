const playerInventory = {
  get: () => {
    const inventoryStr = window.localStorage.getItem("inventory");
    const inventoryArray = inventoryStr ? JSON.parse(inventoryStr) : [];
    return inventoryArray;
  },
  addItem: (item) => {
    const inventoryStr = window.localStorage.getItem("inventory");
    const inventoryArray = inventoryStr ? JSON.parse(inventoryStr) : [];
    if (!inventoryArray.includes(item)) {
      inventoryArray.push(item);
    }
    window.localStorage.setItem("inventory", JSON.stringify(inventoryArray));
  },
  clear: () => {
    window.localStorage.removeItem("inventory");
  },
};
