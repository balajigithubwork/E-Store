import { List, ListItem, ListItemAvatar, Typography } from "@mui/material";
import styles from "./index.module.css";

export default function ProductList(data) {
  return (
    <List className={styles.cardsize}>
      <ListItem key="1" className={styles.carddiv}>
        <ListItemAvatar>
          <img src={data?.data?.productCategoryImage} alt="helloe" />
        </ListItemAvatar>
        <Typography className={styles.producttitle}>
          {data?.data?.productCategoryName}
        </Typography>
      </ListItem>
    </List>
  );
}
