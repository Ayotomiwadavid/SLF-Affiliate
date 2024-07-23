import React from "react";
import Header from "../Components/Header";
import Form from "../Components/Form";

const Signup = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10">
      <Header />
      <main className="flex flex-col w-full items-center justify-center h-lvh mt-[250px] md:mt-0">
        <div className="py-10 block items-center justify-center">
          <h1 className="text-center font-bold text-4xl capitalize text-[#F46B45] mb-2">
            Register Now!
          </h1>
          <p>Join The Pool Of Our Successfull Customers</p>
        </div>
        <Form type="signup" />
      </main>
    </section>
  );
};

export default Signup;