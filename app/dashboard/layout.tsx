export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Main Content */}
      <main className="container mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className=" bg-white ">
          <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
      </main>
    </>
  );
}
