import { webSkills, dataSkills, name, title, summary } from "../data";

export default {
  Query: {
    hello: () => "Hello, personal-page is now boosted by Apollo + GraphQL",
    name: () => name,
    title: () => title,
    summary: () => summary,
    skills: () => [...webSkills, ...dataSkills],
    webSkills: () => webSkills,
    dataSkills: () => dataSkills,
    skill: (_, { name }) =>
      [...webSkills, ...dataSkills].find((x) => x.name === name),
  },
};
