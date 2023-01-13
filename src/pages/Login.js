import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";

import LoginForm from "../components/LoginForm";

function Login() {
  let navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  console.log(location);

  return (
    <Stack sx={{ p: 4, alignItems: "center" }}>
      <LoginForm
        callback={() => {
          navigate(from, { replace: true });
        }}
      />
    </Stack>
  );
}

export default Login;
