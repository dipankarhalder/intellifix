export default function PrivateLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <div className="flex mt-6">
        <div className="container max-w-7xl mx-[auto]">{children}</div>
      </div>
    </div>
  );
}