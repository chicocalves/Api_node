require('./modules/express');
const dotenv = require('dotenv');
const { append } = require('express/lib/response');
const connectToDatabase = require('./src/database/connect');

dotenv.config();

connectToDatabase();
