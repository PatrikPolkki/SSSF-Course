"use strict";
import express from "express";
import catRoute from "./routes/catRoute";
import userRoute from "./routes/userRoute";

const app = express();
const port = 3000;

app.use("/cat", catRoute);

app.use("/user", userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
