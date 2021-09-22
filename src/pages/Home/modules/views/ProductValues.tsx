import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import DescriptionContainer from "../components/DescriptionsContainer";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "primary.light" }}
    >
      <Container sx={{ mt: 15, mb: 20, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <DescriptionContainer
                img="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                title="Conta E-bank"
                content="A conta que vai levar você ao controle da sua vida financeira."
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <DescriptionContainer
                img="https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW52ZXN0bWVudCUyMGJhbmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                title="Investimentos E-bank"
                content="Encontre a melhor opção para seu dinheiro render mais."
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <DescriptionContainer
                img="https://images.unsplash.com/photo-1524602585632-a2a01c12307c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbnRhdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                title="Sustentabilidade E-bank"
                content="Nos importamos com o planeta e estamos sempre buscando maneiras de reduzir a poluição e consumo dos recursos naturais."
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
