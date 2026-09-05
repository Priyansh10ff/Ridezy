import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../AxiosCalls/axios";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
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
        "/users/login",
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
          to="/register"
          className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white hover:bg-gray-800"
        >
          Sign up
        </Link>
      </nav>


      {/* Login Form */}
      <div className="flex min-h-[80vh] items-center justify-center px-6">

        <div className="w-full max-w-md">

          <h1 className="text-4xl font-bold">
            Welcome back
          </h1>

          <p className="mt-2 text-gray-600">
            Login to continue with Ridezy.
          </p>


          <form onSubmit={handleSubmit} className="mt-8">

            {/* Email */}
            <div>
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
                placeholder="Enter your password"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />
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
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>


          {/* Register Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-black"
            >
              Sign up
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
}

export default Login;