export default function HomePageSkeleton() {
    return (
      <div style={{ padding: "2rem" }}>
        <div
          style={{
            width: "50%",
            height: "2rem",
            backgroundColor: "#E5E7EB",
            borderRadius: "4px",
            marginBottom: "1rem",
          }}
        ></div>
        <div
          style={{
            width: "80%",
            height: "1.5rem",
            backgroundColor: "#E5E7EB",
            borderRadius: "4px",
            marginBottom: "2rem",
          }}
        ></div>
  
        <div style={{ display: "flex", gap: "1rem" }}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: "200px",
                backgroundColor: "#F3F4F6",
                borderRadius: "8px",
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
  