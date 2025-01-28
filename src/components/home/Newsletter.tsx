import React from "react";

function Newsletter() {
  return (
    <div className="newsletter bg-cover bg-main-bg">
      <div className="container px-4 sm:px-0 mx-auto text-center py-12">
        <h2 className="text-2xl font-bold mb-2">Join Our Newsletter</h2>
        <p className="text-xs mb-6">
          Sign up for deals, new products and promotions
        </p>
        <div className="border-b w-full relative sm:w-1/2 text-xs  border-b-gray-400 mx-auto flex items-center text-gray-400 justify-between">
          <i className="absolute top-1 left-2 scale-90">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.07667 6.53075C4.23291 6.01858 4.70918 5.646 5.27246 5.646H19.2725C19.8358 5.646 20.312 6.01858 20.4683 6.53075L12.2725 11.9946L4.07667 6.53075ZM2.5225 6.88226C2.52236 6.89026 2.52235 6.89826 2.52246 6.90625V16.896C2.52246 18.4148 3.75368 19.646 5.27246 19.646H19.2725C20.7912 19.646 22.0225 18.4148 22.0225 16.896V6.90622M20.5225 8.29738V16.896C20.5225 17.5864 19.9628 18.146 19.2725 18.146H5.27246C4.58211 18.146 4.02246 17.5864 4.02246 16.896V8.29738L11.8564 13.52C12.1084 13.688 12.4366 13.688 12.6885 13.52L20.5225 8.29738ZM22.0224 6.88229C22.015 5.36981 20.7867 4.146 19.2725 4.146H5.27246C3.75826 4.146 2.52989 5.3698 2.5225 6.88226"
                fill="#141718"
              />
            </svg>
          </i>
          <input
            type="email"
            className="w-4/5 bg-transparent py-2 pl-10"
            placeholder="Email address"
          />
          <button>Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
