import Link from "next/link";

export default function CCTVMaintenance() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Link href="/elv-solution" className="text-blue-600 hover:text-blue-800 font-bold mb-8 inline-block">
          ← Back to ELV Solutions
        </Link>
        
        <h1 className="text-5xl font-bold mb-4">CCTV Maintenance</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Regular maintenance and support services to keep your CCTV systems running at peak performance.
            </p>
            <h2 className="text-2xl font-bold mb-4">Maintenance Services:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Regular system inspections</li>
              <li>Camera cleaning and lens maintenance</li>
              <li>Software updates and patches</li>
              <li>Hard drive health monitoring</li>
              <li>Cable and connection checks</li>
              <li>Performance optimization</li>
              <li>Emergency repair services</li>
              <li>Preventive maintenance plans</li>
            </ul>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
              Schedule Maintenance
            </button>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">CCTV Maintenance Image</span>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Maintenance Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 border-blue-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Basic Plan</h3>
              <p className="text-gray-700 mb-4">Monthly inspections and cleaning</p>
              <p className="font-bold">Contact for pricing</p>
            </div>
            <div className="border-2 border-blue-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Standard Plan</h3>
              <p className="text-gray-700 mb-4">Bi-weekly service with priority support</p>
              <p className="font-bold">Contact for pricing</p>
            </div>
            <div className="border-2 border-blue-600 p-6 rounded-lg bg-blue-50">
              <h3 className="font-bold text-lg mb-2">Premium Plan</h3>
              <p className="text-gray-700 mb-4">Weekly visits + 24/7 emergency support</p>
              <p className="font-bold">Contact for pricing</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
