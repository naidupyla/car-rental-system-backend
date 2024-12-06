const jwt = require("jsonwebtoken");
const { secretOfKey } = require("../config/config");

exports.isAuth = (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    token = token.split(" ")[1];

    jwt.verify(token, secretOfKey, (err, user) => {
      if (!err) {
        console.log("user", user);
        req.user = user;
        next();
      } else res.status(401).json({ error: "User access denied" });
    });
  } else {
    res.status(401).json({ error: "User access denied" });
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.user.role == 1) {
    next();
  } else res.status(401).json({ error: "User access denied" });
};

exports.isCustomer = (req, res, next) => {
  if (req.user.role == 0) {
    next();
  } else res.status(401).json({ error: "User access denied" });
};
