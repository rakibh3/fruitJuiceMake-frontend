import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-20 z-20 h-screen w-full"
        >
          <div className="m-6 rounded-3xl bg-primary py-10 text-xl font-semibold uppercase text-white">
            <ul className="flex flex-col items-center gap-10">
              <li>Home</li>
              <li>Recipes</li>
              <li>Add-Recipes</li>
              <li>Coins</li>
              <li>User</li>
              <li>Logout</li>
              <li>Login</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ResponsiveMenu;
