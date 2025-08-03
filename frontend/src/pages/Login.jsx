import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (name.trim() === "") {
      setError("Name is required");
      return;
    }
    setError("");
    // Pass the name or save it in app state if needed
    navigate("/dashboard", { state: { name } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 px-4">
      <div className="bg-white dark:bg-gray-900 dark:text-gray-100 p-10 rounded-xl shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-extrabold mb-8 text-center tracking-tight">
          Intern Portal Login
        </h1>
        <label htmlFor="nameInput" className="block text-sm font-semibold mb-2">
          Enter Your Name
        </label>
        <input
          id="nameInput"
          type="text"
          aria-describedby="nameHelp"
          className={`w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-4 transition 
            ${error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"} 
            dark:bg-gray-800 dark:border-gray-700`}
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
        />
        {error && (
          <p id="nameHelp" className="text-red-600 mb-3 text-sm font-medium">
            {error}
          </p>
        )}
        <button
          onClick={handleLogin}
          disabled={!name.trim()}
          className={`w-full py-3 rounded-lg font-semibold text-white text-lg transition-colors duration-300  
            ${name.trim() ? "bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-700 hover:from-purple-800 hover:via-blue-700 hover:to-indigo-800" 
              : "bg-gray-400 cursor-not-allowed"}`}
          aria-disabled={!name.trim()}
        >
          Login
        </button>
      </div>
    </div>
  );
}
