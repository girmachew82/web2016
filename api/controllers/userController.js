
getAllUsers = (req, res) =>{
    res.send("All users")
}

createUser =  (req, res) =>{
    //res.send("User Created")
    res.json({ 
        "fname": req.body.fname,
        "lname": req.body.lname,
        "gender": req.body.gender,
        "email": req.body.email,
        "image": req.body.image,
        "deptId": req.body.deptId
        
    })
}
getById = (req, res) =>{
    res.send("Fetch user Id is "+req.params.id)
}

deleteUser  = (req, res) =>{
        res.send("Delete user id is "+req.params.id)
}
updateUser = (req, res) =>{
    res.send("Update a user whose id is  "+req.params.id)
}

module.exports = {getAllUsers, createUser, getById, deleteUser, updateUser}