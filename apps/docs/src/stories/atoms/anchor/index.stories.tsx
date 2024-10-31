import { Anchor, SvgWarningCircle } from "@mono/ui";
import type { Meta, StoryObj } from "@storybook/react";

const component = Anchor;

const meta: Meta<typeof component> = {
  title: "Atoms/Anchor",
  component,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: { className: "" },
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    children: "Anchor",
    iconLeft: <SvgWarningCircle />,
    iconRight: <SvgWarningCircle />,
  },
};
