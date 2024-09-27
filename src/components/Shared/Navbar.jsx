import { useState } from "react";
import { Menu } from "lucide-react";
import { LeafyGreen } from "lucide-react";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";

const NavbarMenu = [
  { name: "Home", link: "/" },
  { name: "Recipes", link: "/recipes" },
  { name: "Add-Recipes", link: "/add-recipes" },
  { name: "Coins", link: "/coins" },
  { name: "User", link: "/user" },
  { name: "Logout", link: "/logout" },
  { name: "Login", link: "/login" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center border-b bg-white/95 backdrop-blur-sm md:h-14">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="container flex items-center justify-between py-4 md:pt-4"
        >
          {/* Logo Section */}
          <div className="flex items-center gap-2 text-2xl font-medium uppercase">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Blender</p>
            <LeafyGreen className="text-green-500" />
          </div>

          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="#ef4444 inline-block hover:text-primary hover:shadow-[0_3px_0_-1px]"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile HamburgeMenu Section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <Menu className="text-4xl" />
          </div>
        </motion.div>
      </nav>
      <ResponsiveMenu open={open} />
    </>
  );
};
export default Navbar;
