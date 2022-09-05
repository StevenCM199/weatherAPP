import axios from "axios";
import { useEffect, useState } from "react";

const GetGeolocation = () => {

  const [data, setData ] = useState({})
  const APIkey = 'f47ef9fb4c173f7cfba0097623fec3af';

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);

    function success(position){
      const coords = position.coords;

      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${APIkey}`)
        .then(res => setData(res.data))
    }
  }, [])
  return data;

};

export default GetGeolocation; 