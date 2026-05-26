"use client"

import { Linkedin, Twitter, Mail, Link as LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useEffect, useState } from "react"

export function ShareButtons({ title }: { title: string }) {
  const [url, setUrl] = useState("")

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  const copyLink = () => {
    navigator.clipboard.writeText(url)
    toast.success("Link copied to clipboard")
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground mr-2">Share:</span>
      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`} target="_blank" rel="noreferrer">
          <Linkedin className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noreferrer">
          <Twitter className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
        <a href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`}>
          <Mail className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={copyLink}>
        <LinkIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}
