import React from 'react'
import Header from "../Components/Header";
import Form from "../Components/Form";

const SignIn = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10">
    <Header />
    <main className="flex flex-col w-full items-center justify-center h-lvh">
    <div className="py-10 block items-center justify-center">
          <h1 className="text-center font-bold text-4xl capitalize text-[#F46B45] mb-2">
            Welcome Back!
          </h1>
          <p>Access Your Account to Continue Your Journey with Us</p>
        </div>
    <Form type='login'/>
    </main>
    </section>
  )
}

export default SignIn
