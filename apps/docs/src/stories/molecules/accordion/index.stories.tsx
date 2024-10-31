import { Accordion } from "@mono/ui";
import type { Meta, StoryObj } from "@storybook/react";

const component = Accordion;

const meta: Meta<typeof component> = {
  title: "Molecules/Accordion",
  component,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: { className: "" },
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    children: "Accordion Children",
    title: "Accordion Title",
  },
};
