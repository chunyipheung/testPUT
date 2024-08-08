export default function StartApplicationButton({ ...props }) {
  return (
    <button
      className="accountApplicationButton px-8"
      aria-label="start application button"
      {...props}
    >
      開始申請
    </button>
  );
}
