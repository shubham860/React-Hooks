import React, {useState} from 'react';
import pet,{ANIMALS} from '@frontendmasters/pet';
import NewCustomHook from "./NewCustomHook";

function New () {
   const [animal, setAnimal] = useState("All");
   const [breed, setBreed] = useState("");
   const [,AnimalDropdown] = NewCustomHook('Animal','Animal',ANIMALS);
   console.log(pet)
    return(
        <div>
            <div>
                <AnimalDropdown/>
            </div>
            <div>
                <h1>Animal</h1>
                <select
                    value={animal}
                    onChange={ e => setAnimal(e.target.value)
                    }>
                    <option>All</option>
                    {
                        ANIMALS.map( item => <option key={item}>{item}</option>)
                    }
                </select>
            </div>
            <div>
                <h1>Breed</h1>
                <select
                    value={breed}
                    onChange={ e => setBreed(e.target.value)
                    }>
                    <option>All</option>
                    {
                        ANIMALS.map( item => <option key={item}>{item}</option>)
                    }
                </select>
            </div>
        </div>
    )
}

export default New;
