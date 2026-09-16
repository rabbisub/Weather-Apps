import { X } from 'lucide-react';
import { useState } from "react";
const LocationModal = ({ onClose }) => {
    const [city, setCity] = useState("");
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const value = city.trim()
    console.log(value);
    }

    const handleCurrentLocation = ()=>{
        navigator.geolocation.getCurrentPosition((positions)=>{
            const {latitude, longitude} = positions.coords;
            console.log(latitude, longitude);

        }, (error)=>{
            console.log(error)
        },{
            timeout: 1000,
        })

    }






    return (
        <div className="fixed inset-0 flex justify-center items-center 
         bg-gray-400/60">
            <div className="h-[380px] w-[400px] p-5 bg-blue-200 shadow-2xl rounded-2xl">
                   <div className="flex justify-between items-center">
                     <h3 className="text-xl text-center font-bold text-gray-700"> Where are you?</h3>
                    
                    <button onClick={onClose} className="cursor-pointer">
                    <X/></button>
                   </div >
                   <div className="py-5">
                        <form onSubmit={handleSubmit} className="space-y-5 ">
                            <input placeholder="Enter City Name" type="text"
                            value={city} onChange={(e) => setCity(e.target.value)}
                            className="w-full mt-5 p-3 rounded-lg border-2 bg-white border-none ">
                            </input>
                            <div className="w-full flex justify-center items-center">
                                <button type="submit" 
                                    className="bg-blue-500  hover:bg-blue-700 text-white text-xl w-full
                                    font-bold py-2 px-6 rounded-2xl hover:scale-120 transition-all delay-500">
                                     Get Weather

                                </button>
                            </div>
                        </form>
                        <div className="text-center text-gray-700 my-4" > Or</div>
                        <div className="flex justify-center items-center">
                                <button type="submit" 
                                    onClick={handleCurrentLocation}
                                    className="bg-blue-500  hover:bg-blue-700 text-white text-xl w-full
                                    font-bold py-2 px-6 rounded-2xl hover:scale-120 transition-all delay-500">
                                     Use Current Location

                                </button>
                            </div>
                        
                   </div>
            </div>

        </div>
                
    );
};

export default LocationModal;