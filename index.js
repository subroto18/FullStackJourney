const express = require("express");
const zod = require("zod");
const app = express();

const magicMiddleware = (req, res, next) => {
  next();
};

app.use(express.json());
app.use(magicMiddleware);

const zodSchema = zod.object({
  name: string,
  pass: number,
  email: email,
});

const userZodSchema = app.get("/testing", (req, res) => {
  const { name, pass, email } = req.query;

  console.log(name, pass, email, req.params);
  res.json({
    message: "you are awesome",
  });
});

app.use((error, req, res, next) => {
  res.send(500, "something went wrong");
  error("Sorry something went wrong");
});

app.listen(8080, () => {
  console.log("server is running in port 8080");
});
