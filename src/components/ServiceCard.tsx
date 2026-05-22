import Link from "next/link"
import Image from "next/image"
import { Service } from "@/data/services"

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all overflow-hidden flex flex-col"
    >
      <div className="relative h-44 overflow-hidden bg-gray-900">
        <Image
          src={`/images/service-${service.slug}.jpg`}
          alt={service.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors flex items-center gap-2">
          <span>{service.icon}</span> {service.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
        <span className="text-green-600 text-sm font-semibold mt-auto pt-2">Learn more →</span>
      </div>
    </Link>
  )
}
