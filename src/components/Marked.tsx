import { marked } from 'marked'
import { useEffect, useState } from 'react'

import { Card, CardContent } from './ui/card'

interface MarkedProps extends React.ComponentProps<'div'> {
  url: string
}

export function Marked({ url, className, ...props }: MarkedProps) {
  const [content, setContent] = useState('')

  useEffect(() => {
    const fetchContent = async () => {
      const res = await fetch(url)
      const content = await res.text()
      setContent(content)
    }

    fetchContent()
  }, [url])

  return (
    <div className={className}>
      <Card>
        <CardContent
          className="marked"
          dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
          {...props}
        />
      </Card>
    </div>
  )
}
