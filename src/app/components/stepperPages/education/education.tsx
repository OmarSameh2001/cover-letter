import Input from "@/app/addons/input/input";
import React, { ChangeEventHandler } from "react";

interface EducationProps {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  formData: {
    education: {
      university: string;
      degree: string;
      year: string;
    };
  };
}

function Education ({ handleChange, formData }: EducationProps) {
  return (
    <div style={{ width: "100%" }}>
      <label>
        University:
        <Input
          type="text"
          name="university"
          value={formData.education.university}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Degree:
        <Input
          type="text"
          name="degree"
          value={formData.education.degree}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Graduation Year:
        <Input
          type="number"
          name="year"
          value={formData.education.year}
          onChange={handleChange}
          required
        />
      </label>
    </div>
  );
};

export default Education;
