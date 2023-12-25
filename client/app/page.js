export default function Home() {
  return (
    <div>
      <nav>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                  <a>Browse Fundraisers</a>
                </li>
                <li>
                  <a>Fundraisers for</a>
                  <ul className="p-2">
                    <li>
                      <a>Medical Treatment</a>
                    </li>
                    <li>
                      <a>NGO/Charity</a>
                    </li>
                    <li>
                      <a>Other Cause</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>How It Works</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Logo</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Browse Fundraisers</a>
              </li>
              <li>
                <details>
                  <summary>Fundraisers for</summary>
                  <ul className="p-2">
                    <li>
                      <a>Medical Treatment</a>
                    </li>
                    <li>
                      <a>NGO/Charity</a>
                    </li>
                    <li>
                      <a>Other Cause</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>How It Works</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end px-5">
            <input
              type="text"
              placeholder="Search"
              className="input input-ghost w-full max-w-xs mx-5"
            />
            <button className="btn btn-outline btn-default mx-5">Chat</button>
            <a className="btn">Sign In</a>
          </div>
        </div>
      </nav>
      <div className="carousel carousel-center max-w-full p-4 my-40 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <progress
              className="progress progress-success w-full"
              value="70"
              max="100"
            ></progress>
            <div className="card-actions justify-between">
              <button className="btn btn-outline">Share</button>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="carousel-item card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <progress
              className="progress progress-success w-full"
              value="70"
              max="100"
            ></progress>
            <div className="card-actions justify-between">
              <button className="btn btn-outline">Share</button>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="carousel-item card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <progress
              className="progress progress-success w-full"
              value="70"
              max="100"
            ></progress>
            <div className="card-actions justify-between">
              <button className="btn btn-outline">Share</button>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="carousel-item card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <progress
              className="progress progress-success w-full"
              value="70"
              max="100"
            ></progress>
            <div className="card-actions justify-between">
              <button className="btn btn-outline">Share</button>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="carousel-item card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <progress
              className="progress progress-success w-full"
              value="70"
              max="100"
            ></progress>
            <div className="card-actions justify-between">
              <button className="btn btn-outline">Share</button>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="carousel-item card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <progress
              className="progress progress-success w-full"
              value="70"
              max="100"
            ></progress>
            <div className="card-actions justify-between">
              <button className="btn btn-outline">Share</button>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="carousel-item card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <progress
              className="progress progress-success w-full"
              value="70"
              max="100"
            ></progress>
            <div className="card-actions justify-between">
              <button className="btn btn-outline">Share</button>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mockup-window border mx-auto bg-base-300 w-[1000px]">
        <div className="card flex-row w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex flex-row">
            <div>
              <h2 className="card-title">Want to Donate now?</h2>
              <p>donation story</p>
            </div>
            <div className="card-actions justify-end mt-72">
              <button className="btn btn-primary">Donate Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row mx-14">
        <figure>
          <img
            src="https://ketto.gumlet.io/assets/images/homepage/sac-separator.png?w=100&dpr=1.3"
            alt=""
            height={450}
            width={64}
          />
        </figure>
        <div className="md:col-span-10 w-1/4">
  <div className="flow-wrapper pt-20 flex flex-col justify-between">
    <div className="start-fr">
      <span className="text-xl font-bold sub-heading">
        Start your fundraiser
      </span>
      <span className="text-gray-700 descr">
        It'll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.
      </span>
    </div>
    <div className="share-fr">
      <span className="text-xl font-bold sub-heading">
        Share your fundraiser
      </span>
      <span className="text-gray-700 descr">
        All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.
      </span>
      <span className="text-gray-700 sub-desc">
        Share your fundraiser directly from the dashboard on social media.
      </span>
    </div>
    <div className="withdrw-funds">
      <span className="text-xl font-bold sub-heading">
        Withdraw Funds
      </span>
      <span className="text-gray-700 descr">
        The funds raised can be withdrawn without any hassle directly to your bank account.
      </span>
      <span className="text-gray-700 sub-desc">
        It takes only 5 minutes to withdraw funds on ketto.
      </span>
    </div>
  </div>
</div>
<div className="mockup-phone border-primary">
  <div className="camera"></div> 
  <div className="display">
    <div className="artboard artboard-demo phone-1">Hi.</div>
  </div>
</div>
      </div>
    </div>
  );
}
