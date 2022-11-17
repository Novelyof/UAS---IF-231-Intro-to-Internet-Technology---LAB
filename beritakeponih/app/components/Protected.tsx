import React from "react";
import { useNavigate } from "remix";

const Protected = ({ children }: { children: JSX.Element }) => {
  let navigate = useNavigate();

  React.useEffect(() => {
    const name = window.localStorage.getItem("login_name");
    if (!name) {
      navigate("/login", {
        replace: true,
      });
    }
  }, []);

  return children;
};

export default Protected;
