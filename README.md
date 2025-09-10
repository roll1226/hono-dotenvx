# Hono + dotenvx プロジェクト

このプロジェクトは、Hono（高速なWebフレームワーク）とdotenvx（環境変数管理）を使用したWebアプリケーションです。

## 特徴

- ⚡ **Hono**: 高速で軽量なWebフレームワーク
- 🔐 **dotenvx**: 安全な環境変数管理
- 🔧 **TypeScript**: 型安全な開発
- 🚀 **Node.js**: サーバーサイド実行環境

## 必要要件

- Node.js 18.0.0 以上
- npm または yarn

## セットアップ

1. 依存関係をインストール:
   ```bash
   npm install
   ```


2. 環境変数ファイルをコピー:
   ```bash
   cp .env.example .env
   ```

3. 必要に応じて `.env` ファイルを編集

## 使用方法

### 開発モード

```bash
npm run dev
```

サーバーが `http://localhost:3000` で起動します。

### ビルド

```bash
npm run build
```

TypeScriptファイルがJavaScriptにコンパイルされ、`dist/` ディレクトリに出力されます。

### 本番環境で実行

```bash
npm run start
```

## API エンドポイント

- `GET /` - ウェルカムメッセージ
- `GET /health` - ヘルスチェック
- `GET /api/users` - ユーザー一覧
- `GET /api/users/:id` - 特定のユーザー情報

## 環境変数

| 変数名 | 説明 | デフォルト値 |
|--------|------|--------------|
| `PORT` | サーバーポート | `3000` |
| `NODE_ENV` | 実行環境 | `development` |
| `API_VERSION` | APIバージョン | `v1` |
| `DATABASE_URL` | データベースURL | - |
| `APP_NAME` | アプリケーション名 | `hono-dotenvx` |
| `DEBUG` | デバッグモード | `true` |

## ディレクトリ構造

```
hono-dotenvx/
├── src/
│   └── index.ts      # メインアプリケーションファイル
├── dist/             # ビルド出力ディレクトリ
├── .env              # 環境変数ファイル（git無視）
├── .env.example      # 環境変数テンプレート
├── package.json      # プロジェクト設定
├── tsconfig.json     # TypeScript設定
└── README.md         # このファイル
```

## 開発

新しいルートを追加する場合は、`src/index.ts` ファイルを編集してください。

例:
```typescript
app.get('/api/hello/:name', (c) => {
  const name = c.req.param('name')
  return c.json({ message: `Hello, ${name}!` })
})
```

## ライセンス

MIT
