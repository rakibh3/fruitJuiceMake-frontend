import { NavLink, Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <section className="flex w-full">
      {/* Sidebar */}
      <div className="w-1/4">
        <ul>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/settings">Settings</NavLink>
          </li>
        </ul>
      </div>
      {/* Outlet */}
      <div className="flex-1">
        <Outlet />
      </div>
    </section>
  )
}
export default DashboardLayout
