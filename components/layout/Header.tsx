import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import useItemsStore from "../../stores/itemsStore";
import styles from "./Header.module.scss";
import Router, { useRouter } from "next/router";

const Header = () => {
  const [search, setSearch] = useState("");
  const fetchItems = useItemsStore((is) => is.fetchItems);
  const router = useRouter();

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchItems(search);
    router.push(
      {
        pathname: "/items",
        query: { search },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSearch}>
        <button className={styles.logo}>
          <Image
            src="/Logo_ML.png"
            alt="mercado libre logo"
            width={40}
            height={25}
          />
        </button>
        <div className={styles["search-bar"]}>
          <div className={styles["input-container"]}>
            <input
              type="text"
              className={styles["search-input"]}
              value={search}
              onChange={handleSearchInput}
              placeholder="Nunca dejes de buscar"
            />
            <div className={styles["search-icon"]}>
              <Image
                src="/ic_Search.png"
                alt="search icon"
                width={15}
                height={15}
              />
            </div>
          </div>
        </div>
      </form>
    </header>
  );
};
export default Header;
