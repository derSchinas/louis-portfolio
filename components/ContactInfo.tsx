import { Mail, Phone, Clipboard, CircleDot } from "lucide-react";

export default function ContactInfo() {
  const cardClasses = "relative p-5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md transition-shadow";
  const dotClasses = "absolute -left-10 top-2 w-4 h-4 rounded-full bg-lime-600 dark:bg-lime-300 border-2 border-white dark:border-neutral-900";
  const titleClasses = "font-semibold text-xl text-lime-600 dark:text-lime-300 pb-2";
  const textClasses = "text-neutral-600 dark:text-neutral-400";
  const iconClasses = "w-4 h-4 text-neutral-600 dark:text-neutral-400";
  const copyIconClasses = "w-4 h-4 cursor-pointer text-neutral-600 dark:text-neutral-400 hover:text-lime-600 dark:hover:text-lime-300";
  
  return (
    <div className="col-span-1 lg:col-span-2 w-full h-full rounded-xl overflow-hidden bg-gradient-to-br dark:from-neutral-800 dark:to-neutral-900 from-neutral-100 to-neutral-50 shadow-neutral-200 dark:shadow-neutral-500 shadow-sm hover:shadow min-h-[400px]">
      <div className="p-6 space-y-6">
        <div className={cardClasses}>
          <span className={dotClasses}>
            <CircleDot className="w-full h-full text-transparent" />
          </span>
          <h2 className={titleClasses}>Get in touch</h2>
          <div className="flex items-center space-x-2">
            <Mail className={iconClasses} />
            <a href="mailto:Louis.Schinas@gmail.com" className={`${textClasses} hover:underline`}>Louis.Schinas@gmail.com</a>
            <Clipboard 
              className={copyIconClasses}
              onClick={() => {
                navigator.clipboard.writeText('Louis.Schinas@gmail.com');
                alert('Email copied to clipboard!');
              }}
            />
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <Phone className={iconClasses} />
            <a href="tel:+61 410168212" className={`${textClasses} hover:underline`}>+61 410168212</a>
            <Clipboard 
              className={copyIconClasses}
              onClick={() => {
                navigator.clipboard.writeText('+61 410168212');
                alert('Phone number copied to clipboard!');
              }}
            />
          </div>
        </div>

        <InfoSection 
          title="Skill Set"
          items={["Java", "HTML, CSS, PHP", "SQL", "JavaScript", "Linux"]}
          cardClasses={cardClasses}
          dotClasses={dotClasses}
          titleClasses={titleClasses}
          textClasses={textClasses}
        />

        <InfoSection 
          title="Certifications"
          items={[
            "General and Business English Focus on Writing (B2-C1)",
            "Cisco Networking Technologies Workshop",
            "Excel Certificate"
          ]}
          cardClasses={cardClasses}
          dotClasses={dotClasses}
          titleClasses={titleClasses}
          textClasses={textClasses}
        />

        <InfoSection 
          title="Education"
          items={[
            "B.Sc. Business Information Systems (2027)",
            "University of Applied Sciences Entrance Qualification till July 2022"
          ]}
          cardClasses={cardClasses}
          dotClasses={dotClasses}
          titleClasses={titleClasses}
          textClasses={textClasses}
        />
      </div>
    </div>
  );
}

interface InfoSectionProps {
  title: string;
  items: string[];
  cardClasses: string;
  dotClasses: string;
  titleClasses: string;
  textClasses: string;
}

function InfoSection({ title, items, cardClasses, dotClasses, titleClasses, textClasses }: InfoSectionProps) {
  return (
    <div className={cardClasses}>
      <span className={dotClasses}>
        <CircleDot className="w-full h-full text-transparent" />
      </span>
      <h2 className={titleClasses}>{title}</h2>
      <ul className={`list-disc pl-5 ${textClasses} space-y-1`}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}