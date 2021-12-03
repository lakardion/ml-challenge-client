import useItemsStore from "../../stores/itemsStore";
import styles from "./CategoryBreadcrum.module.scss";

const CategoryBreadcrum = () => {
  const categories = useItemsStore((is) => is.categories);
  return (
    <p className={styles["categories-breadcrumb"]}>
      {categories.map((c, idx) => {
        if (idx === categories.length - 1) return <b>{c}</b>;
        return `${c} > `;
      })}
    </p>
  );
};
export default CategoryBreadcrum;
