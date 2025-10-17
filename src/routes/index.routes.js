import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.njk", { title: "CADEP | Inicio" });
});

export default router;
