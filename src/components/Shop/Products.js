import React from "react";
import "./Products.css";

function Products() {
  const glasses = [
    {
      id: 1,
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
      name: "Burnikk",
      category: "Sexbomb",
      price: 67.0,
    },
    {
      id: 2,
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
      name: "Kibal Batal",
      category: "Kibal Black",
      price: 78,
    },
    {
      id: 3,
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a",
      name: "Very Nice",
      category: "Salt maalat",
      price: 79,
    },
    {
      id: 4,
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYVPdTsyxJybMCsdKpXhq?alt=media&token=23d7673c-a0bf-4dcb-89f1-8482446b56be",
      name: "Buldit",
      category: "Salt Maalat",
      price: 80,
    },
    {
      id: 5,
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYZ7LM3vZjWbIIJH2tgEb?alt=media&token=5e722063-a792-4502-9f6e-c3df1581aa9c",
      name: "Balakubak",
      category: "Betsin Maalat",
      price: 674,
    },
    {
      id: 6,
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FbS1hHdO7NvbR1yN5ZPlR?alt=media&token=809a3249-f83d-4aec-b134-34a65ce2ce10",
      name: "Tiktilaok Manok",
      category: "Sexbomb",
      price: 129.0,
    },
    {
      id: 7,
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYZ7LM3vZjWbIIJH2tgEb?alt=media&token=5e722063-a792-4502-9f6e-c3df1581aa9c",
      name: "Balakubak",
      category: "Betsin Maalat",
      price: 142,
    },
    {
      id: 8,
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FaubOenOJu42CNp4zXTLX?alt=media&token=1d5fd281-b9cc-499b-94a5-225273b1eabc",
      name: "Pitaklan",
      category: "Black Kibal",
      price: 170,
    },
    {
      id: 9,
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
      name: "Burnikk",
      category: "Sexbomb",
      price: 174,
    },
    {
      id: 10,
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYjDAQSbkSZlartelhFyV?alt=media&token=9b0bdd5e-eb91-4d99-a52f-298c12879fa3",
      name: "Sipon Malapot",
      category: "Salt",
      price: 240,
    },
    {
      id: 11,
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYVPdTsyxJybMCsdKpXhq?alt=media&token=23d7673c-a0bf-4dcb-89f1-8482446b56be",
      name: "Buldit",
      category: "Salt Maalat",
      price: 250,
    },
    {
      id: 12,
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
      name: "Kibal Batal",
      category: "Kibal Black",
      price: 174,
    },
  ];
  return (
    <>
      <div className="product-grid">
        {glasses.map((v) => {
          return (
            <div className="product-display" role="presentation" key={v.id}>
              <div className="product-display-img">
                <img
                  alt=""
                  className="product-card-img is-img-loaded"
                  src={v.imgURL}
                />
              </div>
              <div className="product-display-details">
                <h5 className="text-center">{v.name}</h5>
                <p className="text-subtle text-italic product-card-brand">
                  {v.category}
                </p>
                <h4 className="product-price">${v.price}.00</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
