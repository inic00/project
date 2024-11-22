import { NextRequest, NextResponse } from 'next/server'//next的请求和响应 
import db from '@/db'//引入数据库

//get请求 =>api/articles 实现一个分页查询 有查询数量 页数

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams //获取查询参数
  const pagenum = Number(searchParams.get('pagenum'))||1//获取页数
  const pagesize = Number(searchParams.get('pagesize'))||2//获取查询数量
  const query = searchParams.get('query')||''//获取查询条件

  // 获取数据库中的所有文章数据
  const data = db.data.posts

  // 如果有查询条件，则过滤数据
  let filterData = query ? data.filter(item => {
    // 从每个文章项中剔除id属性，剩下的属性用于查询
    let { id, ...rest }: { [key: string]: any } = item
    // 将所有非id属性的值转换为字符串并转换为小写，然后检查是否包含查询条件
    return Object.values(rest).some(value => String(value).toLowerCase().includes(query.toLowerCase()))
  }) : data

  const total = filterData.length//获取过滤后的数据数量

  const startIndex = (pagenum-1)*pagesize//计算起始索引
  const endIndex = Math.min(startIndex+pagesize,total) //计算结束索引

  filterData =startIndex>=total?[]: filterData.slice(startIndex,endIndex)//开始索引大于等于总数则返回空数组

  return NextResponse.json({code:0,message:'查询成功',data:{list:filterData,total}})//返回json数据ß
}

//post请求 =>api/articles
export async function POST(request: NextRequest) {
const body = await request.json()//获取请求体
await db.update(({ posts }:{posts:any[]}) => posts.push({//更新数据库
  //随机八位数
  id:Math.random().toString(36).substring(2,15),
  ...body
}));
  return NextResponse.json({code:0, message: '添加成功',data:null })//返回json数据
}