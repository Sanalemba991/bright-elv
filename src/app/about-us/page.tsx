export default function AboutUs() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8">About Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Bright ELV Solutions is a leading provider of comprehensive ELV (Extra Low Voltage) 
              systems and customized solutions for businesses across various industries.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              With years of expertise, we deliver high-quality installations, maintenance, and 
              custom solutions tailored to meet your specific needs.
            </p>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Company Image</span>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            To provide innovative, reliable, and cost-effective ELV solutions and customized 
            products that enhance security, communication, and operational efficiency for our clients.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-700">We maintain the highest standards in all our products and services.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-700">Continuous improvement and adoption of latest technologies.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-gray-700">Your satisfaction is our top priority.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
