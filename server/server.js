const express = require('express') ;
const app = express();
app.use(express.json());
require('dotenv').config();
const dbConfig = require('./config/dbConfig.js');
const port = process.env.PORT || 5000;

const userRoute = require('./routes/usersRoute');

app.use('/api/users', userRoute);


app.listen(port, () => console.log(`Node/Express Server started on port ${port}`));           