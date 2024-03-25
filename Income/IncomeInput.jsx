import React, { useState , useCallback } from "react";
import { FormTable } from "../Components/FormTable";
import isEqual from "lodash.isequal";

export default function IncomeInput(){

const [sumData, setSumData] = useState({})

    const columnsConfig = [
        { column: 'Description', type: 'input', inputType: 'text'},
        { column: 'Amount', type: 'input', inputType:'number'},
        { column: 'Tagging', 
          type: 'select',
          defaultValue: 'w-2',
        options: [
            { value: 'W-2', label: 'w-2'},
            { value: '1099', label: '1099'},
            { value: 'Scholarship', label: 'Scholarship'},
        ]},
    ];

    const handleSumDataChange = useCallback((newSumData) => {
        if (!isEqual(sumData, newSumData)) {
            setSumData(newSumData);
        }
    }, [sumData, setSumData])
    
    return (
        <div>
            <FormTable columnsConfig={columnsConfig} onSumDataChange={handleSumDataChange} />

            {Object.keys(sumData).length >0 && (
                <div>
                    <p>Amount: {sumData['Amount']}</p>
                </div>
            )}
        </div>
    );
};