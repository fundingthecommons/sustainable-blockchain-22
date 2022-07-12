import type { TinaTemplate } from "tinacms"
import { backgroundSchema } from "./shared/background";
import { navigationLabelSchema } from "./shared/navigation-label";

const defaultCard = {
  headline: "Headline",
};

export const scheduleBlockSchema: TinaTemplate = {
  name: "schedule",
  label: "Schedule",
  ui: {
    defaultItem: {
      headline: "Schedule",
      schedules: [defaultCard, defaultCard, defaultCard],
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
      label: "Schedules",
      name: "schedules",
      type: "object",
      list: true,
      ui: {
        component: 'itemListField',
      },
      fields: [
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
          label: "Events",
          name: "events",
          type: "object",
          list: true,
          ui: {
            component: 'itemListField',
          },
          fields: [
            {
              label: "Time",
              name: "time",
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
          ]
        }
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
