import Link from "next/link";

export default function ELVSolution() {
  const services = [
    {
      title: "CCTV Installation",
      slug: "cctv-installation",
      description: "Professional CCTV system installation for residential and commercial properties.",
    },
    {
      title: "CCTV Maintenance",
      slug: "cctv-maintenance",
      description: "Regular maintenance and support services for your CCTV systems.",
    },
    {
      title: "Structure Cabling",
      slug: "structure-cabling",
      description: "High-quality structured cabling solutions for networks and communications.",
    },
    {
      title: "PABX",
      slug: "pabx",
      description: "Private Automatic Branch Exchange systems for efficient business communications.",
    },
    {
      title: "Audio Visual Solution",
      slug: "audio-visual-solution",
      description: "Comprehensive audio and visual system solutions for various applications.",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">ELV Solutions</h1>
        <p className="text-xl text-gray-700 mb-12">
          Complete Extra Low Voltage systems and services
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link key={service.slug} href={`/elv-solution/${service.slug}`}>
              <div className="bg-blue-50 hover:bg-blue-100 p-8 rounded-lg cursor-pointer transition transform hover:scale-105">
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <span className="text-blue-600 hover:text-blue-800 font-bold">
                  View Details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
