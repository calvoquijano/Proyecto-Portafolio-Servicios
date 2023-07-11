import React from "react";
import styles from "./SobreMi.module.css";
import { Box, Grid } from "@mui/material";

const SobreMi = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className={styles.container}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            Diseñador UX / UI y Desarrollador Front-end en JavaScript con React.
          </Grid>
          <Grid item xs={6}>
            <img className={styles.imagenes} src="https://calvoquijano.com/images/headers/home.png" alt="Perfil página de inicio" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SobreMi;
