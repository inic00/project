This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
1.需要动态路由porduct[id]/ 路由拦截 和使用到平行路由 @modal
2.使用tailwind.com的ui组件
3.在app/product/page.tsx中展示商品信息
4.在app/product/[id]/page.tsx中使用动态路由展示商品详情
5.default.tsx文件用于处理刷新页面或者硬导航的时候出现404问题
