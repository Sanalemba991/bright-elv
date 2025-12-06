import Link from "next/link";

export default function CCTVInstallation() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Link href="/elv-solution" className="text-blue-600 hover:text-blue-800 font-bold mb-8 inline-block">
          ← Back to ELV Solutions
        </Link>
        
        <h1 className="text-5xl font-bold mb-4">CCTV Installation</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Professional CCTV installation services for residential, commercial, and industrial properties.
            </p>
            <h2 className="text-2xl font-bold mb-4">Services Include:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Complete system design and assessment</li>
              <li>High-definition camera installation</li>
              <li>Professional wiring and cable management</li>
              <li>DVR/NVR setup and configuration</li>
              <li>Remote monitoring setup</li>
              <li>System testing and optimization</li>
              <li>User training and documentation</li>
            </ul>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
              Request Quote
            </button>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">CCTV Installation Image</span>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Experienced Team</h3>
              <p className="text-gray-700">Years of experience in CCTV system installation</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Quality Equipment</h3>
              <p className="text-gray-700">Premium cameras and recording equipment</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
              <p className="text-gray-700">Round-the-clock customer support</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
