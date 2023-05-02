import '../styles/style.css'
import { useState } from 'react'

const Todo = (props) => {
   const name = "Emmy";
   const age = "18"
   return (
      <div>
        <VerifyAge text={name} ages={age > 18 ? "You are old enough " : "You are still young"} />
      </div>
   )
}


const FavouriteApp = (props) => {
   const [app, setApp] = useState("Youtube");
   return (
      <>
        <h1>My favourite App is {app} </h1>
        <button type='button' onClick={() => setApp("Whatsap")}>Whatsap</button>
        <button type='button' onClick={() => setApp("Messenger")}>Messenger</button>
        <button type='button' onClick={() => setApp("Instagram")}>Instagram</button>
      </>
   )
}

const ageChecker = () => {
   
}

const AgeChecker = () => {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (age < 18) {
      setMessage("You are below 18");
    } else {
      setMessage("You are above 18");
    }
  };

  return (
    <div>
      <h1>Age Checker</h1>
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>{message}</p>
    </div>
  );
};



const MyCar = (props) => {
   const [car, setCar] = useState({
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red"
   });
   return(
      <>
        <h1>My {car.brand}</h1>
        <p>
         It is a {car.color} {car.model} from {car.year}.
        </p>
      </>
   )
}

const VerifyAge = (props) => {
      return (
        <div>
       <h2>{props.text} {props.ages}</h2>
        </div>
      )
    }


const Frontend = (props) => {
   return (
      <div>
        <h1></h1>
      </div>
   )
}

export default Todo;
