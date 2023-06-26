import Button from "./Button";

function List() {
  return (
    <table className="table table-sm">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Bouton</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Milk</td>
      <td>5.00</td>
      <td>Grocery</td>
      <td><Button children="Delete"/></td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Eggs</td>
      <td>1.00</td>
      <td>Grocery</td>
      <td><button className="btn btn-outline-danger">Effacer</button></td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td><Button>Delete</Button></td>

    </tr>
  </tbody>
</table>
  );
}
export default List;
