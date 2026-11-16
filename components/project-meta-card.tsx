// Project meta card: the white "Role / Timeline / Platform / Tools" box
// that sits beside a case study's intro. Same look as the MakerPilot card.
// Use it on any page:  <ProjectMetaCard items={[{ label: "Role", value: "…" }]} />

export type MetaItem = { label: string; value: string }

export default function ProjectMetaCard({ items }: { items: MetaItem[] }) {
  return (
    <aside className="w-full md:w-56 lg:w-64 flex-shrink-0 bg-white p-4 sm:p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
      <dl className="space-y-5">
        {items.map(({ label, value }) => (
          <div key={label}>
            <dt className="font-space-grotesk text-[11px] font-bold uppercase tracking-wide text-[#007EA7] mb-1">
              {label}
            </dt>
            <dd className="font-montserrat text-sm text-[#2C3D4D]">{value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}
