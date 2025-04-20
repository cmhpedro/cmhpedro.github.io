import { Card, CardContent } from './ui/card'

export function CapstoneInfo({ ...props }: React.ComponentProps<'div'>) {
  return (
    <div {...props}>
      <Card>
        <CardContent className="space-y-4">
          <div>
            <h3 className="mb-2 text-xl font-semibold">Author</h3>
            <p>Pedro Henrique Mariano Corrêa</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold">Advisor</h3>
            <p>Paulo Roberto Miranda Meirelles</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold">Co-Advisor</h3>
            <p>José Gonçalves Lima Neto</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
