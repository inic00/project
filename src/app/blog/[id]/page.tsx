
import { Card } from 'antd';
const blogList = [
    { id: 1, title: '标题1', content: '内容1' },
    { id: 2, title: '标题2', content: '内容2' },
    { id: 3, title: '标题3', content: '内容3' },
];
//这是 TypeScript 中用于定义对象类型的关键字  下面是两种方式
interface IParams {params: { id: string } }
//设置动态网页消息
export async function generateMetadata({params}: IParams) {
    return {
      title: `博客网页_${params.id} `
    }
  }
//传过来的id会变成一个字符串 

const BlogPage = ({ params }: { params: { id: string } }) => {
    const blog = blogList.find((item) => item.id === parseInt(params.id))//找到对应id的博客  params.id是字符串 需要转换为数字(简写+ params.id即可) 
    return (
        //问号 是可选链操作符 如果blog存在 则渲染博客内容 否则渲染404页面   
        <Card title={blog?.title} >
            <p>{blog?.content}</p>
        </Card>
    );
};

export default BlogPage;