import Link from "next/link";

export default function StructureCabling() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Link href="/elv-solution" className="text-blue-600 hover:text-blue-800 font-bold mb-8 inline-block">
          ← Back to ELV Solutions
        </Link>
        
        <h1 className="text-5xl font-bold mb-4">Structure Cabling</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Professional structured cabling solutions designed for modern network infrastructure and communications.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our Services:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Cat6 and Cat6A cabling installation</li>
              <li>Fiber optic cabling</li>
              <li>Rack and panel installation</li>
              <li>Patch cable termination</li>
              <li>Cable testing and certification</li>
              <li>Network infrastructure design</li>
              <li>Documentation and labeling</li>
              <li>Future scalability planning</li>
            </ul>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
              Get Infrastructure Plan
            </button>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Structure Cabling Image</span>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Technology Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="font-bold text-lg mb-2">Cat6</h3>
              <p className="text-gray-700">High-speed networking</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="font-bold text-lg mb-2">Cat6A</h3>
              <p className="text-gray-700">Enhanced performance</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="font-bold text-lg mb-2">Fiber Optic</h3>
              <p className="text-gray-700">Long-distance connectivity</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="font-bold text-lg mb-2">Hybrid</h3>
              <p className="text-gray-700">Mixed media solutions</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
