import React from "react";

const WeatherInfo = props => {

    console.log(props)
    return(
        <div >
            {
                props.error &&
                <div className="alert alert-danger">
                <p>{props.error}</p>
                </div>
            }
            {
                props.temperature ?
                <div> 
                    <div className="card card-body">
                        
                    <p>
                        Ubicacion: {props.city}, {props.country}
                    </p>
                    <p>
                        Temperatura: {props.temperature} °C, {props.description}
                    </p>
                    <p>
                        Humedad: {props.humidity}
                    </p>
                    <p>
                        Velocidad del viento: {props.wind_speed}
                    </p>

                    </div>
                </div>
                :
                <div className="card card-body">
                    <p>
                        No hay una peticion aun
                    </p>
                </div>
                
            }
        </div>  
    )
}

export default WeatherInfo