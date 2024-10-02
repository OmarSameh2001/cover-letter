import Input from "@/app/addons/input/input";
import { ChangeEventHandler } from "react";

interface PersonalProps {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  formData: {
    personal: {
      name: string;
      email: string;
      phone: string;
      yoe: string;
    };
  };
}

function Personal({ handleChange, formData }: PersonalProps) {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Personal Info.</h3>
      <label>
        Name:
        <Input
          type="text"
          name="name"
          value={formData.personal.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <Input
          type="email"
          name="email"
          value={formData.personal.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Phone:
        <Input
          type="tel"
          name="phone"
          value={formData.personal.phone}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Years of Experience:
        <Input
          type="number"
          name="yoe"
          value={formData.personal.yoe}
          onChange={handleChange}
          required
        />
      </label>
    </div>
  );
}

export default Personal;
