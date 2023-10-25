import "./Table.css"

function Table(props) {

    return <div>
        <table className="tableBody">
            <tr>
                <td>{props.numbers[0]}</td>
                <td>{props.numbers[1]}</td>
                <td>{props.numbers[2]}</td>
                <td>{props.numbers[3]}</td>
            </tr>
            <tr>
                <td>{props.numbers[0]}</td>
                <td>{props.numbers[1]}</td>
                <td>{props.numbers[2]}</td>
                <td>{props.numbers[3]}</td>
            </tr>
            <tr>
                <td>{props.numbers[0]}</td>
                <td>{props.numbers[1]}</td>
                <td>{props.numbers[2]}</td>
                <td>{props.numbers[3]}</td>
            </tr>
        </table>
    </div>

}

export default Table;