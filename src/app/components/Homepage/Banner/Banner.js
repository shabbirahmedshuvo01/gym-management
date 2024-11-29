export default function Banner() {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 animate-gradient-x blur-xl opacity-20 -z-10"></div>

      {/* Content */}
      <div className="text-center text-white space-y-6 px-4">
        <h1 className="text-4xl sm:text-6xl font-bold animate-fade-in">
          Achieve Your Fitness Goals with{" "}
          <span className="text-yellow-300">GymClass</span>
        </h1>
        <p className="text-lg sm:text-2xl animate-fade-in">
          Join our gym and access top-notch trainers, customized plans, and a
          vibrant community!
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-yellow-300 text-gray-900 font-semibold rounded-md hover:bg-yellow-400 hover:scale-105 transition transform animate-fade-in">
            Get Started
          </button>
          <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-200 hover:scale-105 transition transform animate-fade-in">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
