import styles from "./Spinner.module.css";

interface spinnerProps {
  height?: string;
}

export default function Spinner({
  height = "h-[100vh] min-h-full",
}: spinnerProps) {
  return (
    <div className={`flexCenter ${height} bg-transparent backdrop-blur-sm`}>
      <div
        className={`${styles.loader} h-[4px] w-[4px] rounded-[50%] text-primary-color`}
      ></div>
    </div>
  );
}
