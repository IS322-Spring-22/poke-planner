import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
    return (
        <div className="container">
            <div className="innerLoad row justify-content-center mt-2">
                <ReactLoading type={"spin"} color="#80f679" height={128} width={128}/>
            </div>
            <div className="innerLoadText row justify-content-center">
                <h1 className="loading-text text-center"> Loading Moveset </h1>
            </div>
        </div>
    )
}

export default Loading;
