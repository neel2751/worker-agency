import { BlogCard } from "./BlogCard"

interface Post {
  slug: string
  frontmatter: {
    title: string
    excerpt: string
    date: string
    category: string
  }
}

interface Props {
  posts: Post[]
}

export function BlogGrid({ posts }: Props) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard 
          key={post.slug}
          slug={post.slug}
          title={post.frontmatter.title}
          excerpt={post.frontmatter.excerpt}
          date={post.frontmatter.date}
          category={post.frontmatter.category}
        />
      ))}
    </div>
  )
}
