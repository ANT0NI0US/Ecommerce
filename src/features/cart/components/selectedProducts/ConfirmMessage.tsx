import Button from "@/ui/Button";

interface ConfirmMessageProps {
  onConfirm: () => void;
  message: string;
  disabled?: boolean;
  onCloseModal?: () => void;
}

export default function ConfirmMessage({
  onConfirm,
  message,
  disabled,
  onCloseModal,
}: ConfirmMessageProps) {
  return (
    <>
      <p className="rounded-tl-lg rounded-tr-lg p-[15px] text-lg capitalize text-primary-color-light dark:text-primary-color md:p-[20px]">
        {message}
      </p>

      <div className="rounded-bl-lg rounded-br-lg border-t bg-[#f1eded] px-4 py-6 dark:bg-[#170000]">
        <div className="ms-auto flex w-full gap-[10px]">
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
            variation="danger"
            onClick={onCloseModal}
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
}
