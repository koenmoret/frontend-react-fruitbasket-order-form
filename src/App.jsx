import './App.css'
import {useState} from "react";
import Fruitbox from "./components/fruitbox.jsx";
import aardbei from "./assets/fruit/aardbei.png";
import banaan from "./assets/fruit/banaan.png";
import appel from "./assets/fruit/appel.png";
import kiwi from "./assets/fruit/kiwi.png";

function App() {

    const [bananen, setBananen] = useState(0);
    const [aardbeien, setAardbeien] = useState(0);
    const [appels, setAppels] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [age, setAge] = useState();
    const [zipcode, setZipcode] = useState();
    const [delFreq, setDelFreq] = useState();
    const [deliveryTimeslot, toggleDeliveryTimeslot] = useState();

    const reset = () => {
        setBananen(0);
        setAardbeien(0);
        setAppels(0);
        setKiwis(0);
    }

    return (
        <>
            <main className="outer-container">
                <section className="inner-container">
                    <h1>Fruitmand bezorgservice</h1>

                    <Fruitbox setName="Aardbeien" image={aardbei} count={aardbeien} setCount={setAardbeien}/>
                    <Fruitbox setName="Bananen" image={banaan} count={bananen} setCount={setBananen}/>
                    <Fruitbox setName="Appels" image={appel} count={appels} setCount={setAppels}/>
                    <Fruitbox setName="Kiwi's" image={kiwi} count={kiwis} setCount={setKiwis}/>

                    <button className="primary-btn" onClick={() => {
                        reset()
                    }}>Reset
                    </button>
                </section>
                <section className="inner-container">
                    <form>
                        <div className="input-field">
                            <label htmlFor="firstname-field">Voornaam</label>
                            <input
                                name="firstname"
                                id="firstname-field"
                                type="text"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                        </div>

                        <div className="input-field">
                            <label htmlFor="lastname-field">Achternaam</label>
                            <input
                                name="lastname"
                                id="lastname-field"
                                type="text"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                            />
                        </div>

                        <div className="input-field">
                            <label htmlFor="age-field">Leeftijd</label>
                            <input
                                name="age"
                                id="age-field"
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>

                        <div className="zipcode-field">
                            <label htmlFor="zipcode-field">Postcode</label>
                            <input
                                name="zipcode"
                                id="zipcode-field"
                                type="text"
                                value={zipcode}
                                onChange={(e) => setZipcode(e.target.value)}
                            />
                        </div>

                        <div className="del-freq-field">
                            <label htmlFor="del-freq">Bezorgfrequentie</label>
                            <select
                                name="del-freq"
                                id="del-freq"
                                value={delFreq}
                                onChange={(e) => setDelFreq(e.target.value)}
                            >
                                <option value="week">iedere week</option>
                                <option value="other-week">om de week</option>
                                <option value="month">iedere maand</option>
                            </select>
                        </div>

                        <div className="timeslot-daytime-field">
                          <input
                              name="timeslot"
                              id="timeslot-daytime-field"
                              type="radio"
                              value="daytime"
                              checked={deliveryTimeslot === 'daytime'}
                              onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
                          />
                        </div>


                    </form>
                </section>
            </main>
        </>
    )
}

export default App
