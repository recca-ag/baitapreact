import React from "react";
import Itemsmartphone from "./itemsmartphone";

export default function Smartphone() {
    return (
        <div>
            <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
                <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    <Itemsmartphone />
                    <Itemsmartphone />
                    <Itemsmartphone />
                    <Itemsmartphone />
                </div>
            </section>

        </div>
    )
}