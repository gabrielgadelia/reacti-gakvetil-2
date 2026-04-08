import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      {/* Header */}
      <header>
        <nav>
          <Link to="/register">Register</Link>
          <Link to="/">Index</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      {/* Main content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <p>© 2026 My App</p>
      </footer>
    </div>
  );
}
