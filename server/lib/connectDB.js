const mongoose = require("mongoose");

const connect_to_database = () => {
  mongoose.connect(process.env.DB_URL).then(data=>{
    console.log(`Connected to Database`)
  })
};

module.exports = connect_to_database;
