import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";

function Profile() {
  const { user } = useAuth();

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    phone: "",
  });

  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      setForm({
        firstname: user.fullname?.firstname || "",
        lastname: user.fullname?.lastname || "",
        phone: user.phone || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const fullName = `${form.firstname} ${form.lastname}`.trim();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-3xl">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>

          <p className="mt-1 text-gray-500">Manage your Ridezy account</p>
        </div>

        {/* Profile Card */}
        <div className="mb-4 rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-xl font-bold text-white">
              {form.firstname?.charAt(0).toUpperCase() || "U"}
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {fullName || "User"}
              </h2>

              <p className="text-sm text-gray-500">{user?.email}</p>

              <span className="mt-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                Rider
              </span>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="rounded-2xl bg-white shadow-sm">
          <button
            type="button"
            onClick={() => {
              setShowPersonalInfo(!showPersonalInfo);
              setIsEditing(false);
            }}
            className="flex w-full items-center justify-between p-6 text-left"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Personal Information
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                View and update your personal details
              </p>
            </div>

            <span className="text-xl text-gray-400">
              {showPersonalInfo ? "⌃" : "›"}
            </span>
          </button>

          {showPersonalInfo && (
            <div className="border-t border-gray-100 px-6 pb-6 pt-5">
              {!isEditing ? (
                <>
                  {/* Existing Information */}

                  <div className="space-y-5">
                    <div>
                      <p className="text-sm text-gray-500">First Name</p>

                      <p className="mt-1 font-medium text-gray-900">
                        {form.firstname || "-"}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Last Name</p>

                      <p className="mt-1 font-medium text-gray-900">
                        {form.lastname || "-"}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Email Address</p>

                      <p className="mt-1 font-medium text-gray-900">
                        {user?.email || "-"}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Phone Number</p>

                      <p className="mt-1 font-medium text-gray-900">
                        {form.phone || "-"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => setIsEditing(true)}
                      className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
                    >
                      Update Profile
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Edit Form */}

                  <form className="space-y-5">
                    <div>
                      <label
                        htmlFor="firstname"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        First Name
                      </label>

                      <input
                        id="firstname"
                        type="text"
                        name="firstname"
                        value={form.firstname}
                        onChange={handleChange}
                        minLength={3}
                        required
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastname"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>

                      <input
                        id="lastname"
                        type="text"
                        name="lastname"
                        value={form.lastname}
                        onChange={handleChange}
                        minLength={3}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        value={user?.email || ""}
                        disabled
                        className="w-full cursor-not-allowed rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-gray-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        pattern="^[0-9]{10}$"
                        required
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black"
                      />
                    </div>

                    <div className="flex gap-3 border-t border-gray-100 pt-5">
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        Cancel
                      </button>

                      <button
                        type="submit"
                        className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          )}
        </div>

        {/* Security */}
        <div className="mt-4 rounded-2xl bg-white shadow-sm">
          <button
            type="button"
            className="flex w-full items-center justify-between p-6 text-left"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Security</h2>

              <p className="mt-1 text-sm text-gray-500">
                Manage your password and account security
              </p>
            </div>

            <span className="text-xl text-gray-400">›</span>
          </button>
        </div>

        {/* Ride History */}
        <div className="mt-4 rounded-2xl bg-white shadow-sm">
          <button
            type="button"
            className="flex w-full items-center justify-between p-6 text-left"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Ride History
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                View your previous rides
              </p>
            </div>

            <span className="text-xl text-gray-400">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
