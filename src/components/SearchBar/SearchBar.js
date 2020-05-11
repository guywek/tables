import React from "react";
import "./SearchBar.scss";

function SearchBar(props) {
    const { search } = props;

    return (
        <div className="SearchBar">
            <input
                placeholder="Search..."
                type="text"
                value={search}
                onChange={ev => props.onSearch(ev.target.value)}
            ></input>
        </div>
    );
}

export default SearchBar;
