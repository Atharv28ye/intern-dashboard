import { useEffect, useState } from "react";

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/leaderboard")
      .then((res) => res.json())
      .then((data) => {
        setLeaders(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 p-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
        <div className="px-8 py-6 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">
            Top Donors Leaderboard
          </h1>
        </div>

        {loading ? (
          <div className="flex justify-center items-center p-8">
            <svg
              className="animate-spin h-10 w-10 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25" cx="12" cy="12" r="10"
                stroke="currentColor" strokeWidth="4"
              />
              <path
                className="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {leaders.map((l, i) => (
              <li
                key={l.name}
                className="flex items-center justify-between px-8 py-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-xl font-bold text-gray-700 dark:text-gray-200">
                    #{i + 1}
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      src={`https://ui-avatars.com/api/?name=${l.name}&background=random&size=48`}
                      alt={l.name}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                      {l.name}
                    </p>
                  </div>
                </div>
                <div className="text-lg font-medium text-blue-600 dark:text-blue-400">
                  ₹{l.donationsRaised.toLocaleString()}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
