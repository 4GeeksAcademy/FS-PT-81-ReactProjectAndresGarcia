import React from "react";

const Jumbotron = () => {
    return (
        <div className="container py-5 my-5">
            <div className="container text-start bg-secondary width: 50px" >
                <h1 className="display-4">¡Bienvenido al Jumbotron!</h1>
                <p className="lead">Este es un ejemplo de un jumbotron en Bootstrap 5 creado usando utilidades de clases.</p>
                <hr className="my-4" />
                <p>Es perfecto para destacar contenido importante en tu página.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Saber más</a>
            </div>
        </div>
    )
}
export default Jumbotron;