import useItemsStore from "../../stores/itemsStore";

const CategoryBreadcrum = () => {
  const categories = useItemsStore((is) => is.categories);
  //TODO: iterate and get the breadcrumbs rendered 
  return <></>;
};
export default CategoryBreadcrum;
