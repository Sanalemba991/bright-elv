import Link from "next/link";

export default function CustomStandsMounts() {
  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="container mx-auto px-4">
        <Link
          href="/customised-solution"
          className="text-blue-700 hover:text-blue-900 font-semibold mb-8 inline-block"
        >
          ← Back to Customised Solutions
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">Custom Projector Stand & Ceiling Mount Provider in Dubai</h1>
        <p className="text-gray-700 max-w-3xl leading-relaxed mb-8">
          At BrightElv, Dubai’s premier provider of custom projector stands and ceiling
          mounts, we understand the importance of precise, reliable, and visually
          appealing projector installations for both residential and commercial spaces.
          Our mission is to offer bespoke solutions that perfectly match your unique
          requirements, ensuring optimal performance and seamless integration with your environment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Offerings</h2>
            <p className="text-gray-700 mb-4">
              We deliver professional, custom-designed projector stands and ceiling mount
              solutions tailored for optimal installation in any space.
            </p>

            <h3 className="text-xl font-bold mt-4 mb-2">Custom Projector Stands</h3>
            <p className="text-gray-700 mb-3">
              Designed to suit your specific projector model and space requirements. Adjustable height and angle for perfect alignment. Durable and stylish finishes to match your decor.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Floor-standing projector stands</li>
              <li>Adjustable height and angle</li>
              <li>Durable and stylish finishes</li>
              <li>Custom mounting interfaces for any projector model</li>
            </ul>

            <h3 className="text-xl font-bold mt-4 mb-2">Ceiling Mounts</h3>
            <p className="text-gray-700 mb-3">
              Secure and stable mounting solutions for all types of projectors. Options for fixed or adjustable mounts and concealed cable management for a clean professional look.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Fixed and adjustable mounts</li>
              <li>Concealed cable routing</li>
              <li>Motorized and manual tilt options</li>
              <li>Heavy-duty and low-profile designs</li>
            </ul>

            <div className="flex space-x-3">
              <Link href="/contact" className="bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition">
                Contact Us
              </Link>
              <a href="tel:+97146652233" className="border border-blue-700 text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition">
                Call +971 4 66 52 233
              </a>
            </div>
          </div>

          <div className="h-96 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80&auto=format&fit=crop"
              alt="Projector ceiling mount installed in meeting room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Consultation & Design</h2>
          <p className="text-gray-700 mb-4">
            We provide comprehensive consultation to understand your needs and preferences.
            Our team offers 3D design and visualization so you can preview your setup before installation. We provide expert recommendations for the best mounting solution for your space.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-6">Installation & Support</h2>
          <p className="text-gray-700 mb-4">
            Professional installation services ensure a perfect setup. We offer ongoing support and maintenance to keep your equipment in top condition, with quick response times and reliable customer service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
          <ul className="list-disc list-inside text-gray-700 max-w-2xl">
            <li>Corporate Offices – conference rooms and presentation areas</li>
            <li>Education – classrooms and lecture halls</li>
            <li>Hospitality – hotels and event spaces</li>
            <li>Home Theaters – bespoke home cinema installations</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&q=60&auto=format&fit=crop" alt="Ceiling projector mount - installation" className="w-full h-56 object-cover rounded-md" />
            <img src="https://images.unsplash.com/photo-1522199710521-72d69614c702?w=1000&q=60&auto=format&fit=crop" alt="Projector stand in conference room" className="w-full h-56 object-cover rounded-md" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us for Audio Visual Solutions</h2>
          <ul className="list-disc list-inside text-gray-700 max-w-3xl space-y-2">
            <li>Wide range of high-quality products and accessories</li>
            <li>Expert technical advice and on-site assessments</li>
            <li>Competitive pricing and timely delivery</li>
            <li>Fast and reliable service across Dubai</li>
          </ul>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg mb-12">
          <h3 className="text-2xl font-bold mb-3">Contact Information</h3>
          <p className="text-gray-700 mb-2">Phone: <a className="text-blue-700" href="tel:+97146652233">+971 4 66 52 233</a></p>
          <p className="text-gray-700 mb-2">Email: <a className="text-blue-700" href="mailto:sales@brightelv.com">sales@brightelv.com</a></p>
          <p className="text-gray-700">Address: PB NO:381108, Showroom No:4, Mustafa Building, Satellite Market, Naif, Deira, Dubai, UAE</p>
        </section>

        <div className="text-sm text-gray-500">BrightElv &copy; All rights reserved</div>
      </div>
    </div>
  );
}
