import Link from "next/link";

export default function CustomKioskPodium() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Link href="/customised-solution" className="text-green-600 hover:text-green-800 font-bold mb-8 inline-block">
          ← Back to Customised Solutions
        </Link>
        
        <h1 className="text-5xl font-bold mb-4">Custom Kiosk & Podium</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Professional custom-designed kiosks and podiums for retail, hospitality, presentations, and events. 
              Built to enhance functionality and aesthetics.
            </p>
            <h2 className="text-2xl font-bold mb-4">Custom Options:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Interactive display kiosks</li>
              <li>Presentation podiums</li>
              <li>Information/ticketing kiosks</li>
              <li>Payment processing kiosks</li>
              <li>Customizable dimensions</li>
              <li>Integrated cable management</li>
              <li>Branding and color options</li>
              <li>Professional finishing</li>
            </ul>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition">
              Design Your Kiosk
            </button>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Custom Kiosk & Podium Image</span>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Retail</h3>
              <p className="text-gray-700">Point-of-sale and product display kiosks</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Hospitality</h3>
              <p className="text-gray-700">Check-in and information kiosks</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Presentations</h3>
              <p className="text-gray-700">Professional podiums for speaking</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Events</h3>
              <p className="text-gray-700">Custom solutions for any event</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
