interface Props {
  toggleModal: () => void;
}

const AddProductBtn = ({ toggleModal }: Props) => {
  return (
    <div className="flexCenter mt-5 w-full">
      <button
        aria-label="Add New Product"
        className="btn-banner w-5/6 rounded px-5 py-2 transition-colors duration-[0.5s]"
        onClick={() => toggleModal()}
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProductBtn;
