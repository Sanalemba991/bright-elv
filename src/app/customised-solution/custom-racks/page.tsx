import Link from "next/link";

export default function CustomRacks() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Link href="/customised-solution" className="text-green-600 hover:text-green-800 font-bold mb-8 inline-block">
          ← Back to Customised Solutions
        </Link>
        
        <h1 className="text-5xl font-bold mb-4">Custom Portable Mixer Racks / AV Racks</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Professional portable and fixed AV racks designed for audio mixing, equipment mounting, 
              and broadcast operations. Custom-built for your specific equipment and workflow.
            </p>
            <h2 className="text-2xl font-bold mb-4">Rack Solutions:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Custom rack dimensions</li>
              <li>2U to 24U configurations</li>
              <li>Portable with wheels and handles</li>
              <li>Fixed installation options</li>
              <li>Equipment mounting rails</li>
              <li>Cable management systems</li>
              <li>Power distribution integrated</li>
              <li>Cooling and ventilation options</li>
            </ul>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition">
              Design Your Rack
            </button>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Custom Racks Image</span>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Rack Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Portable Racks</h3>
              <p className="text-gray-700 mb-3">Mobile solutions for on-location work</p>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Heavy-duty wheels</li>
                <li>Ergonomic handles</li>
                <li>Lightweight materials</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Mixer Racks</h3>
              <p className="text-gray-700 mb-3">Specialized for audio mixing consoles</p>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Mixing console mounts</li>
                <li>Monitor positioning</li>
                <li>Cable routing</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Server Racks</h3>
              <p className="text-gray-700 mb-3">Fixed installations for equipment</p>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Standard 19" rails</li>
                <li>Cooling systems</li>
                <li>Cable management</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Specifications</h2>
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3">Rack Configurations</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>2U, 4U, 6U options</li>
                  <li>8U, 12U, 16U, 20U, 24U</li>
                  <li>Custom height available</li>
                  <li>Variable width options</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Features</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Fan cooling systems</li>
                  <li>PDU integration</li>
                  <li>Keyboard drawers</li>
                  <li>Monitor arms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
