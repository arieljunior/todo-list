const mongoose = require('mongoose');

const dataBase = {
  create: async (object, schema) => {
    let result = false
    try{
      await connect()
      result = await schema.create(object)
      result = true
    }catch(e){
      console.log(e)
    }finally{
        await disconnect()
    }
  
    return result
  },

  find: async (schema) =>{
    let result = []
    try{
      await connect()
      result = await schema.find({})
    }catch(e){
      console.log(e)
    }finally{
        await disconnect()
    }
  
    return result
  },
  update: async (conditions, updateObject, schema) => {
    let result = false
    try{
      await connect()
      const r = await schema.updateOne(conditions, updateObject)
      console.log(conditions)
      console.log(r)
      result = true
    }catch(e){
      console.log(e)
    }finally{
        await disconnect()
    }
  
    return result
  },

  delete: async (conditions, schema) => {
    let result = false
    try{
      await connect()
      const x = await schema.deleteOne(conditions)
      result = true
    }catch(e){
      console.log(e)
    }finally{
        await disconnect()
    }
  
    return result
  }

}


async function connect(){
  await mongoose.connect('mongodb://localhost:27017/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
}

async function disconnect(){
  await mongoose.disconnect()
}

module.exports = dataBase