import type { TinaTemplate } from "tinacms"
import { backgroundSchema } from "./shared/background";
import { navigationLabelSchema } from "./shared/navigation-label";

const defaultCard = {
  name: "Name",
  title: "Title",
  label: "Label",
  headline: "Headline",
};

export const speakerCardsBlockSchema: TinaTemplate = {
  name: "speakerCards",
  label: "Speaker Cards",
  ui: {
    defaultItem: {
      headline: "This is the main headline",
      cards: [defaultCard, defaultCard, defaultCard],
    },
  },
  fields: [
    {
      type: "object",
      label: "Style",
      name: "style",
      ui: {
        component: "group",
      },
      fields: [
        {
          type: "string",
          label: "Label",
          name: "labelStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Headline",
          name: "headlineStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Subhead",
          name: "subheadStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Text",
          name: "textStyles",
          ui: {
            component: "typeControl"
          }
        },
      ]
    },
    backgroundSchema,
    {
      label: "",
      name: "rule",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    {
      label: "Label",
      name: "label",
      type: "string",
    },
    {
      label: "Headline",
      name: "headline",
      type: "string",
    },
    {
      label: "Subhead",
      name: "subhead",
      type: "string",
    },
    {
      label: "Body",
      name: "body",
      type: "rich-text",
    },
    {
      label: "Cards",
      name: "cards",
      type: "object",
      list: true,
      ui: {
        component: 'itemListField',
      },
      fields: [
        {
          label: "Image",
          name: "imageSrc",
          type: "image",
          ui: {
            clearable: true,
          }
        },
        {
          label: "Speaker Name",
          name: "name",
          type: "string",
        },
        {
          label: "Speaker Title",
          name: "title",
          type: "string",
        },
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          label: "Headline",
          name: "headline",
          type: "string",
        },
        {
          label: "Text",
          name: "text",
          type: "rich-text",
        },
      ]
    },
    {
      label: "",
      name: "rule2",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    navigationLabelSchema,
  ],
};
