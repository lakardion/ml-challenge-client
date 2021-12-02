import useItemsStore from "../../stores/itemsStore";
import Item from "../../components/Items/Item";
import { useEffect } from "react";
import useFetchFromQuery from "../../components/hooks/useFetchFromQuery";
import CategoryBreadcrum from "../../components/CategoryBreadcrumb/CategoryBreadcrum";

const ItemsList = () => {
  const fetchItems = useItemsStore((is) => is.fetchItems);
  const items = useItemsStore((is) => is.items);
  useFetchFromQuery(fetchItems, "search");

  return items.length ? (
    <>
      <CategoryBreadcrum />
      {items.map((i) => (
        <Item key={i.id} itemData={i} />
      ))}
    </>
  ) : null;
};
export default ItemsList;
