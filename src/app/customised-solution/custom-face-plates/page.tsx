import Link from "next/link";

export default function CustomFacePlates() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Link href="/customised-solution" className="text-green-600 hover:text-green-800 font-bold mb-8 inline-block">
          ← Back to Customised Solutions
        </Link>
        
        <h1 className="text-5xl font-bold mb-4">Custom Face Plates</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Custom-designed face plates for equipment, installation boxes, and wall installations. 
              Built with precision and available in various materials and finishes.
            </p>
            <h2 className="text-2xl font-bold mb-4">Face Plate Solutions:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Standard wall outlet plates</li>
              <li>Equipment panel bezels</li>
              <li>Custom cut-out configurations</li>
              <li>Multiple material options</li>
              <li>Custom branding and labels</li>
              <li>Icon engraving services</li>
              <li>Cable pass-through options</li>
              <li>Color matching and finishing</li>
            </ul>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition">
              Order Custom Plates
            </button>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Custom Face Plates Image</span>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Material Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Plastic</h3>
              <p className="text-gray-700 text-sm">Cost-effective, available in multiple colors</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Aluminum</h3>
              <p className="text-gray-700 text-sm">Professional appearance, durable</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Stainless Steel</h3>
              <p className="text-gray-700 text-sm">High-end finish, corrosion-resistant</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Composite</h3>
              <p className="text-gray-700 text-sm">Custom designs, professional finishes</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Customization Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Design Options</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Custom cut-outs</li>
                <li>Logo placement</li>
                <li>Text engraving</li>
                <li>Icon marking</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Finishing</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Powder coating</li>
                <li>Anodizing</li>
                <li>Paint matching</li>
                <li>Polishing</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
