"use client";
import { useState } from 'react';

/* Données des chambres */
const ROOMS = [
  { id: 1, name: "Chambre Vue Mer", price: 120, image: "🌊" },
  { id: 2, name: "Suite Panoramique", price: 250, image: "✨" },
  { id: 3, name: "Chambre Standard", price: 85, image: "🛏️" },
];

export default function Home() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [showRooms, setShowRooms] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleCheck = () => {
    if (!checkIn || !checkOut) {
      alert("Veuillez choisir deux dates.");
      return;
    }

    // Convertion string
    const start = new Date(checkIn);
    const end = new Date(checkOut);

    if (end <= start) {
      alert("La date de départ doit être après la date d'arrivée !");
    } else {
      setShowRooms(true); // Affiche les disponibilités
    }
  };

  const handleSelectRoom = (room) => {
    setSelectedRoom(room);
    alert(`Merci ! Vous avez choisi la ${room.name} pour ${nights * room.price}€.`);
  };

  const today = new Date().toISOString().split("T")[0]; // Date du jour

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end - start; // 
    return Math.ceil(diff / (1000 * 60 * 60 * 24)); // Conversion en jours
  };

  const nights = calculateNights();

  return (
    <main className="p-10 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-900">Hôtel de la Mer</h1>
      <p className="text-gray-600 mt-2">Réservez votre séjour en quelques clics.</p>

      {/* Container du formulaire */}
      <div className="mt-10 p-6 border rounded-xl shadow-sm bg-white max-w-2xl">
        <div className="flex flex-wrap gap-6">

          {/* Date d'arrivée */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-sm text-black">Date d'arrivée</label>
            <input
              type="date"
              min={today}
              value={checkIn} // Variable
              onChange={(e) => {
                setCheckIn(e.target.value);
                if (checkOut && e.target.value >= checkOut) {
                  setCheckOut(""); // Reset date de départ si elle est avant la nouvelle date d'arrivée
                }
              }}
              className="border p-2 rounded-md focus:outline-blue-500 text-black"
            />
          </div>

          {/* Date de départ */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-sm text-black">Date de départ</label>
            <input
              type="date"
              min={checkIn ? checkIn : today} // Après date d'arrivée
              value={checkOut} // Variable
              onChange={(e) => setCheckOut(e.target.value)} // MAJ variable
              className="border p-2 rounded-md focus:outline-blue-500 text-black"
            />
          </div>

          {/* Bouton */}
          <div className="flex items-end">
            <button
              onClick={handleCheck} // Appel fonction
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Vérifier la disponibilité
            </button>
          </div>

        </div>
      </div>

      {/* Affichage des chambres */}
      {showRooms && (
        <div className="mt-12 animate-in fade-in duration-500">
          <h2 className="text-2xl font-bold mb-6">Nos chambres disponibles ({nights} {nights > 1 ? 'nuits' : 'nuit'})</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROOMS.map((room) => (
              <div key={room.id} className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="h-32 bg-blue-50 flex items-center justify-center text-4xl">
                  {room.image}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{room.name}</h3>
                  <p className="text-blue-600 font-semibold">
                    {room.price * nights}€ total ({room.price}€ / nuit)
                  </p>
                  <button
                    onClick={() => handleSelectRoom(room)} // Appel fonction
                    className="w-full mt-4 border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Sélectionner
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
