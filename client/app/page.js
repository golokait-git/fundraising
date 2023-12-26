
export default function Home() {
  return (
    <div>
      {/* navbar */}
      <div className="navbar bg-base-100 w-[80%] mx-auto shadow-2xl shadow-pink-400 rounded-xl mt-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>Our Mission</a></li>
        <li><a>About The Project</a></li>
        <li>
          <a>Become a Patron</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Contact Us</a></li>
      </ul>
    </div>
    <a className="px-2"><img src='/Iskcon-logo.png' alt="logo" width={62} height={60} /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li><a>Our Mission</a></li>
        <li><a>About The Project</a></li>
      <li>
        <details>
          <summary>Become a Patron</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Contact Us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>

{/* carousal */}

<div className="carousel w-[80%] mt-28 mx-[10%] rounded-xl">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="/Carousal-1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="/Carousal-2.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="/Carousal-3.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="/Carousal-4.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

{/* about us */}
<div className="w-[80%] mx-[10%] mt-28">
  <h1 className="text-3xl font-bold text-center mb-12 ">ABOUT US</h1>
  <div className="flex space-x-20 justify-center">
  <a href="#"><img src="/mission-ic.png" className="w-32"/></a>
  <a href="#"><img src="/msg-cm.png" className="w-32"/></a>
  <a href="#"><img src="/testimonial-ic.png" className="w-32"/></a>
  <a href="#"><img src="/about-prjct.png" className="w-32"/></a>
  <a href="#"><img src="/team-ic.png" className="w-32"/></a>
  <a href="#"><img src="/curr-prjct.png" className="w-32"/></a>
  </div>
</div>
    </div>
  );
}
