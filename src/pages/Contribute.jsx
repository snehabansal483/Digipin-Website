const Contribute = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Contribute to DigiPin
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Join our open-source community and help make DigiPin better for everyone. 
            Whether you're a developer, designer, writer, or just passionate about 
            location technology, there's a place for you in our project.
          </p>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ways to Contribute
            </h2>
            <p className="text-xl text-gray-600">
              There are many ways to contribute to DigiPin, regardless of your skill level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-digipin-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Code Development</h3>
              <p className="text-gray-600 text-sm mb-4">
                Contribute to the core algorithm, API endpoints, frontend components, 
                or build integrations for new platforms.
              </p>
              <div className="text-xs text-gray-500">
                Skills: JavaScript, Python, React, Node.js
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Documentation</h3>
              <p className="text-gray-600 text-sm mb-4">
                Help improve our documentation, write tutorials, create examples, 
                or translate content to other languages.
              </p>
              <div className="text-xs text-gray-500">
                Skills: Technical writing, Markdown, Translation
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Design & UX</h3>
              <p className="text-gray-600 text-sm mb-4">
                Design user interfaces, create visual assets, improve user experience, 
                or help with branding and marketing materials.
              </p>
              <div className="text-xs text-gray-500">
                Skills: UI/UX Design, Figma, Graphic Design
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Testing & QA</h3>
              <p className="text-gray-600 text-sm mb-4">
                Test new features, report bugs, improve test coverage, 
                or help with performance testing and optimization.
              </p>
              <div className="text-xs text-gray-500">
                Skills: QA Testing, Bug Reporting, Test Automation
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Issue Reporting</h3>
              <p className="text-gray-600 text-sm mb-4">
                Report bugs, suggest new features, provide feedback, 
                or help triage and prioritize existing issues.
              </p>
              <div className="text-xs text-gray-500">
                Skills: Attention to detail, Clear communication
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Community Support</h3>
              <p className="text-gray-600 text-sm mb-4">
                Help other users, answer questions, moderate discussions, 
                or organize community events and meetups.
              </p>
              <div className="text-xs text-gray-500">
                Skills: Communication, Problem-solving, Mentoring
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Getting Started
            </h2>
            <p className="text-xl text-gray-600">
              Ready to contribute? Here's how to get involved with the DigiPin project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">For Developers</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-digipin-blue text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fork the Repository</h4>
                    <p className="text-sm text-gray-600">
                      Start by forking the DigiPin repository on GitHub to your personal account.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-digipin-blue text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Set Up Development Environment</h4>
                    <p className="text-sm text-gray-600">
                      Clone your fork locally and install dependencies. Check our setup guide in the README.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-digipin-blue text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Find an Issue</h4>
                    <p className="text-sm text-gray-600">
                      Look for issues labeled "good first issue" or "help wanted" to find suitable tasks.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-digipin-blue text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Create a Pull Request</h4>
                    <p className="text-sm text-gray-600">
                      Make your changes, test them thoroughly, and submit a pull request for review.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href="https://github.com/kvr-10/digipin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block"
                >
                  View on GitHub
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">For Non-Developers</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Create a GitHub Account</h4>
                    <p className="text-sm text-gray-600">
                      Sign up for a free GitHub account to participate in discussions and report issues.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Explore the Project</h4>
                    <p className="text-sm text-gray-600">
                      Try out DigiPin, read the documentation, and understand how the project works.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Join the Discussion</h4>
                    <p className="text-sm text-gray-600">
                      Participate in GitHub discussions, provide feedback, and share your ideas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Contribute Your Skills</h4>
                    <p className="text-sm text-gray-600">
                      Whether it's writing, design, or testing, find ways to contribute your unique skills.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href="https://github.com/kvr-10/digipin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center block"
                >
                  Join Discussions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution Guidelines */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contribution Guidelines
            </h2>
            <p className="text-xl text-gray-600">
              Please follow these guidelines to ensure smooth collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Code Standards</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Follow existing code style and formatting conventions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Write clear, self-documenting code with meaningful variable names</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Include comments for complex logic and algorithms</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Ensure all tests pass before submitting pull requests</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Add tests for new features and bug fixes</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Communication</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Be respectful and inclusive in all interactions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Use clear and descriptive commit messages</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Provide detailed descriptions in pull requests</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Ask for help when you're stuck - we're here to support you</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Review others' code constructively and kindly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Structure */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Project Structure
            </h2>
            <p className="text-xl text-gray-600">
              Understanding the codebase structure will help you navigate and contribute effectively.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex justify-center">
                  <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono text-green-400 overflow-x-auto">
                    <pre>
{`Directory structure:
└── kvr-10-digipin/
    ├── README.md
    ├── eslint.config.mjs
    ├── jsconfig.json
    ├── next.config.mjs
    ├── package.json
    ├── postcss.config.mjs
    ├── test_digipin.js
    ├── validate_samples.js
    ├── Documentation/
    │   ├── 01_interactive_map_interface_.md
    │   ├── 02_coordinate_conversion_ui_.md
    │   ├── 03_digipin_api_endpoints_.md
    │   ├── 04_digipin_core_algorithm_.md
    │   ├── 05_geocoding_service_integration_.md
    │   ├── 06_batch_processing_system_.md
    │   └── Overview of Digipin.md
    └── src/
        ├── app/
        │   ├── globals.css
        │   ├── layout.js
        │   ├── page.js
        │   ├── (public)/
        │   │   └── digipin/
        │   │       └── page.jsx
        │   └── api/
        │       ├── decode-digipin/
        │       │   └── route.js
        │       └── encode-digipin/
        │           └── route.js
        ├── components/
        │   ├── BatchProcessor.jsx
        │   ├── CoordinateToDigiPin.jsx
        │   ├── CoordinateToDigiPin.jsx.backup
        │   ├── DigiPinToCoordinate.jsx
        │   ├── MapComponent.jsx
        │   └── MapWrapper.jsx
        └── lib/
            └── digipin.js
`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Recognition & Appreciation
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We value every contribution to DigiPin and believe in recognizing our community members.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Contributors Page</h3>
              <p className="text-sm text-gray-600">
                All contributors are featured on our contributors page with their GitHub profiles and contributions.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Badges & Achievements</h3>
              <p className="text-sm text-gray-600">
                Earn special badges and achievements for different types of contributions and milestones.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Open Source Credits</h3>
              <p className="text-sm text-gray-600">
                Build your open source portfolio and gain recognition in the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-digipin-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our growing community of contributors and help shape the future of location technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/kvr-10/digipin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-digipin-blue hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Start Contributing
            </a>
            <a 
              href="https://github.com/kvr-10/digipin/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-digipin-blue font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Browse Issues
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contribute;
