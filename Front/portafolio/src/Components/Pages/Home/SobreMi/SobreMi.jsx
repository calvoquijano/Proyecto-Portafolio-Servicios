import React, { useEffect, useState } from "react";
import styles from "./SobreMi.module.css";
import { Box, Grid, Button } from "@mui/material";
import axios from "axios";

const SobreMi = () => {
  const [perfil, getPerfil] = useState([]);
  useEffect(() => {
    const traerPerfil = axios.get("http://localhost:5000/perfil");
    traerPerfil
      .then((res) => getPerfil(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {perfil.map((e) => (
        <Box key={e.id} sx={{ flexGrow: 1 }} className={styles.container}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={6}
              md={8}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item className={styles.titulos}>
                <h2>{e.nombre}</h2>
                <h5>{e.rol}</h5>
                <Button
                  variant="contained"
                  className="boton-general boton-primario-azul"
                >
                  Botón
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <img
                className={styles.imagenes}
                src={e.imagen}
                alt="Perfil página de inicio"
              />
            </Grid>
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default SobreMi;
