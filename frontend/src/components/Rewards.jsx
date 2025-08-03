import { motion } from "framer-motion";

export default function Rewards() {
  const rewards = [
    { title: "Bronze Badge", unlocked: true, icon: "🥉" },
    { title: "Silver Badge", unlocked: true, icon: "🥈" },
    { title: "Gold Badge", unlocked: false, icon: "🥇" },
  ];

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {rewards.map((r, i) => (
        <motion.div
          key={r.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
          className={`
            relative flex flex-col items-center p-6 rounded-xl shadow-lg 
            ${r.unlocked ? "bg-white dark:bg-gray-800" : "bg-gray-100 dark:bg-gray-700"}
            hover:shadow-2xl transition-shadow duration-300
          `}
        >
          <div
            className={`
              text-5xl mb-4 ${r.unlocked ? "text-yellow-500" : "text-gray-400"}
            `}
          >
            {r.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            {r.title}
          </h3>
          <span
            className={`
              px-3 py-1 text-sm font-medium rounded-full
              ${r.unlocked 
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" 
                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
              }
            `}
          >
            {r.unlocked ? "Unlocked" : "Locked"}
          </span>

          {!r.unlocked && (
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl flex items-center justify-center">
              <span className="text-white text-lg font-bold">🔒</span>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
