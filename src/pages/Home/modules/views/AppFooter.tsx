import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

import { Copyright } from "../../../../components/Copyright";

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "secondary.dark" }}
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid item>
          <Copyright />
        </Grid>
      </Container>
    </Typography>
  );
}
