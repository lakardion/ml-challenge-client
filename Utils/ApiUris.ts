export const getItemUri = (id: string) => `items/${id}`;
export const getItemsByQueryUri = (searchQuery: string) =>
  `items?q=${searchQuery}`;
