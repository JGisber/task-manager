const User = require('../models/user');
const Customer = require('../models/customer');



module.exports = {

    FETCH_users: async(req, res, next) => {
        try {
            const list = await User.find({})
            res.status(200).json({
                message: "Users fetched",
                list: list})
        } catch (error) {
            next(error)
        }
    },

    CREATE_user: async(req, res, next) => {
        try {
            let user = new User(req.body)
            let newUser = await user.save()
            res.status(201).json(newUser)
        } catch (error) {
            next(error)
        }
    },


    FETCH_userById: async(req, res, next) => {
        try {
            let user = await User.findById(req.value.userId)
            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    },

    UPDATE_userById: async(req, res, next) => {
        try {
            let user = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    },

    REPLACE_userByID: async(req, res, next) => {
        try {
            let user = await User.findByIdAndUpdate(req.params.userId, req.body, {new: tru})
            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    },

    ERASE_userById: async(req, res, next) => {
        try {
            let user = await User.findByIdAndDelete(req.params.userId)
            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    },
    
    
    FETCH_userCustomers: async(req, res, next) => {
        try {
            let {userId} = req.params
        let user = await User.findById(userId).populate('customers')
        res.status(200).json(user.customers)
        } catch (error) {
            next(error)
        }
    },


    CREATE_userCustomer: async(req, res, next) => {
        try {
            let {userId} = req.params
            // Create new customer
            let customer = new Customer(req.body)
            // Fetch user 
            let user = await User.findById(userId)
            // Assign customer to user
            customer.user = user
            // Save to DB
            let newCustomer = await customer.save()
            // Add customer to users customer array
            user.customers.push(newCustomer)
            await user.save()
            res.status(201).json(newCustomer)
        } catch (error) {
            next(error)
        }
    }
};