import Link from "next/link";

export default function CustomCasesPodium() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Link href="/customised-solution" className="text-green-600 hover:text-green-800 font-bold mb-8 inline-block">
          ← Back to Customised Solutions
        </Link>
        
        <h1 className="text-5xl font-bold mb-4">Custom Flight Case / Wooden Podium</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Professional flight cases for equipment transport and custom wooden podiums 
              for presentations and events. Built with premium materials and attention to detail.
            </p>
            <h2 className="text-2xl font-bold mb-4">Products Include:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Custom flight cases for any equipment</li>
              <li>Heavy-duty carrying handles</li>
              <li>Foam insert customization</li>
              <li>Wheels and caster options</li>
              <li>Wooden presentation podiums</li>
              <li>Built-in cable management</li>
              <li>Locking mechanisms</li>
              <li>Custom branding and labels</li>
            </ul>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition">
              Order Custom Case
            </button>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Flight Case / Podium Image</span>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Flight Cases</h3>
              <p className="text-gray-700 mb-3">Rugged transport solutions for professional equipment</p>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>ATA-compliant construction</li>
                <li>Custom foam padding</li>
                <li>Professional latches</li>
                <li>Wheels available</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Wooden Podiums</h3>
              <p className="text-gray-700 mb-3">Premium presentation and speaking platforms</p>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Hardwood construction</li>
                <li>Built-in storage</li>
                <li>Elegant finishes</li>
                <li>Portable options</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Customization Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Materials</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Heavy plywood</li>
                <li>Birch wood</li>
                <li>Walnut finishes</li>
                <li>Oak options</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Features</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Carrying handles</li>
                <li>Foam protection</li>
                <li>Wheels & casters</li>
                <li>Locking hinges</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Finishing</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Varnish coating</li>
                <li>Metal corners</li>
                <li>Logo engraving</li>
                <li>Custom staining</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
