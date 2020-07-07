import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import Smartphone from "./listsmartphone";
import Laptop from "./listlaptop";
import Promotion from "./listpromotion";

export default function Baitap() {
    return (
        <div>
            <Header />
            <Carousel />
            <Smartphone />
            <Laptop />
            <Promotion />

        </div>
    );
}