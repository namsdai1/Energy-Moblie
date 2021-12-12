import "./newProduct.css";
import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { store } from "../../apis/fakeStoreApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { storage } from "../../firebase";
import { fetchCategories } from "../../redux/actions/categoryAction";
import Select from "react-select";

const options = [
  { value: "61751425be6eb74ad81eda0f", label: "IPHONE" },
  { value: "61751444be6eb74ad81eda10", label: "Xiaomi" },
  { value: "61751451be6eb74ad81eda11", label: "SamSung" },
  { value: "61751456be6eb74ad81eda12", label: "Huawei" },
];

export default function NewProduct() {
  const categories = useSelector(
    (state) => state.allCategories.categories.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  console.log("Categories: ", categories);

  const [nameProduct, setNameProduct] = useState("NAME");
  const [image, setImage] = useState("619338047ef0c50c8ce5c4ee");
  const [imageProduct, setImageProduct] = useState([]);
  const [id_category, setId_category] = useState(null);
  const [priceProduct, setPriceProduct] = useState(123456);
  const [quantity, setQuantity] = useState(11);
  const [description, setDescription] = useState("DESCRITION");
  const [chipProduct, setChipProduct] = useState("CHIP");
  const [romProduct, setRomProduct] = useState("ROM");
  const [ramProduct, setRamProduct] = useState("RAM");
  const [pinProduct, setPinProduct] = useState("PIN");
  const [camera, setCamera] = useState("CAMERA");
  const [stock, setStock] = useState(true);

  const handleSelectCate = (id_category) => {
    setId_category(id_category.value);
  };

  const listCategories = () => {
    return <Select onChange={handleSelectCate} options={options} />;
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // useEffect(() => {
  //   handleUpload();
  // }, [imageProduct]);

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

  const _insert = async (
    nameProduct,
    price_product,
    description_product,
    quantity_product,
    id_category,
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
      id_category: id_category,
      nameImage: imageProduct,
      ram_product: ram_product,
      rom_product: rom_product,
      camera_late_product: camera_late_product,
      chip_product: chip_product,
      pin_product: pin_product,
    };
    // await handleUpload();
    await axios
      .post("http://localhost:3000/product", Data)
      .then((response) => {
        console.log("response: ");
        console.log(response);
        toast("Thêm thành công!");
      })
      .catch((error) => {
        toast("Thêm thất bại >>> ", error);
        console.error(">>>>>>>>", error);
      });
    setImageProduct([]);
  };

  const insertProduct = () => {
    _insert(
      nameProduct,
      priceProduct,
      description,
      quantity,
      id_category,
      imageProduct,
      ramProduct,
      romProduct,
      camera,
      chipProduct,
      pinProduct
    );
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Name</label>
          <input
            type="text"
            name="nameProduct"
            placeholder="IPorn 13"
            value={nameProduct}
            onChange={(e) => setNameProduct(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            type="number"
            name="priceProduct"
            placeholder="125000"
            value={priceProduct}
            onChange={(e) => setPriceProduct(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            placeholder="13"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            name="description"
            placeholder="Sản phẩm của Iporn"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Chip</label>
          <input
            type="text"
            name="chipProduct"
            placeholder="Apple A14 Bionic"
            value={chipProduct}
            onChange={(e) => setChipProduct(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Rom</label>
          <input
            type="text"
            name="romProduct"
            placeholder="128GB"
            value={romProduct}
            onChange={(e) => setRomProduct(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Ram</label>
          <input
            type="text"
            name="ramProduct"
            placeholder="8GB"
            value={ramProduct}
            onChange={(e) => setRamProduct(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Pin</label>
          <input
            type="text"
            name="pinProduct"
            placeholder="3687 mAh"
            value={pinProduct}
            onChange={(e) => setPinProduct(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Camera</label>
          <input
            type="text"
            name="camera"
            placeholder="3 Cam"
            value={camera}
            onChange={(e) => setCamera(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" onChange={handleChange} />
        </div>

        {/* <button onClick={() => insertProduct()} className="newProductButton">
          <span className="txtButton">CREATE</span>
        </button> */}
        <div className="selectCategoryBlock">{listCategories()}</div>
      </form>
      <div onClick={() => handleUpload()} className="addProductButton">
        <p className="txtButton">UPLOAD</p>
      </div>
      <div onClick={() => insertProduct()} className="addProductButton">
        <p className="txtButton">CREATE</p>
      </div>
      <ToastContainer />
    </div>
  );
}
