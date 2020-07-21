const express = require('express');
const app = express();
const cors = require('cors')
const logger = require('morgan');

const usersController = require('./controllers/userRoutes');

const PORT = process.env.PORT || 4000

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger('dev'));

// app.use controllers here
app.use('/accounts', usersController);

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
  });
