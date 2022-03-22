"use strict";
import express from "express";
import catRoute from "./routes/catRoute";
import userRoute from "./routes/userRoute";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
import passport from "./utils/pass.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize({}));
const port = 3000;

app.use("/auth", authRoute);

app.use("/cat", passport.authenticate("jwt", { session: false }), catRoute);
app.use("/user", passport.authenticate("jwt", { session: false }), userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
