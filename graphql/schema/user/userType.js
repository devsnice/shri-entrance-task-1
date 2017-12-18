module.exports = `
type User {
    id: ID!
    login: String!
    homeFloor: Int
    avatarUrl: String!
}

input UserInput {   
    login: String!
    homeFloor: Int
}

type UserRoom {
    id: ID!
    title: String!
}

type Query {
  user(id: ID!): User
  users: [User]
}

type Mutation {
  createUser(input: UserInput!): User
  updateUser(id: ID!, input: UserInput!): User
  removeUser(id: ID!): User
}

schema {
  query: Query
  mutation: Mutation
}
`;
