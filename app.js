const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.post("/register", async (req, res) => {
	try {
		const { email, password, username } = req.body;
		const user = await User.create({ email, password, username });
		ress.status(200).json({ user });
	} catch (error) {
		console.log("🚀 ~ file: app.js ~ line 10 ~ app.post ~ error", error);
	}
});

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

// test commit

app.listen(PORT, () => {
	console.log("🚀 ~ file: app.js ~ line 6 ~ app.listen ~ PORT", PORT);
});
