const { create, update, remove } = require("../../services/user.service");
const resolve = require('../../lib/resolve')

async function createUser(parent, args, context, info) {
    console.log(args)
    const result = await create(args.input)
    return result.data.createUser
}

async function updateUser(parent, args, context, info) {
    const result = await update(args.id, args.input)
    return result.data.updateUser
}

async function removeUser(parent, args, context, info) {
    const result = await remove(args.id)
    return result.data.removeUser
}

module.exports = {
    Query: {

    },
    Mutation: {
        createUser: resolve(createUser, { isPrivate: false }),
        updateUser: resolve(updateUser, { isPrivate: false }),
        removeUser: resolve(removeUser, { isPrivate: false })
    }
}