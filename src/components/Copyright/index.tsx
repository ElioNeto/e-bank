import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export function Copyright() {
  return (
    <Typography color="primary.main">
      {"© "}
      <Link color="inherit" href="https://github.com/ElioNeto/e-bank">
        E-bank
      </Link>{" "}
      {"2021"}
    </Typography>
  );
}

export function Copyright2(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/ElioNeto/e-bank">
        E-bank
      </Link>{" "}
      {"2021"}
      {"."}
    </Typography>
  );
}
