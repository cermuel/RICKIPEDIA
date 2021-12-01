import React from 'react'
import FilterBTN from '../FilterBTN';

const Species = ({setSpecies, setPageNumber}) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];  
  return (
        <div>
            <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Species
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body d-flex flex-wrap gap-3">{species.map((items, index) => <FilterBTN key={index} setPageNumber={setPageNumber} task={setSpecies} name="species" index={index} items={items}/>)}
          </div>
    </div>
  </div>
        </div>
    )
}

export default Species
