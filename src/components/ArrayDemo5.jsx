import React from 'react'

const ArrayDemo5 = () => {
    var cityName = [
        {
            id: 1,
            City: "Ahmedabad",
            Population: 7692000,
            AQI: 121
        },
        {
            id: 2,
            City: "Surat",
            Population: 6940000,
            AQI: 119
        },
        {
            id: 3,
            City: "Rajkot",
            Population: 2000000,
            AQI: 146
        },
        {
            id: 4,
            City: "Mumbai",
            Population: 21000000,
            AQI: 154

        },
        {
            id: 5,
            City: "Delhi",
            Population: 33800000,
            AQI: 123
        }
    ]

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>City Report</h1>
            <table class="table table-hover table-dark">    
        <thead>
            <tr>
               <th>ID</th>
                <th>City</th>
                <th>Population</th>
                <th>AQI</th>
            </tr>
        </thead>
        <tbody>
            {
                cityName.map((city)=>{
                        return <tr>
                            <td>{city.id}</td>
                            <td>{city.City}</td>
                            <td style={{color: city.Population > 7500000 ? 'red' : 'white'}}>{city.Population}</td>
                            <td><span style={{color: city.AQI > 140 ? 'red' : 'green'}}>{city.AQI}</span></td>
                        </tr>

                })
            }
        </tbody>


            </table>

        </div>
    )
}

export default ArrayDemo5
