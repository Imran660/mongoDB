exports.checkUserMiddleware = (req, res, next) => {
    const { username, password } = req.query;
    if (username == "Imran" && password == "admin") {
        next();
    } else {
        res.status(401).send("Invalid Credentials");
    }
}