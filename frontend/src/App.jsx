/* eslint-disable no-unused-vars */
import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [form, setForm] = useState({
    weight: '',
    height: ''
  })
  const [result, setResult] = useState({
    berat: 0,
    tinggi: 0,
    BMI: 0
  })

  const handleSubmit = (e) => {
    axios.post('http://localhost:5000', {
        weight: form.weight,
        height: form.height
    })
    .then((response) => {
      setResult(({
        berat: response.data.berat,
        tinggi: response.data.tinggi,
        BMI: response.data.BMI,
      }))
    })
    .catch((error) => {
      if(error.response){
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
      }
    })

    setForm(({
      weight: '',
      height: ''
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
            <label className='text-blue-500 text-md' htmlFor="berat_badan">
              <span>Berat Badan</span>
            </label>
            <input
              onChange={handleChange}
              value= {form.weight}
              className='px-4 py-5 outline-none rounded-md bg-slate-300 w-full [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none' type="number" name="weight" id="weight" placeholder='masukkan berat badan (kg)' min={0} max={200} />
          </div>
          <div className='w-full'>
            <label className='text-blue-500 text-md' htmlFor="tinggi_badan">
              <span>Tinggi Badan</span>
            </label>
            <input 
              onChange={handleChange}
              value= {form.height}
              className='px-4 py-5 outline-none rounded-md bg-slate-300 w-full [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none' type="number" name="height" id="height" placeholder='masukkan tinggi badan (cm)' min={0} max={200}/>
          </div>
          <button onClick={(e)=> handleSubmit(e)} className='bg-blue-400 text-white font-md font-bold px-4 py-5 rounded-md w-full'>Hitung</button>
        </form>
      </div>

      <div id="dialog" className='absolute mx-auto  p-12 w-full h-full hidden flex-col items-center justify-center'>
        <div className='h-3/4 w-1/2 relative bg-white drop-shadow-2xl rounded-lg text-xl p-12 self-center'>

          <p onClick={() => handleDialog('close')} className='absolute right-4 top-4 px-3.5 py-2 inline-block rounded-full text-base text-blue-400 font-bold cursor-pointer'>X</p>
          <h1 className='text-3xl text-center mb-16 font-bold text-blue-400 italic'>Hasil Perhitungan</h1>
          <div className='flex justify-center gap-12'>
            <h1 className='text-base'>Berat Badan : <span className='font-bold block text-4xl'>{result.berat}<span className='text-base'>kg</span></span></h1>
            <h1 className='text-base'>Tinggi Badan : <span className='font-bold block text-4xl'>{result.tinggi}<span className='text-base'>cm</span></span></h1>
            <h1 className='text-base'>BMI : <span className='font-bold text-blue-400 block text-4xl'>{result.BMI}</span></h1>
          </div>
          <div className='w-full mt-12'>
            <div className='flex justify-center items-end tex-center'>
              <div className='w-1/5 text-center'>
                <span className='text-sm'>Kurus Berat</span>
                <div className='bg-blue-200 font-bold italic text-base'>&#60;17</div>
              </div>
              <div className='w-1/5 text-center'>
                <span className='text-sm'>Kurus Ringan</span>
                <div className='bg-blue-300 font-bold italic text-base'>17-18.5</div>
              </div>
              <div className='w-1/5 text-center'>
                <span className='text-sm'>Normal</span>
                <div className='bg-blue-400 font-bold italic text-base'>18.5-24</div>
              </div>
              <div className='w-1/5 text-center'>
                <span className='text-sm'>Gemuk Ringan</span>
                <div className='bg-blue-500 font-bold italic text-base'>24-27</div>
              </div>
              <div className='w-1/5 text-center'>
                <span className='text-sm'>Gemuk Berat</span>
                <div className='bg-blue-600 font-bold italic text-base'>&#62;27</div>
              </div>
            </div>
            {/* <div className='flex flex-col items-center w-4'>
              <div>v</div>
              <span className='font-bold text-base'>Hasil</span>
            </div> */}
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default App
