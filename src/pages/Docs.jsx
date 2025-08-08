// import { useState } from 'react';

// const Docs = () => {
//   const [activeSection, setActiveSection] = useState('getting-started');

//   const sections = [
//     { id: 'getting-started', title: 'Getting Started' },
//     { id: 'api-reference', title: 'API Reference' },
//     { id: 'integration', title: 'Integration Guide' },
//     { id: 'examples', title: 'Code Examples' },
//     { id: 'troubleshooting', title: 'Troubleshooting' }
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-5xl font-bold text-gray-900 mb-6">
//             Documentation
//           </h1>
//           <p className="text-xl text-gray-600 leading-relaxed">
//             Complete guide to integrating and using DigiPin in your applications. 
//             From basic setup to advanced implementations, find everything you need 
//             to get started with DigiPin.
//           </p>
//         </div>
//       </section>

//       {/* Documentation Content */}
//       <section className="section-padding bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* Sidebar Navigation */}
//             <div className="lg:w-1/4">
//               <div className="sticky top-24 bg-gray-50 rounded-xl p-6">
//                 <h3 className="font-bold text-gray-900 mb-4">Table of Contents</h3>
//                 <nav className="space-y-2">
//                   {sections.map((section) => (
//                     <button
//                       key={section.id}
//                       onClick={() => setActiveSection(section.id)}
//                       className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
//                         activeSection === section.id
//                           ? 'bg-digipin-blue text-white'
//                           : 'text-gray-600 hover:text-digipin-blue hover:bg-blue-50'
//                       }`}
//                     >
//                       {section.title}
//                     </button>
//                   ))}
//                 </nav>
//               </div>
//             </div>

//             {/* Main Content */}
//             <div className="lg:w-3/4">
//               <div className="prose prose-lg max-w-none">
                
//                 {/* Getting Started */}
//                 {activeSection === 'getting-started' && (
//                   <div>
//                     <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h2>
                    
//                     <div className="bg-blue-50 rounded-lg p-6 mb-8">
//                       <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Start</h3>
//                       <p className="text-gray-600 mb-4">
//                         Get up and running with DigiPin in just a few minutes. Choose your preferred integration method:
//                       </p>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div className="bg-white rounded-lg p-4">
//                           <h4 className="font-semibold mb-2">JavaScript Library</h4>
//                           <code className="text-sm bg-gray-100 px-2 py-1 rounded">npm install digipin</code>
//                         </div>
//                         <div className="bg-white rounded-lg p-4">
//                           <h4 className="font-semibold mb-2">REST API</h4>
//                           <code className="text-sm bg-gray-100 px-2 py-1 rounded">api.digipin.dev</code>
//                         </div>
//                       </div>
//                     </div>

//                     <h3 className="text-xl font-bold text-gray-900 mb-4">Installation</h3>
                    
//                     <h4 className="text-lg font-semibold text-gray-900 mb-3">Option 1: NPM Package</h4>
//                     <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
//                       <pre className="text-green-400 text-sm">
// {`# Install the DigiPin library
// npm install digipin

// # Or using yarn
// yarn add digipin`}
//                       </pre>
//                     </div>

//                     <h4 className="text-lg font-semibold text-gray-900 mb-3">Option 2: CDN</h4>
//                     <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
//                       <pre className="text-green-400 text-sm">
// {`<script src="https://cdn.digipin.dev/digipin.min.js"></script>`}
//                       </pre>
//                     </div>

//                     <h3 className="text-xl font-bold text-gray-900 mb-4">Basic Usage</h3>
                    
//                     <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
//                       <pre className="text-green-400 text-sm">
// {`import DigiPin from 'digipin';

// // Convert coordinates to DigiPin
// const digiPin = DigiPin.encode(28.6139, 77.2090);
// console.log(digiPin); // "FC9-8J3-2K45"

// // Convert DigiPin to coordinates
// const coords = DigiPin.decode("FC9-8J3-2K45");
// console.log(coords); // { lat: 28.6139, lon: 77.2090 }`}
//                       </pre>
//                     </div>

//                     <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
//                       <div className="flex">
//                         <div className="flex-shrink-0">
//                           <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                           </svg>
//                         </div>
//                         <div className="ml-3">
//                           <p className="text-sm text-yellow-700">
//                             <strong>Note:</strong> This is a demo website. The actual DigiPin library and API endpoints are under development. 
//                             The code examples above are for illustration purposes.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* API Reference */}
//                 {activeSection === 'api-reference' && (
//                   <div>
//                     <h2 className="text-3xl font-bold text-gray-900 mb-6">API Reference</h2>
                    
//                     <h3 className="text-xl font-bold text-gray-900 mb-4">REST API Endpoints</h3>
                    
//                     <div className="space-y-6">
//                       {/* Encode Endpoint */}
//                       <div className="border rounded-lg p-6">
//                         <div className="flex items-center mb-4">
//                           <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3">POST</span>
//                           <code className="text-lg font-mono">/api/encode</code>
//                         </div>
//                         <p className="text-gray-600 mb-4">Convert latitude and longitude coordinates to a DigiPin code.</p>
                        
//                         <h4 className="font-semibold mb-2">Request Body:</h4>
//                         <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
//                           <pre className="text-green-400 text-sm">
// {`{
//   "latitude": 28.6139,
//   "longitude": 77.2090
// }`}
//                           </pre>
//                         </div>
                        
//                         <h4 className="font-semibold mb-2">Response:</h4>
//                         <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
//                           <pre className="text-green-400 text-sm">
// {`{
//   "digiPin": "FC9-8J3-2K45",
//   "latitude": 28.6139,
//   "longitude": 77.2090,
//   "address": "New Delhi, Delhi, India"
// }`}
//                           </pre>
//                         </div>
//                       </div>

//                       {/* Decode Endpoint */}
//                       <div className="border rounded-lg p-6">
//                         <div className="flex items-center mb-4">
//                           <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">POST</span>
//                           <code className="text-lg font-mono">/api/decode</code>
//                         </div>
//                         <p className="text-gray-600 mb-4">Convert a DigiPin code back to latitude and longitude coordinates.</p>
                        
//                         <h4 className="font-semibold mb-2">Request Body:</h4>
//                         <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
//                           <pre className="text-green-400 text-sm">
// {`{
//   "digiPin": "FC9-8J3-2K45"
// }`}
//                           </pre>
//                         </div>
                        
//                         <h4 className="font-semibold mb-2">Response:</h4>
//                         <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
//                           <pre className="text-green-400 text-sm">
// {`{
//   "digiPin": "FC9-8J3-2K45",
//   "latitude": 28.6139,
//   "longitude": 77.2090,
//   "address": "New Delhi, Delhi, India"
// }`}
//                           </pre>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Integration Guide */}
//                 {activeSection === 'integration' && (
//                   <div>
//                     <h2 className="text-3xl font-bold text-gray-900 mb-6">Integration Guide</h2>
                    
//                     <h3 className="text-xl font-bold text-gray-900 mb-4">JavaScript/TypeScript</h3>
                    
//                     <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
//                       <pre className="text-green-400 text-sm">
// {`// ES6 Module
// import DigiPin from 'digipin';

// // CommonJS
// const DigiPin = require('digipin');

// // Usage
// const result = DigiPin.encode(28.6139, 77.2090);`}
//                       </pre>
//                     </div>

//                     <h3 className="text-xl font-bold text-gray-900 mb-4">React Integration</h3>
                    
//                     <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
//                       <pre className="text-green-400 text-sm">
// {`import React, { useState } from 'react';
// import DigiPin from 'digipin';

// function LocationConverter() {
//   const [coordinates, setCoordinates] = useState({ lat: "", lon: "" });
//   const [digiPin, setDigiPin] = useState("");

//   const handleConvert = () => {
//     const result = DigiPin.encode(coordinates.lat, coordinates.lon);
//     setDigiPin(result);
//   };

//   return (
//     <div>
//       {/* Your UI components */}
//     </div>
//   );
// }`}
//                       </pre>
//                     </div>

//                     <h3 className="text-xl font-bold text-gray-900 mb-4">Python Integration</h3>
                    
//                     <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
//                       <pre className="text-green-400 text-sm">
// {`import requests

// def encode_coordinates(lat, lon):
//     url = "https://api.digipin.dev/encode"
//     data = {"latitude": lat, "longitude": lon}
//     response = requests.post(url, json=data)
//     return response.json()

// # Usage
// result = encode_coordinates(28.6139, 77.2090)
// print(result["digiPin"])`}
//                       </pre>
//                     </div>
//                   </div>
//                 )}

//                 {/* Code Examples */}
//                 {activeSection === 'examples' && (
//                   <div>
//                     <h2 className="text-3xl font-bold text-gray-900 mb-6">Code Examples</h2>
                    
//                     <div className="space-y-8">
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-900 mb-4">Basic Encoding/Decoding</h3>
//                         <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
//                           <pre className="text-green-400 text-sm">
// {`// Encode coordinates to DigiPin
// const digiPin = DigiPin.encode(28.6139, 77.2090);
// console.log(\`DigiPin: \${digiPin}\`);

// // Decode DigiPin to coordinates
// const coordinates = DigiPin.decode("FC9-8J3-2K45");
// console.log(\`Lat: \${coordinates.lat}, Lon: \${coordinates.lon}\`);`}
//                           </pre>
//                         </div>
//                       </div>

//                       <div>
//                         <h3 className="text-xl font-bold text-gray-900 mb-4">Error Handling</h3>
//                         <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
//                           <pre className="text-green-400 text-sm">
// {`try {
//   const digiPin = DigiPin.encode(lat, lon);
//   console.log('Success:', digiPin);
// } catch (error) {
//   if (error.type === 'INVALID_COORDINATES') {
//     console.error('Invalid coordinates provided');
//   } else {
//     console.error('Encoding failed:', error.message);
//   }
// }`}
//                           </pre>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Troubleshooting */}
//                 {activeSection === 'troubleshooting' && (
//                   <div>
//                     <h2 className="text-3xl font-bold text-gray-900 mb-6">Troubleshooting</h2>
                    
//                     <div className="space-y-6">
//                       <div className="border-l-4 border-blue-400 bg-blue-50 p-4">
//                         <h3 className="text-lg font-semibold text-gray-900 mb-2">Common Issues</h3>
                        
//                         <div className="space-y-4">
//                           <div>
//                             <h4 className="font-semibold text-gray-900">Invalid Coordinates Error</h4>
//                             <p className="text-gray-600 text-sm mb-2">
//                               Ensure latitude is between -90 and 90, longitude between -180 and 180.
//                             </p>
//                             <div className="bg-gray-900 rounded p-2 overflow-x-auto">
//                               <pre className="text-green-400 text-sm">
// {`// Valid ranges
// latitude: -90 to 90
// longitude: -180 to 180`}
//                               </pre>
//                             </div>
//                           </div>

//                           <div>
//                             <h4 className="font-semibold text-gray-900">DigiPin Format Error</h4>
//                             <p className="text-gray-600 text-sm mb-2">
//                               DigiPins must be exactly 10 characters with proper formatting.
//                             </p>
//                             <div className="bg-gray-900 rounded p-2 overflow-x-auto">
//                               <pre className="text-green-400 text-sm">
// {`// Correct format
// ✓ "FC9-8J3-2K45"
// ✗ "FC98J32K45"
// ✗ "fc9-8j3-2k45"`}
//                               </pre>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
//                         <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Tips</h3>
                        
//                         <ul className="space-y-2 text-sm text-gray-600">
//                           <li>• Use batch processing for multiple conversions</li>
//                           <li>• Cache results when possible to reduce API calls</li>
//                           <li>• Implement debouncing for real-time input validation</li>
//                           <li>• Consider using the JavaScript library for client-side operations</li>
//                         </ul>
//                       </div>

//                       <div className="border-l-4 border-green-400 bg-green-50 p-4">
//                         <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Practices</h3>
                        
//                         <ul className="space-y-2 text-sm text-gray-600">
//                           <li>• Always validate input coordinates before encoding</li>
//                           <li>• Implement proper error handling for network requests</li>
//                           <li>• Use HTTPS endpoints in production environments</li>
//                           <li>• Store DigiPins in uppercase format for consistency</li>
//                           <li>• Include address lookup for better user experience</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Docs;
