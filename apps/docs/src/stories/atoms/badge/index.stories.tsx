import { Badge, SvgWarningCircle } from "@mono/ui";
import type { Meta, StoryObj } from "@storybook/react";

const component = Badge;

const meta: Meta<typeof component> = {
  title: "Atoms/Badge",
  component,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {className: "" },
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    text: "Badge",
    iconLeft: <SvgWarningCircle />,
    iconRight: <SvgWarningCircle />,
  },
};
