'use client'// 指定客户端组件
import { List, Avatar } from 'antd';
//写一个数组对象,里面有id 标题 内容 三个属性
const blogList = [
    { id: 1, title: '标题1', content: '内容1' },
    { id: 2, title: '标题2', content: '内容2' },
    { id: 3, title: '标题3', content: '内容3' },
];

const BlogList = () => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={blogList}
            renderItem={(item, index) => (
                <List.Item>
                    {/* 使用tailwindcss 设置样式    冒号是important */}
                    <List.Item.Meta className='!items-center'
                        avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                        title={<a href={`/blog/${item.id}`}>{item.title}</a>}
                        description={item.content}
                    />
                </List.Item>
            )}
        />
    );
};

export default BlogList;