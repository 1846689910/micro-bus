import { gql } from "apollo-boost";

export default gql`
  type Query {
    name: String!
    title: String!
    summary: [String!]!
    webSkills: [Skill!]!
    dataSkills: [Skill!]!
    skills: [Skill!]!
    skill(name: String): Skill!

  }
  type Skill {
    name: String!
    value: Int!
  }
`;