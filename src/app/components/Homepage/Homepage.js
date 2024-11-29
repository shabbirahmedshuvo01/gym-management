import Link from "next/link";
import Navbar from "../Navbar/Navbar";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      
      <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      <header className="text-center py-8">
        <h1 className="text-5xl font-bold">Welcome to GymClass</h1>
        <p className="mt-4 text-xl">Your personal gym scheduling and membership management system</p>
      </header>

      <section className="max-w-4xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-red-600 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold">Become a Member</h2>
            <p className="mt-4">Sign up to book your favorite classes and track your progress.</p>
            
            <Link href="/register">
              <button className="mt-6 px-6 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-200">
                Join Now
              </button>
            </Link>
          </div>

          <div className="p-8 bg-blue-600 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold">For Trainers</h2>
            <p className="mt-4">Manage your classes, track trainees, and grow your gym career.</p>
            
            <Link href="/login">
              <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200">
                Login
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
