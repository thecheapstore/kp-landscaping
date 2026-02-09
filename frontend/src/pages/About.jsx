import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center bg-gradient-to-r from-emerald-800 to-emerald-600">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1605117882932-f9e32b03fea9" 
            alt="About KP Landscaping"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">About KP Landscaping</h1>
          <p className="text-xl text-emerald-50">Excellence in landscaping since 2010</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading text-left">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Founded in 2010, KP Landscaping has grown from a small local operation to one of New York's most trusted landscaping companies. We serve the Buffalo, Rochester, and Albany regions with dedication to quality and customer satisfaction.
                </p>
                <p>
                  Our team of experienced professionals brings together decades of combined expertise in landscape design, installation, and maintenance. We take pride in transforming outdoor spaces into beautiful, functional environments that our clients love.
                </p>
                <p>
                  What sets us apart is our commitment to excellence in every project, whether it's a small residential lawn or a large commercial property. We use the latest equipment and techniques to deliver superior results every time.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg" 
                alt="Our Team"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Core Values</h2>
            <p className="section-subheading">What drives us every day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="value-card">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every project receives our full attention and expertise.
              </p>
            </div>

            <div className="value-card">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our top priority. We listen, understand, and deliver beyond expectations.
              </p>
            </div>

            <div className="value-card">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reliability</h3>
              <p className="text-gray-600">
                Count on us to show up on time, every time. We respect your schedule and property.
              </p>
            </div>

            <div className="value-card">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every detail, from design to execution and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Choose KP Landscaping</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed and insured for your peace of mind</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Experienced Team</h3>
                <p className="text-gray-600">15+ years of professional landscaping experience</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Quality Equipment</h3>
                <p className="text-gray-600">State-of-the-art tools and equipment for best results</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">We don't rest until you're 100% satisfied</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">Fair, transparent pricing with no hidden fees</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Multi-Location Service</h3>
                <p className="text-gray-600">Serving Buffalo, Rochester, and Albany areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Regions */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Service Regions</h2>
            <p className="text-xl text-emerald-100">
              Proudly serving communities across Western and Central New York
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Buffalo Region</h3>
              <p className="text-emerald-100">
                Serving 19 communities including Amherst, Williamsville, Orchard Park, and more
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Rochester Region</h3>
              <p className="text-emerald-100">
                Serving 25 communities including Brighton, Pittsford, Webster, and more
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Albany Region</h3>
              <p className="text-emerald-100">
                Serving 13 communities including Clifton Park, Colonie, Troy, and more
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Work with the Best?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free consultation and quote
          </p>
          <Link to="/contact" className="cta-button-large">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
