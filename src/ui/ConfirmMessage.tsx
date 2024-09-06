import Button from "./Button";

interface ConfirmMessageProps {
  onConfirm: () => void;
  message: string;
  disabled: boolean;
  onCloseModal: () => void;
}

export default function ConfirmMessage({
  onConfirm,
  message,
  disabled,
  onCloseModal,
}: ConfirmMessageProps) {
  return (
    <div className="ga-[1.2rem] text-textColor flex flex-col p-[20px]">
      <p className="mb-[1.2rem] text-primary-color-light dark:text-primary-color">
        {message}
      </p>

      <div className="flex justify-end gap-[1.2rem]">
        <Button
          ArialLabel="accept confirm"
          loading={disabled}
          onClick={onConfirm}
        >
          Yes
        </Button>
        <Button
          ArialLabel="cancel confirm"
          loading={disabled}
          variation="delete"
          onClick={onCloseModal}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
