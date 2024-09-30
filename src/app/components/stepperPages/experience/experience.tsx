import Input from "@/app/addons/input/input";
import React, { ChangeEventHandler } from "react";

interface ExperienceProps {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  formData: {
    experiences: {
      company: string;
      position: string;
      role: string;
      skills: string[];
    }[];
  };
  experienceIndex: number; // To manage which experience we are editing
}

function Experience ({ handleChange, formData, experienceIndex }: ExperienceProps) {
  const experience = formData.experiences[experienceIndex];

  return (
    <div>
      <label>
        Company:
        <Input
          type="text"
          name={`experience-${experienceIndex}-company`}
          value={experience.company}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Position:
        <Input
          type="text"
          name={`experience-${experienceIndex}-position`}
          value={experience.position}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Role:
        <Input
          type="text"
          name={`experience-${experienceIndex}-role`}
          value={experience.role}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Skills (comma separated):
        <Input
          type="text"
          name={`experience-${experienceIndex}-skills`}
          value={experience.skills.join(", ")}
          onChange={handleChange}
          placeholder="e.g., Leadership, Communication"
        />
      </label>
    </div>
  );
};

export default Experience;
