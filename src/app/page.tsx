"use client";

const HomePage = () => {
  return (
    <>
      {Array.from({ length: 50 }).map((_, i) => (
        <div key={i} style={{ height: "100px", border: "1px solid black" }}>
          Dummy Content {i + 1}
        </div>
      ))}
    </>
  );
};

export default HomePage;
