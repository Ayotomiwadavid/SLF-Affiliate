import React from "react";

// const SignUpElemant = () => {
//   return()
// }

const Form = ({ type }) => {
  return (
    <form
      className={
        type === "signup"
          ? "bg-[#f5f5f5] md:grid md:grid-cols-2 md:place-items-center flex flex-col items-center justify-center md:max-h-[550px] h-fit rounded-lg shadow-lg py-7 px-3 gap-5"
          : "bg-[#f5f5f5] flex flex-col items-center justify-center max-h-[550px] h-fit rounded-lg shadow-lg py-7 px-3 gap-5"
      }
    >
      <input
        className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
        type="email"
        placeholder="Email"
      />
      <input
        className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
        type="password"
        placeholder="Password"
      />
      {type === "signup" && (
        <>
          <input
            className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
            type="password"
            placeholder="Confirm Password"
          />

          <input
            className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
            type="text"
            placeholder="Username"
          />

          <input
            className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
            type="text"
            placeholder="First Name"
          />
          <input
            className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
            type="text"
            placeholder="Last Name"
          />
        </>
      )}

      {type === "signup" && (
        <>
          <input
            className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
            type="number"
            placeholder="Transaction Pin"
          />
          <input
            className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
            type="number"
            placeholder="Confirm Transaction Pin"
          />

          <input
            className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
            type="text"
            placeholder="Referral Id"
          />

          <select className='h-[55px] p-3 w-[350px] outline-none rounded-md value="" bg-white'>
            <option>Choose Your Country</option>
          </select>
        </>
      )}
      <input
        type="submit"
        className="col-span-2 w-3/4 bg-[#F46B45] h-[45px] text-white capitalize rounded-lg font-semibold text-xl cursor-pointer transition-all duration-500 hover:scale-110"
      />
    </form>
  );
};

export default Form;
