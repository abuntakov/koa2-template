const _ = require('lodash/fp')
const assertNotNull = require('../asserts/assertNotNull')
const errors = require('../errors')

module.exports = async function checkAuth(ctx, next) {
	const userId = ctx.session.userId

  assertNotNull(userId, errors.UNAUTHORIZED)

	await next()
}
