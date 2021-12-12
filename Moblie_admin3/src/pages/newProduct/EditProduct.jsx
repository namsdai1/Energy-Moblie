import "./editProduct.css";
import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { storage } from "../../firebase";
import Select from "react-select";
import { Link } from "react-router-dom";

const options = [
  { value: "61751425be6eb74ad81eda0f", label: "IPHONE" },
  { value: "61751444be6eb74ad81eda10", label: "Xiaomi" },
  { value: "61751451be6eb74ad81eda11", label: "SamSung" },
  { value: "61751456be6eb74ad81eda12", label: "Huawei" },
];

export default function EditProduct() {
  const product = useSelector((state) => state.product.data || {});
  const {
    _id,
    nameProduct,
    id_image,
    price_product,
    id_category,
    quantity_product,
    description_product,
  } = product;
  console.log("PRD >>> ", product);
  const [idProduct, setIdProduct] = useState(_id);
  const [name, setName] = useState(nameProduct);
  const [image, setImage] = useState(id_image);
  const [imageProduct, setImageProduct] = useState([]);
  const [category, setCategory] = useState(id_category);
  const [priceProduct, setPriceProduct] = useState(price_product);
  const [quantity, setQuantity] = useState(quantity_product);
  const [description, setDescription] = useState(
    description_product?.description_product
  );
  const [chipProduct, setChipProduct] = useState(description_product?.chip);
  const [romProduct, setRomProduct] = useState(description_product?.rom);
  const [ramProduct, setRamProduct] = useState(description_product?.ram);
  const [pinProduct, setPinProduct] = useState(description_product?.pin);
  const [camProduct, setCamProduct] = useState(
    description_product?.camera_late
  );
  const [stock, setStock] = useState(true);

  const handleSelectCate = (category) => {
    setCategory(category.value);
  };

  const listCategories = () => {
    return (
      <Select
        value={options.find((obj) => obj.value === category?._id)}
        onChange={handleSelectCate}
        options={options}
      />
    );
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    const arrayImg = [];
    const nameImage = image.name;
    const path = "products/" + nameImage;
    const uploadTask = storage.ref(path).put(image);
    await uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("products")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            arrayImg.push(url);
            setImageProduct(arrayImg);
            toast("Uploaded!");
          });
      }
    );
    return arrayImg;
  };

  const _update = async (
    nameProduct,
    price_product,
    description_product,
    quantity_product,
    category,
    imageProduct,
    ram_product,
    rom_product,
    camera_late_product,
    chip_product,
    pin_product
  ) => {
    const Data = {
      nameProduct: nameProduct,
      price_product: price_product,
      description_product: description_product,
      quantity_product: quantity_product,
      id_category: category,
      nameImage: imageProduct,
      ram_product: ram_product,
      rom_product: rom_product,
      camera_late_product: camera_late_product,
      chip_product: chip_product,
      pin_product: pin_product,
    };
    // await handleUpload();
    await axios
      .post(`http://localhost:3000/product/edit-product/${idProduct}`, Data)
      .then((response) => {
        console.log("response: ");
        console.log(response);
        toast("Cập nhật thành công!");
      })
      .catch((error) => {
        toast("Cập nhật thất bại >>> ", error);
        console.error(">>>>>>>>", error);
      });
    setImageProduct([]);
  };

  const updateProduct = () => {
    _update(
      name,
      priceProduct,
      description,
      quantity,
      category,
      imageProduct,
      ramProduct,
      romProduct,
      camProduct,
      chipProduct,
      pinProduct
    );
  };
  return (
    <div className="EditProduct">
      <h1 className="addProductTitle">Edit Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Name</label>
          <input
            type="text"
            placeholder="IPorn 13"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            type="number"
            placeholder="125000"
            value={priceProduct}
            onChange={(e) => setPriceProduct(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Quantity</label>
          <input
            type="number"
            placeholder="13"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="Sản phẩm của Iporn"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Chip</label>
          <input
            type="text"
            placeholder="Apple A14 Bionic"
            value={chipProduct}
            onChange={(e) => setChipProduct(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Rom</label>
          <input
            type="text"
            placeholder="128GB"
            value={romProduct}
            onChange={(e) => setRomProduct(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Ram</label>
          <input
            type="text"
            placeholder="8GB"
            value={ramProduct}
            onChange={(e) => setRamProduct(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Pin</label>
          <input
            type="text"
            placeholder="3687 mAh"
            value={pinProduct}
            onChange={(e) => setPinProduct(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Camera</label>
          <input
            type="text"
            placeholder="3687 mAh"
            value={camProduct}
            onChange={(e) => setCamProduct(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input
            type="text"
            placeholder="3687 mAh"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" onChange={handleChange} />
        </div>

        {/* <button
          onClick={() => console.log("CLICK")}
          className="EditProductButton"
        >
          <span className="txtButton">EDIT</span>
        </button> */}
        <div className="selectCategoryBlockUpdate">{listCategories()}</div>
      </form>
      <div onClick={() => handleUpload()} className="addProductButton">
        <p className="txtButton">UPLOAD</p>
      </div>
      <Link to={`/products`} className="link">
        <div onClick={() => updateProduct()} className="addProductButton">
          <p className="txtButton">UPDATE</p>
        </div>
      </Link>

      <ToastContainer />
    </div>
  );
}
