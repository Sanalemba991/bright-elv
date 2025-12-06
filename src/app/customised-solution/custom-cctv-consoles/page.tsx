import Link from "next/link";

export default function CustomCCTVConsoles() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Link href="/customised-solution" className="text-green-600 hover:text-green-800 font-bold mb-8 inline-block">
          ← Back to Customised Solutions
        </Link>
        
        <h1 className="text-5xl font-bold mb-4">Custom CCTV Consoles</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Professional CCTV monitoring consoles customized for control room operations, 
              surveillance centers, and security facilities.
            </p>
            <h2 className="text-2xl font-bold mb-4">Console Features:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Multi-monitor mounting systems</li>
              <li>Ergonomic design for extended use</li>
              <li>Integrated equipment racks</li>
              <li>Cable management systems</li>
              <li>Custom height and configuration</li>
              <li>Keyboard and mouse trays</li>
              <li>Lighting integration</li>
              <li>Professional finishing options</li>
            </ul>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition">
              Design Console
            </button>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Custom CCTV Console Image</span>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Console Configurations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Single Operator</h3>
              <p className="text-gray-700">Compact console for single-person operations</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Multi-Operator</h3>
              <p className="text-gray-700">Large control room configurations</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Modular</h3>
              <p className="text-gray-700">Expandable and reconfigurable systems</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Specifications</h2>
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3">Monitor Support</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Single monitor mount</li>
                  <li>Dual monitor arms</li>
                  <li>Multiple monitor rails</li>
                  <li>Custom bracket design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Equipment Rack Options</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>2U to 12U racks</li>
                  <li>Integrated cooling</li>
                  <li>Cable management</li>
                  <li>Power distribution</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
