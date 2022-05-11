import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="innerLoad">
                <ReactLoading type={"spin"} color="#357EDD" />
            </div>
            <div className="innerLoadText">
                <h3 className="loading-text"> Loading Moveset </h3>
            </div>
        </div>
    )
}

export default Loading;
