import React, { useState, useCallback } from "react";
import "../style/Contentbar.css";
import {
  Calendar,
  momentLocalizer,
  globalizeLocalizer,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import globalize from "globalize";
import "moment/locale/hi";
import { ImCross } from "react-icons/im";
import { MdDeleteOutline } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import Image from "../images/emptyImage.png";
import { AiOutlineEdit } from "react-icons/ai";

const Contentbar = ({ language }) => {
  const initialValue = {
    title: "",
    image: "",
    description: "",
    start: "",
    end: "",
    id:""
  };

  const localizer =
    language === "hindi"
      ? momentLocalizer(moment)
      : globalizeLocalizer(globalize);
  const [eventPicker, setEventPicker] = useState(false);
  const [eventShower, setEventShower] = useState(false);
  const [editbutton, setEditbutton] = useState(false);
  const [eventStart, setEventStart] = useState("");
  const [eventEnd, setEventEnd] = useState("");
  const [input, setInput] = useState(initialValue);
  const [src, selectFile] = useState(null);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [eventShowerData, setEventShowerData] = useState("");
  const [eventArray, setEventArray] = useState([]);
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  console.log("src", src);

  // Making Event here:
  const handleSelectSlot = useCallback(({ start, end }) => {
    setEventStart(start);
    setEventEnd(end);
    if (eventPicker === false) {
      setEventPicker(true);
    }
  }, [eventPicker]);

  // Selecting slot here:
  const selectEvent = (event) => {
    setEventShower(true);
    setEventShowerData(event);
    console.info("[handleSelected - event]", event);
  };

  //Onchange event here:
  const handleOnchange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    }
    if (e.target.name === "description") {
      setDescription(e.target.value);
    }
    if (e.target.name === "image") {
      selectFile(URL.createObjectURL(e.target.files[0]));
      return (input["image"] = URL.createObjectURL(e.target.files[0]));
    }
    input["start"] = eventStart;
    input["end"] = eventEnd;
    input["id"]=Math.floor(Math.random() * 100)
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log("input here", input);
  };

  //Event Array data here:
  const submitHandler = (e) => {
    e.preventDefault();
    setEventArray([...eventArray, input]);
    console.log("setEventArray", eventArray);
    setEventPicker(false);
    setTitle("");
    selectFile("");
    setDescription("");
    setInput({});
  };

  // change color events:
  const eventStyleGetter = (event, start, end, isSelected) => {
    const backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    const style = {
      backgroundColor: backgroundColor,
      borderRadius: "0px",
      opacity: 0.8,
      color: "black",
      border: "0px",
      display: "block",
    };
    return {
      style: style,
    };
  };

  //Edit button handler
  const editButtonHandler = () => {
    setEditbutton(true);
  };

  // Edit onchange Handler
  const editOnChangeHandler = (e) => {
    if (e.target.name === "startdate") {
      setStartDate(e.target.value);
    }
    if (e.target.name === "enddate") {
      setEndDate(e.target.value);
    }
  };

  //editSubmitHandler
  const editSubmitHandler = () => {
    console.log("edit-SUBMIT-handler", eventArray);
    console.log("event-picker",eventShowerData);
    console.log("startDate",new Date(startdate));
    console.log("endDate",new Date(enddate));
    setEventArray(
      eventArray.map((elem) => {
        console.log(eventShowerData.id,"eventShowerData.id")
        console.log(elem.id,"emenet id")
        if (eventShowerData.id === elem.id) {
          return {
            ...elem,
            start: new Date(startdate),
            end: new Date(enddate)
          };
        }
        return elem;
      }))
    console.log("EDITED DATA HERE:",eventArray)
    setEditbutton(false);
    setEventShower(false);
  };
  return (
    <div id="contentbar">
      {eventShower ? (
        <div className="Eventsshower">
          <div className="events-shower-title">
            <div className="event-shower-inner-title">
              <span>
                <b>Title:-</b>
              </span>
              <span>{eventShowerData.title}</span>
            </div>
            <div className="cross">
              <button
                className="eventCrossButton"
                onClick={() => setEventShower(false)}
                type="button"
              >
                <ImCross />
              </button>
            </div>
          </div>

          <div className="events-shower-image">
            <img
              src={eventShowerData.image}
              width="337px"
              height="200px"
              alt=""
            />
          </div>
          <div className="formDate">
            <div className="startdiv">
              <span className="clock">
                <FiClock />
              </span>
              <span>
                {eventShowerData.start.getFullYear()}-
                {eventShowerData.start.getMonth()}-
                {eventShowerData.start.getDate()}
              </span>
            </div>
            <div className="to">to</div>
            <div className="enddiv">
              <span className="clock">
                <FiClock />
              </span>
              <span>
                {eventShowerData.end.getFullYear()}-
                {eventShowerData.end.getMonth()}-{eventShowerData.end.getDate()}
              </span>
            </div>
          </div>
          <div className="events-shower-description">
            <span>
              <b>Description:-</b>
            </span>
            <span>{eventShowerData.description}</span>
          </div>
          <div className="editdiv">
            <button
              type="button"
              className="editbutton"
              onClick={(event) => editButtonHandler(event)}
            >
              <AiOutlineEdit />
            </button>
          </div>
          {editbutton ? (
            <div className="edit-main-div">
              <div className="editcontainer">
                <div className="editStart">
                  <div>
                    <label>Start</label>
                  </div>
                  <input
                    type="date"
                    className="editStartInput"
                    name="startdate"
                    value={startdate}
                    onChange={editOnChangeHandler}
                  />
                </div>
                <div>to</div>
                <div className="editEnd">
                  <div>
                    <label>End</label>
                  </div>
                  <input
                    type="date"
                    className="editEndInput"
                    name="enddate"
                    value={enddate}
                    onChange={editOnChangeHandler}
                  />
                </div>
                <button
                  className="editCrossButton"
                  onClick={() => setEditbutton(false)}
                  type="button"
                >
                  <ImCross />
                </button>
                <div className="edit-button-div"><button type="button" className="edit-submit-button" onClick={editSubmitHandler}>submit</button></div>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}

      {eventPicker === true ? (
        <form className="classform" onSubmit={submitHandler}>
          <div id="formTop">
            <span id="formTitle">
              <input
                type="text"
                name="title"
                value={title}
                className="inputformtitle"
                placeholder="Title here..."
                onChange={handleOnchange}
                required
              />
            </span>
            <span>
              <button
                className="formCrossButton"
                onClick={() => setEventPicker(false)}
                type="button"
              >
                <ImCross />
              </button>
            </span>
          </div>
          <div className="formImage">
            {src ? (
              <img src={src} width="327px" height="200px" alt="" />
            ) : (
              <img src={Image} width="327px" height="200px" alt="" />
            )}
          </div>
          <div className="formDate">
            <div className="startdiv">
              <span className="clock">
                <FiClock />
              </span>
              <span>
                {eventStart.getFullYear()}-{eventStart.getMonth()}-
                {eventStart.getDate()}
              </span>
            </div>
            <div className="to">to</div>
            <div className="enddiv">
              <span className="clock">
                <FiClock />
              </span>
              <span>
                {eventEnd.getFullYear()}-{eventEnd.getMonth()}-
                {eventEnd.getDate()}
              </span>
            </div>
          </div>
          <textarea
            rows="3"
            cols="41"
            name="description"
            value={description}
            placeholder="Enter Description here.."
            className="formTextArea"
            onChange={handleOnchange}
          />
          <div className="imageInput">
            <input
              type="file"
              accepts="image/*"
              name="image"
              onChange={handleOnchange}
            />
          </div>
          <div className="formFooter">
            <span id="formSubmitButton">
              <button class="btn btn-primary">Submit</button>
            </span>
            <span>
              <button
                className="formButton"
                id="formDeleteButton"
                type="button"
              >
                <MdDeleteOutline />
              </button>
            </span>
          </div>
        </form>
      ) : null}
      <Calendar
        events={eventArray}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        selectable
        defaultView="day"
        defaultDate={new Date(2022, 10, 21)}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={selectEvent}
        eventPropGetter={eventStyleGetter}
        views={["month", "week", "day"]}
      />
    </div>
  );
};

export default Contentbar;
