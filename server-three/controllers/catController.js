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

export { cat_list_get, cat_get };
