"use client";
import { useState } from 'react';
import Image from 'next/image';
import { ROOMS } from '@/data/roomsData';
import { isValidEmail, isValidPhone, isValidName } from '@/utils/validators';

export default function BookingForm() {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [step, setStep] = useState('search');
    const today = new Date().toISOString().split('T')[0];
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        nomComplet: '',
        prenom: '',
        email: '',
        telephone: ''
    });

    const handleSelectRoom = (room) => {
        setSelectedRoom(room);
        setStep('checkout');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const isFormValid = () => {
        return (
            isValidName(formData.nomComplet) &&
            isValidName(formData.prenom) &&
            isValidEmail(formData.email) &&
            isValidPhone(formData.telephone)
        );
    };

    const handleConfirm = async () => {
        setIsLoading(true);
        setError(null);

        try {
            // 
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setStep('success');
        } catch (err) {
            setError("Une erreur est survenue. Veuillez réessayer.");
        } finally {
            setIsLoading(false);
        }
    };

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
                            min={today}
                            className="bg-transparent border-b border-hotel-abysse/10 py-2 text-sm text-hotel-abysse focus:outline-none focus:border-hotel-gold transition-colors cursor-pointer"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-hotel-gold">Départ</label>
                        <input
                            type="date" value={checkOut}
                            min={checkIn || today}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="bg-transparent border-b border-hotel-abysse/10 py-2 text-sm text-hotel-abysse focus:outline-none focus:border-hotel-gold transition-colors cursor-pointer"
                        />
                    </div>
                </div>

                <button
                    onClick={() => { if (nights > 0) setStep('rooms'); else alert("..."); }}
                    className="w-full md:w-auto bg-hotel-abysse text-hotel-white px-10 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-hotel-gold transition-all duration-500 cursor-pointer"
                >
                    Vérifier
                </button>
            </div>

            {/* Animation */}
            <div className={`grid transition-[grid-template-rows,margin] duration-700 ease-in-out ${step !== 'search' && nights > 0 ? 'grid-rows-[1fr] mt-16' : 'grid-rows-[0fr] mt-0'}`}   >
                <div className="overflow-hidden">

                    {step === 'rooms' && (
                        <div className="pt-12 border-t border-hotel-abysse/5">
                            <div className="flex justify-between items-center mb-10">
                                <h2 className="text-3xl font-serif italic text-hotel-abysse">
                                    Disponibilités pour {nights} nuits
                                </h2>
                                <button
                                    aria-label="Ferme la liste des chambres"
                                    onClick={() => setStep('search')}
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
                                        <button
                                            onClick={() => handleSelectRoom(room)}
                                            className="text-[10px] uppercase tracking-[0.2em] font-bold text-hotel-abysse border-b border-hotel-abysse/10 pb-2 hover:border-hotel-gold transition-all w-fit cursor-pointer">
                                            Sélectionner
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 'checkout' && selectedRoom && (
                        <div className="pt-12 border-t border-hotel-abysse/5 mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="flex justify-between items-center mb-10">
                                <div>
                                    <h2 className="text-3xl font-serif italic text-hotel-abysse">Finaliser votre réservation</h2>
                                    <p className="text-hotel-gold text-xs uppercase tracking-widest mt-2">
                                        {selectedRoom.name} — {nights} nuits — {selectedRoom.price * nights}€
                                    </p>
                                </div>
                                <button onClick={() => setStep('search')} className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
                                    Retour
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-1">
                                    <input
                                        name="nomComplet"
                                        value={formData.nomComplet}
                                        onChange={handleInputChange}
                                        placeholder="Nom complet"
                                        className={`bg-transparent border-b py-2 text-xs w-full focus:outline-none transition-colors font-sans placeholder:text-hotel-abysse/40 text-hotel-abysse ${formData.nomComplet && !isValidName(formData.nomComplet)
                                            ? 'border-red-400'
                                            : 'border-hotel-abysse/20 focus:border-hotel-gold'
                                            }`}
                                    />
                                    {formData.nomComplet && !isValidName(formData.nomComplet) && (
                                        <span className="text-[10px] text-red-400 font-sans italic">
                                            2 caractères minimum
                                        </span>
                                    )}
                                </div>

                                <div className="flex flex-col gap-1">
                                    <input
                                        name="prenom"
                                        value={formData.prenom}
                                        onChange={handleInputChange}
                                        placeholder="Prénom"
                                        className={`bg-transparent border-b py-2 text-xs w-full focus:outline-none transition-colors font-sans placeholder:text-hotel-abysse/40 text-hotel-abysse ${formData.prenom && !isValidName(formData.prenom)
                                            ? 'border-red-400'
                                            : 'border-hotel-abysse/20 focus:border-hotel-gold'
                                            }`}
                                    />
                                    {formData.prenom && !isValidName(formData.prenom) && (
                                        <span className="text-[10px] text-red-400 font-sans italic">
                                            2 caractères minimum
                                        </span>
                                    )}
                                </div>

                                <div className="flex flex-col gap-1">
                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="votre@email.com"
                                        className={`bg-transparent border-b py-2 text-xs w-full focus:outline-none transition-colors font-sans placeholder:text-hotel-abysse/40 text-hotel-abysse ${formData.email && !isValidEmail(formData.email)
                                            ? 'border-red-400'
                                            : 'border-hotel-abysse/20 focus:border-hotel-gold'
                                            }`}
                                    />

                                    {/* Erreur format email */}
                                    {formData.email && !isValidEmail(formData.email) && (
                                        <span className="text-[10px] text-red-400 font-sans italic">
                                            Veuillez entrer une adresse email valide
                                        </span>
                                    )}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <input
                                        name="telephone"
                                        type="tel"
                                        value={formData.telephone}
                                        onChange={handleInputChange}
                                        placeholder="votre numéro de téléphone"
                                        className={`bg-transparent border-b py-2 text-xs w-full focus:outline-none transition-colors font-sans placeholder:text-hotel-abysse/40 text-hotel-abysse ${formData.telephone && !isValidPhone(formData.telephone)
                                            ? 'border-red-400'
                                            : 'border-hotel-abysse/20 focus:border-hotel-gold'
                                            }`}
                                    />

                                    {/* Erreur format téléphone */}
                                    {formData.telephone && !isValidPhone(formData.telephone) && (
                                        <span className="text-[10px] text-red-400 font-sans italic">
                                            Veuillez entrer un numéro de téléphone valide
                                        </span>
                                    )}
                                </div>
                            </div>
                            <button
                                disabled={!isFormValid() || isLoading}
                                onClick={handleConfirm}
                                className={`mt-12 w-full md:w-auto px-12 py-4 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 flex items-center justify-center gap-3 ${isFormValid() && !isLoading
                                    ? 'bg-hotel-abysse text-white hover:bg-hotel-gold cursor-pointer'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                                    }`}
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-3 h-3 border-2 border-gray-400 border-t-hotel-abysse rounded-full animate-spin"></div>
                                        Traitement en cours...
                                    </>
                                ) : (
                                    "Confirmer la réservation"
                                )}
                            </button>
                        </div>
                    )}

                    {step === 'success' && (
                        <div className="pt-12 border-t border-hotel-abysse/5 text-center animate-in fade-in zoom-in duration-700">
                            <div className="w-16 h-16 bg-hotel-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-hotel-gold text-2xl">✓</span>
                            </div>
                            <h2 className="text-3xl font-serif italic text-hotel-abysse mb-4">
                                Merci {formData.prenom}, votre séjour est réservé.
                            </h2>
                            <p className="text-hotel-abysse/60 text-sm max-w-md mx-auto mb-10">
                                Un email de confirmation a été envoyé à <span className="text-hotel-abysse font-medium">{formData.email}</span>.
                                Nous avons hâte de vous accueillir à l'Hôtel Mer & Horizon.
                            </p>
                            <button
                                onClick={() => {
                                    setStep('search');
                                    setCheckIn("");
                                    setCheckOut("");
                                    setSelectedRoom(null);
                                    setFormData({
                                        nomComplet: '',
                                        prenom: '',
                                        email: '',
                                        telephone: ''
                                    });
                                }}
                                className="text-[10px] uppercase tracking-[0.2em] font-bold text-hotel-abysse border-b border-hotel-abysse/10 pb-2 hover:border-hotel-gold transition-all w-fit cursor-pointer"
                            >
                                Retour à l'accueil
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}