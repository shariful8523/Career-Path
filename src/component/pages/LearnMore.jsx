import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const LearnMore = () => {
    const items = useLoaderData();


    return (
        <div>
            <header className="p-1">
             <Navbar></Navbar>
            </header>

            <main className="">
                <div className="p-6 mt-20  ">
                    <div className="card card-compact bg-base-100 w-96  mx-auto shadow-xl">
                        <figure>
                            <img
                                src={items.image}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{items.serviceName}</h2>
                            <p > <spam className="text-xl font-bold" >Details:</spam> {items.Details}</p>
                            <div className="card-actions justify-end">
                                <NavLink to={"/"} className="btn btn-primary">Return Home</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LearnMore;
