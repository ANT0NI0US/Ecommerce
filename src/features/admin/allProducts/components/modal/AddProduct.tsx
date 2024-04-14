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
      }),
    );
    toast.success("Product added successfully");
    handleCloseModal();
  };
  return ReactDOM.createPortal(
    <Fragment>
      <div
        onClick={handleCloseModal}
        className={`fixed bottom-0 left-0 right-0 top-0 z-[90000] bg-black transition-all duration-[0.3s] ease-out ${
          showModal ? "visible opacity-55" : "invisible opacity-0"
        }`}
      ></div>
      <div
        className={`absolute left-1/2 top-1/2 z-[900000] h-[500px] max-h-[500px] w-[85%] -translate-x-1/2 -translate-y-1/2 transform overflow-y-auto overflow-x-hidden rounded-md bg-white transition-all duration-[0.1s] ease-out sm:w-[60%] md:w-[50%]  ${
          showModal ? "visible" : "invisible"
        }`}
      >
        <div
          onClick={handleCloseModal}
          className="flexCenter absolute right-2 top-1 h-8 w-8 cursor-pointer rounded-full bg-red-500 font-semibold text-white duration-[0.1s] hover:bg-red-600 hover:font-bold "
        >
          <span>x</span>
        </div>
        <h1 className="mt-5 text-center text-xl font-bold text-primary-color">
          Add Product
        </h1>
        <form
          className="flexCenter my-5 w-full flex-col"
          action=""
          onSubmit={handleAddProduct}
        >
          <div className="flexCenter w-[90%] flex-col gap-3">
            <div className="w-full font-semibold text-primary-color">
              <label htmlFor="title" className="mb-[2px] block pl-[2px]">
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
            <div className="w-full font-semibold text-primary-color">
              <label htmlFor="shortDesc" className="mb-[2px] block pl-[2px]">
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
            <div className="w-full font-semibold text-primary-color">
              <label htmlFor="desc" className="mb-[2px] block pl-[2px]">
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
            <div className="w-full font-semibold text-primary-color">
              <label htmlFor="price" className="mb-[2px] block pl-[2px]">
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
                className="mb-[2px] block pl-[2px] font-semibold text-primary-color"
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
            <div className="mt-3 w-full font-semibold text-primary-color">
              <input
                className="hidden cursor-pointer text-primary-color"
                required
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setImgUrl(e.target.files ? e.target.files[0] : null)
                }
                type="file"
                id="productImage"
              />
              <input
                className="input_style cursor-pointer duration-300 hover:bg-primary-color hover:text-white"
                type="button"
                value="Add Product Image..."
                onClick={() => document.getElementById("productImage")?.click()}
              />
              <span className="mt-1 block text-center text-small-text-color">
                {imgUrl ? imgUrl.name : "No file selected"}
              </span>
            </div>
          </div>
          <div className="flexCenter my-10 w-full gap-3 border-t pt-5">
            <div className="flexCenter w-[90%] gap-3">
              <button
                aria-label="reset"
                type="reset"
                onClick={handleCloseModal}
                className="btn btn-timer border"
              >
                Close
              </button>
              <button
                aria-label="submit"
                type="submit"
                className="btn btn-banner"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>,
    document.getElementById("modal") as HTMLElement,
  );
};

export default AddProduct;
