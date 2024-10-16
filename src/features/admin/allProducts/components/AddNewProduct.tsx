import AddProductForm from "./AddProductForm";
import Modal from "@/ui/Modal";
import Button from "@/ui/Button";

export default function AddNewProduct() {
  return (
    <Modal>
      <Modal.Open opens="addNewProduct">
        <div className="mx-auto w-full md:mx-0 md:me-auto md:w-[180px]">
          <Button ArialLabel="addNewProduct">Add New Product</Button>
        </div>
      </Modal.Open>

      <Modal.Window name="addNewProduct">
        {({ onCloseModal }) => <AddProductForm onCloseModal={onCloseModal} />}
      </Modal.Window>
    </Modal>
  );
}
