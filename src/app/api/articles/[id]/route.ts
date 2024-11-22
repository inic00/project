import { NextRequest, NextResponse } from 'next/server'//从next/server引入NextRequest和NextResponse，用于处理请求和响应
import db from '@/db'//从 '@/db' 引入数据库

//处理DELETE请求，用于删除指定id的文章
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  //更新数据库，删除指定id的文章
  await db.update(({ posts }: { posts: { id: string }[] }) => {
    //在posts数组中找到id与params.id相同的文章的索引
    const idx = posts.findIndex((post) => post.id === params.id)
    //如果找到，则从数组中删除该文章
    if (idx !== -1) {
      posts.splice(idx, 1)
    }
  })
  //返回删除成功的响应
  return NextResponse.json({ code:0, message: '删除成功' })
}

//处理PATCH请求，用于修改指定id的文章
export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  //从请求中获取JSON格式的body
  const body = await request.json()
  //打印body以便调试
  console.log(body)
  //更新数据库，修改指定id的文章
  await db.update(({ posts }: { posts: { id: string }[] }) => {
    //在posts数组中找到id与params.id相同的文章的索引
    const idx = posts.findIndex((post) => post.id === params.id)
    //如果找到，则更新该文章
    if (idx !== -1) {
      //使用扩展运算符合并原文章和新的数据
      posts[idx] = { ...posts[idx], ...body }
    }
  })
  //返回修改成功的响应
  return NextResponse.json({ code:0, message: '修改成功', data:body })
}

//处理GET请求，用于查找指定id的文章
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  //打印数据库中的所有文章，以便调试
  console.log(db.data.posts,'db.data.posts')
  //在数据库中查找id与params.id相同的文章
  const get = db.data.posts.find((post: { id: string }) => post.id === params.id)
  //返回查找成功的响应
  return NextResponse.json({ code:0, message: '查找成功', data:get })
}

