
也就是说使用软导航的形式访问 显示的是【拦截这个文件的意思】(.)product里面的page 透明度的一张图片 
而分享出来的访问的是(.)photos(表示匹配同一级的文件，也就是product文件，由于平行路由不纳入url路径里面 所以只需要返回同一级 一个点)
1.需要动态路由porduct[id]/page.tsx中展示商品详情信息  详情页   
2.使用tailwind.com的ui组件
3.平行路由@modal/page     路由拦截 和使用
5.一般用的平行路由都要建一个default.tsx文件，用于处理刷新页面或者硬导航的时候出现404问题

路由处理程序·
app/api/route.tsx  专门负责处理请求  不能page.js文件并排！  page文件是专门处理页面渲染的
app/api/:id/route.tsx 动态路由 id是动态路由的参数

使用lowdb 数据库  在scr下创建db.ts文件 按照文档进行基本配置
然后在apipost模拟请求 向http://localhost:3000/api/articles 发送请求后 会返回json数据生成db.json文件  在articles/route.ts做操作存进数据库
articles/[id]/route 是动态路由  主要用来需要根据动态id做数据请求，例如删除修改查找指定ID的数据 

time/route.ts 是api请求 返回时间 开发环境使用没有缓冲(请求会实时更新时间) 生产环境使用有缓冲(运行生产环境，先打包然后next start,请求之后是固定打包的时间)
处理退出缓存 opting out of caching 设置响应头禁止缓存

api/route.ts 设置cookie

中间件 middleware.ts  常用场景 设置cookie 


