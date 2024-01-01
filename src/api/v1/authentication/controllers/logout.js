const logout = async (res, req) => {
    req.clearCookie('token', { maxAge: 0 }).send({ success: true })
}

module.exports = logout