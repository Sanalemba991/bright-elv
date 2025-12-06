import Link from "next/link";

export default function PABX() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Link href="/elv-solution" className="text-blue-600 hover:text-blue-800 font-bold mb-8 inline-block">
          ← Back to ELV Solutions
        </Link>
        
        <h1 className="text-5xl font-bold mb-4">PABX Systems</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Professional Private Automatic Branch Exchange systems for efficient and scalable business communications.
            </p>
            <h2 className="text-2xl font-bold mb-4">PABX Solutions Include:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Traditional PABX systems</li>
              <li>IP-based PABX solutions</li>
              <li>Hybrid PBX systems</li>
              <li>Call routing and IVR setup</li>
              <li>Extension management</li>
              <li>Voicemail systems</li>
              <li>Call recording and monitoring</li>
              <li>Integration with existing systems</li>
            </ul>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
              Request Consultation
            </button>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">PABX System Image</span>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">System Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Call Management</h3>
              <p className="text-gray-700">Advanced call routing and transfer capabilities</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Scalability</h3>
              <p className="text-gray-700">Grows with your business needs</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Integration</h3>
              <p className="text-gray-700">Seamless integration with CRM systems</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Security</h3>
              <p className="text-gray-700">Enterprise-grade security features</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Mobility</h3>
              <p className="text-gray-700">Mobile extension support</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Support</h3>
              <p className="text-gray-700">24/7 technical support</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
