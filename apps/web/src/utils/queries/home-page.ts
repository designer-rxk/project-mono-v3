import { q, TypeFromSelection } from "groqd";

const homePage = {
  title: q.string(),
};

export const homePageQuery = q(
  `*[_type == "homePage" && !(_id in path("drafts.**"))][0]`,
).grab$(homePage).nullable();

export type Homepage = TypeFromSelection<typeof homePage>;
