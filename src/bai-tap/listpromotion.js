import React from "react";
import Itempromotion from "./itempromotion";

export default function Promotion() {
    return (
        <div>
            <section id="promotion" className="container-fluid pt-5 pb-5 bg-dark">
                <h1 className="text-center text-white">PROMOTION</h1>
                <div className="container bg-light pt-5 pb-5">
                    <div className="row">
                        <Itempromotion />
                        <Itempromotion />
                        <Itempromotion />
                    </div>
                </div>
            </section>

        </div>
    );
}