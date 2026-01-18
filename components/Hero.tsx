import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
        alt="Solar panels on a rooftop"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Power Your Future with Solar
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Clean, renewable energy for a sustainable tomorrow. Save money and protect the environment.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors">
          Get a Free Quote
        </button>
      </div>
    </section>
  );
}