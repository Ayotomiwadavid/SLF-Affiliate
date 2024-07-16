const User = require('../Model/User');


//ADD USER TO DATABASE
const storeUserToDb = (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
        fullName: req.body.fullname,
        transactionPin: req.body.transactionPin,
        country: req.body.country,
    })
}

//Register New User
const registerNewUser = (req, res, next) => {
}

//Show the list of all users
const fetchAllUsers = (req, res, next) => {
    User.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
                message: 'An Error Occured'
        })
    })
}

//GET USERS BY ID
const fetchUserById = (req, res, next) => {
    let userId = req.body.UId;
    User.findById(userId)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}