import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';

const FilterBar = ({ onFilter }) => {
    const [query, setQuery ] = useState("");

    const handleFilter = (e) => {
        e.preventDefault();
        onFilter(query);
    };

    return (
        <Form inline onSubmit={handleFilter}>
            <Form.Control
            type="text"
            placeholder="Search..."
            className="mr-sm-2"
            value={query}
            onChange={(e)=> setQuery(e.target.value)}
            />
            <Button type="submit" variant="outline-success">Search</Button>
        </Form>
    )
}

export default FilterBar;