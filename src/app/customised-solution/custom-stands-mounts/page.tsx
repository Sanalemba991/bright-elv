import Link from "next/link";

export default function CustomStandsMounts() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Link href="/customised-solution" className="text-green-600 hover:text-green-800 font-bold mb-8 inline-block">
          ← Back to Customised Solutions
        </Link>
        
        <h1 className="text-5xl font-bold mb-4">Custom Projector Stand / Ceiling Mount</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Professional custom-designed projector stands and ceiling mount solutions for 
              optimal installation in any space.
            </p>
            <h2 className="text-2xl font-bold mb-4">Solutions Available:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Floor-standing projector stands</li>
              <li>Adjustable height mechanisms</li>
              <li>Ceiling mount systems</li>
              <li>Wall-mounted brackets</li>
              <li>Custom positioning arms</li>
              <li>Cable management integrated</li>
              <li>Tilt and pan adjustments</li>
              <li>Heavy-duty construction</li>
            </ul>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition">
              Get Installation Quote
            </button>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Projector Stand / Mount Image</span>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Mount Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Floor Stands</h3>
              <p className="text-gray-700 mb-3">Portable stands for temporary installations</p>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Adjustable height</li>
                <li>Tilt mechanism</li>
                <li>Locking feet</li>
                <li>Compact storage</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Ceiling Mounts</h3>
              <p className="text-gray-700 mb-3">Fixed installations for permanent setup</p>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Motorized options</li>
                <li>Tilt control</li>
                <li>Cable routing</li>
                <li>Professional finish</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Wall Mounts</h3>
              <p className="text-gray-700 mb-3">Space-saving wall installation solutions</p>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Articulating arms</li>
                <li>Full adjustment range</li>
                <li>Cable concealment</li>
                <li>Sturdy brackets</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Adjustability</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Full pan/tilt control</li>
                <li>Height adjustment</li>
                <li>Rotation options</li>
                <li>Fine-tuning capabilities</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Installation Support</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Professional installation</li>
                <li>Cable management</li>
                <li>Integration services</li>
                <li>Warranty support</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
