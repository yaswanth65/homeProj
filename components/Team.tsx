import React from "react";

// Define the structure for a single team member's data
interface TeamMember {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  experience: { date: string; role: string }[];
  education: string[];
}

// Sample data based on the layout in the image
const teamMembers: TeamMember[] = [
  {
    id: "member1",
    name: "D S Krishna",
    title: "CEO",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7uzFv8RBiJzTMK-v1JEvd6KtOzB5oOsM8A&s", // Replace with your image path
    experience: [
      { date: "2021 - present", role: "CEO & Vice Chairman, SK hynix" },
      { date: "2017 - present", role: "CEO & President, SK Telecom" },
      { date: "2019", role: "CEO & President, SK Broadband" },
      { date: "2015", role: "CEO & President, SK C&C" },
      { date: "2013", role: "Head of Corporate Development, SK C&C" },
      {
        date: "2012",
        role: "Head of Business Development Division, SK Telecom",
      },
    ],
    education: [
      "MBA (IIT Bombay) ",
      " B.E. Civil, LLB, M.Sc. (REV)",
    ],
  },
//   {
//     id: "member2",
//     name: "President Lee Seok-hee",
//     title: "CEO",
//     imageUrl: "/assets/Stock Images/team-member-2.png", // Replace with your image path
//     experience: [
//       { date: "2018.12 - present", role: "CEO & President, SK hynix" },
//       { date: "2017", role: "Chief Operating Officer, SK hynix" },
//       { date: "2015", role: "Chief of DRAM Development Division, SK hynix" },
//       {
//         date: "2013",
//         role: "Director of Future Technology Research Institute, SK hynix",
//       },
//       { date: "Previous", role: "Professor, KAIST" },
//       {
//         date: "Previous",
//         role: "Intel, Principal Engineer and Process Integration Group Leader",
//       },
//     ],
//     education: [
//       "Bachelor's and Master's Degrees in Materials Science and Engineering, Seoul National University",
//       "Ph.D. in Materials Science and Engineering, Stanford University",
//     ],
//   },
];

const Team: React.FC = () => {
  return (
    <section className="bg-white py-20">
        {/* <div className="flex items-center justify-center" > 
            <h1 className="font-medium text-xl md:text-5xl py-6 " >Team</h1> 
            </div> */}
      <div className="max-w-6xl mx-auto px-6">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${
              index !== 0 ? "mt-24 md:mt-32" : ""
            }`}
          >
            {/* Left Column: Image */}
            <div className="w-full md:w-5/12 flex justify-center md:justify-end">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-3/4 md:w-full max-w-sm object-contain drop-shadow-xl"
              />
            </div>

            {/* Right Column: Text Content */}
            <div className="w-full md:w-7/12">
              {/* Title and Name */}
              <div className="mb-8">
                <span className="block text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">
                  {member.title}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <div className="w-8 h-1 bg-black mt-4 mb-8"></div>
              </div>

              {/* Experience Grid */}
              <div className="grid grid-cols-[1fr_3fr] gap-y-3 text-sm md:text-base text-gray-700 mb-10">
                {member.experience.map((exp, i) => (
                  <React.Fragment key={i}>
                    <div className="font-medium text-gray-500">{exp.date}</div>
                    <div>{exp.role}</div>
                  </React.Fragment>
                ))}
              </div>

              {/* Education */}
              <div className="text-sm text-gray-500 space-y-1">
                {member.education.map((edu, i) => (
                  <p key={i}>{edu}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;