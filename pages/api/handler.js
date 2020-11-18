import nextConnect from "next-connect";
import { verify } from "jsonwebtoken";

export default nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something happend!` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} Not Allowd` });
  },
}).use((req, res, next) => {
  // pass to next level
  const { authorization } = req.headers;
  if (!authorization) next();
  else {
    // in real world we should use process.env.XXX instaed of laoyeche-secret
    verify(authorization, "laoyeche-secret", (error, decoded) => {
      if (!error && decoded) {
        req.username = decoded.name;
        req.userID = decoded.userID;
      }
      next();
    });
  }
});
