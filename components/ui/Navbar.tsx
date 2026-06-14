export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-7 py-5 shadow-xl">
        <p className="text-2xl font-bold">SwiftPOS</p>
        <ul className="flex gap-4">
            <li>Features</li>
            <li>Pricing</li>
            <li>Reviews</li>
            <li>Docs</li>
        </ul>
        <button className="bg-primary text-white px-4 py-2 rounded-xl">Start Free</button>
    </div>
  )
}
