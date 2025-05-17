import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

// Register Grupo component
Builder.registerComponent(
  dynamic(() => import("./components/sections/inicio/grupo")),
  {
    name: "Grupo",
    inputs: [
      {
        name: "image",
        type: "object",
        defaultValue: {
          src: "/images/grupo3.jpeg",
          alt: "Grupo JCI Ambato",
          width: 500,
          height: 500,
        },
        subFields: [
          {
            name: "src",
            type: "file",
            defaultValue: "/images/grupo3.jpeg",
          },
          {
            name: "alt",
            type: "string",
            defaultValue: "Grupo JCI Ambato",
          },
          {
            name: "width",
            type: "number",
            defaultValue: 500,
          },
          {
            name: "height",
            type: "number",
            defaultValue: 500,
          },
        ],
      },
      {
        name: "titleSection",
        type: "object",
        defaultValue: {
          subtitle: "GRUPO",
          title:
            "A lo largo de mas de 50 años, JCI Ambato a fomentado del desarrollo de líderes en la ciudad.",
          description:
            "Nos comprometemos a construir un legado de cambio que beneficie a nuestras comunidades y fomente el crecimiento colectivo.",
          buttonText: "Nuestra misión y visión",
        },
        subFields: [
          {
            name: "subtitle",
            type: "string",
            defaultValue: "GRUPO",
          },
          {
            name: "title",
            type: "string",
            defaultValue:
              "A lo largo de mas de 50 años, JCI Ambato a fomentado del desarrollo de líderes en la ciudad.",
          },
          {
            name: "description",
            type: "string",
            defaultValue:
              "Nos comprometemos a construir un legado de cambio que beneficie a nuestras comunidades y fomente el crecimiento colectivo.",
          },
          {
            name: "buttonText",
            type: "string",
            defaultValue: "Nuestra misión y visión",
          },
        ],
      },
      {
        name: "statistics",
        type: "object",
        defaultValue: {
          projects: 20,
          years: 50,
          members: 20,
        },
        subFields: [
          {
            name: "projects",
            type: "number",
            defaultValue: 20,
          },
          {
            name: "years",
            type: "number",
            defaultValue: 50,
          },
          {
            name: "members",
            type: "number",
            defaultValue: 20,
          },
        ],
      },
    ],
    defaultStyles: {
      marginTop: "7rem",
      marginBottom: "7rem",
    },
  }
);

// Add more component registrations here as needed
// Example:
// Builder.registerComponent(
//   dynamic(() => import('./components/heading')),
//   {
//     name: 'Heading',
//     inputs: [{ name: 'title', type: 'text' }],
//     image: 'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a'
//   }
// );
