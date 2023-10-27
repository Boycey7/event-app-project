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
      console.log(response.data);
      setEvents(response.data);
    });
  };

  useEffect(() => {
    refreshList();
  }, []);

  // useEffect(() => {
  //     console.log(events)
  // }, [events])

  return (
    <div className="bg-gray-100 pb-12">
      <div className="px-8 pt-8 pb-4 mb-8 bg-purple-200 text-slate-800">
        <h1 className="mb-2 text-3xl font-bold">What's on in Town?</h1>
        <p className="text-xl">Here is what's happening...</p>
        <a href="http://localhost:3000/add-event">
            <button className="bg-slate-600 text-slate-100 py-2 px-4 rounded-md mt-2
            ">Add an event</button>
        </a>
      </div>
      <div className="">
          <div className="flex flex-wrap justify-center gap-4">
            {
              events?.map((event => {
                console.log(event)
                return (
                    <Event 
                        title={event.title}
                        location={event.location}
                        dateAndTime={event.dateAndTime}
                        description={event.description}
                    />
                )
              }))
            }
          </div>
          
              </div>
      </div>
  );
};

export default Dashboard;
