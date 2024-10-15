import { Avatar, Dropdown } from "antd";
import { useTitle } from "../../App";
import clsx from "clsx";
import { Icons } from "@/constants";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@/components/";
import styles from "./Header.module.css";

export const Header = () => {
  const navigate = useNavigate();
  const { headerText } = useTitle();
  return (
    <header
      className={clsx(
        styles.header,
        "d-flex align-items-center justify-content-between"
      )}
    >
      <div className="d-flex align-items-center justify-content-center gap-xl">
        <Button
          // icon={collapsed ? Icons.NotificationBall : Icons.AllEmployees}
          className={"d-md-none"}
        />
        <h1 className="clr-dark fw-semibold">{headerText}</h1>
      </div>
      <div className="d-flex align-items-center justify-content-center gap-xl">
        <Input placeholder={"Search"} prefix={Icons.Search} />
        <Button
          icon={Icons.NotificationBall}
          onClick={() => navigate("/notifications")}
        />
      </div>
    </header>
  );
};
