import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token)
    return res.status(401).json({ success: false, message: "Not authorized" });

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err)
      return res.status(401).json({ success: false, message: "Invalid token" });
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (
      req.user.role === "admin" ||
      !req.params.id ||
      req.user.id === req.params.id
    ) {
      next();
    } else {
      res.status(401).json({ success: false, message: "Not authenticated" });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      res.status(401).json({ success: false, message: "Not authorized" });
    }
  });
};

export const verifyUserLoggedIn = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user) {
      // any logged-in user
      next();
    } else {
      res.status(401).json({ success: false, message: "Not authenticated" });
    }
  });
};
