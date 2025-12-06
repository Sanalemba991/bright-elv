import Link from "next/link";

export default function AudioVisualSolution() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Link href="/elv-solution" className="text-blue-600 hover:text-blue-800 font-bold mb-8 inline-block">
          ← Back to ELV Solutions
        </Link>
        
        <h1 className="text-5xl font-bold mb-4">Audio Visual Solutions</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Comprehensive audio and visual system solutions for conference rooms, auditoriums, and entertainment venues.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our AV Solutions:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Projector installation and calibration</li>
              <li>Large display systems</li>
              <li>Sound system design and installation</li>
              <li>Video conferencing setup</li>
              <li>Control system integration</li>
              <li>Lighting solutions</li>
              <li>Acoustic optimization</li>
              <li>Professional installation</li>
            </ul>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
              Design Your AV System
            </button>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Audio Visual Solution Image</span>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Conference Rooms</h3>
              <p className="text-gray-700">Professional meeting spaces with integrated AV</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Auditoriums</h3>
              <p className="text-gray-700">Large-scale presentation systems</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Training Centers</h3>
              <p className="text-gray-700">Educational facilities with AV support</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Entertainment</h3>
              <p className="text-gray-700">Events and venue AV systems</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Broadcast</h3>
              <p className="text-gray-700">Broadcasting and streaming solutions</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Digital Signage</h3>
              <p className="text-gray-700">Interactive display networks</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
