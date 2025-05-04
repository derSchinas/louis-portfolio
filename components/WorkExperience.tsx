interface WorkEntryProps {
  title: string;
  company: string;
  period: string;
  duties: string[];
}

export default function WorkExperience() {
  const workEntries: WorkEntryProps[] = [
    {
      title: "Consultant",
      company: "ESB Student Consulting e.V",
      period: "Oct 2023 – Till Now",
      duties: [
        "2nd/3rd Semester – Conducted consulting projects focused on:",
        "Competitive analysis & strategy development",
        "Data analysis & reporting",
        "Project management & communication",
        "1st Semester – Member of the Business Improvement and IT Department:",
        "Designed and customized SharePoint environment",
        "Structured and organized data for improved accessibility and efficiency"
      ]
    },
    {
      title: "Intern Informatics",
      company: "IAL Institute for applied Logistic",
      period: "Aug 2022 - Jul 2023",
      duties: [
        "Compared and evaluated information and telecommunication technology systems",
        "Configured, installed, and maintained systems (PCs, servers, telephones)",
        "Managed and edited WordPress and learning management systems (e.g., ILIAS)"
      ]
    },
    {
      title: "Employee in Vaccination Center",
      company: "KV Nordrhein",
      period: "Mar 2021 - Jul 2021",
      duties: [
        "Data collection and maintenance",
        "Customer service"
      ]
    }
  ];

  return (
    <div className="col-span-1 lg:col-span-4 w-full rounded-xl overflow-hidden bg-gradient-to-br dark:from-neutral-800 dark:to-neutral-900 from-neutral-100 to-neutral-50 shadow-neutral-200 dark:shadow-neutral-500 shadow-sm hover:shadow min-h-[200px]">
      <div className="p-8">
        <h2 className="font-semibold text-3xl text-lime-600 dark:text-lime-300 pb-5">Work Experience</h2>
        <div className="relative pl-8 border-l-2 border-neutral-300 dark:border-neutral-600 space-y-6">
          {workEntries.map((entry, index) => (
            <WorkEntry key={index} {...entry} />
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkEntry({ title, company, period, duties }: WorkEntryProps) {
  return (
    <div className="relative p-5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md transition-shadow">
      <span className="absolute -left-10 top-7 w-4 h-4 rounded-full bg-lime-600 dark:bg-lime-300 border-2 border-white dark:border-neutral-900"></span>
      <h3 className="text-xl font-semibold text-lime-600 dark:text-lime-300">{title}</h3>
      <p className="text-sm italic text-neutral-600 dark:text-neutral-400 pt-1 pb-2">
        <span className="text-purple-600 dark:text-purple-400">{company}</span> ({period})
      </p>
      <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400 space-y-1">
        {duties.map((duty, index) => (
          <li key={index}>{duty}</li>
        ))}
      </ul>
    </div>
  );
}