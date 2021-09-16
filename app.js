const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.post("/login", (req, res) => {
  try {
    const {email, password} = req.body
    const user = await User.findOne({email, password})
    const token = generateToken(user)
    res.status(200).json({token})
  } catch (error) {
    console.log("🚀 ~ file: app.js ~ line 12 ~ app.post ~ error", error)
  }
})

app.listen(PORT, () => {
	console.log("🚀 ~ file: app.js ~ line 6 ~ app.listen ~ PORT", PORT);
});
