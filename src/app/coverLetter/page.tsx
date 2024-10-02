"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Templates from "../templates/templates";

// Define the Data interface
interface Data {
  personal: {
    name: string;
    email: string;
    phone: string;
    yoe: string;
  };
  company: {
    name: string;
    hr: string;
    position: string;
    field: string;
  };
  education: {
    university: string;
    degree: string;
    year: string;
  };
  skills: string[];
  experiences: [
    {
      company: string;
      position: string;
      role: string;
      skills: string[];
    }
  ];
}

function CoverLetter() {
  // Initialize formData with an empty object that conforms to the Data structure
  const [formData, setFormData] = useState<Data>({
    personal: {
      name: "",
      email: "",
      phone: "",
      yoe: "",
    },
    company: {
      name: "",
      hr: "",
      position: "",
      field: "",
    },
    education: {
      university: "",
      degree: "",
      year: "",
    },
    skills: [],
    experiences: [
      {
        company: "",
        position: "",
        role: "",
        skills: [],
      },
    ],
  });

  useEffect(() => {
    const storedData = localStorage.getItem("userObject");
    if (storedData) {
      const parsedData: Data = JSON.parse(storedData);
      setFormData(parsedData); // Set formData to the retrieved data
    }
  }, []); // Ensure the effect only runs once

  return (
    <div>
      <Image
        src="/static/cover1.jpg"
        alt="cover letter"
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -999,
          position: "absolute",
          opacity: 0.2,
        }}
        width={1920}
        height={1080}
      />
      <h1 style={{ textAlign: "center", backgroundColor: "transparent" }}>
        Cover Letter Generator
      </h1>

      <h3>Your Cover Letter Successfully Generated</h3>
      <Templates data={formData} />
    </div>
  );
}

export default CoverLetter;
