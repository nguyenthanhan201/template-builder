// builder-registry.ts
import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("./src/components/heading")),
  {
    name: "Heading",
    inputs: [{ name: "title", type: "text" }],
    image:
      "https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png",
  }
);
