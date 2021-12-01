import React from 'react'
import FilterBTN from '../FilterBTN'

const Status = ({setStatus, setPageNumber}) => {
    let status = ["Alive", "Dead", "Unknown"]
    return (
        <div>
            <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Status
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body d-flex flex-wrap gap-3">
          {status.map((items, index) => <FilterBTN setPageNumber={setPageNumber} task={setStatus} key={index} name="status" index={index} items={items}/>)}
          
          </div>
    </div>
  </div> 
        </div>
    )
}

export default Status
