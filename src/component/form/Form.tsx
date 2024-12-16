import { FormEvent, useState } from "react"
import { useRef } from "react";


type formData = {
    name: string;
    email: string;
    password: string;
}

const Form = () => {

    const [submittedData , setSubmittedData]= useState<formData>({
        name: "",
        email: "",
        password: "",
    });

    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{

        event.preventDefault()

        const nameValue = name.current!.value
        const emailValue = name.current!.value
        const passwordValue = name.current!.value

        setSubmittedData({
            name: nameValue,
            email: emailValue,
            password: passwordValue,
        })



    }

  return (
   
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your Name" ref={name} />
      <input type="email" placeholder="Enter your Email" ref={email} />
      <input type="password" placeholder="Enter your Password" ref={password} />
      <button type="submit">submit</button>

      <section>
        <h1>Name : {submittedData.name}</h1>
        <h1>Email : {submittedData.email}</h1>
        <h1>Password : {submittedData.password}</h1>
      
      </section>
    </form>
  )
}

export default Form