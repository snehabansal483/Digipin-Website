import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const gifDuration = 7000; // 7 seconds
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, gifDuration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif' }}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-digipin-blue rounded-2xl mb-6">
              <span className="text-white font-bold text-2xl">DP</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              DigiPin
            </h1>
            <p className="text-2xl md:text-3xl text-digipin-blue font-semibold mb-4">
              Turning Coordinates into Smart Location Codes
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              DigiPin is an innovative geolocation encoding system that transforms precise
              latitude and longitude coordinates into memorable 10-character codes, making
              location sharing and navigation more accessible than ever.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="https://github.com/Kvr-10/Digipin/blob/main/Documentation/README.md" className="btn-primary text-lg">
              Explore the Docs
            </Link>
            <a
              href="https://github.com/kvr-10/digipin"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg"
            >
              View on GitHub
            </a>
          </div>

          {/* Demo Preview */}
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">See DigiPin in Action</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">Input Coordinates:</p>
                    <div className="font-mono text-lg">
                      <span className="text-digipin-blue">28.6139, 77.2090</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div className="bg-digipin-blue bg-opacity-10 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">Generated DigiPin:</p>
                    <div className="font-mono text-xl font-bold text-digipin-blue">
                      FC9-8J3-2K45
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Location:</span> New Delhi, Delhi, India
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg h-64 overflow-hidden" style={{position: 'relative'}}>
                <img src="/Digipin.gif" alt="Interactive Map Visualization" className="w-full h-64 object-contain rounded-lg shadow-lg cursor-pointer transition-transform duration-200 hover:scale-105 bg-gray-100" />
                {showOverlay && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "rgba(0,0,0,0.6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: "1rem",
                      cursor: "pointer",
                      zIndex: 2,
                      borderRadius: "0.75rem",
                      fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
                      fontWeight: 600,
                      letterSpacing: '0.02em',
                      textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                      opacity: showOverlay ? 1 : 0,
                      transition: 'opacity 2s ease'
                    }}
                    onClick={() => window.location.href = "https://digi-pin.vercel.app/"}
                  >
                    Click here for the demo
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose DigiPin?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the unique advantages that make DigiPin the ideal solution
              for modern location encoding and sharing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-digipin-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Precise & Reliable</h3>
              <p className="text-gray-600">
                Convert coordinates to 10-character codes with high precision and
                consistent reliability for all your location needs.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-digipin-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast & Efficient</h3>
              <p className="text-gray-600">
                Lightning-fast encoding and decoding with optimized algorithms
                designed for real-time applications and bulk processing.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Easy to Integrate</h3>
              <p className="text-gray-600">
                Simple API endpoints and comprehensive documentation make it easy
                to integrate DigiPin into your existing applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              DigiPin solves location challenges across various industries and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-digipin-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Logistics & Delivery</h3>
              <p className="text-gray-600 text-sm">
                Simplify package delivery to remote locations without traditional addresses.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-digipin-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Emergency Services</h3>
              <p className="text-gray-600 text-sm">
                Quick location sharing for emergency response in areas without clear addresses.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">IoT & Smart Cities</h3>
              <p className="text-gray-600 text-sm">
                Enable precise asset tracking and location-based services in smart infrastructure.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Event Management</h3>
              <p className="text-gray-600 text-sm">
                Coordinate meetups and events with easy-to-share location codes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-digipin-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore our documentation, try the demo, or contribute to the open-source project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://digi-pin.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-digipin-blue hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Try the Demo
            </a>
            <Link to="https://github.com/Kvr-10/Digipin/blob/main/Documentation/README.md" className="border-2 border-white text-white hover:bg-white hover:text-digipin-blue font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Read Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
