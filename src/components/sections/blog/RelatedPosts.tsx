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

export function RelatedPosts({ posts }: Props) {
  if (!posts || posts.length === 0) return null
  
  return (
    <div className="mt-24 pt-16 border-t">
      <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
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
    </div>
  )
}
