import React, { useState } from 'react'
import './RiskReference.css'
import data from "../../Data/risk.json"




const RiskReference = () => {
    const [risks, setRisks] = useState(data)
    return (
        <div className="riskContainer">
            <table>
                <thead>
                    <tr>
                        <th>Risk Level</th>
                        <th>Risk Description</th>
                        <th>Common Causes</th>
                    </tr>
                </thead>
                <tbody>
                    {risks.map((risk) => (
                        <tr key={risk.id}>
                            <td>
                                {risk.riskLevel}
                            </td>
                            <td>
                                {risk.riskDescription}
                            </td>
                            <td  >
                                {risk.commonCauses.map((cause)=>(
                                   <p key={cause.id} >{cause.cause}</p>
                                ))}
                            </td>
                        </tr>
                    )

                    )}
                </tbody>
            </table>
        </div>
    )
}

export default RiskReference


