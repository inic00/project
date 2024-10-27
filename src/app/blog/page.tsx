
import BlogList from '@/components/bloglist'
//运行在服务端
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '博客网页',
}

const BlogPage = () => {
    return (
        <div>
            <BlogList />
        </div>
    );
};

export default BlogPage;
