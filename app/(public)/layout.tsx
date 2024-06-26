export default function PublicLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-full w-full flex-row items-center justify-center">
      <div className="flex h-screen w-1/2 items-center justify-center p-8">
        {children}
      </div>
      <div className="w-1/2 h-screen bg-gray-100 bg-gradient-to-r from-sky-600 to-indigo-800">
      </div>
    </main>
  );
}