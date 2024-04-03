import { useState, useMemo, useEffect, } from "react";


export const FormTable = ({ columnsConfig, onSumDataChange, }) => {
    

    const initialFormData = useMemo(() => {
        return columnsConfig.reduce(
        (acc, config) => {
            acc[config.column] = config.defaultValue || ''; // Use defaultValue
            return acc;
        },
        {}
    );
    }, [columnsConfig]);

    const [formData, setFormData] = useState(initialFormData);
    const [dataTable, setDataTable] = useState(() => {
        const localValue = localStorage.getItem("dataTable")
        if (localValue == null) return []
        return JSON.parse(localValue)

    });


    const handleChange = (columnName, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [columnName]: value,
        }));
    };

    const handleSubmit = (e) => { 
        e.preventDefault();
        
        setDataTable((prevDataTable) => 
             [
                ...prevDataTable, formData
            ]);
        
        setFormData(initialFormData);

    }

    const handleDelete = (index) => {
        const updatedDataTable = [...dataTable];

        updatedDataTable.splice(index,1);

        setDataTable(updatedDataTable);

        
    }

    const sumTable = useMemo(() => {
        const numericColumns = columnsConfig
        .filter((config) => config.type ==='input' && config.inputType ==='number')
        .map((config) => config.column);
        
        const sumData = numericColumns.reduce((acc, column) => {
            acc[column] = dataTable.reduce((sum, row) => sum + parseFloat(row[column] || 0), 0);
            return acc;
        }, {});

        return sumData;
    }, [columnsConfig, dataTable]);

    

    useEffect(() => {
        onSumDataChange(sumTable);
    }, [sumTable, onSumDataChange]);

    

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <table>
                <thead>
                    <tr>
                        {columnsConfig?.map((config, index) => (
                        <th key={config.column}>{config.column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {columnsConfig?.map((config, index) => (
                            <td key={index}>
                                {config.type === 'select' ? (
                                    <select
                                    value={formData[config.column] || ''}
                                    onChange={(e) => handleChange(config.column,e.target.value)}>
                                        {config.options.map((option, optionIndex) => (
                                            <option key={optionIndex} value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                    type={config.inputType}
                                    value={formData[config.column] || ''}
                                    onChange={(e) => handleChange(config.column, e.target.value)}
                                    />

                                )}
                                
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
            
        {/* Display the data table */}
        {dataTable.length > 0 && (
            <div>
            <table>
                <thead>
                <tr>
                    {columnsConfig?.map((config,index) => (
                    <th key={index}>{config.column}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {dataTable.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                    {columnsConfig?.map((config,columnIndex) => (
                        <td key={columnIndex}>{row[config.column]}</td>
                    ))}
                    <td>
                        <button onClick={() => handleDelete(rowIndex)}>Delete</button>
                    </td>
                    </tr>
                    
                ))}
                    
                <tr>
                    {columnsConfig.map((config, index) => (
                        <td key={index}>{sumTable[config.column]}</td>
                    ))}
                </tr>
                </tbody>
            </table>
            </div>
        )}

        {/* Display the sum table */}
        {Object.keys(sumTable).length > 0 && (
            <div>
                <table>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        )}
        <button type="submit">Add</button>
        </form>

        </div>)
    

}