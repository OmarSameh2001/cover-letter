import React from "react";
import CustomFieldArray from "@/app/addons/fieldArray/fieldArray";

interface SkillsProps {
  formData: {
    skills: string[];
  };
  handleChange: (updatedSkills: string[]) => void;
}

function Skills({ formData, handleChange }: SkillsProps) {
  return (
    <>
      <CustomFieldArray
        item={{ key: "skills", title: "Skills" }}
        values={formData.skills}
        handleChange={handleChange} // Passing handleChange to notify MyStepper of changes
      />
    </>
  );
}

export default Skills;
