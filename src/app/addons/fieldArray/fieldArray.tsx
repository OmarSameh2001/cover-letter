"use client";
import { DeleteOutlined } from "@ant-design/icons";
import { AddOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

interface CustomFieldArrayProps {
  item: { key: string; title: string };
  values: string[];
  handleChange: (skills: string[]) => void; // Define the type for handleChange
}

const CustomFieldArray: React.FC<CustomFieldArrayProps> = ({
  item,
  values,
  handleChange,
}) => {
  const [skills, setSkills] = useState<string[]>(values);

  const handleAddField = () => {
    setSkills([...skills, ""]); // Add an empty string for the new skill input
  };

  const handleRemoveField = (index: number) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  const handleFieldChange = (index: number, value: string) => {
    const newSkills = skills.map((skill, i) => (i === index ? value : skill));
    setSkills(newSkills);
  };

  useEffect(() => {
    handleChange(skills);
  }, [skills]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
      <h3>{item.title}</h3>
      {skills.map((object, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <TextField
            name={`${item.key}.${index}`} // Field name with index
            onChange={(e) => handleFieldChange(index, e.target.value)} // Custom handleChange for updating the field
            value={object} // Value from the current array
            key={`${item.key}.${index}`} // Set unique ID
            placeholder="Enter value"
            variant="outlined"
          />
          <button type="button" onClick={() => handleRemoveField(index)}>
            <DeleteOutlined color="error" />
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddField}>
        <AddOutlined color="primary" />
      </button>
    </div>
  );
};

export default CustomFieldArray;
