import Link from "next/link";

export default function CustomisedSolution() {
  const products = [
    {
      title: "CCTV Poles / Light Poles / Solar Poles",
      slug: "cctv-poles",
      description: "Custom-designed poles for CCTV cameras, lighting, and solar panel installations.",
    },
    {
      title: "Custom Kiosk & Podium",
      slug: "custom-kiosk-podium",
      description: "Tailored kiosk and podium solutions for various applications.",
    },
    {
      title: "Custom Obvan / Broadcast Box / Back Box / Front Plate / Floor Box / IP Rated Box",
      slug: "custom-boxes",
      description: "Specialized custom enclosures and boxes for different requirements.",
    },
    {
      title: "Custom CCTV Consoles",
      slug: "custom-cctv-consoles",
      description: "Professional CCTV monitoring consoles designed to your specifications.",
    },
    {
      title: "Custom Popup Box / Cable Cubby",
      slug: "custom-popup-cable",
      description: "Convenient custom popup boxes and cable management solutions.",
    },
    {
      title: "Custom Face Plates",
      slug: "custom-face-plates",
      description: "Custom-designed face plates for various equipment and applications.",
    },
    {
      title: "Custom Portable Mixer Racks / AV Racks",
      slug: "custom-racks",
      description: "Professional portable and fixed AV racks tailored to your needs.",
    },
    {
      title: "Custom Flight Case / Wooden Podium",
      slug: "custom-cases-podium",
      description: "Durable flight cases and wooden podiums for transport and presentation.",
    },
    {
      title: "Custom Projector Stand / Ceiling Mount",
      slug: "custom-stands-mounts",
      description: "Custom stands and mounts for projectors and display equipment.",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Customised Solutions</h1>
        <p className="text-xl text-gray-700 mb-12">
          Bespoke products designed and manufactured to your exact specifications
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.slug} href={`/customised-solution/${product.slug}`}>
              <div className="bg-green-50 hover:bg-green-100 p-6 rounded-lg cursor-pointer transition transform hover:scale-105 h-full">
                <h2 className="text-xl font-bold mb-3">{product.title}</h2>
                <p className="text-gray-700 mb-4 text-sm">{product.description}</p>
                <span className="text-green-600 hover:text-green-800 font-bold text-sm">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Why Custom Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Perfect Fit</h3>
              <p className="text-gray-700">Designed exactly for your requirements</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Quality Control</h3>
              <p className="text-gray-700">Premium materials and craftsmanship</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Expert Support</h3>
              <p className="text-gray-700">Design consultation and after-sales support</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
