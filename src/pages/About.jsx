import {CountdownList} from "../mockData/data.js";
import {Link} from "react-router";
import React from "react";

export default function About() {

    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                        About Me
                    </h2>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
                        best results for our clients.
                    </p>
                </div>
            </div>
        </div>
    )
};