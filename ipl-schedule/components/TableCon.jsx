import Table from 'react-bootstrap/Table';

function TableCon(props) {
    const dates=props.dateArray;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#Match No</th>
          <th>Date</th>
          <th>Match</th>
          <th>Venue</th>
        </tr>
      </thead>
      <tbody>
        {props.matches.map((match,index)=>
        <tr>
          <td>{1+index}</td>
          <td>{dates[index]}</td>
          <td>{match}</td>
          <td>{match.split(" ")[0]}</td>
        </tr>
        )}
      </tbody>
    </Table>
  );
}

export default TableCon;