import clsx from "clsx";
import styles from "./Dashboard.module.css";

export const Dashboard = ({ children, Title, Icon, date }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div
          className={clsx(
            styles.cardTopTitle,
            "d-flex gap-xl align-items-center justify-content-start"
          )}
        >
          <div className={clsx(styles.cardIcons)}>{Icon}</div>
          <h5>{Title}</h5>
        </div>
        <div className="d-flex align-items-center justify-content-between gap-xl">
          <h1>{children}</h1>
          <div>+12%</div>
        </div>
      </div>
      <div className={styles.cardBottom}>LastUpdate : {date}</div>
    </div>
  );
};
