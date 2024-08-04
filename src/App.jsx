import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = () => {
    if (name) {
      setContacts([...contacts, { id: Date.now(), name }]);
      setName("");
    }
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Contact List</h1>
      <input
        type="text"
        placeholder="Add new contact"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addContact}>Add</button>

      <input
        type="text"
        placeholder="Search contacts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}{" "}
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
