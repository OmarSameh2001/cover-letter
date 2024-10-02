"use client";
import React, { useEffect, useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import Personal from "../components/stepperPages/personal/personal";
import Company from "../components/stepperPages/company/company";
import Education from "../components/stepperPages/education/education";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Experience from "../components/stepperPages/experience/experience";
import Skills from "../components/stepperPages/skills/skills";
import CustomFieldArray from "@/app/addons/fieldArray/fieldArray";
import { useRouter } from 'next/navigation';


const MyStepper = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [isLocal, setIsLocal] = useState(false);
  const [isRetrived, setIsRetrived] = useState(false);
  const [formData, setFormData] = useState({
    personal: {
      name: "",
      email: "",
      phone: "",
      yoe : "",
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
    const storedData = localStorage.getItem("userObject");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData(parsedData); // Set formData to the retrieved data
    }
    setIsRetrived(true);
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete your data?")) {
      localStorage.removeItem("userObject");
      setFormData({
        // Reset formData to initial state
        personal: {
          name: "",
          email: "",
          phone: "",
          yoe : "",
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
      setStep(0); // Reset step to the first step
      setIsRetrived(false);
      setIsLocal(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Determine which part of the form to update
    if (["name", "email", "phone", "yoe"].includes(name)) {
      setFormData((prevData) => ({
        ...prevData,
        personal: {
          ...prevData.personal,
          [name]: value,
        },
      }));
    } else if (["cname", "hr", "position", "field"].includes(name)) {
      if (name === "cname") {
        setFormData((prevData) => ({
          ...prevData,
          company: {
            ...prevData.company,
            name: value,
          },
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          company: {
            ...prevData.company,
            [name]: value,
          },
        }));
      }
    } else if (["university", "degree", "year"].includes(name)) {
      setFormData((prevData) => ({
        ...prevData,
        education: {
          ...prevData.education,
          [name]: value,
        },
      }));
    } else if (name.startsWith("experience")) {
      const [_, index, field] = name.split("-");
      const idx = parseInt(index); // Extract index from name

      setFormData((prevData) => {
        const experiences = [...prevData.experiences];
        experiences[idx] = {
          ...experiences[idx],
          [field]: value,
        };
        return {
          ...prevData,
          experiences,
        };
      });
    }
  };

  const handleSkills = (skills: string[]) => {
    setFormData((prevData) => ({
      ...prevData,
      skills,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    localStorage.setItem("userObject", JSON.stringify(formData));
    console.log("Form Submitted", formData);
    router.push("/coverLetter");
    // Optionally, navigate or show a success message here
  };

  useEffect(() => {
    const userObject = localStorage.getItem("userObject");
    if (userObject) {
      setIsLocal(true);
      setFormData(JSON.parse(userObject)); // Load existing data into formData
    }
  }, []);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Cover Letter Generator</h1>
      <div style={{ textAlign: "center", overflow: "auto" }}>
        <Stepper activeStep={step}>
          <Step label="Personal Information" />
          <Step label="Company Information" />
          <Step label="Education Information" />
          <Step label="Experience Information" />
          <Step label="Skills Information" />
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
              backgroundColor: "white",
            }}
            onClick={handleBack}
          >
            <ArrowLeftOutlined />
          </a>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {step === 0 && (
            <Personal handleChange={handleChange} formData={formData} />
          )}
          {step === 1 && (
            <Company handleChange={handleChange} formData={formData} />
          )}
          {step === 2 && (
            <Education handleChange={handleChange} formData={formData} />
          )}
          {step === 3 && (
            <Experience
              handleChange={handleChange}
              formData={formData}
              experienceIndex={0}
            />
          )}
          {step === 4 && (
            <CustomFieldArray
              item={{ key: "skills", title: "Skills" }}
              values={formData.skills}
              handleChange={handleSkills} // Handle changes from skills input
            />
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
              <button onClick={handleSubmit} className="btn btn-success">
                {" "}
                {/* Submit button */}
                Submit
              </button>
            )}
          </div>
        </div>
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
              Retrieve Saved Data
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyStepper;
