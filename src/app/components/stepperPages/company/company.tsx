import Input from "@/app/addons/input/input";
import { ChangeEventHandler } from "react";

interface CompanyProps {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  formData: {
    company: {
      name: string;
      hr: string;
      position: string;
      field: string;
    };
  };
}

function Company ({ handleChange, formData }: CompanyProps) {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>New Company's Info.</h3>
      <label>
        Company Name:
        <Input
          type="text"
          name="cname"
          value={formData.company.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        HR or Manager Name:
        <Input
          type="text"
          name="hr"
          value={formData.company.hr}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Position:
        <Input
          type="text"
          name="position"
          value={formData.company.position}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Field:
        <Input
          type="text"
          name="field"
          value={formData.company.field}
          onChange={handleChange}
          required
        />
      </label>
    </div>
  );
};

export default Company;
