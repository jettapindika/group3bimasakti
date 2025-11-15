"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  instagram: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Jetta",
    role: "Creative Media",
    image: "/images/team/member1.webp",
    bio: "Do the best and let God do the rest.",
    instagram: "ztvn._",
  },
  {
    name: "Wishnu",
    role: "Creative Media",
    image: "/images/team/member2.webp",
    bio: "Karepmu jet tulisane.",
    instagram: "erlaaanggs",
  },
  {
    name: "Fikri",
    role: "Sponsorship and Fundraising",
    image: "/images/team/member3.webp",
    bio: "Is it better speak or to die?",
    instagram: "fikriaakbar_",
  },
  {
    name: "Gladys",
    role: "Sponsorship and Fundraising",
    image: "/images/team/member4.webp",
    bio: "Good things take time.",
    instagram: "gladlauraa",
  },
  {
    name: "Naya",
    role: "Member Development",
    image: "/images/team/member5.webp",
    bio: "Do it for the plot.",
    instagram: "nayaka.xalia",
  },
  {
    name: "Asya",
    role: "Finance",
    image: "/images/team/member6.webp",
    bio: "Whatever goes around comes around",
    instagram: "asyaakita",
  },
  {
    name: "Audrey",
    role: "Public Relation",
    image: "/images/team/member7.webp",
    bio: "Live, Love, Ngesot.",
    instagram: "audreymhrnihsn",
  },
  {
    name: "Kayla",
    role: "Logistic",
    image: "/images/team/member8.webp",
    bio: "Jalanin aja dulu.",
    instagram: "victoriadaidaa",
  },
  {
    name: "Salma",
    role: "Document and Secretarial",
    image: "/images/team/member9.webp",
    bio: "Wherever the wind blows, i can adjust my sail.",
    instagram: "salmasulistyoning",
  },
];

export default function TeamShowcase() {
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

  return (
    <div style={container}>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "60px" }}
      >
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
          Our Team
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
          Meet the talented individuals behind Bimasakti Racing Team, driving
          innovation and excellence.
        </p>
      </motion.div>

      <div style={showcase}>
        {/* Team Members Grid */}
        <nav style={nav}>
          <ul style={membersGrid}>
            {teamMembers.map((member) => (
              <motion.li
                key={member.name}
                initial={false}
                animate={{
                  scale: member === selectedMember ? 1.05 : 1,
                  borderColor:
                    member === selectedMember
                      ? "#FF8C42"
                      : "rgba(255, 140, 66, 0.2)",
                }}
                style={memberCard}
                onClick={() => setSelectedMember(member)}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div style={memberImageContainer}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={memberImage}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23FF8C42' width='100' height='100'/%3E%3Ctext x='50' y='50' font-size='40' text-anchor='middle' dy='.3em' fill='white'%3E👤%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div style={memberInfo}>
                  <h4 style={memberName}>{member.name}</h4>
                  <p style={memberRole}>{member.role}</p>
                </div>
                {member === selectedMember && (
                  <motion.div
                    style={selectedIndicator}
                    layoutId="selectedMember"
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Selected Member Details */}
        <main style={detailsContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMember.name}
              initial={{ y: 20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              style={detailsCard}
            >
              <div style={detailsImageContainer}>
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  style={detailsImage}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23FF8C42' width='200' height='200'/%3E%3Ctext x='100' y='100' font-size='80' text-anchor='middle' dy='.3em' fill='white'%3E👤%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div style={detailsInfo}>
                <h3 style={detailsName}>{selectedMember.name}</h3>
                <p style={detailsRole}>{selectedMember.role}</p>
                <p style={detailsBio}>{selectedMember.bio}</p>
                <motion.button
                  style={instagramButton}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(255, 140, 66, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open(
                      `https://instagram.com/${selectedMember.instagram}`,
                      "_blank"
                    )
                  }
                >
                  <span style={{ fontSize: "20px", marginRight: "8px" }}>
                    📱
                  </span>
                  Follow on Instagram
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 20px",
};

const showcase: React.CSSProperties = {
  width: "100%",
  borderRadius: 20,
  background:
    "linear-gradient(135deg, rgba(255, 140, 66, 0.05) 0%, rgba(10, 10, 10, 0.8) 50%, rgba(255, 140, 66, 0.05) 100%)",
  overflow: "hidden",
  boxShadow: "0 0 40px rgba(255, 140, 66, 0.2), 0 8px 32px rgba(0, 0, 0, 0.4)",
  border: "1px solid rgba(255, 140, 66, 0.2)",
  padding: "40px",
};

const nav: React.CSSProperties = {
  marginBottom: "40px",
};

const membersGrid: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
  gap: "20px",
};

const memberCard: React.CSSProperties = {
  background: "rgba(10, 10, 10, 0.6)",
  borderRadius: 15,
  padding: "15px",
  cursor: "pointer",
  border: "2px solid rgba(255, 140, 66, 0.2)",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",
  backdropFilter: "blur(10px)",
};

const memberImageContainer: React.CSSProperties = {
  width: "100%",
  aspectRatio: "1",
  borderRadius: 10,
  overflow: "hidden",
  marginBottom: "12px",
  background: "rgba(255, 140, 66, 0.1)",
};

const memberImage: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const memberInfo: React.CSSProperties = {
  textAlign: "center",
};

const memberName: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: 700,
  color: "#fff",
  margin: "0 0 4px 0",
};

const memberRole: React.CSSProperties = {
  fontSize: "12px",
  color: "#FF8C42",
  margin: 0,
  fontWeight: 600,
};

const selectedIndicator: React.CSSProperties = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 3,
  background: "linear-gradient(to right, #FF8C42, #D4A62A)",
  boxShadow: "0 0 10px #FF8C42",
};

const detailsContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "300px",
};

const detailsCard: React.CSSProperties = {
  background:
    "linear-gradient(135deg, rgba(255, 140, 66, 0.1) 0%, rgba(10, 10, 10, 0.9) 100%)",
  borderRadius: 20,
  padding: "40px",
  border: "2px solid rgba(255, 140, 66, 0.3)",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "center",
  textAlign: "center",
  maxWidth: "600px",
  width: "100%",
  boxShadow: "0 8px 32px rgba(255, 140, 66, 0.15)",
};

const detailsImageContainer: React.CSSProperties = {
  width: "200px",
  height: "200px",
  borderRadius: 15,
  overflow: "hidden",
  flexShrink: 0,
  background: "rgba(255, 140, 66, 0.1)",
  border: "2px solid rgba(255, 140, 66, 0.3)",
};

const detailsImage: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const detailsInfo: React.CSSProperties = {
  flex: 1,
};

const detailsName: React.CSSProperties = {
  fontSize: "32px",
  fontWeight: 900,
  color: "#fff",
  margin: "0 0 8px 0",
};

const detailsRole: React.CSSProperties = {
  fontSize: "18px",
  color: "#FF8C42",
  margin: "0 0 16px 0",
  fontWeight: 700,
};

const detailsBio: React.CSSProperties = {
  fontSize: "16px",
  color: "#9ca3af",
  lineHeight: 1.6,
  margin: "0 0 20px 0",
};

const instagramButton: React.CSSProperties = {
  marginTop: "20px",
  padding: "12px 24px",
  background: "linear-gradient(135deg, #FF8C42, #D4A62A)",
  color: "#000",
  border: "none",
  borderRadius: 10,
  fontSize: "16px",
  fontWeight: 700,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 15px rgba(255, 140, 66, 0.3)",
  transition: "all 0.3s ease",
};
