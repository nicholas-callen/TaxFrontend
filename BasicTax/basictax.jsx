import { useState } from "react";
import getTaxAmount from "./getTaxAmount";

const BasicTax = () => {

  const [income, setIncome] = useState('')
  const [adjustment, setAdjustment] = useState('')
  const [status, setStatus] = useState('Single')
  const [tax, setTax] = useState('')
  const [taxIncome, setTaxIncome] = useState('')
  const [netIncome, setNetIncome] = useState('')
  const [ded, setDed] = useState('')
 

  const deduction = {
    Single: 13850,
    MFS: 13850,
    MFJ: 27700,
    QW: 27700,
    HOH: 20800
  }
  

  const onClickEvent = async() => {
    var tax = await getTaxAmount(income-adjustment,status)
    setTax(tax);
    // setTaxIncome(income-adjustment)
    console.log(tax)
  }

  

  return (
    <>
      <div className="form-row">
      <label htmlFor="gIncome"> Gross Income</label>
        <input type="number" id="gIncome" name="gIncome" value={income} onChange = {e => setIncome(e.target.value)}/>
        <br></br>
        <label htmlFor="adj"> Adjustments </label>
        <input type="number" id="adj" name="adj" value={adjustment} onChange = {e => setAdjustment(e.target.value)}/>
        <br></br>
        <label htmlFor="agi">AGI</label>
        <input type="number" id="agi" name="agi" value={income-adjustment}/>
        <br></br>
        <select name="fStatus" value={status} onChange= {e => setStatus(e.target.value)}>
          <option value="Single">Single</option>
          <option value="MFJ">MFJ</option>
          <option value="MFS">MFS</option>
          <option value="HOH">HOH</option>
          <option value="QW">QW</option>
        </select>
        <br></br>
        <label htmlFor="ti">Taxable Income</label>
        <input type="number" id="ti" name="ti" value={income-adjustment-deduction[status]} />
        <br></br>
        <button type="button" className="btn btn-primary" onClick={onClickEvent}>Submit</button>
        <br></br>
        <label htmlFor="Tax">Tax Owed</label>
        <input type="number" id="tax" name="tax" value={tax}/>
      </div>    
    </>
  );

}

export default BasicTax;