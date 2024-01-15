import express from "express";

import testRoutes from "./test";

const router = express.Router();

const routes = (): express.Router => {
  // /
  router.get("/", (req: express.Request, res: express.Response) => {
    return res.json({ msg: "Hello Index" });
  });

  // /test
  testRoutes(router);

  return router;
};

export default routes;
