import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are dedicated to providing top-quality solar panel installations and renewable energy solutions.
            With years of experience, we help homeowners and businesses transition to clean, sustainable energy.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Solar installation team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Why Choose Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Certified and experienced technicians</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>High-quality solar panels and equipment</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Comprehensive warranties and support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Customized solutions for every need</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}