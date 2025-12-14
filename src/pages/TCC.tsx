import { CapstoneInfo } from '@/components/CapstoneInfo'
import { CapstoneLinks } from '@/components/CapstoneLinks'
import { Marked } from '@/components/Marked'

export function TCC() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="space-y-4 md:col-span-1">
          <CapstoneInfo />
          <CapstoneLinks />
        </div>

        <Marked
          url="https://raw.githubusercontent.com/cmhpedro/TCC/refs/heads/main/README.md"
          className="md:col-span-2"
        />
      </div>
    </div>
  )
}
