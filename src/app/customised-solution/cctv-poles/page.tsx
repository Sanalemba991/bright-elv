import Link from "next/link";

export default function CCTVPoles() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Link href="/customised-solution" className="text-green-600 hover:text-green-800 font-bold mb-8 inline-block">
          ← Back to Customised Solutions
        </Link>
        
        <h1 className="text-5xl font-bold mb-4">CCTV Poles / Light Poles / Solar Poles</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Custom-designed poles for mounting CCTV cameras, lighting fixtures, and solar panel systems. 
              Built with durability and performance in mind.
            </p>
            <h2 className="text-2xl font-bold mb-4">Available Options:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>CCTV poles with mounting brackets</li>
              <li>Light poles with integrated fixtures</li>
              <li>Solar panel support poles</li>
              <li>Galvanized steel construction</li>
              <li>Custom height and diameter</li>
              <li>Weather-resistant finishes</li>
              <li>Cable management systems</li>
              <li>Foundation design consultation</li>
            </ul>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition">
              Request Custom Design
            </button>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">CCTV Poles Image</span>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Specifications</h2>
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2">Materials</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Galvanized steel</li>
                  <li>Stainless steel</li>
                  <li>Aluminum alloy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Customization</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Height: 6m - 20m+</li>
                  <li>Diameter: Variable</li>
                  <li>Load capacity: Custom</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Features</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Climbing cleats</li>
                  <li>Mounting arms</li>
                  <li>Cable trays</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Installation</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Foundation design</li>
                  <li>Professional installation</li>
                  <li>Maintenance support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
