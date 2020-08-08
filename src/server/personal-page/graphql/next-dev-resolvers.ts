import { webSkills, dataSkills, name, title, summary } from "../data";

export default {
  Query: {
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
