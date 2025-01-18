
import { Container, TextExtrudeEffect } from "@mono/ui";
import { Card } from "src/components/card";

export const revalidate = 60;

export default async function HomePage() {
  return (
    <Container className="h-screen flex gap-10">
      {/* <Card
        title={"Palette"}
        description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit."}
      />      
      <Card
        variant="gear"
        title={"Gear"}
        description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit."}
      />
      <ButtonHover /> */}
      <TextExtrudeEffect text={"AMKLSDASDL"} />
    </Container>
  );
}
