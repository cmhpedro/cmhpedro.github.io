import { marked } from 'marked'

import { Card, CardContent } from './ui/card'

interface MarkedProps extends React.ComponentProps<'div'> {
  content: string
}

export function Marked({ content, className, ...props }: MarkedProps) {
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
