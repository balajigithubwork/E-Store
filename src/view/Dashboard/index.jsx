import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProductList from "../../components/ProductList/ProductList";
import styles from "./index.module.css";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

export function Dashboard() {
  const [data, setData] = useState();
  const [searchData, setSearchData] = useState("");
  console.log(searchData, "searchData");
  useEffect(() => {
    fetch("https://api.kalpav.com/api/v1/product/category/retail")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network error");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const finalData = data?.response?.map((e) => e.productCategory);
  const filterData = data?.response
    ?.map((e) => e.productCategory)
    .filter((e) =>
      e.productCategoryName
        .toLowerCase()
        .includes(searchData.toLowerCase().replace(/\s/g, ""))
    );

  console.log(filterData?.length === 0 || finalData?.length === 0, "trururu");

  console.log(typeof finalData, typeof filterData, "ssss");

  return (
    <div>
      <Navbar />
      <div className={styles.maindiv}>
        <div className={styles.headdiv}>
          <h1>All Products</h1>
          <div className={styles.searchbox}>
            <input
              type="text"
              placeholder="Search Products..."
              onChange={(e) => setSearchData(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.productcards}>
          {searchData === "" &&
            finalData?.map((e, i) => {
              return <ProductList data={e} key={i} />;
            })}
          {searchData !== "" &&
            filterData?.map((e, i) => {
              return <ProductList data={e} key={i} />;
            })}
        </div>
        {(filterData?.length === 0 || finalData?.length === 0) && (
          <div className={styles.emptydiv}>
            <SentimentVeryDissatisfiedIcon />
            <p>Looks Empty</p>
          </div>
        )}
      </div>
    </div>
  );
}
