import { Link, Outlet } from "react-router-dom";
import logo from "../assets/new-logo.png";
import { useNavigate } from "react-router-dom"
import "../App.css";

export default function Layout() {


  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center px-6 py-3">
  
          <div className="flex-shrink-0 mr-10">
            <img src={logo} alt="logo" className="h-10 w-auto" />
          </div>

          <div className="flex items-center gap-7 flex-1">
            <Link to="/" className="text-gray-800 font-medium hover:text-blue-700 transition text-sm">
              მთავარი
            </Link>
            <select
                className="appearance-none text-gray-800 font-medium hover:text-blue-700 transition text-sm bg-transparent border-none outline-none cursor-pointer p-0"
                defaultValue=""
                onChange={(e) => { if (e.target.value) navigate(e.target.value); }}
              >
                <option value="" disabled>დებულება</option>
                <option value="/debuleba/mimdinare">მიზანი</option>
                <option value="/debuleba/wesebi">წესები</option>
                <option value="/debuleba/prizebi">პრიზები</option>
              </select>
            <div className="flex items-center">
              <select
                className="appearance-none text-gray-800 font-medium hover:text-blue-700 transition text-sm bg-transparent border-none outline-none cursor-pointer p-0"
                defaultValue=""
                onChange={(e) => { if (e.target.value) navigate(e.target.value); }}
              >
                <option value="" disabled>ტურები</option>
                <option value="/turebi/mimdinare">მიმდინარე ტურები</option>
                <option value="/turebi/gavlili">გავლილი ტურები</option>
              </select>
              <span className="text-xs text-gray-800">▾</span>
            </div>
            <Link to="/contact" className="text-gray-800 font-medium hover:text-blue-700 transition text-sm">
              კონტაქტი
            </Link>
          </div>

          <div className="flex-shrink-0">
            <select
              className="text-gray-800 font-medium hover:text-blue-700 transition text-sm bg-transparent border-none outline-none cursor-pointer"
              defaultValue=""
              onChange={(e) => { if (e.target.value) navigate(e.target.value); }}
            >
              <option value="" disabled>პირადი კაბინეტი</option>
              <option value="/register">რეგისტრაცია</option>
              <option value="/login">შესვლა</option>
            </select>
            </div>

        </nav>
      </header>


      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-yellow-500 mt-16 px-16 py-10">
  <div className="max-w-6xl mx-auto flex flex-wrap gap-10 justify-between">

    <div className="flex flex-col gap-2">
      <p className="font-black text-3xl tracking-widest text-gray-800">M Z I U R I</p>
      <p className="text-sm text-gray-700 leading-relaxed max-w-48">
        საინფორმაციო<br />
        ტექნოლოგიების ცენტრი<br />
        «მβიური» 1987 წელიდან თქვენს<br />
        სამსახურში.
      </p>
    </div>

    <div className="flex flex-col gap-2">
      <p className="text-sm text-gray-700">© 2026 ყველა უფლება დაცულია.</p>
      <p className="text-sm text-gray-700">mziuri.ge</p>
      <div className="bg-black text-white text-xs px-2 py-1 rounded flex items-center gap-1 w-fit">
        <span>TOP.GE</span>
        <span>📊</span>
      </div>
    </div>

    <div className="flex flex-col gap-2 text-sm text-gray-800">
      <a href="#" className="hover:underline">მთავარი</a>
      <a href="#" className="hover:underline">ბმოგადი მონაცემები</a>
      <a href="#" className="hover:underline">ისტორია</a>
      <a href="#" className="hover:underline">სასწავლო პროცესი</a>
      <a href="#" className="hover:underline">სკოლის მოსწავლეთათვის</a>
      <a href="#" className="hover:underline">მრდასრულთათვის</a>
    </div>

    <div className="flex flex-col gap-2 text-sm text-gray-800">
      <a href="#" className="hover:underline">კონტაქტი</a>
      <a href="#" className="hover:underline">მთავარი საიტი (mziuri.ge)</a>
      <a href="#" className="hover:underline">ინტერნეტ შეჯიბრი</a>
      <a href="#" className="hover:underline">იმედი ხვალის</a>
    </div>

  </div>

  <div className="flex justify-end max-w-6xl mx-auto mt-6">
    <button className="text-gray-800 text-xl font-bold hover:opacity-70">∧</button>
  </div>
</footer>
    </div>
  );
}