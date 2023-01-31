const Joi = require("joi");
const client = require('../services/astra-db-client')();
const findUser = async(email)=>{

    const findUserQuery = "SELECT * FROM users_by_email WHERE email=?";
    const user = await (await client).execute(findUserQuery, [email]);
    return user;

}





function validator(requestBody){
    const schema = Joi.object({
        fullname: Joi.string().max(255).required(),
        email:Joi.string().max(255).required(),
        password:Joi.string().max(255).required()
    })

    return schema.validate(requestBody);
}

module.exports = {
    findUser
};