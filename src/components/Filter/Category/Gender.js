import React from 'react'
import FilterBTN from '../FilterBTN';

const Gender = ({setGender, setPageNumber}) => {
    let genders = ["female", "male", "genderless", "unknown"]
   return (
        <div>
           <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Gender
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body d-flex flex-wrap gap-3">
          {genders.map((items, index) => (
              <FilterBTN setPageNumber={setPageNumber} key={index} name="gender" index={index} items={items} task={setGender}/>
          ))}
      </div>
    </div>
  </div> 
        </div>
    )
}

export default Gender;
