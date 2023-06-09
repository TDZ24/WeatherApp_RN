import React from "react";

const WeatherForm = (props) => {
  return (
    <div className="card card-body">
      <form onSubmit={props.getWeather}>
        <div className="form-group">
          <input
            type="text"
            name="city"
            placeholder="El nombre de tu ciudad"
            className="form-control"
            autoFocus
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="country"
            placeholder="El nombre de tu pais"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary btn-block">
          Obtener el clima
        </button>
      </form>
    </div>
  );
};

export default WeatherForm;



