"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const user: (string | number | boolean) = [5, "je", true] --- order not important when it's a union type
//tuple -> order and size set
var user;
user = ["hey", 1, true];
var rgb = [255, 255, 255];
var newUser = [112, "h@h.c"];
newUser[1] = "yee@c.c"; // value can be changed when it's a tuple const
