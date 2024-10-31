import { Typography } from "@mono/ui";
import type { Meta, StoryObj } from "@storybook/react";

const component = Typography;

const meta: Meta<typeof component> = {
  title: "Atoms/Typography",
  component,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: { className: "" },
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    children: "Typography",
  },
};
