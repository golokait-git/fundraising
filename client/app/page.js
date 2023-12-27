export default function Home() {
  return (
    <div className="font-serif">
      {/* navbar */}
      <div className="navbar bg-base-100 w-[80%] mx-auto shadow-lg shadow-orange-400 rounded-xl mt-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Our Mission</a>
              </li>
              <li>
                <a>About The Project</a>
              </li>
              <li>
                <a>Become a Patron</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <a href="/" className="px-2">
            <img src="/Iskcon-logo.png" alt="logo" width={62} height={60} />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Our Mission</a>
            </li>
            <li>
              <a>About The Project</a>
            </li>
            <li>
              <details>
                <summary>Become a Patron</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-end w-[80%] mx-auto mt-5 "><button className="btn btn-success">Login / Register</button></div>
      <div className="   w-[80%] justify-center content-center mx-auto">
        <h3 className="text-center font-bold text-2xl mt-8">“Krishnam Vande Jagadgurum”</h3>
      </div>

      {/* carousal */}

      <div className="carousel w-[80%] mt-12 mx-[10%] rounded-xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/Carousal-1.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/Carousal-2.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/Carousal-3.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="/Carousal-4.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* about us */}
      <div className="w-[80%] mx-[10%] mt-28">
        <h1 className="text-3xl font-bold text-center mb-12 ">ABOUT US</h1>
        <div className="flex space-x-20 justify-center">
          <a href="#">
            <img src="/mission-ic.png" className="w-32" />
          </a>
          <a href="#">
            <img src="/msg-cm.png" className="w-32" />
          </a>
          <a href="#">
            <img src="/testimonial-ic.png" className="w-32" />
          </a>
          <a href="#">
            <img src="/about-prjct.png" className="w-32" />
          </a>
          <a href="#">
            <img src="/team-ic.png" className="w-32" />
          </a>
          <a href="#">
            <img src="/curr-prjct.png" className="w-32" />
          </a>
        </div>
      </div>
      {/* donor form */}
      <div className="flex justify-between w-[85%] mx-auto mt-28 border-solid rounded-xl border-4 border-amber-500">
        <div className="w-[55%] m-10">
          <h1 className="text-3xl font-bold text-start mb-12">Join Us Today</h1>
          <img src="/paintArt.png" className="h-[60%]" />
          <p className="text-center mt-6">
            We know it well that what we are doing is nothing more than a drop
            in the ocean. But if the drop were not there, the ocean would be
            missing something.. “Change will not come if we wait for some other
            person or some other time. We are the ones we've been waiting for.
            We are the change that we seek.
          </p>
          <div className="flex justify-center ">
            <div className="flex flex-col mr-[18%] mt-8">
              <div className="flex justify-start my-8">
                <img src="/coin-icon.png" className="h-6 w-6 mr-2" />
                <h3 className="font-bold">Single Donation</h3>
              </div>
              <div className="flex justify-start">
                <img src="/coin-icon.png" className="h-6 w-6 mr-2" />
                <h3 className="font-bold">Annual Support</h3>
              </div>
            </div>
            <div className="flex flex-col mr-[18%] mt-8 ">
              <div className="flex justify-start my-8">
                <img src="/coin-icon.png" className="h-6 w-6 mr-2" />
                <h3 className="font-bold">Monthly Donation</h3>
              </div>
              <div className="flex justify-start">
                <img src="/coin-icon.png" className="h-6 w-6 mr-2" />
                <h3 className="font-bold">Monthly Support</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[45%] m-10">
          {/* start */}
          <h1 className=" font-bold text-center text-3xl mb-12">Be A Donor</h1>
          <div className="flex space-x-5 justify-between my-5">
            <div>
              <h3 className=" font-bold my-2">First Name</h3>
              <input
                type="text"
                placeholder="Enter Your First Name"
                className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
              />
            </div>
            <div>
              <h3 className=" font-bold my-2">Last Name</h3>
              <input
                type="text"
                placeholder="Enter Your Last Name"
                className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
              />
            </div>
          </div>
          <div className="my-5">
            <h3 className=" font-bold my-2">Email</h3>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
            />
          </div>
          <div className="flex space-x-5 justify-between my-5">
            <div className="my-5">
              <h3 className=" font-bold my-2">Country</h3>
              <input
                type="text"
                placeholder="Country"
                className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
              />
            </div>
            <div className="my-5">
              <h3 className=" font-bold my-2">Contact Number</h3>
              <input
                type="text"
                placeholder="Enter Your Contact No."
                className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
              />
              <p className="font-bold text-start text-xs">
                *Please add country Code
              </p>
            </div>
          </div>
          <div className="my-5">
            <h3 className=" font-bold my-2">Donation Amount</h3>
            <input
              type="text"
              placeholder="Minimum amount is ₹500"
              className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
            />
          </div>
          <div className="my-5">
            <h3 className=" font-bold my-2">Payment Method</h3>
            <input
              type="text"
              className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
            />
          </div>
          <div className="my-5">
            <h3 className=" font-bold my-2">We Accept</h3>
            <div className="flex justify-between w-full ">
              <img src="/master-ic.png" className="h-21 w-24" />
              <img src="/gpay-ic.png" className="h-21 w-24" />
              <img src="/visa-ic.png" className="h-21 w-24" />
              <img src="/paypal-ic.png" className="h-21 w-24" />
            </div>
          </div>
          <div className="flex justify-between content-center">
            <div className="my-5">
              <h3 className=" font-bold my-2">May we thank you publicaly?</h3>
              <div className="form-control">
                <label className="cursor-pointer label justify-start">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent mx-2"
                  />
                  <span className="label-text">
                    No, keep my identity anonymous
                  </span>
                </label>
              </div>
            </div>
            <div className="my-5">
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-accent">
                Donate
              </button>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
      <div className="mt-28">
        <h1 className="font-bold text-center text-3xl">SUPPORT THE PROJECT</h1>
      </div>
      <div className="w-[80%] mx-auto mt-5">
        <h1 className="font-bold text-center text-xl">Become A Patron</h1>
        <div>
          <div className="flex justify-between content-center my-5">
            <div className="flex flex-col justify-between content-center">
              <img src="Diamond-ic.png" className="w-64" />
              <div className="mx-auto">
                <button className="btn btn-outline btn-accent">
                  Contribute
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between content-center">
              <img src="Platinum-ic.png" className="w-64" />
              <div className="mx-auto">
                <button className="btn btn-outline btn-accent">
                  Contribute
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between content-center">
              <img src="Gold-ic.png" className="w-64" />
              <div className="mx-auto">
                <button className="btn btn-outline btn-accent">
                  Contribute
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between content-center my-5">
            <div className="flex flex-col justify-between content-center">
              <img src="Silver-ic.png" className="w-64" />
              <div className="mx-auto">
                <button className="btn btn-outline btn-accent">
                  Contribute
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between content-center">
              <img src="Room-ic.png" className="w-64" />
              <div className="mx-auto">
                <button className="btn btn-outline btn-accent">
                  Contribute
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between content-center">
              <img src="Founder-ic.png" className="w-64" />
              <div className="mx-auto">
                <button className="btn btn-outline btn-accent">
                  Contribute
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto mt-20">
        <button className="btn btn-active btn-accent w-full font-bold text-xl">
          Campaigns
        </button>
      </div>
      <div className="mt-20">
        <h1 className="font-bold text-center text-3xl">
          Our Zonal Secretaries
        </h1>
        <div className="flex justify-between content-center w-[40%] mx-auto mt-16">
          <div className="w-64">
            <img
              src="/ozs-1.png"
              className="w-full shadow-lg shadow-orange-400 rounded-xl"
            />
            <h3 className="font-bold text-center text-xl mt-5">
              HH Gopal Krishna Goswami
            </h3>
          </div>
          <div className="w-64">
            <img
              src="/ozs-2.png"
              className="w-full shadow-lg shadow-orange-400 rounded-xl"
            />
            <h3 className="font-bold text-center text-xl mt-5">
              HG Devakinandan Das
            </h3>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="font-bold text-center text-3xl">
          Our Advisory Board Members
        </h1>
        <div>
          <div className="flex justify-between content-center w-[80%] mx-auto mt-16">
            <div className="w-64">
              <img
                src="/oabm-1.png"
                className="w-full shadow-lg shadow-orange-400 rounded-xl"
              />
              <h3 className="font-bold text-center text-xl mt-5">
                HH Jayapataka Swami
              </h3>
            </div>
            <div className="w-64">
              <img
                src="/oabm-2.png"
                className="w-full shadow-lg shadow-orange-400 rounded-xl"
              />
              <h3 className="font-bold text-center text-xl mt-5">
                HH Radhanath Swami
              </h3>
            </div>
            <div className="w-64">
              <img
                src="/oabm-3.png"
                className="w-full shadow-lg shadow-orange-400 rounded-xl"
              />
              <h3 className="font-bold text-center text-xl mt-5">
                HH Krishna Kshetra Swami
              </h3>
            </div>
            <div className="w-64">
              <img
                src="/oabm-4.png"
                className="w-full shadow-lg shadow-orange-400 rounded-xl"
              />
              <h3 className="font-bold text-center text-xl mt-5">
                HH Bhakti Raghav Swami
              </h3>
            </div>
          </div>
          <div className="flex justify-between content-center w-[80%] mx-auto mt-16">
            <div className="w-64">
              <img
                src="/oabm-5.png"
                className="w-full shadow-lg shadow-orange-400 rounded-xl"
              />
              <h3 className="font-bold text-center text-xl mt-5">
                HH Bhakti Vigyan Swami
              </h3>
            </div>
            <div className="w-64">
              <img
                src="/oabm-6.png"
                className="w-full shadow-lg shadow-orange-400 rounded-xl"
              />
              <h3 className="font-bold text-center text-xl mt-5">
                HH Bhakti Rasamrita Swami
              </h3>
            </div>
            <div className="w-64">
              <img
                src="/oabm-7.png"
                className="w-full shadow-lg shadow-orange-400 rounded-xl"
              />
              <h3 className="font-bold text-center text-xl mt-5">
                HH Bhakti Prabhav Swami
              </h3>
            </div>
            <div className="w-64">
              <img
                src="/oabm-8.png"
                className="w-full shadow-lg shadow-orange-400 rounded-xl"
              />
              <h3 className="font-bold text-center text-xl mt-5">
                HH Bhakti Dhira Damodara Swami
              </h3>
            </div>
          </div>
          <div className="flex justify-between content-center w-[80%] mx-auto mt-16">
            <div className="w-64">
              <img
                src="/oabm-9.png"
                className="w-full shadow-lg shadow-orange-400 rounded-xl"
              />
              <h3 className="font-bold text-center text-xl mt-5">
                HH Radha Raman Swami
              </h3>
            </div>
            <div className="w-64">
              <img
                src="/oabm-10.png"
                className="w-full shadow-lg shadow-orange-400 rounded-xl"
              />
              <h3 className="font-bold text-center text-xl mt-5">
                HG Govardhan Das
              </h3>
            </div>
            <div className="w-64">
              <img
                src="/oabm-11.png"
                className="w-full shadow-lg shadow-orange-400 rounded-xl"
              />
              <h3 className="font-bold text-center text-xl mt-5">
                HG Bhima Das
              </h3>
            </div>
            <div className="w-64">
              <img
                src="/oabm-12.png"
                className="w-full shadow-lg shadow-orange-400 rounded-xl"
              />
              <h3 className="font-bold text-center text-xl mt-5">
                HG Tapan Mishra Das
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[65%] mt-28 content-center mx-auto">
        <h1 className="font-bold text-center text-3xl">Glories of Charity</h1>
        <div className="carousel mt-10 shadow-lg shadow-orange-400 rounded-xl">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="/c-1.png" className="w-[90%] mx-auto" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="/c-2.png" className="w-[90%] mx-auto" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="/c-3.png" className="w-[90%] mx-auto" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer p-10 bg-success text-success-content mt-20">
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">ISKCON NEWS</a>
    <a className="link link-hover">ISKCON OFFICIAL</a>
    <a className="link link-hover">TEMPLE DIRECTORIES</a>
    <a className="link link-hover">BHAKTIVEDANTA BOOK TRUST</a>
    <a className="link link-hover">ISKCON CONNECTION</a>
    <a className="link link-hover">ISKCON GBC</a>
  </nav> 
  <nav>
    <header className="footer-title">Communications</header> 
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Contact Us</a>
    <a className="link link-hover">Courses and Conferences</a>
    <a className="link link-hover">Media kit</a>
  </nav> 
  <form>
    <header className="footer-title">Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
  <nav>
    <header className="footer-title">Social</header> 
    <div className="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </nav> 
 
</footer>
<footer className="footer footer-center p-4 bg-base-100 text-base-content">
  <aside>
    <p>Copyright © 2023 - All right reserved by Goloka IT</p>
  </aside>
</footer>
    </div>
  );
}
