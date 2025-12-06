import Link from "next/link";

export default function CustomPopupCable() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Link href="/customised-solution" className="text-green-600 hover:text-green-800 font-bold mb-8 inline-block">
          ← Back to Customised Solutions
        </Link>
        
        <h1 className="text-5xl font-bold mb-4">Custom Popup Box / Cable Cubby</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Innovative custom popup boxes and cable management cubbies designed for convenient access 
              to power, data, and audio connections in offices, meeting rooms, and event spaces.
            </p>
            <h2 className="text-2xl font-bold mb-4">Solutions Include:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Pop-up outlet boxes for desks</li>
              <li>Cable pass-through systems</li>
              <li>Integrated power distribution</li>
              <li>Data and video connectivity</li>
              <li>Audio connection options</li>
              <li>Custom cable management</li>
              <li>Floor and desktop models</li>
              <li>Finish matching options</li>
            </ul>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition">
              View Options
            </button>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Popup Box / Cable Cubby Image</span>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Product Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Popup Floor Boxes</h3>
              <p className="text-gray-700 mb-3">Convenient connection points for conference rooms and event spaces</p>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Motorized popup mechanism</li>
                <li>Recessed mounting</li>
                <li>Custom port combinations</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Desktop Cable Cubbies</h3>
              <p className="text-gray-700 mb-3">Organized cable management for modern office desks</p>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Desk clamp mounting</li>
                <li>Multiple outlet options</li>
                <li>Cable routing channels</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Connectivity Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <h3 className="font-bold mb-2">Power</h3>
              <p className="text-gray-700 text-sm">Standard & GFCI outlets</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <h3 className="font-bold mb-2">Data</h3>
              <p className="text-gray-700 text-sm">RJ45 Ethernet ports</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <h3 className="font-bold mb-2">Audio/Video</h3>
              <p className="text-gray-700 text-sm">HDMI, USB, 3.5mm</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <h3 className="font-bold mb-2">Charging</h3>
              <p className="text-gray-700 text-sm">USB-C & QI charging</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
