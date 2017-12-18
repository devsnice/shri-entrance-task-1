const { mergeTypes } = require('merge-graphql-schemas');

const userType = require('./schema/user/userType');
const eventType = require('./schema/event/eventType');
const roomType = require('./schema/room/roomType');

const dateType = `
    scalar Date
`;

const unionsDefenition = `
    union SearchResult = User | Event | Room
`;

const types = [dateType, userType, eventType, roomType, unionsDefenition];

module.exports = mergeTypes(types);
