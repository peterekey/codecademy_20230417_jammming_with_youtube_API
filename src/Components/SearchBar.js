import React from 'react'

export function SearchBar(props) {


    return (
        <div className="Searchbar-container">
            <input 
                text="text"
                className="Searchbar-input"
                placeholder="Search for a YouTube video..." 
                onChange={props.handleSearchInput}
            />

            <button 
                className="submit-button"
                onClick={props.submitSearch}
            >
                Search YouTube
            </button>
        </div>
        )
}