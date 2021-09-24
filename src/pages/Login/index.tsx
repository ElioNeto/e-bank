import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Copyright2 } from "../../components/Copyright";
import withRoot from "../../theme/withRoot";
import { LinkEBank } from "../../components/TypographyAndLinks";

function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      cpf: data.get("cpf"),
      password: data.get("password"),
    });
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LinkEBank />
          <Avatar sx={{ m: 1, bgcolor: "secondary.dark" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="secondary.main">
            Acesse sua conta
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, color: "primary.main" }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="cpf"
              label="CPF"
              name="cpf"
              autoComplete="cpf"
              autoFocus
              color="secondary"
              className="ebank-form-field-label ebank-form-field-border-white"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color="secondary"
              className="ebank-form-field-label ebank-form-field-border-white"
            />
            <FormControlLabel
              control={
                <Checkbox value="remember" className="ebank-form-field-label" />
              }
              label="Lembrar CPF"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="ebank-button-login-with-hover"
              sx={{ mt: 3, mb: 2 }}
            >
              Acessar
            </Button>
            <Button
              type="button"
              fullWidth
              variant="contained"
              className="ebank-button-back-with-hover"
              sx={{ mb: 2 }}
              href="/"
            >
              Voltar
            </Button>
          </Box>
        </Box>
        <Copyright2 sx={{ mt: 8, mb: 4, color: "primary.main" }} />
      </Container>
    </div>
  );
}

export default withRoot(SignIn);
