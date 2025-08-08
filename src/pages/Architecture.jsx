import { useEffect, useRef } from 'react';

const Architecture = () => {
  const mermaidRef = useRef(null);

  useEffect(() => {
    // Import and initialize Mermaid
    const initMermaid = async () => {
      const mermaid = await import('mermaid');

      // Initialize Mermaid with proper configuration for version 11.x
      mermaid.default.initialize({
        startOnLoad: false,
        theme: 'default',
        securityLevel: 'loose',
        themeVariables: {
          primaryColor: '#1e40af',
          primaryTextColor: '#1f2937',
          primaryBorderColor: '#3b82f6',
          lineColor: '#6b7280',
        }
      });

      if (mermaidRef.current) {
        // Clear any existing content
        mermaidRef.current.innerHTML = '';

        const diagramDefinition = `
graph TD
    A[Interactive Map Interface] --> B[Coordinate Conversion UI]
    B --> C[DigiPin API Endpoints]
    C --> D[DigiPin Core Algorithm]
    C --> E[Geocoding Service Integration]
    B --> F[Batch Processing System]
    F --> C
    
    D --> G[Encoding Engine]
    D --> H[Decoding Engine]
    D --> I[Validation Logic]
    
    E --> J[Address Lookup]
    E --> K[Reverse Geocoding]
    
    L[User Input] --> A
    L --> B
    
    M[Database/Storage] --> C
    N[External APIs] --> E
    
    style A fill:#e3f2fd
    style B fill:#e8f5e8
    style C fill:#fff3e0
    style D fill:#fce4ec
    style E fill:#f3e5f5
    style F fill:#e0f2f1
        `;

        try {
          // Use the updated render method for Mermaid v11
          const { svg } = await mermaid.default.render('mermaid-diagram', diagramDefinition);
          mermaidRef.current.innerHTML = svg;
        } catch (error) {
          console.error('Error rendering Mermaid diagram:', error);
          mermaidRef.current.innerHTML = '<p class="text-red-500 text-center py-8">Error loading diagram. Please refresh the page.</p>';
        }
      }
    };

    // Add a small delay to ensure the DOM is ready
    const timer = setTimeout(initMermaid, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Technical Architecture
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore the technical foundation of DigiPin. Understand the system components,
            data flow, and architectural decisions that make DigiPin scalable, reliable,
            and easy to integrate.
          </p>
        </div>
      </section>

      {/* System Overview Diagram */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              System Architecture Overview
            </h2>
            <p className="text-xl text-gray-600">
              A high-level view of how DigiPin components interact with each other.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <div ref={mermaidRef} className="text-center">
              {/* Mermaid diagram will be rendered here */}
            </div>
          </div>
        </div>
      </section>

      {/* Core Components */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Core Components
            </h2>
            <p className="text-xl text-gray-600">
              Deep dive into each architectural component and its responsibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* DigiPin Core Algorithm */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">DigiPin Core Algorithm</h3>
              <p className="text-gray-600 text-sm mb-4">
                The heart of the system that handles the mathematical conversion between
                coordinates and DigiPin codes.
              </p>
              <div className="space-y-2 text-xs">
                <div className="bg-gray-50 rounded p-2">
                  <strong>Encoding:</strong> Lat/Lon → DigiPin
                </div>
                <div className="bg-gray-50 rounded p-2">
                  <strong>Decoding:</strong> DigiPin → Lat/Lon
                </div>
                <div className="bg-gray-50 rounded p-2">
                  <strong>Validation:</strong> Input verification
                </div>
              </div>
            </div>

            {/* API Endpoints */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">DigiPin API Endpoints</h3>
              <p className="text-gray-600 text-sm mb-4">
                RESTful API layer that provides standardized access to DigiPin functionality
                for external applications.
              </p>
              <div className="space-y-2 text-xs">
                <div className="bg-gray-50 rounded p-2">
                  <strong>GET</strong> /api/encode
                </div>
                <div className="bg-gray-50 rounded p-2">
                  <strong>GET</strong> /api/decode
                </div>
              </div>
            </div>

            {/* Frontend UI */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-digipin-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Frontend UI Layers</h3>
              <p className="text-gray-600 text-sm mb-4">
                User interface components that provide interactive access to DigiPin
                functionality through web browsers.
              </p>
              <div className="space-y-2 text-xs">
                <div className="bg-gray-50 rounded p-2">
                  <strong>Map:</strong> Interactive location selection
                </div>
                <div className="bg-gray-50 rounded p-2">
                  <strong>Forms:</strong> Coordinate/DigiPin input
                </div>
                <div className="bg-gray-50 rounded p-2">
                  <strong>Results:</strong> Output display
                </div>
              </div>
            </div>

            {/* Geocoding Service */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9 3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Geocoding Service Integration</h3>
              <p className="text-gray-600 text-sm mb-4">
                External service integration that provides human-readable addresses
                for coordinate pairs.
              </p>
              <div className="space-y-2 text-xs">
                <div className="bg-gray-50 rounded p-2">
                  <strong>Reverse:</strong> Coords → Address
                </div>
                <div className="bg-gray-50 rounded p-2">
                  <strong>Caching:</strong> Performance optimization
                </div>
                <div className="bg-gray-50 rounded p-2">
                  <strong>Fallback:</strong> Error handling
                </div>
              </div>
            </div>

            {/* Batch Processing */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Batch Processing System</h3>
              <p className="text-gray-600 text-sm mb-4">
                Handles large-scale conversion operations efficiently, supporting
                CSV uploads and bulk operations.
              </p>
              <div className="space-y-2 text-xs">
                <div className="bg-gray-50 rounded p-2">
                  <strong>CSV:</strong> File upload/download
                </div>
                <div className="bg-gray-50 rounded p-2">
                  <strong>Queue:</strong> Background processing
                </div>
                <div className="bg-gray-50 rounded p-2">
                  <strong>Progress:</strong> Real-time updates
                </div>
              </div>
            </div>

            {/* Storage Layer */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Storage & Caching</h3>
              <p className="text-gray-600 text-sm mb-4">
                Optional persistence layer for caching frequently accessed conversions
                and storing batch processing results.
              </p>
              <div className="space-y-2 text-xs">
                <div className="bg-gray-50 rounded p-2">
                  <strong>Cache:</strong> Conversion results
                </div>
                <div className="bg-gray-50 rounded p-2">
                  <strong>Logs:</strong> API usage tracking
                </div>
                <div className="bg-gray-50 rounded p-2">
                  <strong>Config:</strong> System settings
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Flow */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Data Flow & Processing
            </h2>
            <p className="text-xl text-gray-600">
              Understanding how data moves through the DigiPin system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Encoding Flow */}
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Encoding Flow: Coordinates → DigiPin
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-digipin-blue text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <div className="font-semibold">Input Validation</div>
                    <div className="text-sm text-gray-600">Verify coordinate ranges and format</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-digipin-blue text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <div className="font-semibold">Coordinate Normalization</div>
                    <div className="text-sm text-gray-600">Standardize precision and format</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-digipin-blue text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <div className="font-semibold">Encoding Algorithm</div>
                    <div className="text-sm text-gray-600">Apply mathematical transformation</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-digipin-blue text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <div className="font-semibold">Error Correction</div>
                    <div className="text-sm text-gray-600">Add redundancy for reliability</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-digipin-blue text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                  <div>
                    <div className="font-semibold">Format Output</div>
                    <div className="text-sm text-gray-600">Generate human-readable DigiPin</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decoding Flow */}
            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Decoding Flow: DigiPin → Coordinates
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-digipin-green text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <div className="font-semibold">DigiPin Validation</div>
                    <div className="text-sm text-gray-600">Check format and character validity</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-digipin-green text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <div className="font-semibold">Parse Components</div>
                    <div className="text-sm text-gray-600">Extract encoded data segments</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-digipin-green text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <div className="font-semibold">Decoding Algorithm</div>
                    <div className="text-sm text-gray-600">Reverse mathematical transformation</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-digipin-green text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <div className="font-semibold">Coordinate Reconstruction</div>
                    <div className="text-sm text-gray-600">Generate precise lat/lon values</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-digipin-green text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                  <div>
                    <div className="font-semibold">Address Lookup</div>
                    <div className="text-sm text-gray-600">Optional geocoding for context</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600">
              Key technical details and performance characteristics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-digipin-blue mb-2">10</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Character Length</div>
              <div className="text-xs text-gray-600">Fixed-length DigiPin codes</div>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">~1m</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Precision</div>
              <div className="text-xs text-gray-600">Approximate accuracy</div>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">&lt;1ms</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Processing Time</div>
              <div className="text-xs text-gray-600">Average conversion speed</div>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">36³</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Character Set</div>
              <div className="text-xs text-gray-600">Alphanumeric encoding</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Architecture */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Deployment Architecture
            </h2>
            <p className="text-xl text-gray-600">
              Flexible deployment options for different use cases and scales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-digipin-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Standalone Web App</h3>
              <p className="text-gray-600 text-sm">
                Complete frontend application with built-in DigiPin algorithms.
                Perfect for demos and lightweight implementations.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">API Service</h3>
              <p className="text-gray-600 text-sm">
                Backend API service for integration into existing applications.
                Supports high-volume operations and enterprise features.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Embedded Device Support</h3>
              <p className="text-gray-600 text-sm">
                Optimized DigiPin algorithms for microcontroller and offline environments. Ideal for IoT, edge computing, and low-resource deployments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Architecture;
