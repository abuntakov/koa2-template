module.exports = user => (ctx) => {
  console.log('user', user)
	ctx.session = {}
	ctx.session.userId = user._id.toString()
}
