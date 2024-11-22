// 导入NextRequest类
import { NextRequest, NextResponse } from 'next/server'
// 定义中间件函数
export function middleware(request: NextRequest) {
    // 打印请求的路径和一个字符串
    console.log(request.nextUrl.pathname,'hhhhh')
    // 如果请求的路径以 /dashboard 开头，则重写请求到 /dashboard/user 页面路由不变内容变了
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.rewrite(new URL('/dashboard/user', request.url))
      }
}
// 配置中间件匹配的路径  访问about 和 dashboard 路径下的所有请求 会触发hhhhh
export const config = {
    matcher: ['/about/:path*', '/dashboard/:path*'],//:path* 表示匹配任意路径
  }