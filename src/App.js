import React, { useState, useEffect } from "react";
import "./App.scss";
import Table from "./components/Table/Table";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
    const [people, setPeople] = useState([]);
    const [search, setSearch] = useState("");

    const filteredPeople = people.filter(person => {
        const { first_name = "" } = person;
        return first_name.indexOf(search) >= 0;
    });

    // this happens on mount
    useEffect(() => {
        fetch("http://localhost:3000/people")
            .then(res => res.json())
            .then(data => {
                setPeople(data);
            });
    }, []);

    return (
        <div className="App">
            <div className="search">
                <SearchBar search={search} onSearch={setSearch} />
            </div>
            <Table data={filteredPeople}></Table>
        </div>
    );
}

export default App;
