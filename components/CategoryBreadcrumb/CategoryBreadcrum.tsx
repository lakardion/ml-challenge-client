import useItemsStore from "../../stores/itemsStore";

const CategoryBreadcrum = () => {
  const categories = useItemsStore((is) => is.categories);
  return (
    // <p className={styles["categories-breadcrumb"]}>
    <p>
      {categories.map((c, idx) => {
        if (idx === categories.length - 1) return <b>{c}</b>;
        return `${c} > `;
      })}
    </p>
  );
};
export default CategoryBreadcrum;
