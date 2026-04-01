import Link from react-router

export default function layout() {
  return (
  
  <div>
    <div>
        <div>
            <Link>Register</Link>
            <Link>Index</Link>
            <Link>Login</Link>
        </div>
        <Outlet />
    </div>
  </div>
  );
}
