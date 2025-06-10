import { useAnimate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {CountdownList} from "../mockData/data.js";
import {Link, useParams} from "react-router";

// NOTE: Change this date to whatever date you want to countdown to :)
export default function Countdown() {
    const {slugs} = useParams();
    const getData = CountdownList.find(f => f.slugs === slugs);

    if (getData === undefined) {
        return (
            <div className="py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                            Countdown
                        </h2>
                        <p className="mt-6 text-lg/8 text-gray-600">
                            There is countdown can you check!
                        </p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {CountdownList.map((item) => (
                            <li key={item.id}>
                                <Link to={item.slugs} className="flex items-center gap-x-6">
                                    <img alt="" src={item.imageUrl} className="size-16 rounded-full" />
                                    <div>
                                        <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{item.title}</h3>
                                        <p className="text-sm/6 font-semibold text-amber-500">{item.event_date}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

    const COUNTDOWN_FROM = getData.event_date;
    const COUNTDOWN_NAME = getData.title

    useEffect(() => {
        document.title = COUNTDOWN_NAME;
    },[COUNTDOWN_NAME]);


    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    // NOTE: Framer motion exit animations can be a bit buggy when repeating
    // keys and tabbing between windows. Instead of using them, we've opted here
    // to build our own custom hook for handling the entrance and exit animations
    const useTimer = (unit) => {
        const [ref, animate] = useAnimate();

        const intervalRef = useRef(null);
        const timeRef = useRef(0);

        const [time, setTime] = useState(0);

        useEffect(() => {
            intervalRef.current = setInterval(handleCountdown, 1000);

            return () => clearInterval(intervalRef.current || undefined);
        }, []);

        const handleCountdown = async () => {
            const end = new Date(COUNTDOWN_FROM);
            const now = new Date();
            const distance = +end - +now;

            let newTime = 0;

            if (unit === "Day") {
                newTime = Math.floor(distance / DAY);
            } else if (unit === "Hour") {
                newTime = Math.floor((distance % DAY) / HOUR);
            } else if (unit === "Minute") {
                newTime = Math.floor((distance % HOUR) / MINUTE);
            } else {
                newTime = Math.floor((distance % MINUTE) / SECOND);
            }

            if (newTime !== timeRef.current) {
                // Exit animation
                await animate(
                    ref.current,
                    { y: ["0%", "-50%"], opacity: [1, 0] },
                    { duration: 0.35 }
                );

                timeRef.current = newTime;
                setTime(newTime);

                // Enter animation
                await animate(
                    ref.current,
                    { y: ["50%", "0%"], opacity: [0, 1] },
                    { duration: 0.35 }
                );
            }
        };

        return { ref, time };
    };


    const CountdownItem = ({unit, text}) => {
        const {ref, time} = useTimer(unit);

        return (
            <div
                className="flex h-24 w-1/4 flex-col items-center justify-center gap-1 border-r-[1px] border-slate-200 font-mono md:h-36 md:gap-2">
                <div className="relative w-full overflow-hidden text-center">
                <span
                    ref={ref}
                    className="block text-2xl font-medium text-black md:text-4xl lg:text-6xl xl:text-7xl"
                >
                  {time}
                </span>
                </div>
                <span className="text-xs font-light text-slate-500 md:text-sm lg:text-base">
                {text}
              </span>
            </div>
        );
    };

    const ShiftingCountdown = () => {
        return (
            <div className="container bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl font-semibold tracking-tight text-gray-900">{COUNTDOWN_NAME}</h1>
                </div>
                <div className="mx-auto flex w-full max-w-5xl items-center bg-white rounded-md shadow-xl">
                    <CountdownItem unit="Day" text="days"/>
                    <CountdownItem unit="Hour" text="hours"/>
                    <CountdownItem unit="Minute" text="minutes"/>
                    <CountdownItem unit="Second" text="seconds"/>
                </div>
            </div>
        );
    };

    return (
        <>
            <ShiftingCountdown />
        </>
    )
};