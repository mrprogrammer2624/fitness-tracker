import { Button, Checkbox, Input, PasswordInput } from "@/components";
import { Link } from "react-router-dom";
import styles from "../Authentication.module.css";

export const Login = () => {
  return (
    <>
      <div className="w-100"></div>
      <div className="w-100">
        <div className={styles.AuthContentWrapper}>
          <h1 className="fw-semibold">Welcome</h1>
          <p>Please login here</p>
        </div>
        <form action="" className={styles.FromWrapper}>
          <div className={styles.FormInputWrapper}>
            <Input label={"Email Address"} placeholder={"Enter Your Email"} />
            <PasswordInput
              label={"Password"}
              placeholder={"Enter Your Password"}
            />
            <div className="d-flex align-items-center justify-content-between">
              <Checkbox>Remember Me</Checkbox>
              <Link to={"/forgot-password"}>Forgot Password?</Link>
            </div>
          </div>
          <Button variant={"primary"} block>
            Login
          </Button>
        </form>
      </div>
    </>
  );
};
