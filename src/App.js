import './App.css';
import {useState} from 'react'

function App() {
  const [principalAmount,setPrincipalAmount] = useState(0);
  const [interest,setInterest] = useState(0);
  const [timeperiod,setTimeperiod] = useState(0);
  const [Add,setAdd] = useState("");

  const calSum = (e) => {
    e.preventDefault()
    if(principalAmount===0 || interest===0 || timeperiod===0)
      {
        alert("please enter input")
      }
      else
      {
        let Add = parseInt(principalAmount)*parseInt(interest)*parseInt(timeperiod)/100;
        setAdd(parseInt(Add))
      } 
  }

  const handleClick = (e) => {
    setAdd(0);
    window.location.reload();
  }

  return (
    <>
    <div className="app">
      
      <div className='container'>
        <div className='heading_text'>
          <h1 className='heading_one'>Simple Calculator</h1>
          <p className='heading_two'>Calculate your simple interest Easily</p>
        </div>
        <div className='total_amount_card'>
          <div className='card_text '>
          <h3 className='total_amount_heading'>INR {Add}</h3>
          <p className='total_amount_para'>Total simple interest</p>
          </div>
        </div>
        <form onSubmit={calSum}>
        <div className='input_area'>
            <div className='input_field'>
            <input type="number" placeholder="INR Principal amount" value={principalAmount || ""} onChange={(e) => setPrincipalAmount(e.target.value)} id="outlined-basic"></input>  
            </div>
            <div className='input_field'>
            <input type="number" placeholder="Rate of interest (p.a) %" value={interest || ""} onChange={(e) => setInterest(e.target.value)} id="outlined-basic"></input>
            </div>
            <div className='input_field'>
            <input type="number" placeholder="Time period ( Yr )" value={timeperiod || ""} onChange={(e) => setTimeperiod(e.target.value)} id="outlined-basic"></input>
            </div>
        </div>
        <div className='button_collection'>
          <button type='submit' className='btn_one' >Calculate </button>
          <button type='submit' className='btn_two' onClick={handleClick}>Reset </button>
        </div>
        </form>

      </div>      
    </div>
    </>
  );
}

export default App;