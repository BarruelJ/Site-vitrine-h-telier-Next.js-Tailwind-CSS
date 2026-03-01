"use client";
import { useState } from 'react';
import Image from 'next/image';
import { ROOMS } from '@/data/roomsData';

export default function BookingForm() {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [showRooms, setShowRooms] = useState(false);

    const nights = (() => {
        if (!checkIn || !checkOut) return 0;
        const diff = new Date(checkOut).getTime() - new Date(checkIn).getTime();
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    })();

    return (
        <div className="relative z-20 max-w-5xl mx-auto -mt-12 bg-white p-8 md:p-10 shadow-sm border border-hotel-abysse/5">
            {/* Formulaire Principal */}
            <div className="flex flex-col md:flex-row gap-8 items-end justify-between">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-hotel-gold">Arrivée</label>
                        <input
                            type="date" value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="bg-transparent border-b border-hotel-abysse/10 py-2 text-sm text-hotel-abysse focus:outline-none focus:border-hotel-gold transition-colors cursor-pointer"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-hotel-gold">Départ</label>
                        <input
                            type="date" value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="bg-transparent border-b border-hotel-abysse/10 py-2 text-sm text-hotel-abysse focus:outline-none focus:border-hotel-gold transition-colors cursor-pointer"
                        />
                    </div>
                </div>

                <button
                    onClick={() => nights > 0 ? setShowRooms(true) : alert("Sélectionnez vos dates")}
                    className="w-full md:w-auto bg-hotel-abysse text-hotel-white px-10 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-hotel-gold transition-all duration-500 cursor-pointer"
                >
                    Vérifier
                </button>
            </div>

            {/* Animation */}
            <div className={`grid transition-[grid-template-rows,margin] duration-700 ease-in-out ${showRooms && nights > 0 ? 'grid-rows-[1fr] mt-16' : 'grid-rows-[0fr] mt-0'
                }`}>
                <div className="overflow-hidden">
                    <div className="pt-12 border-t border-hotel-abysse/5">
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-3xl font-serif italic text-hotel-abysse">
                                Disponibilités pour {nights} {nights > 1 ? 'nuits' : 'nuit'}
                            </h2>
                            <button
                                onClick={() => setShowRooms(false)}
                                className="text-[10px] uppercase tracking-widest text-hotel-abysse/40 hover:text-hotel-gold transition-colors cursor-pointer p-2"
                            >
                                Fermer ✕
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {ROOMS.map(room => (
                                <div key={room.id} className="group flex flex-col">
                                    <div className="relative aspect-3/4 mb-6 overflow-hidden">
                                        <Image
                                            src={room.image} alt={room.name} fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                        />
                                    </div>
                                    <h3 className="font-serif text-xl text-hotel-abysse mb-1">{room.name}</h3>
                                    <p className="text-hotel-gold font-serif italic text-lg mb-4 cursor-default">
                                        {room.price * nights}€
                                        <span className="text-[10px] font-sans uppercase tracking-widest not-italic text-hotel-abysse/40 ml-2">Total</span>
                                    </p>
                                    <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-hotel-abysse border-b border-hotel-abysse/10 pb-2 hover:border-hotel-gold transition-all w-fit cursor-pointer">
                                        Sélectionner
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}