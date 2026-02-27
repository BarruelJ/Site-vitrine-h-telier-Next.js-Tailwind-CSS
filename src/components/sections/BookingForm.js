"use client";
import Image from 'next/image';
import { useState } from 'react';
import { ROOMS } from '@/data/roomsData';

export default function BookingForm() {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [showRooms, setShowRooms] = useState(false);
    const today = new Date().toISOString().split("T")[0];
    const [selectedRoom, setSelectedRoom] = useState(null);

    const calculateNights = () => {
        if (!checkIn || !checkOut) return 0;
        const diff = new Date(checkOut) - new Date(checkIn);
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    };

    const nights = calculateNights();

    const handleSelect = (room) => {
        setSelectedRoom(room);
        const total = room.price * nights;
        alert(`Confirmation : ${room.name}\nSéjour de ${nights} nuits\nMontant total : ${total}€`);
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="flex flex-wrap gap-4 items-end">
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold uppercase text-gray-500">Arrivée</label>
                    <input
                        type="date" min={today} value={checkIn}
                        onChange={(e) => {
                            setCheckIn(e.target.value);
                            if (checkOut && e.target.value >= checkOut) setCheckOut("");
                        }}
                        className="border p-2 rounded text-black"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold uppercase text-gray-500">Départ</label>
                    <input
                        type="date" min={checkIn || today} value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="border p-2 rounded text-black"
                    />
                </div>
                <button
                    onClick={() => {
                        if (nights > 0) setShowRooms(true);
                        else alert("Choisissez des dates valides");
                    }}
                    className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition"
                >
                    Voir les disponibilités
                </button>
            </div>

            {showRooms && nights > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-100">
                    <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">
                        Résultats pour {nights} {nights > 1 ? 'nuits' : 'nuit'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {ROOMS.map(room => (
                            <div key={room.id} className="border p-5 rounded-xl flex flex-col items-center hover:shadow-md transition">
                                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                                <Image
                                    src={room.image}
                                    alt={room.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                </div>
                                <h3 className="font-bold text-gray-900">{room.name}</h3>
                                <p className="text-gray-500 text-sm mb-2">{room.price}€ / nuit</p>
                                <p className="text-blue-700 font-extrabold text-lg mb-4">
                                    Total : {room.price * nights}€
                                </p>
                                <button
                                    onClick={() => handleSelect(room)}
                                    className="w-full py-2 bg-slate-100 text-slate-800 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition"
                                >
                                    Sélectionner
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}