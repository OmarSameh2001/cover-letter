import { FieldArray, FieldArrayRenderProps } from "formik";
import { Stack, TextField, Button, Grid, InputLabel } from "@mui/material";
import { DeleteOutlined, AddOutlined } from "@mui/icons-material";
import React, { useState } from "react";

interface FieldArrayProps {
  item: {
    key: string; // in db or handle change function
    title: string; // in frontend
  };
  initialValue: any[]; // The initial array values that the component manages
}

const CustomFieldArray: React.FC<FieldArrayProps> = ({ item, initialValue }) => {
  // Internal state to track the array values
  const [currentValue, setCurrentValue] = useState(initialValue);

  // Custom handleChange to update the specific input field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const updatedValues = [...currentValue];
    updatedValues[index] = e.target.value; // Update the value at the given index
    setCurrentValue(updatedValues); // Update the state with the modified array
    console.log(updatedValues);
  };

  // Handle adding a new field
  const handleAdd = (push: (value: any) => void) => {
    push(""); // Push an empty value to the Formik array
    setCurrentValue([...currentValue, ""]); // Update the internal state by adding an empty string
  };

  // Handle removing a field
  const handleRemove = (remove: (index: number) => void, index: number) => {
    remove(index); // Remove the item from the Formik array
    const updatedValues = currentValue.filter((_, i) => i !== index); // Filter out the removed value in the internal state
    setCurrentValue(updatedValues); // Update the internal state
  };

  return (
    <FieldArray
      name={item.key}
      render={({ remove, push }: FieldArrayRenderProps) => (
        <>
          {/* If the array is empty, show the Add button */}
          {currentValue.length < 1 && (
            <Button onClick={() => handleAdd(push)}>
              <AddOutlined color="primary" />
            </Button>
          )}

          {/* Render input fields when there are values in the array */}
          {currentValue.map((object, index) => (
            <div
              key={`${item.key}.${index}`}
              style={{ display: "flex", flexDirection: "column"}}
            >
              <div key={`${item.key}.${index}`} style={{ display: "flex", flexDirection: "column" }}>
                {/* Display label for each field */}
                <InputLabel htmlFor={`${item.key}.${index}`}>{`${item.title} ${
                  index + 1
                }`}</InputLabel>

                {/* Input field and buttons for removing and adding */}
                <div style={{ display: "flex", flexDirection: "row" }} key={index}>
                  <TextField
                    name={`${item.key}.${index}`} // Field name with index
                    onChange={(e) => handleChange(e, index)} // Custom handleChange for updating the field
                    value={object} // Value from the current array
                    key={`${item.key}.${index}`} // Set unique ID
                    placeholder="Enter value"
                  />

                  {/* Button to remove the current field */}
                  <Button onClick={() => handleRemove(remove, index)}>
                    <DeleteOutlined color="error" fontSize="small" />
                  </Button>
                </div>
                {/* Add button on the last item */}
                {index === currentValue.length - 1 && (
                  <Button onClick={() => handleAdd(push)}>
                    <AddOutlined color="primary" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </>
      )}
    />
  );
};

export default CustomFieldArray;
