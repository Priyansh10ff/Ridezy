function Landing() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold">
          ridezy
        </h1>

        <div className="hidden gap-8 md:flex">
          <a href="#ride" className="hover:text-gray-500">
            Ride
          </a>

          <a href="#drive" className="hover:text-gray-500">
            Drive
          </a>

          <a href="#about" className="hover:text-gray-500">
            About
          </a>
        </div>

        <div className="flex gap-3">
          <a
            href="/login"
            className="rounded-full px-5 py-2 hover:bg-gray-100"
          >
            Log in
          </a>

          <a
            href="/register"
            className="rounded-full bg-black px-5 py-2 text-white hover:bg-gray-800"
          >
            Sign up
          </a>
        </div>
      </nav>


      {/* Hero */}
      <section className="grid min-h-[80vh] items-center gap-10 px-8 py-16 md:grid-cols-2 lg:px-20">

        {/* Left */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
            Move your way
          </p>

          <h2 className="max-w-xl text-5xl font-bold leading-tight md:text-6xl">
            Go anywhere.
            <br />
            Ridezy gets you there.
          </h2>

          <p className="mt-6 max-w-lg text-lg text-gray-600">
            Simple, reliable and affordable rides for everyday travel.
          </p>

          {/* Booking Box */}
          <div className="mt-8 max-w-md rounded-2xl bg-gray-100 p-5">

            <input
              type="text"
              placeholder="Pickup location"
              className="mb-3 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
            />

            <input
              type="text"
              placeholder="Where to?"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
            />

            <button className="mt-4 w-full rounded-lg bg-black px-4 py-3 font-semibold text-white hover:bg-gray-800">
              Find a ride
            </button>

          </div>
        </div>


        {/* Right */}
        <div className="overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80"
            alt="Indian car"
            className="h-[500px] w-full object-cover"
          />
        </div>

      </section>


      {/* Simple Ride Section */}
      <section
        id="ride"
        className="bg-gray-100 px-8 py-20 lg:px-20"
      >
        <div className="mx-auto max-w-6xl">

          <h2 className="text-4xl font-bold">
            A ride for every journey.
          </h2>

          <p className="mt-4 text-gray-600">
            Choose a ride that fits your everyday needs.
          </p>


          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {/* Economy */}
            <div className="rounded-2xl bg-white p-5">
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80"
                alt="Economy car"
                className="h-48 w-full rounded-xl object-cover"
              />

              <h3 className="mt-5 text-xl font-semibold">
                Economy
              </h3>

              <p className="mt-2 text-gray-600">
                Affordable rides for everyday travel.
              </p>
            </div>


            {/* Comfort */}
            <div className="rounded-2xl bg-white p-5">
              <img
                src="https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=800&q=80"
                alt="Comfort car"
                className="h-48 w-full rounded-xl object-cover"
              />

              <h3 className="mt-5 text-xl font-semibold">
                Comfort
              </h3>

              <p className="mt-2 text-gray-600">
                More space for a comfortable journey.
              </p>
            </div>


            {/* Family */}
            <div className="rounded-2xl bg-white p-5">
              <img
                src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80"
                alt="Family car"
                className="h-48 w-full rounded-xl object-cover"
              />

              <h3 className="mt-5 text-xl font-semibold">
                Family
              </h3>

              <p className="mt-2 text-gray-600">
                Extra space when you're travelling together.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Simple CTA */}
      <section
        id="drive"
        className="px-8 py-24 text-center lg:px-20"
      >
        <h2 className="text-4xl font-bold">
          Ready to ride?
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-gray-600">
          Create your Ridezy account and start booking rides.
        </p>

        <a
          href="/register"
          className="mt-7 inline-block rounded-full bg-black px-7 py-3 font-semibold text-white hover:bg-gray-800"
        >
          Get started
        </a>
      </section>


      {/* Footer */}
      <footer
        id="about"
        className="border-t px-8 py-8 lg:px-20"
      >
        <div className="flex flex-col justify-between gap-4 md:flex-row">

          <h2 className="text-xl font-bold">
            ridezy
          </h2>

          <p className="text-sm text-gray-500">
            © 2026 Ridezy. All rights reserved.
          </p>

        </div>
      </footer>

    </div>
  );
}

export default Landing;