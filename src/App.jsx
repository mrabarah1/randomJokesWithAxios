import axios from "axios";
import { useState } from "react";

const url = "https://icanhazdadjoke.com/";



function App() {
  const [joke, setJoke] = useState("Random dad jokes");

  // fetch the jokes from the url
  const fetchDadJokes = async() => {
    try {
      const { data } = await axios(url, {
        headers: {
          Accept: 'application/json'
        }
      })
      setJoke(data.joke)
    } catch (error) {
      console.log(error.data);
    }
  }


  return (

    <section className="section text-center">
      <button className="btn" onClick={fetchDadJokes}>
        click here for random jokes
      </button>
      <p className="dad-joke">{joke}</p>
    </section>
  
  )
}

export default App
