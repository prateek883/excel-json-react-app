import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.EmployeeId}</th>
            <th>{individualExcelData.Designation}</th>
            <th>{individualExcelData.LastName}</th>
            <th>{individualExcelData.Department}</th>
            <th>{individualExcelData.Name}</th>
            <th>{individualExcelData.ManagerEmployeeId}</th>
        </>
    )
}
