import React, { Component} from 'react';

const Table = (props) => {
    const {characterData, removeCharacter} =props;


class Table extends Component {
    render () {
        const {characterData} = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        )

       
        }
        const = (props) => {
            const rows = props.characterData.map((row,index) => {
        return (
    <tr key={index}>
    <td>{row.firstName}</td>
    <td>{row.lastName}</td>
    <td>
        <button onClick={() => props.removCharacter(index)}>Delte</button>
    </td>
    </tr>
            );
});
return <tbody>{rows}</tbody>;

export default Table;