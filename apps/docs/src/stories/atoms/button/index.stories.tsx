import { Button, SvgWarningCircle } from "@mono/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const component = Button;

const meta: Meta<typeof component> = {
  title: "Atoms/Button",
  component,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: { backgroundColor: { control: "color" } },
  args: { onClick: fn(), className: "" },
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    children: "Button",
    iconLeft: <SvgWarningCircle />,
    iconRight: <SvgWarningCircle />,
  },
};
