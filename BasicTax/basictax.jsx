import React, { useState } from 'react';
import '../src/styles/basicTax.css'

function TaxNotesPage() {
  const [notes, setNotes] = useState("");
  const [income, setIncome] = useState("");
  const [taxRate, setTaxRate] = useState("");
  const [taxAmount, setTaxAmount] = useState(null);

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleIncomeChange = (event) => {
    setIncome(event.target.value);
  };

  const handleTaxRateChange = (event) => {
    setTaxRate(event.target.value);
  };

  const calculateTax = (event) => {
    event.preventDefault();
    if (!income || !taxRate) return;
    const calculatedTax = (income * taxRate) / 100;
    setTaxAmount(calculatedTax);
  };

  return (
    <div className="container">
      <div className="taxCalculation">
        <h2>Tax Calculation</h2>
        <form onSubmit={calculateTax}>
          <div className="leftLabels">
            <div>
              <label for="fname">Income:</label><br></br>
              <input type="numeric" min="0.00" step="0.01" />
            </div>
            <div>
            <label for="fname">Adjustment:</label><br></br>
            <input type="numeric" min="0.00" step="0.01" />
            </div>
            <div>
              <label for="fname">Adj. Gross Income:</label><br></br>
              <input type="numeric" min="0.00" step="0.01" />
            </div>
            <div>
              <label for="fname">Deduction:</label><br></br>
              <input type="numeric" min="0.00" step="0.01" />
            </div>
            <div>
              <label for="fname">Taxable Income:</label><br></br>
              <input type="numeric" min="0.00" step="0.01" />
            </div>
            <div>
              <label for="fname">Federal Taxes:</label><br></br>
              <input type="numeric" min="0.00" step="0.01" />
            </div>
            <div>
              <label for="fname">Tax Payment:</label><br></br>
              <input type="numeric" min="0.00" step="0.01" />
            </div>
            <div>
              <label for="fname">Net Tax/Refund:</label><br></br>
              <input type="numeric" min="0.00" step="0.01" />
            </div>
            <div>
              <label for="fname">Penalty & Interest:</label><br></br>
              <input type="numeric" min="0.00" step="0.01" />
            </div>
          </div>

          <div className="rightLabels">
            <div>
              <label for="fname">Federal Income:</label><br></br>
              <input type="numeric" min="0.00" step="0.01" />
            </div>
            <div>
            <label for="fname">State Adjustment:</label><br></br>
            <input type="numeric" min="0.00" step="0.01" />
            </div>
            <div>
              <label for="fname">State Deduction:</label><br></br>
              <input type="numeric" min="0.00" step="0.01" />
            </div>
            <div>
              <label for="fname">State Adj. Income:</label><br></br>
              <input type="numeric" min="0.00" step="0.01" />
            </div>
            <div>
              <label for="fname">State Tax:</label><br></br>
              <input type="numeric" min="0.00" step="0.01" />
            </div>
            <div>
              <label for="fname">Exemption:</label><br></br>
              <input type="numeric" min="0.00" step="0.01" />
            </div>
            <div>
              <label for="fname">State Tax Payment:</label><br></br>
              <input type="numeric" min="0.00" step="0.01" />
            </div>
            <div>
              <label for="fname">Net Tax/Refund:</label><br></br>
              <input type="numeric" min="0.00" step="0.01" />
            </div>
            <div>
              <label for="fname">Penalty & Interest:</label><br></br>
              <input type="numeric" min="0.00" step="0.01" />
            </div>
          </div>
          {/* <button type="submit">Calculate</button> */}
        </form>
        {taxAmount !== null && <p>Tax Amount: {taxAmount}</p>}
      </div>
      <div className="notesInput">
        <h2>Notes</h2>
        <textarea placeholder="Enter your notes here" value={notes} onChange={handleNotesChange}></textarea>
        {/* <button onClick={() => alert("Note saved!")}>Save Note</button> */}
      </div>
    </div>
  );
}

export default TaxNotesPage;






// import { useState } from "react";
// import getTaxAmount from "./getTaxAmount";

// const BasicTax = () => {

//   const [income, setIncome] = useState('')
//   const [adjustment, setAdjustment] = useState('')
//   const [status, setStatus] = useState('Single')
//   const [tax, setTax] = useState('')
//   const [taxIncome, setTaxIncome] = useState('')
//   const [netIncome, setNetIncome] = useState('')
//   const [ded, setDed] = useState('')
 

//   const deduction = {
//     Single: 13850,
//     MFS: 13850,
//     MFJ: 27700,
//     QW: 27700,
//     HOH: 20800
//   }
  

//   const onClickEvent = async() => {
//     var tax = await getTaxAmount(income-adjustment,status)
//     setTax(tax);
//     // setTaxIncome(income-adjustment)
//     console.log(tax)
//   }

  

//   return (
//     <>
//       <div className="form-row">
//       <label htmlFor="gIncome"> Gross Income</label>
//         <input type="number" id="gIncome" name="gIncome" value={income} onChange = {e => setIncome(e.target.value)}/>
//         <br></br>
//         <label htmlFor="adj"> Adjustments </label>
//         <input type="number" id="adj" name="adj" value={adjustment} onChange = {e => setAdjustment(e.target.value)}/>
//         <br></br>
//         <label htmlFor="agi">AGI</label>
//         <input type="number" id="agi" name="agi" value={income-adjustment}/>
//         <br></br>
//         <select name="fStatus" value={status} onChange= {e => setStatus(e.target.value)}>
//           <option value="Single">Single</option>
//           <option value="MFJ">MFJ</option>
//           <option value="MFS">MFS</option>
//           <option value="HOH">HOH</option>
//           <option value="QW">QW</option>
//         </select>
//         <br></br>
//         <label htmlFor="ti">Taxable Income</label>
//         <input type="number" id="ti" name="ti" value={income-adjustment-deduction[status]} />
//         <br></br>
//         <button type="button" className="btn btn-primary" onClick={onClickEvent}>Submit</button>
//         <br></br>
//         <label htmlFor="Tax">Tax Owed</label>
//         <input type="number" id="tax" name="tax" value={tax}/>
//       </div>    
//     </>
//   );

// }

// export default BasicTax;