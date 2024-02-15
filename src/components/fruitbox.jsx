// eslint-disable-next-line react/prop-types
function Fruitbox({ image,setName,count, setCount }) {

    const setCounter = (action) => {
        setCount((val) => val + action)
    }

    return (
        <div className="fruit-box">
            <img src={image} alt={`Een plaatje met ${setName}`}/>
            <h1>{setName}</h1>
            <button className="setCount" disabled={count === 0} onClick={() => { count > 0 &&
                setCounter(-1)
            }}>-
            </button>
            <p>{count}</p>
            <button className="setCount" onClick={() => { setCounter(1) }}> + </button>
        </div>
    );
}

export default Fruitbox;