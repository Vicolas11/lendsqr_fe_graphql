import { PrivateRouterProps } from "../interfaces/props.interfaces";
import { useAppSelector } from "../hooks/store.hook";
import { useNavigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { useEffect } from "react";

export default function PrivateRouter({ children }: PrivateRouterProps) {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) navigate("/");
  }, [isAuth, navigate]);

  if (!isAuth) {
    return <LoginPage />;
  }

  return children;
}
