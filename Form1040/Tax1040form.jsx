import React, {useEffect, useState} from 'react'
import { useChecked } from '../Components/useChecked';
import axios from 'axios';

export default function Tax1040form() {
    const [FilingStatus, setFilingStatus] = useState('');
    
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [SSN, setSSN] = useState('');
    
    const [HomeAddress, setHomeAddress]= useState('');
    const [AptNo, setAptNo]= useState('');

    const [City, setCity] = useState('');
    const [State, setState] = useState('');
    const [ZipCode, setZipCode] = useState('');

    const [DigitalAsset, setDigitalAsset] = useState('');

    const [Dependents, setDependents] = useState(() => {
        const localValue = localStorage.getItem("ITEMS")
        if (localValue == null) return []
        return JSON.parse(localValue)

    });
    const [Dependent, setDependent] = useState([]);

    const [SpouseFirst, setSpouseFirst] = useState('')
    const [SpouseLast, setSpouseLast] = useState('')
    const [SpouseSSN, setSpouseSSN] = useState('')

    /* Variable used for dependents*/
    const [DependentFName, setDependentFName] = useState('');
    const [DependentLName, setDependentLName] = useState('');
    const [DependentSSN, setDependentSSN] = useState('');
    const [DependentRelationship, setDependentRelationship] = useState('');
    
    
    /* store dependents */
    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(Dependents))
    }, [Dependents])

    /* Handler for Standard Deduction */
    const { status: CheckedClaimAsDep , checkedStatus : handleClaimAsDep} = useChecked();
    const { status: CheckedSpouseClaimAsDep , checkedStatus : handleSpouseClaimAsDep} = useChecked();
    const { status: CheckedSpouseItem , checkedStatus : handleSpouseItem} = useChecked();
   
    /* Handler for Age/Blindness */
    const { status: CheckedOver65 , checkedStatus : handleChangeOver65} = useChecked();
    const { status: CheckedBlind , checkedStatus : handleChangeBlind} = useChecked();
    

    /* Variable & Handler for Child Tax Credit/ Credit for other Dependent*/
    const { status: ChildTaxCredit , checkedStatus : handleChildTaxCredit} = useChecked();
    const { status: OtherDepCredit , checkedStatus : handleOtherDepCredit} = useChecked();

    /* Variable & Handler for Spouse Age/Blind */
    const { status: SpouseOver65 , checkedStatus : handleChangeSpouseOver65} = useChecked();
    const { status: SpouseBlind , checkedStatus : handleChangeSpouseBlind} = useChecked();

 
    




function handleAdd(e) { 
        e.preventDefault();
        const newDependent = {
            DependentFName: DependentFName,
            DependentLName: DependentLName,
            DependentSSN: DependentSSN,
            DependentRelationship: DependentRelationship,
            ChildTaxCredit: ChildTaxCredit,
            OtherDepCredit: OtherDepCredit,
        };
        const setNewDependent = [...Dependents, newDependent];
        setDependents(setNewDependent);
    }
 console.log(Dependents)



const handleDelete = (firstName, lastName) =>{
        const newDependent = Dependents.filter((dependent)=>{
            if(firstName === dependent.DependentFName && lastName === dependent.DependentLName){
                return false;
            }
            return true;
        });
        setDependents(newDependent);

    }

    const handleSubmit = () =>{
        const finalForm = {
            FilingStatus: FilingStatus,
            FirstName: FirstName,
            LastName: LastName,
            SSN: SSN,
            SpouseFirst: SpouseFirst,
            SpouseLast: SpouseLast,
            SpouseSSN: SpouseSSN,
            HomeAddress: HomeAddress,
            AptNo: AptNo,
            City: City,
            State: State,
            ZipCode: ZipCode,
            DigitalAsset: DigitalAsset,
            CheckedClaimAsDep: CheckedClaimAsDep,
            CheckedSpouseClaimAsDep: CheckedSpouseClaimAsDep,
            CheckedSpouseItem: CheckedSpouseItem,
            CheckedOver65: CheckedOver65,
            CheckedBlind: CheckedBlind,
            SpouseBlind: SpouseBlind,
            SpouseOver65: SpouseBlind,
            Dependents: Dependents
        };
        
        axios.post("http://localhost:8080/1040",finalForm).then((res)=>{
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })

    }

    function Spouse() {
        return (
            <tr>
                <td>Spouse First name</td>
                <input type='text' onChange={(e) => setSpouseFirst(e.target.value)} required></input>
                <td>Spouse Last name</td>
                <input type='text' onChange={(e) => setSpouseLast(e.target.value)} required></input>
                <td>Spouse SSN</td>
                <input type='text' onChange={(e) => setSpouseSSN(e.target.value)} required></input>
            </tr>
        )
    }

    function SpouseAgeBlind() {
        return (
            <>
                <input type='checkbox' onChange={handleChangeSpouseOver65} id='SpouseOver65'></input>
                <label htmlFor='Spouseover65'>Spouse Born before 01/02/1959</label>
                <input type='checkbox' onChange={handleChangeSpouseBlind} id='Spouseblind'></input>
                <label htmlFor='Spouseblind'>Spouse blind</label>
            </>
            
    )
    }
    
    

    return (
        <div className='container'>
            <form>
                <table>
                    <tr>
                        <td>First name</td>
                        <input type='text' onChange={(e) => setFirstName(e.target.value)} required></input>
                        <td>Last name</td>
                        <input type='text' onChange={(e) => setLastName(e.target.value)} required></input>
                        <td>SSN</td>
                        <input type='text' onChange={(e) => setSSN(e.target.value)} required></input>
                    </tr>
                    {FilingStatus === "MFJ" && <Spouse />}
                    <tr>
                        <td>Home address</td>
                        <input type='text' onChange={(e) => setHomeAddress(e.target.value)} required></input>
                        <td>Apt no</td>
                        <input type='text' onChange={(e) => setAptNo(e.target.value)}></input>
                    </tr>

                    <tr>
                        <td>City</td>
                        <input type='text' onChange={(e) => setCity(e.target.value)} required></input>
                        <td>State</td>
                        <input type='text' onChange={(e) => setState(e.target.value)}></input>
                        <td>Zip code</td>
                        <input type='text' onChange={(e) => setZipCode(e.target.value)}></input>
                    </tr>
                    <tr>
                        <td>Filing Status</td>
                        <td>
                            <select onChange={(e) => setFilingStatus(e.target.value)}>
                                <option value='Single'>Single</option>
                                <option value='MFJ'>MFJ</option>
                                <option value='MFS'>MFS</option>
                                <option value='HOH'>HOH</option>
                                <option value='QW'>QW</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Digital Asset</td>
                        <select onChange={(e) => setDigitalAsset(e.target.value)}>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                    </tr>
                </table>
                <tr>
                        <td>Standard deduction</td>
                        <input type='checkbox' onChange={handleClaimAsDep} id='ClaimAsDep'></input>
                        <label htmlFor='ClaimAsDep'>You as a dependent</label>
                        <input type='checkbox' onChange={handleSpouseClaimAsDep} id='SpouseClaimAsDep'></input>
                        <label htmlFor='SpouseClaimAsDep'>Your spouse as a dependent</label>
                        <input type='checkbox' onChange={handleSpouseItem} id='SpouseItem'></input>
                        <label htmlFor='SpouseItem'>Spouse itemizes on a separate return or you were a dual-status alien</label>
                    </tr>
                    <tr>
                        <td>Age/Blindness</td>
                        <input type='checkbox' onChange={handleChangeOver65} id='over65'></input>
                        <label htmlFor='over65'>Born before 01/02/1959</label>
                        <input type='checkbox' onChange={handleChangeBlind} id='blind'></input>
                        <label htmlFor='blind'>blind</label>
                        {FilingStatus === "MFJ" && <SpouseAgeBlind />}
                    </tr>
            </form>

            <div>
                <h1>Dependents</h1>
                <form id = 'dependentForm' onSubmit={handleAdd}>
                    <input type='text' placeholder='First Name' onChange={(e) => setDependentFName(e.target.value)}/>
                    <input type='text' placeholder='Last Name' onChange={(e) => setDependentLName(e.target.value)}/>
                    <input type='text' placeholder='SSN' onChange={(e) => setDependentSSN(e.target.value)}/>
                    <input type='text' placeholder='Relationship to you' onChange={(e) => setDependentRelationship(e.target.value)}/>
                    <input type='checkbox' onChange={handleChildTaxCredit} id="ChildTaxCredit"></input>
                    <label htmlFor='ChildTaxCredit'>Child Tax Credit</label>
                    <input type='checkbox' onChange={handleOtherDepCredit} id="OtherDepCredit"></input>
                    <label htmlFor='OtherDepCredit'>Credit for other dependents</label>
                    <button>Add</button>
                    {console.log(ChildTaxCredit)}
                </form>
                
                
                <table>
                    <thead>
                        <tr>
                            <td>First name</td>
                            <td>Last name</td>
                            <td>SSN</td>
                            <td>Relation</td>
                            <td>Child Tax Credit</td>
                            <td>Credit for other dependent</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Dependents.map((dependent, rowIndex) => (
                                <tr key={rowIndex}> 
                                    {Object.entries(dependent).slice(0,4).map(([key, value], columnIndex) => (
                                        <td key={`${rowIndex}-${columnIndex}`}>{value}</td>
                                    ))}
                                    <td><input type="checkbox" checked={dependent.ChildTaxCredit}/></td>
                                    <input type="checkbox" checked={dependent.OtherDepCredit}/>
                                    
                                    
                                <td>
                                    <button onClick={()=> handleDelete(dependent.DependentFName,dependent.DependentLName)}>Delete</button>
                                </td>   
                                    
                                </tr>
                               ))
                               
                        }
                    </tbody>
                    
                </table>
                
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
  )
}