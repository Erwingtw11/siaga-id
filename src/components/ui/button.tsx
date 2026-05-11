type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-full bg-red-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-400">
      {children}
    </button>
  );
}
