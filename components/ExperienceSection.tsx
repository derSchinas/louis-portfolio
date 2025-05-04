import ContactInfo from './ContactInfo';
import WorkExperience from './WorkExperience';

export default function ExperienceSection() {
  return (
    <section className="col-span-1 grid grid-cols-1 lg:grid-cols-6 gap-y-4 md:gap-x-6">
      <ContactInfo />
      <WorkExperience />
    </section>
  );
}
