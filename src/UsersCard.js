import React, { useState } from 'react'

const UsersCard = (props) => {

  const [details, setDetails] = useState(false)

  const handleDetails = () => {
    !details ? setDetails(true) : setDetails(false)
  }

  return (
    <li className="userCards">
      <img src={props.picture}/>
      <p>{props.firstName}</p>
      <span><p>{props.lastName}</p></span>
      {
        details ?
        <div> 
          <div>Phone: {props.phone}</div>
          <div>Cell: {props.cell}</div>
          <div>Street: {props.streetNum} {props.streetName}</div>
          <div>State: {props.state}</div>
          <div>Country: {props.country}</div>
        </div> :
        <></>
      }
      <button onClick={handleDetails}>
        {details ? 
        <div>Hide Details</div> :
        <div>Show Details</div>
        }
      </button>
    </li>
  )
}

export default UsersCard