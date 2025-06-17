import Image from "next/image";


export default function Home() {
  
  return (
    <>
    <div className="container">
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/">
            <Image
              src="/logo1.png"
              alt="Perfect Classes Logo"
              width={50}
              height={50}
              className="cursor-pointer"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-40 text-base font-bold">
          <li>
            <a href="/" className="text-gray-800 hover:text-orange-600">Home</a>
          </li>
          <li>
            <a href="/" className="text-gray-800 hover:text-orange-600">About</a>
          </li>
          <li>
            <a href="/" className="text-gray-800 hover:text-orange-600">Project Gallery</a>
          </li>
          <li>
            <a href="/" className="text-gray-800 hover:text-orange-600">Contact Us</a>
          </li>
        </ul>
      </nav>

      {/* Main section with background image */}
       <div >
        <p className="pg">this is background</p>
         
      </div> 
    </div>
  </>
  );
}
