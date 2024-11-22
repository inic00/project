import { NextRequest, NextResponse } from 'next/server'

export async function GET(request:NextRequest){
    console.log('请求时间',Date.now(),'/api/time')
  return NextResponse.json({time:Date.now()})
}
//选择退出缓存
// import { NextRequest, NextResponse } from 'next/server'

// export async function GET(request: NextRequest) {
//     console.log('请求时间', Date.now(), '/api/time');
    
//     // 设置响应头，禁用缓存
//     const response = NextResponse.json({ time: Date.now() });
//     response.headers.set('Cache-Control', 'no-store'); // 禁用缓存

//     return response;
// }
