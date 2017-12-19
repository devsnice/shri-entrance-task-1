module.exports = `
type Room {
  id: ID!
  title: String!
  capacity: Int!
  floor: Int!
}

input RoomInput {
  title: String!
  capacity: Int!
  floor: Int!
}

type Query {
  room(id: ID!): Room
  rooms: [Room]
}

type Mutation {
  createRoom(input: RoomInput!): Room
  updateRoom(id: ID!, input: RoomInput!): Room
  removeRoom(id: ID!): Room
}

schema {
  query: Query
  mutation: Mutation
}
`;
