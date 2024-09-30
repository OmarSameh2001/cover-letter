"use client";
import React, { useEffect, useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import Personal from "../stepperPages/personal/personal";
import Company from "../stepperPages/company/company";
import Education from "../stepperPages/education/education";
import ButtonsArea from "../buttonsArea/buttonsArea";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Experience from "../stepperPages/experience/experience";
import Skills from "../stepperPages/skills/skills";

const MyStepper = () => {
  const [step, setStep] = useState(0);
  const [isLocal, setIsLocal] = useState(false);
  const [isRetrived, setIsRetrived] = useState(false);
  const [formData, setFormData] = useState({
    personal: {
      name: "",
      email: "",
      phone: "",
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
    skills: [""],
    experiences: [
      {
        company: "",
        position: "",
        role: "",
        skills: [],
      },
    ],
  });

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleRetrive = () => {
    setFormData(JSON.parse(localStorage.getItem("userObject") || "{}"));
    setIsRetrived(true);
  };

  const handleDelete = () => {
    let del = confirm("Are you sure you want to delete your data?");
    if (del) {
      localStorage.removeItem("userObject");
      setStep(0);
      setIsRetrived(false);
      setIsLocal(false);
      setFormData({
        personal: {
          name: "",
          email: "",
          phone: "",
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
        skills: [""],
        experiences: [
          {
            company: "",
            position: "",
            role: "",
            skills: [],
          },
        ],
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Check if the input belongs to the personal section
    if (["name", "email", "phone"].includes(name)) {
      setFormData((prevData) => ({
        ...prevData,
        personal: {
          ...prevData.personal,
          [name]: value,
        },
      }));
    }
    // Check if the input belongs to the company section
    else if (["companyName", "hr", "position", "field"].includes(name)) {
      setFormData((prevData) => ({
        ...prevData,
        company: {
          ...prevData.company,
          [name]: value,
        },
      }));
    }
    // Check if the input belongs to the education section
    else if (["university", "degree", "year"].includes(name)) {
      setFormData((prevData) => ({
        ...prevData,
        education: {
          ...prevData.education,
          [name]: value,
        },
      }));
    }
    // Check if the input belongs to the skills section (for example, if using a multi-select)
    else if (name === "skills") {
      const skillsArray = value.split(",").map((skill) => skill.trim()); // Example for handling multiple skills
      setFormData((prevData) => ({
        ...prevData,
        skills: skillsArray,
      }));
    }
    // Check if the input belongs to the experiences section (this will require additional handling)
    else if (name.startsWith("experience")) {
      const index = parseInt(name.split("-")[1]); // Extract the index from the name, e.g., "experience-0"
      const field = name.split("-")[2]; // Extract the field name, e.g., "company"

      setFormData((prevData) => {
        const experiences = [...prevData.experiences];
        experiences[index] = {
          ...experiences[index],
          [field]: value,
        };
        return {
          ...prevData,
          experiences,
        };
      });
    }
    console.log(formData);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("userObject", JSON.stringify(formData));
    console.log("Form Submitted", formData);
  };

  useEffect(() => {
    const userObject = localStorage.getItem("userObject");
    if (userObject) {
      setIsLocal(true);
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Cover Letter Generator</h1>
      <div style={{ textAlign: "center", overflow: "auto" }}>
        <Stepper activeStep={step}>
          <Step label="Personal Information" />
          <Step label="Company Information" />
          <Step label="Education Information" />
          <Step label="Skills Information" />
          <Step label="Experience Information" />
        </Stepper>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          minHeight: "50vh",
          position: "relative",
        }}
      >
        <div style={{ visibility: step === 0 ? "hidden" : "visible" }}>
          <a
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "20px",
              height: "20px",
              cursor: "pointer",
              color: "black",
              borderRadius: "50%",
              border: "1px solid black",
              margin: "10px",
            }}
            onClick={handleBack}
          >
            <ArrowLeftOutlined />
          </a>
        </div>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {step === 0 && (
            <div>
              <Personal handleChange={handleChange} formData={formData} />
            </div>
          )}

          {step === 1 && (
            <div>
              <Company handleChange={handleChange} formData={formData} />
            </div>
          )}

          {step === 2 && (
            <div>
              <Education handleChange={handleChange} formData={formData} />
            </div>
          )}

          {step === 3 && (
            <Experience
              handleChange={handleChange}
              formData={formData}
              experienceIndex={0}
            />
          )}

          {step === 4 && (
            <Skills handleChange={handleChange} formData={formData} />
          )}
          <div className="next-button mt-3">
            {step < 4 ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleNext}
              >
                Next
              </button>
            ) : (
              <button className="btn btn-success" onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>
        </form>
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            right: "20px",
            gap: "10px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {isLocal && isRetrived && (
            <button onClick={handleDelete} className="btn btn-danger">
              Delete Saved Data
            </button>
          )}
          {isLocal && !isRetrived && (
            <button onClick={handleRetrive} className="btn btn-success">
              Retrive Saved Data
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyStepper;
