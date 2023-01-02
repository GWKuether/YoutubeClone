import React, { useState } from 'react';



const SearchBar = (props) => {
    
    const[searchInput, setSearchInput] = useState('')

    const handleSearch = (event) => {
        event.preventDefault()
        setSearchInput(event.target.value)

    }

    function handleSubmit(event){
        event.preventDefault()
        if (searchInput.length > 0) {                 
            console.log(searchInput)
            props.getSearchInput(searchInput)
        }
    }


    
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Search here' onChange={handleSearch} value={searchInput} />
        </form>

     );
}
 
export default SearchBar;