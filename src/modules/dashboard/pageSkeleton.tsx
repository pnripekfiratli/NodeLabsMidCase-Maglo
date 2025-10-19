export default function DashboardPageSkeleton() {
  return (
    <div
      className="flex w-full h-screen overflow-hidden"
      style={{ backgroundColor: "#F3F4F6" }}
    >
      <aside
        className="flex flex-col justify-between w-[250px] p-[30px_25px_100px]"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        <div className="flex flex-col gap-[20px]">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              style={{
                width: "100%",
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#E4E4E7",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: "translateX(-100%)",
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)",
                  animation: "shimmer 2s infinite",
                }}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-[15px]">
          {[1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: "100%",
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#E4E4E7",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: "translateX(-100%)",
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)",
                  animation: "shimmer 2s infinite",
                }}
              />
            </div>
          ))}
        </div>
      </aside>
      <main className="flex-1 flex flex-col px-[38px] py-[30px] gap-[24px]">
        <div
          style={{
            width: "100%",
            height: "48px",
            borderRadius: "8px",
            backgroundColor: "#E4E4E7",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              transform: "translateX(-100%)",
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)",
              animation: "shimmer 2s infinite",
            }}
          />
        </div>

        <div className="grid grid-cols-12 gap-[39px]">
          <div className="col-span-8 flex flex-col gap-[20px]">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  width: "100%",
                  height: i === 2 ? "290px" : "140px",
                  borderRadius: "10px",
                  backgroundColor: "#E4E4E7",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    transform: "translateX(-100%)",
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)",
                    animation: "shimmer 2s infinite",
                  }}
                />
              </div>
            ))}
          </div>
          <div className="col-span-4 flex flex-col gap-[20px]">
            {[1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: "100%",
                  height: "220px",
                  borderRadius: "10px",
                  backgroundColor: "#E4E4E7",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    transform: "translateX(-100%)",
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)",
                    animation: "shimmer 2s infinite",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <style>
        {`
          @keyframes shimmer {
            100% {
              transform: translateX(100%);
            }
          }
        `}
      </style>
    </div>
  );
}
