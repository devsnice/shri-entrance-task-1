const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const pagesRoutes = require('./pages/routes');
const graphqlRoutes = require('./graphql/routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', pagesRoutes);
app.use('/graphql', graphqlRoutes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3001, () => console.log('Express app listening on localhost:3001'));
