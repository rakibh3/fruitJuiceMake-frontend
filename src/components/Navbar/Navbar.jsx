import { LeafyGreen } from "lucide-react";

const Navbar = () => {
  return (
    <nav>
      {/* Logo Section */}
      <div className="flex items-center gap-2 text-2xl font-medium uppercase">
        <p className="text-primary">Fruit</p>
        <p className="text-secondary">Blender</p>
        <LeafyGreen className="text-green-500" />
      </div>

      {/* Menu Section */}
    </nav>
  );
};
export default Navbar;
