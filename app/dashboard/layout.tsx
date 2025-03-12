export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Main Content */}
      <main className="container ">
        <div className=" bg-white ">
          <div>{children}</div>
        </div>
      </main>
    </>
  );
}
