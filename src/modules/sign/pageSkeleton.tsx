export default function SignPageSkeleton() {
  return (
    <div
      className="flex w-full h-screen overflow-hidden"
      style={{
        backgroundColor: "#F3F4F6",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="w-1/2 h-full flex flex-col justify-center pl-[135px] gap-[20px]"
        style={{ backgroundColor: "#F3F4F6" }}
      >
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            style={{
              width: "400px",
              height: "48px",
              borderRadius: "10px",
              backgroundColor: "#D1D5DB",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                transform: "translateX(-100%)",
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)",
                animation: "shimmer 2s infinite",
              }}
            ></div>
          </div>
        ))}
      </div>
      <div
        className="w-1/2 h-full"
        style={{
          backgroundColor: "#D1D5DB",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            transform: "translateX(-100%)",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)",
            animation: "shimmer 2s infinite",
          }}
        ></div>
      </div>
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
