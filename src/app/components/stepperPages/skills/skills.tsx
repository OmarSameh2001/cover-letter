import Input from "@/app/addons/input/input";
import React, { ChangeEventHandler } from "react";

interface SkillsProps {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  formData: {
    skills: string[];
  };
}

function Skills ({ handleChange, formData }: SkillsProps) {
  return (
    <div>
      <label>
        Skills:
        <Input
          type="text"
          name="skills"
          value={formData.skills.join(", ")}
          onChange={handleChange}
          placeholder="e.g., JavaScript, React, Node.js"
          required
        />
      </label>
    </div>
  );
};

export default Skills;
