interface ActionButtonProps {
  label: string;
  disabled:boolean;
  onClick: () => void;
}

export default function ActionButton({
  label,
  disabled,
  onClick,
}: ActionButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className="w-full inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70"
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
