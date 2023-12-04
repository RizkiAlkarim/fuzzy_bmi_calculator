/* eslint-disable no-unused-vars */
import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [form, setForm] = useState({
    weight: 0,
    height: 0
  })
  const [result, setResult] = useState({
    berat: 0,
    tinggi: 0,
    BMI: 0
  })

  // useEffect(()=> {
  //   fetch("https://localhost:5000/data")
  // }, [form])

  const handleSubmit = (e) => {
    axios({
      method: "POST",
      url: "http://localhost:5000/data",
      headers : {
        "Content-Type": "application/json"
      },
      data: {
        weight: form.weight,
        height: form.height
      }
    })
    .then((response) => {
      console.log(response.data)
      setResult(({
        berat: response.data.berat,
        tinggi: response.data.tinggi,
        BMI: response.data.BMI,
      }))
      return result
    })
    .catch((error) => {
      if(error.response){
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
      }
    })

    setForm(({
      weight: 0,
      height: 0
    }))

    e.preventDefault()
    handleDialog('open')
  }

  const handleChange = (e) => {
    const {value, name} = e.target
    setForm(prev => ({
      ...prev, [name]: value
    }))
  }

  const handleDialog = (param) => {
    const dialog = document.getElementById("dialog")
    if (param == 'close') dialog.style.display = 'none'
    if (param == 'open') dialog.style.display = 'flex'
  }

  console.log(result)
  return (
    <div className="flex items-center justify-center h-screen w-full bg-white">
      <div className='flex items-center justify-center bg-blue-400 h-screen w-2/3'>
        <h1 className='text-6xl font-bold italic'>
          <span className='text-white text-3xl'>Welcome to</span>
          <span className='block'>Fuzzy BMI </span>
          <span className='block'>Calculator</span>
        </h1>
      </div>
      
      <div className='flex flex-col items-center justify-center h-screen bg-white gap-6 w-1/3'>

        <form className='flex flex-col items-center justify-center gap-4 w-1/2' action="submit">
          <div className='w-full'>
            <label className='text-blue-400 text-md' htmlFor="berat_badan">
              <span>Berat Badan</span>
            </label>
            {console.log(form.weight)}
            <input
              onChange={handleChange}
              value= {form.weight}
              className='px-4 py-5 outline-none rounded-md bg-slate-200 w-full [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none' type="number" name="weight" id="weight" placeholder='masukkan berat badan (kg)' min={0} max={200} />
          </div>
          <div className='w-full'>
            <label className='text-blue-400 text-md' htmlFor="tinggi_badan">
              <span>Tinggi Badan</span>
            </label>
            <input 
              onChange={handleChange}
              value= {form.height}
              className='px-4 py-5 outline-none rounded-md bg-slate-200 w-full [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none' type="number" name="height" id="height" placeholder='masukkan tinggi badan (cm)' min={0} max={200}/>
          </div>
          <button onClick={handleSubmit} className='bg-blue-400 text-white font-md font-bold px-4 py-5 rounded-md w-full'>Hitung</button>
        </form>
      </div>

      <div id="dialog" className='absolute mx-auto  p-12 w-full h-full hidden flex-col items-center justify-center'>
        <div className='h-3/4 w-1/2 relative bg-white drop-shadow-lg rounded-lg text-xl p-12'>
          <p onClick={() => handleDialog('close')} className='absolute right-4 top-4 px-3.5 py-2 inline-block rounded-full text-base text-blue-200 font-bold cursor-pointer'>X</p>
          <h1 className='text-4xl text-center mb-12 font-bold text-blue-400'>Hasil Perhitungan</h1>
          <h1>Berat Badan : <span className='font-bold'>{result.berat}</span> </h1>
          <h1>Tinggi Badan : <span className='font-bold'>{result.tinggi}</span></h1>
          <h1>BMI : <span className='font-bold'>{result.BMI}</span></h1>
        </div>
      </div>
      
    </div>
  )
}

export default App
