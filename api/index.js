// api/index.js
const jsonServer = require("json-server");

const app = jsonServer.create();
const router = jsonServer.router("db.json"); // must be at repo root
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(jsonServer.bodyParser);

// health
app.get("/health", (req, res) => res.json({ ok: true }));

// mount db routes: /blogs, /users, etc.
app.use(router);

// export for Vercel
module.exports = app;
