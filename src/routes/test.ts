import express from "express";

const testRoutes = (router: express.Router) => {
  router.get("/test", (req: express.Request, res: express.Response) => {
    return res.json({ msg: "Hello Test" });
  });
};

export default testRoutes;
