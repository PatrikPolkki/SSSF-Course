"use strict";
// catController
import { cats } from "../models/catModel";

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req, res) => {
  const cat = cats.filter((cat) => {
    return req.params.id === cat.id;
  });
  res.send(cat);
};

const cat_post = (req, res) => {
  console.log(req.body);
  res.send(req.body);
};

export { cat_list_get, cat_get, cat_post };
