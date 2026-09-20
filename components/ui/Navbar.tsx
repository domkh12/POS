export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-7 py-5">
        <p className="text-2xl font-bold">SwiftPOS</p>
        <ul className="flex gap-10">
            <li>Home</li>
            <li>Feature</li>
            <li>Help</li>
        </ul>
        <div className="flex gap-3">
          <button className="border border-primary px-4 py-2 rounded-md">Login</button>
          <button className="bg-primary text-white px-4 py-2 rounded-md">Sign up</button>
        </div>
    </div>
  )
}
