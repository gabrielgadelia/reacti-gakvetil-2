import { Link, Outlet } from "react-router-dom";
import "../App.css";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-md">
        <nav className="max-w-6xl mx-auto flex justify-center gap-6 p-4">
          <Link to="/" className="hover:text-blue-200 transition">
            Index
          </Link>
          <Link to="/register" className="hover:text-blue-200 transition">
            Register
          </Link>
          <Link to="/login" className="hover:text-blue-200 transition">
            Login
          </Link>
        </nav>
      </header>

      {/* Main content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center p-4">
        <p>© 2026 My App</p>
      </footer>
    </div>
  );
}
