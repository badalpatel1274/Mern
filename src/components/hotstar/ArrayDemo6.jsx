import React from 'react'

const ArrayDemo6 = () => {

var Sales = [
  {
    id :1,
    day: "Monday",
    sales : "Electronic Sales",
    discount: 70,
    profit : 2000
  },
  {
    id :2,
    day: "Tuesday",
    sales : "Clothing Sales",
    discount: 10,
    profit : 1000
  },
  {
    id :3,
    day: "Wednesday",
    sales : "Home Appliances Sales",
    discount: 60,
    profit : 1500
  },
  {
    id :4,
    day: "Thursday",
    sales : "Grocery Sales",
    discount: 5,
    profit : 500
  },
  {
    id :5,
    day: "Friday",
    sales : "Books Sales",
    discount: 12,
    profit : 1200
  }
]

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Sales Data</h1>
    <table className='table table-hover table-dark'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Day</th>
          <th>Sales</th>
          <th>Discount (%)</th>
          <th>Profit</th>
        </tr>
      </thead>
<tbody>
  {
    Sales.map((sale) => {
      return (
        <tr>
          <td>{sale.id}</td>
          <td>{sale.day}</td>
          <td style={{color: sale.discount> 50? 'green' : 'white'}}>{sale.sales}</td>
          <td>{sale.discount}%</td>
          <td>{sale.profit}</td>
        </tr>
      )
    })
  }
 
</tbody>

    </table>

    </div>
  )
}

export default ArrayDemo6
