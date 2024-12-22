interface ErrorProps {
  message?: string;
}

export function Error({ message }: ErrorProps) {
  if (!message) return null;

  return (
    <div className="mt-[3px] pl-[5px] text-sm text-[#880808] dark:text-[#d47e6c]">
      {message}
    </div>
  );
}
