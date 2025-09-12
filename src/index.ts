import { serve } from "@hono/node-server";
import { Hono } from "hono";

// dotenvxで環境変数を読み込み
import "@dotenvx/dotenvx/config";

const app = new Hono();

// ルートエンドポイント
app.get("/", (c) => {
  return c.text("Hello Hono! 🔥");
});

// ヘルスチェックエンドポイント
app.get("/health", (c) => {
  return c.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  });
});

// API例
app.get("/api/users", (c) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  return c.json(users);
});

app.get("/api/users/:id", (c) => {
  const id = c.req.param("id");
  const user = { id: Number(id), name: `User ${id}` };
  return c.json(user);
});

app.get("/name", (c) => {
  const appName = process.env.APP_NAME;
  return c.text(`Hello, ${appName}!`);
});

app.get("/list", (c) => {
  const list = [1, 2, 3, 4]
  return c.json(list)
});

const port = Number(process.env.PORT);

console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
