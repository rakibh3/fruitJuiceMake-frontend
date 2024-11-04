import useAuth from '@/hooks/useAuth'

const useMenuItems = () => {
  const { user } = useAuth()

  const menuItems = user?.email
    ? [
        { name: 'Home', link: '/' },
        { name: 'Recipes', link: '/recipes' },
        { name: 'Add-Recipes', link: '/add-recipes' },
        { name: 'About Us', link: '/about-us' },
        { name: 'Contact Us', link: '/contact-us' },
      ]
    : [
        { name: 'Home', link: '/' },
        { name: 'Recipes', link: '/recipes' },
        { name: 'About Us', link: '/about-us' },
        { name: 'Contact Us', link: '/contact-us' },
      ]

  return menuItems
}

export default useMenuItems
