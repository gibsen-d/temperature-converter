
import './App.css';
import {useState} from "react";

function App() {

  const [n,setNum]=useState("")
  const [fUnit,setFUnit]= useState("")
  const [tUnit,setTUnit]= useState("")

  const handleInputChange=(e)=>setNum(e.target.value);
  const handleFUnitChange=(e)=>setFUnit(e.target.value);
  const handleTUnitChange=(e)=>setTUnit(e.target.value);
 
  const getValue=(e)=>{
        e.preventDefault()
        let num
        let ans=0;
        if(n==="")
        {
          num="";
        }
        else{
        num=Number(n);


        // °F = °C × (9/5) + 32.
        // Kelvin = Celsius + 273.15.
        // K = (F − 32) × 5 ⁄ 9 + 273.15.
        // F = (K − 273.15) × 1.8 + 32
        if(tUnit==="Celsius")
        {
          if(fUnit==="Fahrenheit")
          {
              ans=(num - 32) * 5 / 9;
          }
          if(fUnit==="Kelvin")
          {
              ans=num - 273.15;
          }
        }
        else if(tUnit==="Fahrenheit")
        {
          if(fUnit==="Celsius")
          {
              ans=num * (9/5) + 32;
          }
          if(fUnit==="Kelvin")
          {
              ans=(num - 273.15) * 1.8 + 32;
          }
        }
        else if(tUnit==="Kelvin")
        {
          if(fUnit==="Fahrenheit")
          {
              ans=(num - 32) * 5 / 9 + 273.15;
          }
          if(fUnit==="Celsius")
          {
              ans=num + 273.15;
          }
        }
        }

        if(num==="")
        {
          document.getElementById("output").innerHTML = `<div class="error"> Error Invalid entry</div>`
        }
        else if(fUnit===""||tUnit==="")
        {
            document.getElementById("output").innerHTML = `<div class="error"> Enter the units</div>`
        }
        else if(fUnit===tUnit)
        {
          document.getElementById("output").innerHTML = `<div class="error"> From Unit and To Unit are same</div>`
        }
        else
        {
        document.getElementById("output").innerHTML = `<div class="success"> ${num} ${fUnit} is ${ans} ${tUnit}</div>`
        }
  }
  return (
    <div className="App">
           <div className="container">
                <h2>Temperature Converter</h2>
                <h4>Enter the temperature, select units and Submit</h4>
                <div>
                <form action="" className="temperature-fields">
                  <div>
                  <label htmlFor="input-value" className="input-label">Value:</label>
                  <input type="number" id="input-value" name="input-value" 
                   placeholder='Enter the value' onChange={handleInputChange} value={n}  className="input-field"/>
                  </div>
                  <div>
                  <label htmlFor="from" className="input-label">From:</label>
                  <select id="from" name="from" className="input-field" value={fUnit}  onChange={handleFUnitChange}>
                  <option defaultValue="DEFAULT" hidden>Please select your from Unit</option>
                  <option value="Fahrenheit">Fahrenheit</option>
                  <option value="Celsius">Celsius</option>
                  <option value="Kelvin">Kelvin</option>
                  </select>
                  </div>
                  <div>
                  <label htmlFor="to" className="input-label">To:</label>
                  <select id="to" name="to" className="input-field" value={tUnit}  onChange={handleTUnitChange}>
                  <option defaultValue="DEFAULT" hidden>Please select your to Unit</option>
                  <option value="Fahrenheit">Fahrenheit</option>
                  <option value="Celsius">Celsius</option>
                  <option value="Kelvin">Kelvin</option>
                  </select>
                  </div>
                  <div>
                  <button onClick={getValue} className="submit-button ">Submit</button>
                  </div>
                  <div id="output"></div>
                </form>
                </div>
           </div>
    </div>
  );
}

export default App;


