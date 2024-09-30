import Input from "@/app/addons/input/input";
import { ChangeEventHandler } from "react";

interface PersonalProps {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  formData: {
    personal: {
      name: string;
      email: string;
      phone: string;
    };
  };
}

function Personal({ handleChange, formData }: PersonalProps) {
  return (
    <div>
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
    </div>
  );
}

export default Personal;
