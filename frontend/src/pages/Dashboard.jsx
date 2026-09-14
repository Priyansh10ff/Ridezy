import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";

function Dashboard() {
  const { user, logout } = useAuth();

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const firstname = user?.fullname?.firstname || "there";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            to="/dashboard"
            className="text-2xl font-bold tracking-tight text-black"
          >
            Ridezy
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/profile"
              className="flex items-center gap-3 rounded-full border border-gray-200 px-2 py-2 pr-4 transition hover:bg-gray-50"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                {firstname.charAt(0).toUpperCase()}
              </div>

              <span className="text-sm font-medium text-gray-800">
                {firstname}
              </span>
            </Link>

            <button
              type="button"
              onClick={logout}
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Greeting */}
        <section className="mb-7">
          <p className="text-sm font-medium text-gray-500">Welcome back</p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-950">
            Where are you going, {firstname}?
          </h1>
        </section>

        {/* Booking + Map */}
        <section className="grid gap-5 lg:grid-cols-5">
          {/* Booking Card */}
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 lg:col-span-2">
            <div className="mb-7">
              <h2 className="text-xl font-semibold text-gray-950">
                Book a ride
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Enter your pickup and destination.
              </p>
            </div>

            {/* Location inputs */}
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-[15px] top-9 h-12 w-px bg-gray-300" />

              {/* Pickup */}
              <div className="relative flex items-center gap-4">
                <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
                  <div className="h-2.5 w-2.5 rounded-full bg-black" />
                </div>

                <input
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="Pickup location"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:bg-white"
                />
              </div>

              {/* Destination */}
              <div className="relative mt-5 flex items-center gap-4">
                <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black">
                  <div className="h-2.5 w-2.5 rounded-full bg-white" />
                </div>

                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Where to?"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:bg-white"
                />
              </div>
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-xl bg-black px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Find a Ride
            </button>
          </div>

          {/* Map Placeholder */}
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-gray-200 ring-1 ring-gray-200 lg:col-span-3">
            {/* Fake map background */}
            <div className="absolute inset-0 opacity-60">
              <div className="absolute left-[15%] top-0 h-full w-px rotate-[20deg] bg-white" />
              <div className="absolute left-[40%] top-0 h-full w-px -rotate-[35deg] bg-white" />
              <div className="absolute left-[70%] top-0 h-full w-px rotate-[15deg] bg-white" />

              <div className="absolute left-0 top-[30%] h-px w-full rotate-[8deg] bg-white" />
              <div className="absolute left-0 top-[65%] h-px w-full -rotate-[12deg] bg-white" />
            </div>

            {/* Map message */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-2xl bg-white/90 px-6 py-4 text-center shadow-sm backdrop-blur-sm">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                  •
                </div>

                <p className="font-semibold text-gray-900">Map coming soon</p>

                <p className="mt-1 text-xs text-gray-500">
                  Your route will appear here
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mt-8">
          <h2 className="mb-4 text-lg font-semibold text-gray-950">
            Quick actions
          </h2>

          <div className="grid gap-4 sm:grid-cols-3">
            <button
              type="button"
              className="rounded-2xl bg-white p-5 text-left shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-lg">
                ↻
              </div>

              <h3 className="font-semibold text-gray-900">Recent rides</h3>

              <p className="mt-1 text-sm text-gray-500">
                View your previous rides
              </p>
            </button>

            <button
              type="button"
              className="rounded-2xl bg-white p-5 text-left shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-lg">
                ★
              </div>

              <h3 className="font-semibold text-gray-900">Saved places</h3>

              <p className="mt-1 text-sm text-gray-500">
                Quickly access favorite locations
              </p>
            </button>

            <button
              type="button"
              className="rounded-2xl bg-white p-5 text-left shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-lg">
                ?
              </div>

              <h3 className="font-semibold text-gray-900">Help & support</h3>

              <p className="mt-1 text-sm text-gray-500">
                Get help with your Ridezy account
              </p>
            </button>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-lg font-semibold text-gray-950">
            Recent activity
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Your latest rides and activity will appear here.
          </p>

          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-lg text-gray-400">
              ↗
            </div>

            <h3 className="mt-4 font-medium text-gray-900">No rides yet</h3>

            <p className="mt-1 text-sm text-gray-500">
              Book your first ride to get started.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
