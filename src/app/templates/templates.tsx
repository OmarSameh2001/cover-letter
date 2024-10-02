"use client";

interface Data {
  personal: {
    name: string;
    email: string;
    phone: string;
    yoe: string;
  };
  company: {
    name: string;
    hr: string;
    position: string;
    field: string;
  };
  education: {
    university: string;
    degree: string;
    year: string;
  };
  skills: string[];
  experiences: [
    {
      company: string;
      position: string;
      role: string;
      skills: string[];
    }
  ];
}

// Update the function to destructure the props
function Templates({ data }: { data: Data }) {
  return (
    <div style={{ gap: "0px" }}>
      <div className="m-2 p-0">
        <p className="m-0 p-0">{data.personal.name}</p>
        <p className="m-0 p-0">
          {data.personal.email && data.personal.phone ? `${data.personal.email} | ${data.personal.phone}` : data.personal.email || data.personal.phone}
        </p>
        <p className="m-0 p-0">{new Date().toLocaleDateString()}</p>{" "}
      </div>

      <div className="m-2 p-0">
        <p className="m-0 p-0">{data.company.name}</p>
        <p className="m-0 p-0">{data.company.hr}</p>
      </div>

      <div className="m-2 p-0">
        <p>Dear {data.company.hr || "Hiring Manager"},</p>
      </div>

      <div className="m-2 p-0">
        <p className="m-0 p-0">
          I am writing to express my interest in the {data.company.position} at{" "}
          {data.company.name || "your company"}. With a {data.education.degree}{" "}
          from {data.education.university} and{" "}
          {data.personal.yoe
            ? `${data.personal.yoe} years of experience in `
            : "experience in "}
          {data.company.field || "job field"}, I am confident that my skills in{" "}
          {data.skills.join(", ")} make me a strong candidate for this role.
        </p>
        <p className="m-0 p-0">
          During my time as {data.experiences[0].position || "an employee"} at{" "}
          {data.experiences[0].company || "my previous company"}, I successfully{" "}
          {data.experiences[0].role || "aquired great skills"}. I admire {data.company.name || "your company"}, and I am
          excited about the opportunity to contribute to your team.
        </p>
      </div>

      <div className="m-2 p-0">
        <p className="m-0 p-0">
          Thank you for considering my application. I look forward to discussing
          how my background, skills, and education align with your company’s
          needs. I am available for an interview at your earliest convenience.
        </p>
      </div>

      <div className="m-2 p-0">
        <p className="m-0 p-0">Sincerely,</p>
        <p className="m-0 p-0">{data.personal.name}</p>
      </div>
    </div>
  );
}

export default Templates;
