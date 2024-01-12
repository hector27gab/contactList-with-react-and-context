import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5 text-light">
      <div className="container bg-dark">
        <h1 className="fw-bold">Contacts</h1>
      </div>
        {store.agenda.map((item) => {
          return (
            <div className="card container bg-dark fw-bold my-3"
              key={item.id}
              >
              <div 
                className="d-flex justify-content-between my-2" 
              >
                <div className="d-flex mx-2">
                  <img
                    src="https://i.pinimg.com/564x/66/e0/55/66e0558f14b5d70edd158fddf17fb777.jpg"
                    className="image me-3"
                    alt="image"
                  />
                  <div className="dataContainer">
                    <div className="d-flex justify-content-start">
                      <h5 className="card-title mx-2">{item.full_name}</h5>
                    </div>
                    <div className="d-flex justify-content-start">
                      <p>
                        <i className="fa-solid fa-location-dot mx-2"></i>
                        {item.address}
                      </p>
                    </div>
                    <div className="d-flex justify-content-start">
                      <p>
                        <i className="fa-solid fa-phone mx-2"></i>
                        {item.phone}
                      </p>
                    </div>
                    <div className="d-flex justify-content-start">
                      <p>
                        <i className="fa-solid fa-envelope mx-2"></i>
                        {item.email}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="justify-content-end">
                  <Link to={`/edit/${item.id}`} className="btn btn-primary my-2">
                    <i className="fa-solid fa-pencil"></i>
                  </Link>
                  <button
                    className="btn btn-danger my-2 mx-2"
                    onClick={() => actions.removeContact(item.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
          </div>
          );
        })}
    </div>
  );
};

export default Home;
