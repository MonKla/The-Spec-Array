// src/components/Footer.jsx

function Footer() {
  return (
    <footer className="bg-yellow-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Join Us Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold">Join Up</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-800 hover:underline">Modimal Club</a></li>
              <li><a href="#" className="text-base text-gray-800 hover:underline">Careers</a></li>
              <li><a href="#" className="text-base text-gray-800 hover:underline">Visit Us</a></li>
            </ul>
          </div>
          {/* Help & Support Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold">Help & Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-800 hover:underline">Orders & Shipping</a></li>
              <li><a href="#" className="text-base text-gray-800 hover:underline">Returns & Refunds</a></li>
              <li><a href="#" className="text-base text-gray-800 hover:underline">FAQs</a></li>
              <li><a href="#" className="text-base text-gray-800 hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-base text-gray-800 order-2 sm:order-1 mt-4 sm:mt-0">© 2025 YDP. All Rights Reserved.</p>
          <div className="flex space-x-6 order-1 sm:order-2">
            {/* Social Media Icons */}
            <a href="#" className="text-gray-800 hover:text-black">[IG]</a>
            <a href="#" className="text-gray-800 hover:text-black">[FB]</a>
            <a href="#" className="text-gray-800 hover:text-black">[PI]</a>
            <a href="#" className="text-gray-800 hover:text-black">[TK]</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;