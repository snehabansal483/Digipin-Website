import React, { useState, useEffect } from 'react';

const BatchProcessing = () => {

  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const gifDuration = 13000; // 13 seconds
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, gifDuration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Batch Processing System
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Convert hundreds of coordinates or DigiPins in one go with our powerful batch processing tool.
            Perfect for logistics, delivery networks, and developers working with large datasets.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Efficient Bulk Processing
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  The DigiPin Batch Processing System allows you to process large datasets
                  efficiently, converting between coordinates and DigiPins at scale.
                </p>
                <p>
                  Whether you're working with delivery routes, asset locations, or mapping
                  data, our batch processor handles validation, conversion, and error reporting
                  automatically.
                </p>
                <p>
                  Simply upload your data or paste it directly, and download the processed
                  results as CSV files ready for use in your applications.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Processing Example</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-2">Input (100 locations):</p>
                    <div className="text-sm text-gray-700 space-y-1">
                      <code>28.613939, 77.209006</code><br />
                      <code>40.712776, -74.005974</code><br />
                      <code>51.507351, -0.127758</code><br />
                      <div className="text-gray-400">... and 97 more</div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex items-center space-x-2 text-blue-600">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-sm">Processing...</span>
                    </div>
                  </div>
                  <div className="bg-digipin-blue bg-opacity-10 rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-2">Output (100 DigiPins):</p>
                    <div className="text-sm space-y-1">
                      <code className="text-digipin-blue font-bold">FC9-8J3-2K45</code><br />
                      <code className="text-digipin-blue font-bold">NY1-5M8-7P92</code><br />
                      <code className="text-digipin-blue font-bold">LD3-4R6-9Q84</code><br />
                      <div className="text-gray-400">... and 97 more</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for efficient batch processing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Bidirectional Conversion</h3>
              <p className="text-gray-600">
                Convert coordinates to DigiPins or DigiPins to coordinates.
                Switch between modes seamlessly based on your data type.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Smart Validation</h3>
              <p className="text-gray-600">
                Automatic validation of input data with detailed error reporting.
                See exactly which lines succeeded or failed with specific error messages.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Multiple Input Methods</h3>
              <p className="text-gray-600">
                Upload CSV files, paste data directly, or use our sample datasets.
                Flexible input options to match your workflow.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">CSV Export</h3>
              <p className="text-gray-600">
                Download your processed results as CSV files with customizable columns.
                Include original data, converted values, and status information.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Reverse Geocoding</h3>
              <p className="text-gray-600">
                Optionally include human-readable addresses for your coordinates.
                Perfect for creating comprehensive location datasets.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">High Performance</h3>
              <p className="text-gray-600">
                Process thousands of locations quickly with our optimized algorithms.
                Real-time progress tracking keeps you informed during processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Batch Processing Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple 4-step process for bulk conversions
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg h-64 max-w-md mx-auto overflow-hidden mb-12" style={{ position: 'relative' }}>
            <img src="Batch_Processing.gif" alt="Interactive Map Visualization" className="w-full h-64 object-contain rounded-lg shadow-lg cursor-pointer transition-transform duration-200 hover:scale-105 bg-gray-100" />
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

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-digipin-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Upload or Paste Your Data</h3>
                <p className="text-gray-600 mb-4">
                  Choose your input method: upload a CSV file, paste data directly into the text area,
                  or load one of our sample datasets to test the system.
                </p>
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">Supported formats:</p>
                  <div className="space-y-1 text-sm">
                    <code className="bg-white px-2 py-1 rounded">latitude, longitude</code>
                    <code className="bg-white px-2 py-1 rounded">DigiPin codes (one per line)</code>
                    <code className="bg-white px-2 py-1 rounded">CSV with headers</code>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Configure Processing Options</h3>
                <p className="text-gray-600 mb-4">
                  Select your conversion direction, choose output format options,
                  and enable additional features like reverse geocoding if needed.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Coordinates → DigiPins</h4>
                    <p className="text-sm text-gray-600">Convert lat/lon to DigiPin codes</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">DigiPins → Coordinates</h4>
                    <p className="text-sm text-gray-600">Convert DigiPin codes to lat/lon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Process & Monitor Progress</h3>
                <p className="text-gray-600 mb-4">
                  Click process and watch real-time progress. The system validates each entry,
                  performs conversions, and reports any errors encountered.
                </p>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                      <span>Processing line 147 of 500...</span>
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '29%' }}></div>
                    </div>
                    <span>29%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Download Results</h3>
                <p className="text-gray-600 mb-4">
                  Review the processing summary and download your results as CSV files.
                  Separate files for successful conversions and error reports are available.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Successful Results</h4>
                    <p className="text-sm text-green-700">472 of 500 locations processed successfully</p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">❌ Error Report</h4>
                    <p className="text-sm text-red-700">28 locations had validation errors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect for These Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              Industries and scenarios where batch processing shines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Logistics & Delivery</h3>
              <p className="text-gray-600">
                Convert route waypoints, delivery addresses, and warehouse locations
                for optimized logistics planning and driver navigation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Real Estate</h3>
              <p className="text-gray-600">
                Process property listings, site locations, and development coordinates
                for mapping platforms and location-based searches.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Data Migration</h3>
              <p className="text-gray-600">
                Migrate existing location databases, convert legacy coordinate systems,
                and standardize location data across platforms.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Tourism & Events</h3>
              <p className="text-gray-600">
                Create shareable location codes for attractions, venues, and points of interest.
                Perfect for event planning and tourist guides.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Emergency Services</h3>
              <p className="text-gray-600">
                Convert emergency response coordinates, evacuation points, and resource locations
                for rapid deployment and coordination.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">IoT & Sensors</h3>
              <p className="text-gray-600">
                Process sensor locations, device coordinates, and monitoring points
                for IoT networks and smart city implementations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-digipin-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Process Your Data?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Try our batch processing tool with your own data or explore with sample datasets.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              href="/demo"
              className="inline-block bg-white text-digipin-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Try Batch Processor
            </a>
            <a
              href="https://github.com/Kvr-10/Digipin/blob/main/Documentation/README.md"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-digipin-blue transition-colors duration-200"
            >
              View Documentation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BatchProcessing;
