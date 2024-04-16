import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function BookVenuePage() {
    const [currentEvent, setCurrentEvent] = useState(null);
    const [events, setEvents] = useState([]);
    
    const handleDateClick = (selectInfo) => {
        setCurrentEvent({ start: selectInfo.dateStr });
    };

    const addEvent = (formData) => {
        const startTime = new Date(formData.start).toLocaleTimeString('en-US', { hour12: false });
        const endTime = new Date(formData.end).toLocaleTimeString('en-US', { hour12: false });
        const eventDate = new Date(formData.start).toISOString().split('T')[0];
    
        const newEvent = {
            id: formData.clubName,
            start: formData.start,
            end: formData.end,
            title: formData.title,
            extendedProps: {
                venueName: formData.venueName,
                isUserEvent: true,
            },
        };
    
        setEvents((prevEvents) => [...prevEvents, newEvent]);
        setCurrentEvent(null); // Hide form after adding event
    
        const eventData = {
            ...formData,
            start: startTime, // Convert start time to MySQL-compatible format
            end: endTime, // Convert end time to MySQL-compatible format
            date: eventDate,
        };
    
        // Send event data to the server
        fetch('http://localhost:3001/api/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(response => {
            if (response.ok) {
                console.log('Event added successfully');
            } else {
                console.error('Failed to add event');
            }
        })
        .catch(error => {
            console.error('Error adding event:', error);
        });
    };
    

    const deleteEvent = (id) => {
        setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
    };

    const renderEventContent = (eventInfo) => (
        <>
            <b>{eventInfo.event.title}</b> <i>by {eventInfo.event.extendedProps.clubName}</i>
            {eventInfo.event.extendedProps.isUserEvent && (
                <button onClick={() => deleteEvent(eventInfo.event.id)} style={{ marginLeft: "5px", cursor: "pointer" }}>
                    Delete
                </button>
            )}
        </>
    );

    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    start: "today prev,next",
                    center: "title",
                    end: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                height="90vh"
                dateClick={handleDateClick}
                events={events}
                eventContent={renderEventContent} // Custom render function
            />
            {currentEvent && <EventForm onSubmit={addEvent} onCancel={() => setCurrentEvent(null)} event={currentEvent} />}
        </div>
    );
}

function EventForm({ onSubmit, onCancel, event }) {
    const [formData, setFormData] = useState({
        clubName: 0,
        title: "",
        start: Date.now(),
        end: Date.now(),
        venueName: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     onSubmit(formData);
    //     onCancel(); // Hide form after submission
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onCancel(); // Hide form after submission
    };

    return (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", zIndex: 1000, width: "400px", maxWidth: "80%" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Event</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Event Name" onChange={handleChange} value={formData.title} required />
                <input type="text" name="clubName" placeholder="Club Id" onChange={handleChange} value={formData.clubName} required />
                <input type="datetime-local" name="start" onChange={handleChange} value={formData.start} required />
                <input type="datetime-local" name="end" onChange={handleChange} value={formData.end} required />
                <input type="text" name="venueName" placeholder="Venue Name" onChange={handleChange} value={formData.venueName} required />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <button type="button" onClick={onCancel} style={{ padding: "10px 20px", borderRadius: "5px", border: "none", backgroundColor: "#ccc", cursor: "pointer" }}>Cancel</button>
                    <button type="submit" style={{ padding: "10px 20px", borderRadius: "5px", border: "none", backgroundColor: "#007bff", color: "#fff", cursor: "pointer" }}>Add Event</button>
                </div>
            </form>
        </div>
    );
}

export default BookVenuePage;
