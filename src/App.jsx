
import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'



function App() {

 
  const [interest, setInterest] = useState(0)
   const [principal, setPrincipal] = useState("")
  const [rate, setRate] = useState("")
  const [year, setYear] = useState("")
  const [invalidPrincipal, setInvalidPrincipal] = useState(false)
  const [invalidRate, setInvalidRate] = useState(false)
  const [invalidYear, setInvalidYear] = useState(false)

  const handleReset = ()=>{
    setInterest(0)
    setPrincipal("")
    setRate("")
    setYear("")
    setInvalidPrincipal(false)
    setInvalidRate(false)
    setInvalidYear(false)
  }

  const validateInputs = (tag) => {
   
    const { name, value } = tag
    if (name == 'principal') {
      setPrincipal(value)
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        
        setInvalidPrincipal(false)
      }
      else {
        setInvalidPrincipal(true)
      }
    }
    else if(name == 'rate'){
      setRate(value)
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        
        setInvalidRate(false)
      }
      else {
        setInvalidRate(true)
      }
    }
    else {
      setYear(value)
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        
       setInvalidYear(false)
      }
      else {
        setInvalidYear(true)
      }
    }
     

  }
  const handleCalculate =(e) =>{
    e.preventDefault()
    if(principal && year && rate){
      setInterest(principal*rate*year/100)
    }
    else{
      alert('Fill the form completely')
    }
  }


  return (
    <>
      <div className='min-h-screen flex justify-center items-center bg-mauve-800'>
        <div className='bg-white p-7 rounded-xl w-lg '>
          <h1 className='font-bold text-4xl text-center'>Simple Interest Calculator</h1>
          <p className='text-center'>Calculate your simple interest easily!</p>
          <div className='bg-amber-300 text-center rounded-lg text-white font-medium p-5 my-2'>
            <h1 className='text-3xl'>₹{interest}</h1>
            <h2>Total Simple Interest</h2>
          </div>
          <form>
            <div className='mb-3'>
              {/* Principle Amount */}
              <Input value={principal} placeholder="Principle Amount" onChange={e => validateInputs(e.target)} name='principle' />
            </div>
            {/* Invlaid alert */}
            {invalidPrincipal && <div className='mb-3 text-red-600'>Invalid Principal Amount</div>}
            <div className='mb-3'>
              
              {/* Rate */}
              <Input value={rate} placeholder="Rate" name='rate' onChange={e => validateInputs(e.target)} />
            </div>
            {/* Invlaid alert */}
            {invalidRate && <div className='mb-3 text-red-600'>Invalid Rate</div>}
            <div className='mb-3'>

              {/* Year */}
              <Input value={year} placeholder="Year" name='year' onChange={e => validateInputs(e.target)} />
              {/* Invlaid alert */}
            {invalidYear && <div className='mb-3 text-red-600'>Invalid year</div>}
            </div>
            <div className='flex justify-between'>
              <Button type='submit' onClick={handleCalculate} disabled ={invalidPrincipal || invalidRate || invalidYear}>CALCULATE</Button>
              <Button type='button' onClick={handleReset} variant="outline">RESET</Button>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default App
