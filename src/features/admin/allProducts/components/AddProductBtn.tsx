interface Props {
  toggleModal: () => void;
}

const AddProductBtn = ({ toggleModal }: Props) => {
  return (
    <div className="w-full flexCenter mt-5">
      <button
        className="transition-colors duration-[0.5s] rounded py-2 px-5 w-5/6 btn-banner"
        onClick={() => toggleModal()}
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProductBtn;
