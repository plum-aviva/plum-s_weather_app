import { useState, useEffect } from "react"


const WeatherCard = () => {

    const URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Norwich?unitGroup=us&include=current&key=BU9D5Y2D2XYYTF9VMES9A6V8V&contentType=json"

    const [weather, setWeather] = useState({})

    useEffect(async () => {

        const fetchWeather = async () => {
            const response = await fetch(URL)
            const data = await response.json()
            console.log(data.address);

            setWeather(data)

        }
        fetchWeather()



    }, [weather])


    return (
        <>

            <h2>Weather Card</h2>

            <div>
                <p>Location: </p>
                <p>Temperature: 25C</p>
                <p>Date: Sunday September 7th </p>
            </div>

        </>
    )
}

export default WeatherCard