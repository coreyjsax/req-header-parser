exports.mainRoute = (req, res) => {
    
    let userData = {
        ipaddress: req.header('x-forwarded-for'),
        language: req.header('accept-language'),
        software: req.header('user-agent')
    }
    
    res.json(userData)
}