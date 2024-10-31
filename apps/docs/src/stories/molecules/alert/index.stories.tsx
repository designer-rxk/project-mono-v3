import { Alert } from "@mono/ui";
import type { Meta, StoryObj } from "@storybook/react";

const component = Alert;

const meta: Meta<typeof component> = {
  title: "Molecules/Alert",
  component,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    children: "Alert Children",
    title: "Alert Title",
  },
};
