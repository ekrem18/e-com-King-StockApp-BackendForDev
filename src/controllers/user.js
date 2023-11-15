"use strict"
/* ------------------------------------------------------- */
// User Controller:

const User = require('../models/user')
const Token = require('../models/token')
const passwordEncrypt = require('../helpers/passwordEncrypt')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "List Users"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        const filters = (req.user?.is_superadmin) ? {} : { _id: req.user._id }  

        const data = await res.getModelList(User, filters)  

        // res.status(200).send({
        //     error: false,
        //     details: await res.getModelListDetails(User),
        //     data
        // })
        
        // FOR REACT PROJECT:
        res.status(200).send(data)                                      //---> veriyi doğrudan olduğu gibi göndermek için bu formata geçtim
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Create User"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "first_name": "test",
                    "last_name": "test",
                }
            }
        */

        // yeni kayıt oluşturulurken yetkilendirmede hata olmasın diye bu kısmı yapıyorum
        req.body.is_staff = false
        req.body.is_superadmin = false

        const data = await User.create(req.body)
        
        //for auto-login:
        const tokenData = await Token.create({
            user_id: data._id,                                            //---> auth controller'ından bu kısmı aldım ve id yazan yerleri artık data içerisinden aldığım
            token: passwordEncrypt(data._id + Date.now())               //---> için data yazdım. register olan kullanıcı login olsun diye uğraşıyorum 
        })

        res.status(201).send({
            error: false,
            token: tokenData.token,
            ...data._doc
        })

    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Get Single User"
        */

        const filters = (req.user?.is_superadmin) ? { _id: req.params.id } : { _id: req.user._id } //---> superadmin'se herkesi okuyabilir. Ama değilse; URL'den id'yi değşitirip girme ihtimalini de ortadan kaldırmak için sadece user._id'le giriş yapabilsiin ve kendinni okuyabilisin diyorum

        const data = await User.findOne(filters)

        res.status(200).send({
            error: false,
            data
        })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Update User"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "first_name": "test",
                    "last_name": "test",
                }
            }
        */

        const filters = (req.user?.is_superadmin) ? { _id: req.params.id } : { _id: req.user._id }
        req.body.is_superadmin = (req.user?.is_superadmin) ? req.body.is_superadmin : false

        const data = await User.updateOne(filters, req.body, { runValidators: true })   //--->modelde validate yapmadığım için bu metod update yaparken de çalışsın istiyorum

        res.status(202).send({
            error: false,
            data,
            new: await User.findOne(filters)
        })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Delete User"
        */

        const data = await User.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })
    },
}