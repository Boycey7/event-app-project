"use client";
import React from "react";
import { useState, useEffect } from "react";
import Event from "@/components/Event";

// create event card -
// for now just use divs

// receive post data from the server
// update apiClient

// map through the data and create card for each

const Dashboard = (props) => {
  const [events, setEvents] = useState([]);
  const [current, setCurrent] = useState(undefined);

  const refreshList = () => {
    props.client.getEvents().then((response) => {
      setEvents(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    refreshList();
  }, []);

  // useEffect(() => {
  //     console.log(events)
  // }, [events])

  return (
    <div>
      <div className="bg-purple-200 px-8 pt-8 pb-4 text-slate-800 mb-8">
        <h1 className="text-3xl font-bold mb-2">What's on in Town?</h1>
        <p className="text-xl">Here is what's happening...</p>
      </div>
      <div className="">
          <div className="flex flex-wrap gap-4 justify-center">
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
          </div>
              </div>
      </div>
  );
};

export default Dashboard;
