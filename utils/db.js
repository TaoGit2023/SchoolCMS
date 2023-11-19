const mongoose = require ('mongoose');

const connectToDB = async () => {
  const connectionString = process.env.CONNECTION_STRING;
  if (!connectionString) {
    console.error("connect string is not defined");
    process.exit(1);
  }
  const db = mongoose.connection;// check the connection
  db.on('error',(error)=>{
    console.error(error);
    process.exit(2);
  });
  db.on('connected',()=>{
    console.log('DB connected')
  });
  db.on('disconnected',()=>{
    console.log('DB disconnected')
  })
  return mongoose.connect(connectionString)
};

module.exports = connectToDB;