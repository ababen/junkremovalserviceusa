import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Junk Removal Service USA — Fast, Affordable Junk Removal in Miami & Broward County"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          background: "#111827",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Green accent bar on left */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "8px",
            height: "630px",
            background: "#16a34a",
            display: "flex",
          }}
        />

        {/* Background glow circles */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-200px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(22,163,74,0.12)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "200px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(22,163,74,0.07)",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "60px 80px 60px 88px",
            flex: 1,
          }}
        >
          {/* Top: logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: "#16a34a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "28px", height: "28px", borderRadius: "50%", border: "3px solid white", display: "flex" }} />
            </div>
            <span
              style={{
                color: "#ffffff",
                fontSize: "24px",
                fontWeight: 700,
                letterSpacing: "-0.5px",
              }}
            >
              JunkRemovalServiceUSA
            </span>
          </div>

          {/* Middle: headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "700px" }}>
            {/* Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "fit-content",
                background: "rgba(22,163,74,0.2)",
                border: "1px solid rgba(74,222,128,0.4)",
                borderRadius: "100px",
                padding: "8px 20px",
              }}
            >
              <span
                style={{
                  color: "#4ade80",
                  fontSize: "15px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                }}
              >
                SAME-DAY AVAILABLE  |  MIAMI + BROWARD COUNTY, FL
              </span>
            </div>

            {/* Headline */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span
                style={{
                  fontSize: "80px",
                  fontWeight: 900,
                  color: "#ffffff",
                  lineHeight: 1,
                  letterSpacing: "-3px",
                }}
              >
                Junk Removal
              </span>
              <span
                style={{
                  fontSize: "80px",
                  fontWeight: 900,
                  color: "#4ade80",
                  lineHeight: 1,
                  letterSpacing: "-3px",
                }}
              >
                Done Right.
              </span>
            </div>

            <span style={{ color: "#9ca3af", fontSize: "26px", lineHeight: 1.4 }}>
              Fast pickup · Upfront pricing · Licensed &amp; insured
            </span>
          </div>

          {/* Bottom: trust badges */}
          <div style={{ display: "flex", gap: "16px" }}>
            {[
              "No Hidden Fees",
              "500+ 5-Star Reviews",
              "Eco-Friendly Disposal",
              "Same-Day Available",
            ].map((label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "12px",
                  padding: "12px 20px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#4ade80",
                    display: "flex",
                  }}
                />
                <span style={{ color: "#e5e7eb", fontSize: "15px", fontWeight: 600 }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel — stylized truck illustration using divs */}
        <div
          style={{
            width: "380px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderLeft: "1px solid rgba(22,163,74,0.25)",
            background: "rgba(22,163,74,0.06)",
            gap: "0px",
            position: "relative",
          }}
        >
          {/* Truck cab */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", position: "relative" }}>
            {/* Truck body / cargo */}
            <div
              style={{
                width: "220px",
                height: "110px",
                background: "#16a34a",
                borderRadius: "8px 8px 0 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {/* Logo text on truck */}
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", fontWeight: 700, letterSpacing: "1px" }}>
                JUNK REMOVAL
              </span>
              {/* Cargo door line */}
              <div style={{ position: "absolute", left: "110px", top: 0, width: "2px", height: "110px", background: "rgba(255,255,255,0.15)", display: "flex" }} />
            </div>

            {/* Cab section */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: "0px" }}>
              <div
                style={{
                  width: "220px",
                  height: "60px",
                  background: "#15803d",
                  borderRadius: "0 0 0 6px",
                  display: "flex",
                }}
              />
              <div
                style={{
                  width: "90px",
                  height: "80px",
                  background: "#166534",
                  borderRadius: "0 8px 8px 0",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  paddingTop: "10px",
                  paddingLeft: "8px",
                }}
              >
                {/* Windshield */}
                <div
                  style={{
                    width: "70px",
                    height: "38px",
                    background: "#1e3a5f",
                    borderRadius: "4px",
                    display: "flex",
                  }}
                />
              </div>
            </div>

            {/* Wheels */}
            <div style={{ display: "flex", justifyContent: "space-between", width: "310px", marginTop: "0px" }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "#1f2937",
                  border: "6px solid #374151",
                  marginLeft: "40px",
                  display: "flex",
                }}
              />
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "#1f2937",
                  border: "6px solid #374151",
                  marginRight: "10px",
                  display: "flex",
                }}
              />
            </div>
          </div>

          {/* Ground line */}
          <div
            style={{
              width: "320px",
              height: "3px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "2px",
              marginTop: "4px",
              display: "flex",
            }}
          />

          {/* URL watermark */}
          <div
            style={{
              position: "absolute",
              bottom: "24px",
              color: "rgba(255,255,255,0.3)",
              fontSize: "13px",
              display: "flex",
            }}
          >
            junkremovalserviceusa.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
