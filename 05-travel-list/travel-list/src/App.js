import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 1, packed: true },
];

export default function App() {
  //parent component that includes all the otehr components
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackagingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>🌴 Far Away 🧳</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  //event handler for component function
  function handleSubmit(e) {
    // in single page application we cna prevent the reload in case of any event
    e.preventDefault();

    //
    console.log(e);
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    //e is the event object whihc is passed to the call back event handler function

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> what do you need for your 😁 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* <option value={1}>1></option>
        <option value={2}>2></option>
        <option value={3}>3></option> */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackagingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
          // name of the item name of the prop and name of the object
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  //Item({}->indicates prop)
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button>❌&time</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>
        🧳 you have X items on your list, nd you have already packed X (X%)
      </em>
    </footer>
  );
}
