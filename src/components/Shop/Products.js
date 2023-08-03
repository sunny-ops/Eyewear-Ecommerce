import React from "react";
import "./Products.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Products() {
  const data = useSelector((state) => state.dataInfoStore.dataInfo);
  const initialGlasses = [];
  for (let obj of data) {
    const glass = {
      id: obj.id,
      name: obj.name,
      brand: obj.brand,
      price: obj.price,
      img: obj.img,
      // style: { backgroundImage: process.env.PUBLIC_URL + obj.img },
      style: { backgroundImage: `url(${process.env.PUBLIC_URL + obj.img})` },
      isHovered: false,
    };
    initialGlasses.push(glass);
  }
  // console.log("data", data);
  // console.log(initialGlasses);
  const [glasses, setGlasses] = useState(initialGlasses);

  // const [glasses, setGlasses] = useState([
  //   {
  //     id: 0,
  //     imgURL:
  //       "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
  //     name: "Burnikk",
  //     category: "Sexbomb",
  //     price: 67.0,
  //     style: {
  //       backgroundImage:
  //         "url(https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7)",
  //     },
  //     isHovered: false,
  //   },
  //   {
  //     id: 1,
  //     imgURL:
  //       "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
  //     name: "Kibal Batal",
  //     category: "Kibal Black",
  //     price: 78,
  //     style: {
  //       backgroundImage:
  //         "url(https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540)",
  //     },
  //     isHovered: false,
  //   },
  //   {
  //     id: 2,
  //     imgURL:
  //       "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a",
  //     name: "Very Nice",
  //     category: "Salt maalat",
  //     price: 79,
  //     style: {
  //       backgroundImage:
  //         "url(https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a)",
  //     },
  //     isHovered: false,
  //   },
  //   {
  //     id: 3,
  //     imgURL:
  //       "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYVPdTsyxJybMCsdKpXhq?alt=media&token=23d7673c-a0bf-4dcb-89f1-8482446b56be",
  //     name: "Buldit",
  //     category: "Salt Maalat",
  //     price: 80,
  //     style: {
  //       backgroundImage:
  //         "url(https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYVPdTsyxJybMCsdKpXhq?alt=media&token=23d7673c-a0bf-4dcb-89f1-8482446b56be)",
  //     },
  //     isHovered: false,
  //   },
  //   {
  //     id: 4,
  //     imgURL:
  //       "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYZ7LM3vZjWbIIJH2tgEb?alt=media&token=5e722063-a792-4502-9f6e-c3df1581aa9c",
  //     name: "Balakubak",
  //     category: "Betsin Maalat",
  //     price: 674,
  //     style: {
  //       backgroundImage:
  //         "url(https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYZ7LM3vZjWbIIJH2tgEb?alt=media&token=5e722063-a792-4502-9f6e-c3df1581aa9c)",
  //     },
  //     isHovered: false,
  //   },
  //   {
  //     id: 5,
  //     imgURL:
  //       "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FbS1hHdO7NvbR1yN5ZPlR?alt=media&token=809a3249-f83d-4aec-b134-34a65ce2ce10",
  //     name: "Tiktilaok Manok",
  //     category: "Sexbomb",
  //     price: 129.0,
  //     style: {
  //       backgroundImage:
  //         "url(https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FbS1hHdO7NvbR1yN5ZPlR?alt=media&token=809a3249-f83d-4aec-b134-34a65ce2ce10)",
  //     },
  //     isHovered: false,
  //   },
  //   {
  //     id: 6,
  //     imgURL:
  //       "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYZ7LM3vZjWbIIJH2tgEb?alt=media&token=5e722063-a792-4502-9f6e-c3df1581aa9c",
  //     name: "Balakubak",
  //     category: "Betsin Maalat",
  //     price: 142,
  //     style: {
  //       backgroundImage:
  //         "url(https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYZ7LM3vZjWbIIJH2tgEb?alt=media&token=5e722063-a792-4502-9f6e-c3df1581aa9c)",
  //     },
  //     isHovered: false,
  //   },
  //   {
  //     id: 7,
  //     imgURL:
  //       "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FaubOenOJu42CNp4zXTLX?alt=media&token=1d5fd281-b9cc-499b-94a5-225273b1eabc",
  //     name: "Pitaklan",
  //     category: "Black Kibal",
  //     price: 170,
  //     style: {
  //       backgroundImage:
  //         "url(https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FaubOenOJu42CNp4zXTLX?alt=media&token=1d5fd281-b9cc-499b-94a5-225273b1eabc)",
  //     },
  //     isHovered: false,
  //   },
  //   {
  //     id: 8,
  //     imgURL:
  //       "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
  //     name: "Burnikk",
  //     category: "Sexbomb",
  //     price: 174,
  //     style: {
  //       backgroundImage:
  //         "url(https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7)",
  //     },
  //     isHovered: false,
  //   },
  //   {
  //     id: 9,
  //     imgURL:
  //       "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYjDAQSbkSZlartelhFyV?alt=media&token=9b0bdd5e-eb91-4d99-a52f-298c12879fa3",
  //     name: "Sipon Malapot",
  //     category: "Salt",
  //     price: 240,
  //     style: {
  //       backgroundImage:
  //         "url(https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYjDAQSbkSZlartelhFyV?alt=media&token=9b0bdd5e-eb91-4d99-a52f-298c12879fa3)",
  //     },
  //     isHovered: false,
  //   },
  //   {
  //     id: 10,
  //     imgURL:
  //       "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYVPdTsyxJybMCsdKpXhq?alt=media&token=23d7673c-a0bf-4dcb-89f1-8482446b56be",
  //     name: "Buldit",
  //     category: "Salt Maalat",
  //     price: 250,
  //     style: {
  //       backgroundImage:
  //         "url(https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYVPdTsyxJybMCsdKpXhq?alt=media&token=23d7673c-a0bf-4dcb-89f1-8482446b56be)",
  //     },
  //     isHovered: false,
  //   },
  //   {
  //     id: 11,
  //     imgURL:
  //       "url(https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540)",
  //     name: "Kibal Batal",
  //     category: "Kibal Black",
  //     price: 174,
  //     style: {
  //       backgroundImage:
  //         "url(https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540)",
  //     },
  //     isHovered: false,
  //   },
  // ]);

  const hoverFn = (v, id) => {
    const newGlasses = [...glasses];
    console.log("v", v);
    newGlasses[id - 1] = {
      ...glasses[id - 1],
      style: {
        backgroundImage: `url(${process.env.PUBLIC_URL + v.img})`,
        height: "60px",
        backgroundSize: "80%",
      },
      isHovered: true,
    };
    setGlasses(newGlasses);
  };

  const leaveFn = (v, id) => {
    const newGlasses = [...glasses];
    newGlasses[id - 1] = {
      ...glasses[id - 1],
      style: {
        backgroundImage: `url(${process.env.PUBLIC_URL + v.img})`,
        height: "100px",
        backgroundSize: "100%",
      },
      isHovered: false,
    };
    setGlasses(newGlasses);
  };

  return (
    <>
      <div className="product-grid">
        {glasses.map((v) => {
          return (
            <div
              className="product-display"
              role="presentation"
              key={v.id}
              style={{
                position: "relative",
                height: "232px",
                overflow: "hidden",
              }}
              onMouseEnter={() => {
                hoverFn(v, v.id);
              }}
              onMouseLeave={() => {
                leaveFn(v, v.id);
              }}
            >
              <div
                className="product-display-img-products"
                // style={{ backgroundImage: `url(${v.imgURL})` }}
                style={v.style}
              ></div>
              <div className="product-display-details">
                <h5 className="text-center">{v.name}</h5>
                <p className="text-subtle text-italic product-card-brand">
                  {v.category}
                </p>
                <h4 className="product-price">${v.price}.00</h4>
              </div>
              <button
                className="product-card-button button-small button button-block "
                type="button"
                style={{
                  // opacity: v.isHovered ? "1" : "0",
                  bottom: v.isHovered ? "0" : "-44px",
                }}
              >
                Add to basket
              </button>
            </div>
          );
        })}
      </div>
      <div className="d-flex align-items-center justify-content-center padding-l">
        <button className="button button-small" type="button">
          Show More Items
        </button>
      </div>
    </>
  );
}

export default Products;
