import { Card, CardContent } from './ui/card'

export function CapstoneLinks({ ...props }: React.ComponentProps<'div'>) {
  return (
    <div {...props}>
      <Card>
        <CardContent className="space-y-4">
          <div>
            <h3 className="mb-2 text-xl font-semibold">Monografia</h3>
            <a
              href="/monografia.pdf"
              download
              className="text-primary hover:underline"
            >
              Download PDF
            </a>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold">GitHub Project</h3>
            <a
              href="https://github.com/ArchHypo/hypo-stage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
