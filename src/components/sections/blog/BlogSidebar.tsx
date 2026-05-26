import Link from "next/link"
import { Search } from "lucide-react"

export function BlogSidebar() {
  const categories = ["Engineering", "Architecture", "Payroll", "Security"]
  
  return (
    <div className="space-y-8 sticky top-24">
      <div className="bg-card border rounded-2xl p-6">
        <h3 className="font-bold mb-4">Search</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="w-full pl-9 pr-4 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
      
      <div className="bg-card border rounded-2xl p-6">
        <h3 className="font-bold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              href={`/blog/category/${cat.toLowerCase()}`}
              className="block text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
