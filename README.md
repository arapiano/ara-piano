# ARA PIANO Redesign — Local Working Copy

ARA PIANOウェブサイトの新デザインを、安全なローカル作業ブランチで保存したものです。
公開中サイト、`main`ブランチ、本番環境には反映していません。

## 次回の作業開始場所

このフォルダをCodexで開いてください。

```text
/Users/kazumasaaramoto/Documents/Codex/2026-08-24/x20-less-is-more-x20-ara/outputs/ara-piano-redesign
```

作業ブランチ：`codex/ara-piano-redesign-20260826`

## ローカルプレビュー

依存関係がインストール済みの場合：

```bash
cd "/Users/kazumasaaramoto/Documents/Codex/2026-08-24/x20-less-is-more-x20-ara/outputs/ara-piano-redesign"
npm run dev -- --port 3001
```

ブラウザで <http://localhost:3001/> を開きます。英語版は <http://localhost:3001/en> です。

本番ビルドに近い状態で確認する場合：

```bash
npm run build
npm run start -- --port 3001
```

## 現在の構成

1. Hero
2. Store
3. YouTube
4. About
5. Contact
6. Footer

グローバルナビゲーションは `About / Store / YouTube / Contact / EN` のみです。

## 主なファイル

- `src/app/components/BrandSite.tsx` — 日英共通のページ内容、メニュー、受賞歴、フォーム処理
- `src/app/globals.css` — デザインシステム、アニメーション、レスポンシブ表示
- `src/app/page.tsx` — 日本語ページ
- `src/app/en/page.tsx` — 英語ページ
- `public/kazumasa-aramoto-signature.png` — Kazumasa Aramotoのサイン
- `public/ara-chan.png` — アラちゃん画像（240×240px、透過PNG）
- `REDESIGN_PLAN.md` — 現行サイトから新デザインへの移行メモ

## 実装済み・次回の最終確認対象

以下はコードと画像への反映まで完了しています。次回、本番反映前に実画面とリンク先を改めて確認してください。

- [ ] アラちゃん画像の追加状態とデスクトップ／スマートフォンでの表示サイズ
- [ ] YouTube動画「スパークル」への差し替えとサムネイル・リンク
- [ ] 登録者数「16万人を超え」「160K+」の表記
- [ ] プロフィール内「Awards & Press / 受賞歴・掲載実績」アコーディオン
- [ ] スマートフォン表示、全外部リンク、Contactフォームの最終動作確認

## 本番反映前の注意事項

- 2016年のThe International Indie Gathering指定URLは、現在無関係と思われる別ドメインへ転送されるため、安全な公式アーカイブURLを確認してから公開すること。
- ContactはFormspreeの既存送信先 `https://formspree.io/f/xykqkgbq` を保持している。実際の通知を発生させる本送信テストは未実施。
- デプロイ、公開サイト更新、`main`へのマージ、リモートへのpushは、画面確認と明示的な承認後に行うこと。

## 復元情報

- 元サイト保存タグ：`backup/pre-redesign-20260826-212253`
- 元サイト完全バックアップ：`../backups/ara-piano-20260826-212253`
- 2026-08-27復旧スナップショット：`backup/ara-piano-recovered-20260827-054619`

日時付きの最新保存ブランチ／タグは、このREADMEを更新したコミットと同じ地点を参照します。
