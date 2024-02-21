import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Plan de viajes API", //cambiar nombre
      version: "1.0.0",
      description: "API para el manejo de viajes y usuarios", //cambiar descripción
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1",
      },
    ],
  },
  apis: ["config/routes/*.js"], //actualmente con * lee todas las rutas, se pueden separar especificando cada ruta.
};

const specs = swaggerJsdoc(options);

export default (app) => {
  app.use(
    "/api/v1/docs", // url donde estaran disponibles los docs
    swaggerUi.serve,
    swaggerUi.setup(specs, {
      explorer: true,
      customCssUrl:
        "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-monokai.css",
    })
  );
};

