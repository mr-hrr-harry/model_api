const struct = require('../model/schema.js')

const getAll = async(req, res) => {
    try {
        const data = await struct.find()
        data.length !=0 ? res.json(data) : res.send('No records present! DB Empty!')
    } catch (err) {
        console.log("Error:\n"+ err) 
        res.send("Error encountered! Check console for more")       
    }
}

const getOne = async(req, res) => {
    try{
        const data = await struct.findOne({userID : req.params.uID})
        data.length !=0 ? res.json(data) : res.send('User not found!')
    }
    catch(err){
        console.log("Error:\n"+ err) 
        res.send("Error encountered! Check console for more")
    }
}

const putOne = async(req, res) => {
    try {
        const {userID, userName} = req.body
        if(!userID || !userName){
            console.log('Insufficient or Incorrect Data!')
            res.send('Insufficient or Incorrect Data!')
        }
    
        if(await struct.findOne({userID : req.params.uID})){
            console.log('User ID Taken already!')
            res.send('User ID Taken already!')
        }
        const user = struct.create({
            userID, userName
        })
    
        await user.validate()
        const new_data = user.save()
    
        console.log(new_data)
        res.json(new_data)
    }
    catch (err) {
        console.log("Error:\n"+ err) 
        res.send("Error encountered! Check console for more")   
    }
}

const updateOne = async(req, res) => {
    try {
        if( await struct.findOne({userID: req.params.uID}) ){
            const updated = await struct.findOneAndUpdate({userID: req.params.uID}, req.body, {new:true})
            console.log("Data updated Successfully!")
            res.json(updated)
        }
        else{
            res.send('No such user with specified id exists!')
        }
    } catch (error) {
        console.log("Error:\n"+ err) 
        res.send("Error encountered! Check console for more")   
    }
}

const delOne = async(req, res) =>{
    try {
        if(await struct.findOne({userID: req.params.uID})){
            await struct.deleteMany({userID: req.params.uID})
            console.log("User Deleted Successfully")
            res.send("User Deleted Successfully")
        }
        else{
            res.send('No such user with specified id exists!')
        }
    } catch (err) {
        console.log("Error:\n"+ err) 
        res.send("Error encountered! Check console for more")  
    }
}

module.exports = {getOne, getAll, putOne, updateOne, delOne}