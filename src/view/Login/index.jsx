import { useForm } from "react-hook-form";
import { Schema } from "../../validations/Login";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./index.module.css";
import sha256 from "sha256";

export function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    const password = sha256(data.password);
    formData.append("username", data.Email);
    formData.append("password", password);
    formData.append("grant_type", "password");
    {
      const response = await fetch(
        "https://apiv2stg.promilo.com/user/oauth/token",
        {
          method: "POST",
          headers: {
            Authorization: "Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg==",
          },
          body: formData,
        }
      );
      const responsedata = await response.json();
      checkStatus(responsedata);
    }
  };

  
  function checkStatus(responseData) {
    if (responseData.status.code !== 200) {
      toast.error("Login failed");
    } else if (responseData.status.code === 200) {
      toast.success("Login success");
      localStorage.setItem("token", responseData?.response?.access_token);
      navigate("/dashboard");
    }
  }
  return (
    <div className={styles.formcontainer}>
      <div className={styles.Main}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <h1>Welcome Back!</h1>
          <br />
          <label>User Name</label>
          <input {...register("Email")} />
          {errors.Email && (
            <p className={styles.error}>{errors.Email.message}</p>
          )}
          <br />
          <br />
          <label>passowrd</label>
          <input type="password" {...register("password")} />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
