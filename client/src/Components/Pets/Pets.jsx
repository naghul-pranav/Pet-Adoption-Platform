import React, { useEffect, useState } from "react";
import PetsViewer from "./PetsViewer";

const Pets = () => {
  const [filter, setFilter] = useState("all");
  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to hold error messages

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch("http://localhost:4000/approvedPets");
        if (!response.ok) {
          throw new Error("An error occurred while fetching pets data.");
        }
        const data = await response.json();
        setPetsData(data);
      } catch (error) {
        console.error(error);
        setError(error.message); // Set error message in state
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const filteredPets = petsData.filter((pet) => {
    if (filter === "all") {
      return true;
    }
    return pet.type === filter;
  });

  return (
    <>
      <div className="filter-selection">
        <select
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        >
          <option value="all">All Pets</option>
          <option value="Dog">Dogs</option>
          <option value="Cat">Cats</option>
          <option value="Rabbit">Rabbits</option>
          <option value="Bird">Birds</option>
          <option value="Fish">Fish</option> {/* Corrected "Fishs" to "Fish" */}
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="pet-container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? ( // Show error message if it exists
          <p className="oops-msg">Error: {error}</p>
        ) : filteredPets.length > 0 ? (
          filteredPets.map((petDetail) => (
            <PetsViewer pet={petDetail} key={petDetail._id} />
          ))
        ) : (
          <p className="oops-msg">Oops!... No pets available</p>
        )}
      </div>
    </>
  );
};

export default Pets;
