export default function Footer() {
    return (
        <footer className="pt-32 bg-gray-800 text-white "> {/* Aaaand have you seen a professional website without footer? exactly that is why cuz i am kind of a professional my self  */}
      <div className="container mx-auto text-center">
      <p className="mb-10">&copy; 2024 My Precious Website. All Rights Reserved.</p>
    <ul className="flex justify-center space-x-4">
      <li><a href="#" className="hover:underline">Privacy Policy</a></li>
      <li><a href="#" className="hover:underline">Terms of Service</a></li>
      <li><a href="#" className="hover:underline">Contact</a></li>
    </ul>
      </div>
    </footer>
    )
}
   