import React from "react";
import "./Table.scss";

function Table(props) {
    const { data } = props;

    function renderHeader() {
        return (
            <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>IP</th>
                </tr>
            </thead>
        );
    }

    function renderRow(item) {
        const { id, first_name, last_name, email, gender, ip_address } = item;

        return (
            <tr key={id}>
                <td>{first_name}</td>
                <td>{last_name}</td>
                <td>{email}</td>
                <td>{gender}</td>
                <td>{ip_address}</td>
            </tr>
        );
    }

    function renderBody() {
        return <tbody>{data.map(renderRow)}</tbody>;
    }

    return (
        <div className="Table">
            <table cellPadding={0} cellSpacing={0}>
                {renderHeader()}
                {renderBody()}
            </table>
        </div>
    );
}

export default Table;
