import Link from "next/link";

export default function CustomBoxes() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Link href="/customised-solution" className="text-green-600 hover:text-green-800 font-bold mb-8 inline-block">
          ← Back to Customised Solutions
        </Link>
        
        <h1 className="text-5xl font-bold mb-4">Custom Obvan / Broadcast Box / Back Box / Front Plate / Floor Box / IP Rated Box</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Specialized custom enclosures and boxes designed for broadcasting, equipment mounting, and harsh environments. 
              All built with precision and durability.
            </p>
            <h2 className="text-2xl font-bold mb-4">Box Types:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Obvan enclosures for mobile equipment</li>
              <li>Broadcast boxes for field operations</li>
              <li>Back boxes for equipment mounting</li>
              <li>Front plates and bezels</li>
              <li>Floor boxes for cable management</li>
              <li>IP-rated enclosures (IP65, IP67, IP68)</li>
              <li>Custom ventilation systems</li>
              <li>EMI/RFI shielding options</li>
            </ul>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition">
              Request Specification
            </button>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Custom Boxes Image</span>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Box Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Mobile Equipment</h3>
              <p className="text-gray-700">Obvan and broadcast boxes for field operations and mobile installations</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Installation Hardware</h3>
              <p className="text-gray-700">Back boxes, front plates, and mounting solutions</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Environmental</h3>
              <p className="text-gray-700">IP-rated boxes for outdoor and harsh conditions</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Materials & Features</h2>
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3">Material Options</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Aluminum alloy</li>
                  <li>Stainless steel</li>
                  <li>Powder-coated steel</li>
                  <li>ABS plastic</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Protection Rating</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>IP65 - Dust & water jets</li>
                  <li>IP67 - Dust & immersion</li>
                  <li>IP68 - Dust & prolonged immersion</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
