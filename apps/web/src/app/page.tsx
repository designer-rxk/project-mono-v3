import { runQuery } from "@lib/sanity";
import { ButtonHover, Container, Typography } from "@mono/ui";
import { type Homepage, homePageQuery } from "@utils";
import { notFound } from "next/navigation";

export const revalidate = 60;

async function getData() {
  return (await runQuery(homePageQuery)) as Homepage;
}

export default async function HomePage() {
  const page = await getData();

  if (!page) {
    notFound();
  }

  return (
    <Container>
      <Typography as="h1" className="w-full justify-center flex items-center">
        Sanity Text: {page.title}
      </Typography>
      <ButtonHover />
    </Container>
  );
}
