import ReactDOM from "react-dom";
import { addProduct } from "@/store/service/productService";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { toast } from "react-toastify";

interface Props {
  showModal: boolean;
  closeModal: () => void;
}

const AddProduct = ({ showModal, closeModal }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [productName, setProductName] = useState<string>("");
  const [shortDesc, setShortDesc] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<File | null>(null);

  const handleClearData = () => {
    setProductName("");
    setShortDesc("");
    setDescription("");
    setPrice(0);
    setCategory("");
    setImgUrl(null);
  };

  const handleCloseModal = () => {
    handleClearData();
    closeModal();
  };

  const handleAddProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addProduct({
        productName,
        shortDesc,
        description,
        price,
        category,
        imgUrl,
        reviews: [
          {
            rating: 4.6,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        avgRating: 4.7,
      })
    );
    toast.success("Product added successfully");
    handleCloseModal();
  };
  return ReactDOM.createPortal(
    <Fragment>
      <div
        onClick={handleCloseModal}
        className={`fixed top-0 left-0 right-0 bottom-0 bg-black z-[90000] transition-all ease-out duration-[0.3s] ${
          showModal ? "visible opacity-55" : "opacity-0 invisible"
        }`}
      ></div>
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-[900000] bg-white w-[85%] sm:w-[60%] md:w-[50%] h-[500px] max-h-[500px] overflow-x-hidden overflow-y-auto rounded-md transition-all ease-out duration-[0.1s]  ${
          showModal ? "visible" : "invisible"
        }`}
      >
        <div
          onClick={handleCloseModal}
          className="absolute right-2 top-1 bg-red-500 rounded-full w-8 h-8 flexCenter cursor-pointer font-semibold text-white hover:bg-red-600 hover:font-bold duration-[0.1s] "
        >
          <span>x</span>
        </div>
        <h1 className="font-bold text-primary-color text-xl text-center mt-5">
          Add Product
        </h1>
        <form
          className="w-full flexCenter flex-col my-5"
          action=""
          onSubmit={handleAddProduct}
        >
          <div className="w-[90%] flexCenter gap-3 flex-col">
            <div className="w-full text-primary-color font-semibold">
              <label htmlFor="title" className="pl-[2px] mb-[2px] block">
                Product Title
              </label>
              <input
                required
                id="title"
                value={productName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setProductName(e.target.value)
                }
                className="input_style"
                type="text"
                placeholder="Enter product title"
              />
            </div>
            <div className="w-full text-primary-color font-semibold">
              <label htmlFor="shortDesc" className="pl-[2px] mb-[2px] block">
                Short Description
              </label>
              <input
                value={shortDesc}
                required
                id="shortDesc"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setShortDesc(e.target.value)
                }
                className="input_style"
                type="text"
                placeholder="Enter Short Description "
              />
            </div>
            <div className="w-full text-primary-color font-semibold">
              <label htmlFor="desc" className="pl-[2px] mb-[2px] block">
                Description
              </label>
              <textarea
                id="desc"
                value={description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setDescription(e.target.value)
                }
                required
                className="input_style"
                placeholder="Description..."
                rows={3}
              />
            </div>
            <div className="w-full text-primary-color font-semibold">
              <label htmlFor="price" className="pl-[2px] mb-[2px] block">
                Price
              </label>
              <input
                required
                value={price}
                id="price"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPrice(parseInt(e.target.value))
                }
                className="input_style"
                type="number"
                placeholder="Enter Price"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="category"
                className="pl-[2px] mb-[2px] block text-primary-color font-semibold"
              >
                Category
              </label>
              <select
                required
                value={category}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setCategory(e.target.value)
                }
                id="category"
                className="input_style"
              >
                <option>Select Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
            </div>
            <div className="w-full text-primary-color font-semibold mt-3">
              <input
                className="text-primary-color cursor-pointer hidden"
                required
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setImgUrl(e.target.files ? e.target.files[0] : null)
                }
                type="file"
                id="productImage"
              />
              <input
                className="input_style cursor-pointer hover:bg-primary-color hover:text-white duration-300"
                type="button"
                value="Add Product Image..."
                onClick={() => document.getElementById("productImage")?.click()}
              />
              <span className="text-center text-small-text-color mt-1 block">
                {imgUrl ? imgUrl.name : "No file selected"}
              </span>
            </div>
          </div>
          <div className="w-full flexCenter gap-3 my-10 border-t pt-5">
            <div className="w-[90%] flexCenter gap-3">
              <button
                type="reset"
                onClick={handleCloseModal}
                className="btn btn-timer border"
              >
                Close
              </button>
              <button type="submit" className="btn btn-banner">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>,
    document.getElementById("modal") as HTMLElement
  );
};

export default AddProduct;
