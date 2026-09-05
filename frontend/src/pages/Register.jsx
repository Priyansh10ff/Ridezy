import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../AxiosCalls/axios";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await axiosInstance.post(
        "/users/register",
        form
      );

      console.log(response.data);

      navigate("/dashboard");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5">
        <Link to="/" className="text-2xl font-bold">
          ridezy
        </Link>

        <Link
          to="/login"
          className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white hover:bg-gray-800"
        >
          Login
        </Link>
      </nav>

      {/* Register Form */}
      <div className="flex min-h-[80vh] items-center justify-center px-6">
        <div className="w-full max-w-md">

          <h1 className="text-4xl font-bold">
            Create your account
          </h1>

          <p className="mt-2 text-gray-600">
            Join Ridezy and start riding.
          </p>

          <form onSubmit={handleSubmit} className="mt-8">

            {/* First Name */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                First name
              </label>

              <input
                type="text"
                name="firstname"
                value={form.firstname}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            {/* Last Name */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium">
                Last name
              </label>

              <input
                type="text"
                name="lastname"
                value={form.lastname}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            {/* Email */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            {/* Phone */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            {/* Password */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />

              <p className="mt-2 text-xs text-gray-500">
                Password must be at least 8 characters.
              </p>
            </div>

            {/* Error */}
            {error && (
              <p className="mt-4 text-sm text-red-600">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full rounded-lg bg-black px-4 py-3 font-semibold text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>

          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-black"
            >
              Login
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
}

export default Register;