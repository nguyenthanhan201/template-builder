// builder-registry.ts
import { Builder, withChildren } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  withChildren(
    dynamic(() => import("./src/lib/components/Badge").then((mod) => mod.Badge))
  ),
  {
    name: "Badge",
    inputs: [
      { name: "value", type: "text" },
      {
        name: "type",
        type: "string",
        enum: ["text", "dot"],
      },
    ],
    defaultChildren: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "Text",
          options: { text: "I am child text block!" },
        },
      },
    ],
    image:
      "https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png",
  }
);

Builder.registerComponent(
  dynamic(() => import("./src/lib/components/Card").then((mod) => mod.Card)),
  {
    name: "Card",
    image: "https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png",
    inputs: [
      {
        name: "title",
        type: "string",
        required: true,
        defaultValue: "I am a React + Tailwind component!",
      },
      {
        name: "description",
        type: "text",
        defaultValue:
          "You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js",
        required: true,
      },
      {
        name: "imgSrc",
        defaultValue:
          "https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
        friendlyName: "image",
        type: "file",
        allowedFileTypes: ["png", "jpg", "webp"],
      },
      {
        name: "href",
        friendlyName: "link",
        type: "url",
      },
    ],
  }
);
