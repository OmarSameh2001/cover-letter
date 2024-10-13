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
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
      {/* 1. Original Template */}
      <div className="m-2 p-0">
        <p>{data.personal.name || "Your Name"}</p>
        <p>
          {data.personal.email && data.personal.phone
            ? `${data.personal.email} | ${data.personal.phone}`
            : data.personal.email || data.personal.phone || "Your Email | Your Phone"}
        </p>
        <p>{new Date().toLocaleDateString()}</p>
        <p>{data.company.name || "Company Name"}</p>
        <p>{data.company.hr || "Hiring Manager"}</p>
        <p>Dear {data.company.hr || "Hiring Manager"},</p>
        <p>
          I am writing to express my interest in the {data.company.position || "Position"} at{" "}
          {data.company.name || "Company Name"}. With a {data.education.degree || "degree"} from{" "}
          {data.education.university || "University"} and {data.personal.yoe || "years of experience"} in{" "}
          {data.company.field || "the field"}, I am confident that my skills in {data.skills.join(", ") || "relevant skills"}{" "}
          make me a strong candidate for this role.
        </p>
        <p>
          During my time as {data.experiences[0]?.position || "an employee"} at {data.experiences[0]?.company || "a previous company"},{" "}
          I successfully {data.experiences[0]?.role || "acquired great skills"}.
        </p>
        <p>Thank you for considering my application. I look forward to discussing how my background aligns with your company’s needs.</p>
        <p>Sincerely, {data.personal.name || "Your Name"}</p>
      </div>

      {/* 2. Professional and Enthusiastic Template */}
      <div className="m-2 p-0">
        <p>{data.personal.name || "Your Name"}</p>
        <p>
          {data.personal.email || "Your Email"} | {data.personal.phone || "Your Phone"}
        </p>
        <p>{new Date().toLocaleDateString()}</p>
        <p>{data.company.hr || "Hiring Manager"}</p>
        <p>{data.company.name || "Company Name"}</p>
        <p>Dear {data.company.hr || "Hiring Manager"},</p>
        <p>
          I am thrilled to apply for the {data.company.position || "Position"} at {data.company.name || "Company Name"}. With my{" "}
          {data.education.degree || "degree"} from {data.education.university || "University"} and experience in{" "}
          {data.company.field || "the field"}, I believe my expertise in {data.skills.join(", ") || "your skills"} can make a significant impact.
        </p>
        <p>
          In my most recent role as {data.experiences[0]?.position || "an employee"}, I was responsible for{" "}
          {data.experiences[0]?.role || "various tasks"}, which allowed me to develop {data.experiences[0]?.skills.join(", ") || "key skills"}.
        </p>
        <p>Best regards, {data.personal.name || "Your Name"}</p>
      </div>

      {/* 3. Creative Industry Template */}
      <div className="m-2 p-0">
        <p>{data.personal.name || "Your Name"}</p>
        <p>
          {data.personal.email || "Your Email"} | {data.personal.phone || "Your Phone"}
        </p>
        <p>{new Date().toLocaleDateString()}</p>
        <p>{data.company.hr || "Hiring Manager"}</p>
        <p>{data.company.name || "Company Name"}</p>
        <p>Dear {data.company.hr || "Hiring Manager"},</p>
        <p>
          I was excited to come across the opportunity to apply for the {data.company.position || "Position"} at{" "}
          {data.company.name || "Company Name"}. My background in {data.company.field || "the field"} has equipped me with{" "}
          {data.skills.join(", ") || "skills"}, and my passion for {data.company.name || "your company"} aligns with your company’s vision.
        </p>
        <p>Warm regards, {data.personal.name || "Your Name"}</p>
      </div>

      {/* 4. Focused on Skills Template */}
      <div className="m-2 p-0">
        <p>{data.personal.name || "Your Name"}</p>
        <p>
          {data.personal.email || "Your Email"} | {data.personal.phone || "Your Phone"}
        </p>
        <p>{new Date().toLocaleDateString()}</p>
        <p>{data.company.hr || "Hiring Manager"}</p>
        <p>{data.company.name || "Company Name"}</p>
        <p>Dear {data.company.hr || "Hiring Manager"},</p>
        <p>
          I am writing to apply for the {data.company.position || "Position"} at {data.company.name || "Company Name"}. With a background in{" "}
          {data.company.field || "the field"} and skills in {data.skills.join(", ") || "skills"}, I am confident in contributing effectively.
        </p>
        <p>Best regards, {data.personal.name || "Your Name"}</p>
      </div>

      {/* 5. Personalized and Warm Template */}
      <div className="m-2 p-0">
        <p>{data.personal.name || "Your Name"}</p>
        <p>
          {data.personal.email || "Your Email"} | {data.personal.phone || "Your Phone"}
        </p>
        <p>{new Date().toLocaleDateString()}</p>
        <p>{data.company.hr || "Hiring Manager"}</p>
        <p>{data.company.name || "Company Name"}</p>
        <p>Dear {data.company.hr || "Hiring Manager"},</p>
        <p>
          I hope this message finds you well. I am excited to apply for the {data.company.position || "Position"} at {data.company.name || "Company Name"}.
        </p>
        <p>Warm regards, {data.personal.name || "Your Name"}</p>
      </div>

      {/* 6. Efficiency-Focused Template */}
      <div className="m-2 p-0">
        <p>{data.personal.name || "Your Name"}</p>
        <p>
          {data.personal.email || "Your Email"} | {data.personal.phone || "Your Phone"}
        </p>
        <p>{new Date().toLocaleDateString()}</p>
        <p>{data.company.hr || "Hiring Manager"}</p>
        <p>{data.company.name || "Company Name"}</p>
        <p>Dear {data.company.hr || "Hiring Manager"},</p>
        <p>
          I am writing to express my interest in the {data.company.position || "Position"} at {data.company.name || "Company Name"}.
        </p>
        <p>Best regards, {data.personal.name || "Your Name"}</p>
      </div>

      {/* 7. Confident and Persuasive Template */}
      <div className="m-2 p-0">
        <p>{data.personal.name || "Your Name"}</p>
        <p>
          {data.personal.email || "Your Email"} | {data.personal.phone || "Your Phone"}
        </p>
        <p>{new Date().toLocaleDateString()}</p>
        <p>{data.company.hr || "Hiring Manager"}</p>
        <p>{data.company.name || "Company Name"}</p>
        <p>Dear {data.company.hr || "Hiring Manager"},</p>
        <p>
          I am eager to submit my application for the {data.company.position || "Position"} at {data.company.name || "Company Name"}.
        </p>
        <p>Sincerely, {data.personal.name || "Your Name"}</p>
      </div>

      {/* 8. Results-Oriented Template */}
      <div className="m-2 p-0">
        <p>{data.personal.name || "Your Name"}</p>
        <p>
          {data.personal.email || "Your Email"} | {data.personal.phone || "Your Phone"}
        </p>
        <p>{new Date().toLocaleDateString()}</p>
        <p>{data.company.hr || "Hiring Manager"}</p>
        <p>{data.company.name || "Company Name"}</p>
        <p>Dear {data.company.hr || "Hiring Manager"},</p>
        <p>
          I am pleased to apply for the {data.company.position || "Position"} at {data.company.name || "Company Name"}.
        </p>
        <p>Best regards, {data.personal.name || "Your Name"}</p>
      </div>

      {/* 9. Leadership and Growth-Focused Template */}
      <div className="m-2 p-0">
        <p>{data.personal.name || "Your Name"}</p>
        <p>
          {data.personal.email || "Your Email"} | {data.personal.phone || "Your Phone"}
        </p>
        <p>{new Date().toLocaleDateString()}</p>
        <p>{data.company.hr || "Hiring Manager"}</p>
        <p>{data.company.name || "Company Name"}</p>
        <p>Dear {data.company.hr || "Hiring Manager"},</p>
        <p>
          I am excited to apply for the {data.company.position || "Position"} at {data.company.name || "Company Name"}.
        </p>
        <p>Sincerely, {data.personal.name || "Your Name"}</p>
      </div>

      {/* 10. Personal Values-Focused Template */}
      <div className="m-2 p-0">
        <p>{data.personal.name || "Your Name"}</p>
        <p>
          {data.personal.email || "Your Email"} | {data.personal.phone || "Your Phone"}
        </p>
        <p>{new Date().toLocaleDateString()}</p>
        <p>{data.company.hr || "Hiring Manager"}</p>
        <p>{data.company.name || "Company Name"}</p>
        <p>Dear {data.company.hr || "Hiring Manager"},</p>
        <p>
          I am writing to express my interest in the {data.company.position || "Position"} at {data.company.name || "Company Name"}.
        </p>
        <p>Sincerely, {data.personal.name || "Your Name"}</p>
      </div>
    </div>
  );
}


export default Templates;
