import React, { useState } from 'react'

export function SearchBar() {

    const [searchInput, setSearchInput] = useState('')

    const handleChange = ({target}) => {
        setSearchInput(target.value)
        console.log(target.value)
    }

    return (
        <div className="Searchbar-container">
            <input 
                text="text"
                className="Searchbar-input"
                placeholder="Search for a YouTube video..." 
                onChange={handleChange}/>

            <input 
                type="submit"
                className="submit-button"
                value="Search YouTube"
            />
        </div>
        )
}