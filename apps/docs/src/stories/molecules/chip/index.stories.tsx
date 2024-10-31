import { Chip, SvgWarningCircle, Typography } from "@mono/ui";
import type { Meta, StoryObj } from "@storybook/react";

const component = Chip;

const meta: Meta<typeof component> = {
  title: "Molecules/Chip",
  component,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    children: <Typography>Chip Children</Typography>,
    title: "Chip Title",
    iconLeft: <SvgWarningCircle />,
    iconRight: <SvgWarningCircle />,
    size: "lg",
  },
};
