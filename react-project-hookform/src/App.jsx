import { useForm } from "react-hook-form"
import { useForm, SubmitHandler, Form } from "react-hook-form"

import './App.css'

function App() {
     const { register, handleSubmit, watch, formState: { errors, isSubmitting }, } = useForm();

     function onSubmit(data){
      // API call ko simulate krte h
      await new Promise ((resolve) =>setTimeout(resolve,5000))
      console.log("submitting the form",data)
     }
  return(

  <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label>first name</label>
      <input{...register('firstname', {
        required: true,minLength:{value:3,message:'min len atleast3'}, maxLength:10})}/>
        {errors.firstName && <p>{errors.firstname.message}</p>}
    </div>
    <br/>

    <div>
      <label>Middle name</label>
      <input{...register('middlename')}/>
    </div>
     <br/>

    <div>
      <label>last name</label>
      <input{...register('lastname')}/>
    </div>
     <br/>
     <input type="submit" disabled={isSubmitting} value={isSuubmitting ? "Submitting" : "Submit" }/>
  </form>
  )
}

export default App
