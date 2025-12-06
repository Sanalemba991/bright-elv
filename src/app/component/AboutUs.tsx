export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="px-6 py-16 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-12">
         WE ARE
        </h1>

        <div className="space-y-8 text-gray-600 text-lg md:text-xl leading-relaxed max-w-4xl">
          <p>
           A leading authority in CCTV brackets and poles in the Middle East, particularly in Dubai, known for top-notch, durable, and innovative surveillance equipment. Specializing in customized solutions, we offer IP-rated poles designed for the harsh desert climate of the UAE, ensuring long-term reliability. With a commitment to excellence, we provide not just products but peace of mind, setting the standard in surveillance technology. Our dependable after-sales service and comprehensive maintenance plans guarantee ongoing support and underscore our confidence through robust warranty offerings.
          </p>
        </div>

        {/* Image Gallery - Matching Layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column - Team meeting (takes full height) */}
          <div className="row-span-2">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop" 
              alt="Team meeting" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          {/* Right Top - Team member at work */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop" 
              alt="Team member at work" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          {/* Right Bottom - Team gathering */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=400&fit=crop" 
              alt="Team gathering" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <section className="mt-24">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">WHY CHOOSE US</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Why <span className="text-green-500">Choose</span> US
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Expert Instructors Card */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 border-2 border-gray-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from top industry professionals who bring years of real-world experience to the classroom, providing you with the latest tools, techniques, and insights needed to excel in your field.
              </p>
            </div>

            {/* Career-Boost Certify Card */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 border-2 border-gray-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Career-Boost Certify</h3>
              <p className="text-gray-600">
                Earn certifications that are highly regarded by employers, helping you to enhance your resume, gain industry recognition, and open doors to new career opportunities.
              </p>
            </div>

            {/* Flexible Learning Card */}
            <div className="bg-blue-900 text-white rounded-2xl p-8">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Flexible Learning Schedules</h3>
              <p className="text-gray-100 mb-6">
                At expert.io, we understand the importance of balancing learning with a busy lifestyle. That's why our courses are available on-demand, allowing you to learn at your own pace, anytime and anywhere.
              </p>
              <p className="text-gray-100 mb-6">
                Whether you're a working professional or a student, you can customize your schedule to fit your needs.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors">
                Start Free Trial
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* 100+ High Impact Courses Card */}
          <div className="mt-6 bg-gray-50 rounded-2xl p-8">
            <div className="w-12 h-12 border-2 border-gray-900 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">100+ High Impact Courses</h3>
            <p className="text-gray-600">
              expert.io offers over 100 courses that cover essential skills in today's tech industry. Whether you're a beginner or an experienced professional, our courses in web development, data science, and cybersecurity provide practical, hands-on learning to help you apply your skills immediately & competitive.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}