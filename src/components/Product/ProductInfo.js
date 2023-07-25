import React, { useState } from "react";
import data from "../../data/data";
import { useNavigate } from "react-router-dom";
import "./ProductInfo.scss";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Display from "../Home/Display";

function ProductInfo() {
  const navigate = useNavigate();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div style={{ backgroundColor: "#f9f9f9" }}>
      <div className="prduct-view">
        <div
          onClick={() => {
            navigate("/shop");
          }}
          className="py-3"
        >
          <h3
            className="button-link d-inline-flex"
            style={{ cursor: "pointer" }}
          >
            <span
              role="img"
              aria-label="arrow-left"
              class="anticon anticon-arrow-left"
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="arrow-left"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
              </svg>
            </span>
            &nbsp; Back to shop
          </h3>
        </div>
        <div className="product-modal">
          <div className="product-modal-image-collection">
            <div
              class="product-modal-image-collection-wrapper"
              role="presentation"
            >
              <img
                alt=""
                className="product-modal-image-collection-img is-img-loaded"
                src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&amp;token=be15689c-e12c-4829-9d78-32395ef1e3f7"
              />
            </div>
            <div
              className="product-modal-image-collection-wrapper"
              role="presentation"
            >
              <img
                alt=""
                className="product-modal-image-collection-img is-img-loaded"
                src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FVoHKtd0erYsCIsVv9lDz?alt=media&amp;token=49ca485e-f76b-4ff3-a406-356a58ec30df"
              />
            </div>
            <div
              className="product-modal-image-collection-wrapper"
              role="presentation"
            >
              <img
                alt=""
                className="product-modal-image-collection-img is-img-loaded"
                src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FT913J5mmk503vnIrmlUb?alt=media&amp;token=99a49867-2afb-4fcc-abf4-8da7afde0f3b"
              />
            </div>
          </div>
          <div className="product-modal-image-wrapper">
            <img
              alt="Burnikk"
              class="product-modal-image is-img-loaded"
              src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&amp;token=be15689c-e12c-4829-9d78-32395ef1e3f7"
            />
          </div>
          <div className="product-modal-details">
            <div className="text-subtle mb-3">Sexbomb</div>
            <h1 className="margin-top-0 mb-5">Burnikk</h1>
            <div className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              placeat similique dicta nulla praesentium deserunt. Corporis
              repellendus deleniti dolores eligendi.
            </div>
            <div className="divider mb-5"></div>
            <span className="text-subtle mb-5">Lens Width and Frame Size</span>
            <Box sx={{ minWidth: 120 }} className="mt-3">
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ fontSize: "1.5rem" }}
                >
                  size
                  {/* -Select Size- */}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <div className="mt-3 mb-5">
              <span className="text-subtle">Choose Color</span>
              <br />
              <br />
              <div className="color-chooser">
                <div
                  className="color-item"
                  role="presentation"
                  style={{ backgroundColor: "rgb(0, 0, 0)" }}
                ></div>
                <div
                  className="color-item"
                  role="presentation"
                  style={{ backgroundColor: "rgb(197, 0, 197)" }}
                ></div>
                <div
                  className="color-item"
                  role="presentation"
                  style={{ backgroundColor: "rgb(0, 77, 132)" }}
                ></div>
              </div>
            </div>
            <h1 className="mb-5">$240.00</h1>
            <div class="product-modal-action">
              <button class="button button-small " type="button">
                Add To Basket
              </button>
            </div>
          </div>
        </div>
        <Display
          style={{ margin: "0 0 !important", paddingRight: "100px" }}
        ></Display>
      </div>
    </div>
  );
}

export default ProductInfo;
