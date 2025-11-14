"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function ScrollCards() {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2
          style={{
            fontSize: "clamp(3rem, 7vw, 5rem)",
            fontWeight: 900,
            background: "linear-gradient(to right, #FF8C42, #D4A62A, #FF8C42)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "1.5rem",
          }}
        >
          Showcase
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            color: "#9ca3af",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.75",
          }}
        >
          Presenting our Formula Student race car, engineered with precision by
          Universitas Gadjah Mada's Bimasakti Racing Team.
        </p>
      </div>
      <div style={container}>
        {cards.map(([image, title, hueA, hueB], i) => (
          <Card
            i={i}
            image={image}
            title={title}
            hueA={hueA}
            hueB={hueB}
            key={image}
          />
        ))}
      </div>
    </div>
  );
}

interface CardProps {
  image: string;
  title: string;
  hueA: number;
  hueB: number;
  i: number;
}

function Card({ image, title, hueA, hueB, i }: CardProps) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={cardVariants} className="card">
        <img
          src={image}
          alt={title}
          style={{
            width: "120%",
            height: "120%",
            objectFit: "cover",
            borderRadius: 20,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: 0,
            right: 0,
            padding: "20px",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.7), transparent)",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <h3
            style={{
              color: "#FF8C42",
              fontSize: "24px",
              fontWeight: "bold",
              margin: 0,
              textAlign: "center",
              textShadow: "0 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  margin: "0px auto",
  maxWidth: 500,
  paddingBottom: 50,
  width: "100%",
};

const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
  fontSize: 164,
  width: 300,
  height: 430,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background:
    "linear-gradient(135deg, rgba(255, 140, 66, 0.15) 0%, rgba(10, 10, 10, 0.95) 50%, rgba(255, 140, 66, 0.1) 100%)",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075), 0 0 40px rgba(255, 140, 66, 0.3), 0 0 60px rgba(255, 140, 66, 0.2)",
  transformOrigin: "10% 60%",
  position: "relative",
  overflow: "hidden",
  border: "2px solid rgba(255, 140, 66, 0.4)",
};

/**
 * ==============   Data   ================
 */

const cards: [string, string, number, number][] = [
  ["/images/img1.JPG", "Innovation", 20, 35],
  ["/images/img2.JPG", "Performance", 25, 40],
  ["/images/img3.JPG", "Excellence", 15, 30],
];
