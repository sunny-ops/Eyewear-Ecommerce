import React, { useState } from "react";
import data from "../../data/data";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductInfo.scss";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Display from "../Home/Display";
import glasses from "../../data/data";

function ProductInfo() {
  const navigate = useNavigate();
  const params = useParams();
  const { id, name } = useParams();
  const [age, setAge] = React.useState("");
  const [selected, setSelected] = React.useState(new Array(7).fill(false));

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const selectColor = (index) => {
    let newArr = new Array(7).fill(false);
    newArr[index] = true;
    setSelected(newArr);
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
              className="anticon anticon-arrow-left"
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
              className="product-modal-image-collection-wrapper"
              role="presentation"
            >
              <img
                alt=""
                className="product-modal-image-collection-img is-img-loaded"
                src={process.env.PUBLIC_URL + glasses[id - 1].img}
              />
            </div>
            <div
              className="product-modal-image-collection-wrapper"
              role="presentation"
            >
              <img
                alt=""
                className="product-modal-image-collection-img is-img-loaded"
                src={process.env.PUBLIC_URL + glasses[2].img}
              />
            </div>
            <div
              className="product-modal-image-collection-wrapper"
              role="presentation"
            >
              <img
                alt=""
                className="product-modal-image-collection-img is-img-loaded"
                src={process.env.PUBLIC_URL + glasses[3].img}
              />
            </div>
          </div>
          <div className="product-modal-image-wrapper">
            <img
              alt="Burnikk"
              className="product-modal-image is-img-loaded"
              src={process.env.PUBLIC_URL + glasses[id - 1].img}
            />
          </div>
          <div className="product-modal-details">
            <div className="text-subtle mb-3">{glasses[id - 1].brand}</div>
            <h1 className="margin-top-0 mb-5">{glasses[id - 1].name}</h1>
            <div className="mb-5">{glasses[id - 1].desc}</div>
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
                  <MenuItem value={10}>{glasses[id - 1].size[0]} mm</MenuItem>
                  <MenuItem value={20}>{glasses[id - 1].size[1]} mm</MenuItem>
                  <MenuItem value={30}>{glasses[id - 1].size[2]} mm</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <div className="mt-3 mb-5">
              <span className="text-subtle">Choose Color</span>
              <br />
              <br />
              <div className="color-chooser">
                {glasses[id - 1].color.map((color, index) => (
                  <div
                    key={index}
                    className={
                      selected[index]
                        ? "color-item color-item-selected"
                        : "color-item"
                    }
                    role="presentation"
                    style={{ backgroundColor: color }}
                    onClick={() => selectColor(index)}
                  ></div>
                ))}
              </div>
            </div>
            <h1 className="mb-5">${glasses[id - 1].price}.00</h1>
            <div className="product-modal-action">
              <button className="button button-small " type="button">
                Add To Basket
              </button>
            </div>
          </div>
        </div>
        <Display value="Recommended" margin="0 0"></Display>
      </div>
    </div>
  );
}

export default ProductInfo;
