import useAuth from "./useAuth";

const useMenuItems = () => {
  const { user } = useAuth();

  const menuItems = user?.email
    ? [
        { name: "Home", link: "/" },
        { name: "Recipes", link: "/recipes" },
        { name: "Add-Recipes", link: "/add-recipes" },
      ]
    : [
        { name: "Home", link: "/" },
        { name: "Recipes", link: "/recipes" },
      ];

  return menuItems;
};

export default useMenuItems;
