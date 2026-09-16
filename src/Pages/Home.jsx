import { useState } from "react";
import LocationModal from "../Components/LocationModal";
const Home = () => {
    const [click, setClick] = useState(false);
    console.log(click);


    return (
        <div >
              <div className="text-center ">
                <h1 className="text-6xl font-bold text-blue-400">Smart <span className="text-blue-500">Weather</span> App</h1>            

                <p className="w-xl text-md text-lg mt-4 text-gray-600"> 
                    Check the weather in your city and get the latest updates on temperature, humidity, and more. Stay informed and plan your day accordingly with our user-friendly weather app.
                </p>
              </div>

                <div className="flex justify-center items-center mt-10">
                    <button type="button" onClick={()=> setClick("Clicked")}
                    className="bg-blue-500 hover:bg-blue-600 mt-5 text-white text-2xl font-bold py-4 px-6 rounded-3xl hover:scale-120 transition-all delay-500">
                        Check Weather

                    </button>
                </div>
                {
                    click && <LocationModal onClose={() => setClick(false)}/>
                
                }

        
        
        </div>
    );
};

export default Home;