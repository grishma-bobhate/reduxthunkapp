/**********SRP************/


import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

function WeatherInfo({ temperature, windSpeed, city }) {
  return (
    <div className="weather">
      <div>Weather in {city}</div>
      <div>Temperature: {temperature}°C</div>
      <div>Wind: {windSpeed} km/h</div>
    </div>
  );
}

class WeatherFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "N/A", windSpeed: "N/A", city: "unknown" };
  }

  render() {
    const { temperature, windSpeed, city } = this.state;
    return (
      <WeatherInfo
        temperature={temperature}
        windSpeed={windSpeed}
        city={city}
      />
    );
  }

  componentDidMount() {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?units=metric&id=524901&APPID=86a6e5eca759d87fb622807459cf6e6b"
    )
      .then(response => 
       
        response.json())
     
      .then(
        response =>
          console.log(response) || {
            data: response.list[response.list.length - 1],
            city: response.city
          }
        
      )
      .then(response => {
        this.setState({
          city: response.city.name,
          temperature: response.data.main.temp,
          windSpeed: response.data.wind.speed
        });
      });
    
  }
}

const App = () => (
    
  <div style={styles}>
    <WeatherFetch />

  </div>
);

export default App;




//************Redux thunk API****************** */

// import React, {useState, useEffect} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { userAction } from './redux/actions/userAction';
// import User from './components/User';
// const App = () => {
//   const dispatch = useDispatch()
//   const userList = useSelector(state => state.userList)
//   const {loading, users,error} = userList

//   useEffect(() =>{
//     dispatch(userAction())
//   },[dispatch])

//   return (<>

//       <h1> Redux Thunk Tutorial </h1>
//       {loading ? (<h2>Loading...</h2>) : error ? 
//       ( <h2>{error}</h2>) :( <User users ={users} />)}
     
//       </>
//   );
// }

// export default App;
