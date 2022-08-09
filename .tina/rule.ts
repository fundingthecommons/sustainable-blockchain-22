import type { TinaTemplate } from "tinacms"

export const ruleBlockSchema: TinaTemplate = {
  name: "rule",
  label: "Rule",
  ui: {
    defaultItem: {
    },
  },
  fields: [
    {
      label: "Padding",
      name: "padding",
      type: "string",
      ui: {
        component: "paddingControl",
      }
    },
  ],
};
