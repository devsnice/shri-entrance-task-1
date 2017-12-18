module.exports = `

type Event {
	id: ID!
	title: String!
	dateStart: Date!
	dateEnd: Date!
	users: [User]
	room: Room
}

input EventInput {
	title: String!
	dateStart: Date!
	dateEnd: Date!
}

type Query {
  event(id: ID!): Event
  events: [Event]
}

type Mutation {
  createEvent(input: EventInput!, usersIds: [ID], roomId: ID!): Event
  updateEvent(id: ID!, input: EventInput!): Event
  removeUserFromEvent(id: ID!, userId: ID!): Event
  addUserToEvent(id: ID!, userId: ID!): Event
  changeEventRoom(id: ID!, roomId: ID!): Event
  removeEvent(id: ID!): Event
}

schema {
  query: Query
  mutation: Mutation
}
`;
