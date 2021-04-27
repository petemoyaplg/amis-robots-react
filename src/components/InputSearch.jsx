import React from 'react';



const InputSearch = ( { searchChange } ) => {
    return (
        <div className="div-search">
            <input
                onChange={searchChange}
                type="search"
                placeholder="Rechercher par nom"
            />
        </div>
    )
}


export default InputSearch;
