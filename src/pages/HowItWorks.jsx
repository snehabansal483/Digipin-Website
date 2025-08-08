import { useEffect, useRef, useState } from 'react';

const HowItWorks = () => {
  const mermaidRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // Set the duration to match your GIF length (in ms)
  const gifDuration = 7000; // 7 seconds
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, gifDuration);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Import and initialize Mermaid
    const initMermaid = async () => {
      const mermaid = await import('mermaid');
      mermaid.default.initialize({
        startOnLoad: true,
        theme: 'default',
        themeVariables: {
          primaryColor: '#1e40af',
          primaryTextColor: '#1f2937',
          primaryBorderColor: '#3b82f6',
          lineColor: '#6b7280',
        }
      });
      if (mermaidRef.current) {
        mermaid.default.contentLoaded();
      }
    };
    initMermaid();
  }, []);

  return (
    <div style={{ fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif' }}>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            How DigiPin Works
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Understand the core components and processes that make DigiPin a powerful
            geolocation encoding system. From interactive maps to API endpoints,
            discover how each piece works together.
          </p>
        </div>
      </section>

      {/* Interactive Map Interface */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Interactive Map Interface
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  The interactive map is your visual command center for DigiPin. It provides
                  an intuitive way to select precise locations without manually entering
                  complex coordinates.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 my-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Click-to-Select:</strong> Simply click anywhere on the map to get precise coordinates</li>
                    <li>• <strong>Visual Feedback:</strong> Blue markers for generated DigiPins, green for decoded locations</li>
                    <li>• <strong>Real-time Updates:</strong> Automatic zoom and centering on selected locations</li>
                    <li>• <strong>Responsive Design:</strong> Works seamlessly on desktop and mobile devices</li>
                  </ul>
                </div>
                <p>
                  The map integrates with OpenStreetMap for reliable, global coverage and
                  uses the Leaflet library for smooth, responsive interactions.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="text-center">
                <div className="w-full h-64 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4" style={{position: 'relative'}}>
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
                <p className="text-sm text-gray-600">
                  Click anywhere on the map to automatically populate coordinate fields
                  and generate DigiPins instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coordinate Conversion */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Coordinate Conversion Process
            </h2>
            <p className="text-xl text-gray-600">
              The heart of DigiPin: transforming coordinates into memorable codes and back again.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Coordinates to DigiPin */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-digipin-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Coordinates → DigiPin</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <label className="text-sm font-medium text-gray-600">Input:</label>
                  <div className="font-mono text-lg mt-1">
                    <div>Lat: <span className="text-digipin-blue">28.6139</span></div>
                    <div>Lon: <span className="text-digipin-blue">77.2090</span></div>
                  </div>
                </div>
                <div className="text-center">
                  <svg className="w-6 h-6 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <label className="text-sm font-medium text-gray-600">Output:</label>
                  <div className="font-mono text-xl font-bold text-digipin-blue mt-1">
                    FC9-8J3-2K45
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Process:</strong> Validation → Encoding → Error Correction → Formatting
                </div>
              </div>
            </div>

            {/* DigiPin to Coordinates */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-digipin-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">DigiPin → Coordinates</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <label className="text-sm font-medium text-gray-600">Input:</label>
                  <div className="font-mono text-xl font-bold text-digipin-green mt-1">
                    FC9-8J3-2K45
                  </div>
                </div>
                <div className="text-center">
                  <svg className="w-6 h-6 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <label className="text-sm font-medium text-gray-600">Output:</label>
                  <div className="font-mono text-lg mt-1">
                    <div>Lat: <span className="text-digipin-green">28.6139</span></div>
                    <div>Lon: <span className="text-digipin-green">77.2090</span></div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Process:</strong> Validation → Decoding → Coordinate Reconstruction → Verification
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Flow Diagram */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              System Architecture Flow
            </h2>
            <p className="text-xl text-gray-600">
              See how all DigiPin components work together in a seamless workflow.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 flex justify-center items-center">
            <div ref={mermaidRef} className="mermaid" style={{ fontSize: '2.1rem', width: 'auto', maxWidth: '1400px', margin: '0 auto' }}>
              {`flowchart TD
                A[User Interaction] --> B{Input Type}
                B -->|Click Map| C[Map Click Handler]
                B -->|Enter Coordinates| D[Coordinate Input]
                B -->|Enter DigiPin| E[DigiPin Input]
                
                C --> F[Auto-fill Coordinates]
                D --> F
                F --> G[Validate Coordinates]
                G --> H[DigiPin Algorithm]
                H --> I[Generate DigiPin]
                I --> J[Display Results]
                I --> K[Update Map Marker]
                
                E --> L[Validate DigiPin]
                L --> M[Decode Algorithm]
                M --> N[Extract Coordinates]
                N --> O[Geocoding Service]
                O --> P[Get Address]
                P --> Q[Display Results]
                N --> K
                
                J --> R[Copy to Clipboard]
                Q --> R
                K --> S[Show Popup Info]
                
                style A fill:#e1f5fe
                style H fill:#1e40af,color:#fff
                style M fill:#059669,color:#fff
                style O fill:#7c3aed,color:#fff`}
            </div>
          </div>
        </div>
      </section>

      {/* Geocoding Integration */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Address Lookup Example</h3>
                <div className="space-y-3 text-left">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Coordinates:</div>
                    <div className="font-mono">28.6139, 77.2090</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Address:</div>
                    <div className="text-sm">New Delhi, Delhi, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Geocoding Service Integration
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  DigiPin enhances location data by automatically fetching human-readable
                  addresses for any coordinate pair. This makes the system more user-friendly
                  and provides immediate context about locations.
                </p>
                <div className="bg-purple-50 rounded-lg p-4 my-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Geocoding Features:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Reverse Geocoding:</strong> Convert coordinates to addresses</li>
                    <li>• <strong>Multiple Providers:</strong> Support for various geocoding services</li>
                    <li>• <strong>Fallback Handling:</strong> Graceful handling when addresses aren't available</li>
                    <li>• <strong>Performance Optimization:</strong> Caching and rate limiting</li>
                  </ul>
                </div>
                <p>
                  The geocoding integration is optional but adds significant value by providing
                  context that helps users understand and verify their selected locations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Implementation
            </h2>
            <p className="text-xl text-gray-600">
              Deep dive into the technical aspects that make DigiPin robust and reliable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-digipin-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.586-3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Input Validation</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive validation ensures coordinates are within valid ranges
                (-90 to 90 for latitude, -180 to 180 for longitude) and DigiPins
                match the expected format.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-digipin-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Error Correction</h3>
              <p className="text-gray-600 text-sm">
                Built-in error correction mechanisms help identify and handle
                minor input errors, improving reliability and user experience.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Performance</h3>
              <p className="text-gray-600 text-sm">
                Optimized algorithms ensure fast encoding and decoding,
                with support for batch processing and real-time applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
