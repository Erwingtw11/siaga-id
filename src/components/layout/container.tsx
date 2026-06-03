type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-6 lg:px-10">
      {children}
    </div>
  );
}
