import React, { useRef } from "react";
import "./search.bar.css";
import { Col, Form, FormGroup } from "reactstrap";

import { BASE_URL } from "./../utils/config";

import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const locationRef = useRef("");
  // const distanceRef = useRef(0);
  // const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value;
    // const distance = distanceRef.current.value;
    // const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "") {
      return alert("Location is required!");
    }

    try {
      const res = await fetch(
        `${BASE_URL}/tours/search/getTourBySearch?city=${location}`
      );

      if (!res.ok) {
        alert("Something went wrong");
        return;
      }

      const result = await res.json();

      navigate(`/tours/search?city=${location}`, { state: result.data });
    } catch (err) {
      console.error(err);
      alert("Error while fetching tours");
    }
  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                ref={locationRef}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault(); // stops the form from refreshing the page
                    searchHandler();
                  }
                }}
              />
            </div>
          </FormGroup>

          <span className="search__icon" type="submit" onClick={searchHandler}>
            <i className="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
