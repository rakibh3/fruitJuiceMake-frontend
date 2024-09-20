import { LeafyGreen } from "lucide-react";

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
  return (
    <nav>
      <div className="container flex items-center justify-between py-4 md:pt-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2 text-2xl font-medium uppercase">
          <p className="text-primary">Fruit</p>
          <p className="text-secondary">Blender</p>
          <LeafyGreen className="text-green-500" />
        </div>

        {/* Menu Section */}
        {/* Home recipes Add-recipes Coins+User-Image+Logout */}
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
      </div>
    </nav>
  );
};
export default Navbar;
