const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
//using routes to create endpoints to perform CRUD

//-----for creating a user-----
router.post(
  "/createuser",

  //here we are using express validator to check if the parameters given by the users are correct or not
  //body("id","the message that it display if not valid")
  [
    body("email", "Invalid Email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "Incorrect Password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await User.create({
        name: req.body.name, //req.body.name taking input from the body
        password: req.body.password,
        email: req.body.email,
        location: req.body.location,
      }).then(res.json({ success: true }));
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

//-----------for login feature---------
router.post(
  "/loginuser",
  [
    body("email", "Invalid Email").isEmail(),
    body("password", "Incorrect Password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;

    try {
      let userdata = await User.findOne({ email });
      if (!userdata) {
        return res.status(400).json({ errors: "Try valid credentials" });
      }
      if (req.body.password !== userdata.password) {
        return res.status(400).json({ errors: "Try valid credentials" });
      }

      return res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
module.exports = router;
