import { useState } from 'react';

const peopleData = [
  {
    "id": 1,
    "name": "Amartuvshin",
    "age": 16,
    "occupation": "Student"
  },
  {
    "id": 2,
    "name": "Anar-Erdene",
    "age": 16,
    "occupation": "Student"
  },
  {
    "id": 3,
    "name": "Anar",
    "age": 16,
    "occupation": "Student"
  },
  {
    "id": 4,
    "name": "Batmend",
    "age": 16,
    "occupation": "Student"
  },
  {
    "id": 5,
    "name": "Dalai-Suren",
    "age": 16,
    "occupation": "Student"
  },
  {
    "id": 6,
    "name": "Temuulen",
    "age": 16,
    "occupation": "Student"
  },
  {
    "id": 7,
    "name": "Tugs-Asralt",
    "age": 16,
    "occupation": "Student"
  },
  {
    "id": 8,
    "name": "B.Temuujin",
    "age": 15,
    "occupation": "Student"
  },
  {
    "id": 9,
    "name": "Sh.Temuujin",
    "age": 16,
    "occupation": "Student"
  },
  {
    "id": 10,
    "name": "E.Temuujin",
    "age": 16,
    "occupation": "Student"
  },
  {
    "id": 11,
    "name": "Tergel",
    "age": 16,
    "occupation": "Student"
  },
  {
    "id": 12,
    "name": "Hanbileg",
    "age": 16,
    "occupation": "Student"
  },
  {
    "id": 13,
    "name": "Choi-Odser",
    "age": 16,
    "occupation": "Student"
  },
  {
    "id": 14,
    "name": "Shine-Erdene",
    "age": 16,
    "occupation": "Student"
  },
  {
    "id": 15,
    "name": "Emily",
    "age": 16,
    "occupation": "Student"
  },
  {
    "id": 16,
    "name": "Enkhjav",
    "age": 16,
    "occupation": "Student"
  },
  {
    "id": 17,
    "name": "Enkhtugs",
    "age": 16,
    "occupation": "Student"
  },
  {
    "id": 18,
    "name": "Enkh-Uchral",
    "age": 16,
    "occupation": "Student"
  },
  {
    "id": 19,
    "name": "Ochir-Erdene",
    "age": 16,
    "occupation": "Student"
  },
  {
    "id": 20,
    "name": "Tselmeg",
    "age": 16,
    "occupation": "Student"
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [view, setView] = useState('list');

  const filteredPeople = peopleData.filter(person =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Suragchdiin Jagsaalt</h1>
      
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: '10px', marginBottom: '20px', width: '100%' }}
      />
      
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setView('list')}
          style={{ padding: '10px', marginRight: '10px' }}
        >
          List View
        </button>
        <button
          onClick={() => setView('grid')}
          style={{ padding: '10px' }}
        >
          Grid View
        </button>
      </div>

      <div style={view === 'grid' ? gridStyle : listStyle}>
        {filteredPeople.map(person => (
          <div key={person.id} style={view === 'grid' ? gridItemStyle : listItemStyle}>
            <h3>{person.name}</h3>
            <p>Age: {person.age}</p>
            <p>Occupation: {person.occupation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const listStyle = {
  display: 'block'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px'
};

const gridItemStyle = {
  border: '1px solid #ccc',
  padding: '15px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const listItemStyle = {
  border: '1px solid #ccc',
  padding: '15px',
  borderRadius: '8px',
  marginBottom: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};