const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About DigiPin
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            DigiPin is an innovative geolocation encoding system that transforms precise 
            latitude and longitude coordinates into memorable, shareable 10-character codes. 
            Our mission is to make location sharing more accessible and efficient for everyone.
          </p>
        </div>
      </section>

      {/* What is DigiPin Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is DigiPin?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  DigiPin is a geolocation encoding system that converts precise geographical 
                  coordinates (latitude and longitude) into human-friendly 10-character codes 
                  and vice-versa. Think of it as a more accessible way to share exact locations.
                </p>
                <p>
                  Instead of sharing complex decimal coordinates like "28.613939, 77.209006", 
                  you can simply share a DigiPin like "FC9-8J3-2K45". This makes location 
                  sharing easier, especially in areas without traditional addressing systems.
                </p>
                <p>
                  The system is designed to be fast, reliable, and easy to integrate into 
                  existing applications, making it perfect for logistics, emergency services, 
                  IoT applications, and everyday location sharing.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-6">DigiPin in Action</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-2">Traditional Coordinates:</p>
                    <code className="text-lg text-gray-800">28.613939, 77.209006</code>
                  </div>
                  <div className="flex justify-center">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <div className="bg-digipin-blue bg-opacity-10 rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-2">DigiPin Code:</p>
                    <code className="text-xl font-bold text-digipin-blue">FC9-8J3-2K45</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why DigiPin Exists Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why DigiPin Exists
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We identified key challenges in location sharing and created DigiPin to solve them.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Problem</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Complex decimal coordinates are hard to remember and share</li>
                <li>• Many locations lack traditional street addresses</li>
                <li>• GPS coordinates are prone to transcription errors</li>
                <li>• Existing solutions are either too complex or not precise enough</li>
                <li>• Language barriers in international location sharing</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Solution</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Short, memorable 10-character codes</li>
                <li>• High precision with error correction</li>
                <li>• Universal system that works anywhere on Earth</li>
                <li>• Easy to integrate into existing applications</li>
                <li>• Open-source and freely available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real-World Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              DigiPin solves location challenges across various industries and scenarios.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-digipin-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Logistics & Delivery</h3>
              <p className="text-gray-600">
                Enable precise deliveries to remote locations, construction sites, 
                and areas without traditional addresses. Perfect for last-mile delivery challenges.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Emergency Services</h3>
              <p className="text-gray-600">
                Quick and accurate location sharing for emergency response. 
                Especially valuable in wilderness areas, disaster zones, and developing regions.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Tourism & Events</h3>
              <p className="text-gray-600">
                Share meeting points, hidden gems, and exact locations for outdoor activities. 
                Perfect for hiking, camping, and event coordination.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">IoT & Smart Cities</h3>
              <p className="text-gray-600">
                Enable precise asset tracking and location-based services. 
                Ideal for smart infrastructure, vehicle tracking, and connected devices.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Real Estate & Construction</h3>
              <p className="text-gray-600">
                Precisely identify property boundaries, construction sites, and utilities. 
                Streamline site visits and improve project coordination.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Social & Networking</h3>
              <p className="text-gray-600">
                Easy location sharing for social media, meetups, and networking events. 
                Create location-based communities and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Flow Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            How DigiPin Works
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="w-12 h-12 bg-digipin-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">Input Coordinates</h3>
                  <p className="text-sm text-gray-600">Latitude & Longitude</p>
                  <code className="text-digipin-blue">28.6139, 77.2090</code>
                </div>

              </div>

              <div className="flex justify-center">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center justify-center space-y-2">

                <div className="w-12 h-12 bg-digipin-green rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">DigiPin Algorithm</h3>
                  <p className="text-sm text-gray-600">Encoding & Error Correction</p>
                  <code className="text-digipin-green">Processing...</code>
                </div>

              </div>

              <div className="flex justify-center">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">DigiPin Code</h3>
                  <p className="text-sm text-gray-600">10-Character Code</p>
                  <code className="text-purple-600 text-lg font-bold">FC9-8J3-2K45</code>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
