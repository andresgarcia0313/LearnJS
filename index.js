const serverless = require("serverless-http");
const app = express();
app.get("/", (req, res) => {
  res.send("<h1>¡Hola Mundo desde Express en Netlify Functions! 🌍</h1>");
});
module.exports.handler = serverless(app);
