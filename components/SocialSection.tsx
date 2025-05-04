import SocialBox from './social-buttons';

export default function SocialSection() {
  return (
    <section className="col-span-1 grid grid-cols-1 lg:grid-cols-6 gap-y-4 md:gap-x-6">
      <div className="col-span-1 lg:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 lg:gap-x-6">
        <SocialBox
          href="https://www.linkedin.com/in/louis-schinas-461363241/"
          title="LinkedIn"
          thumbnail="/Linkedin.webp"
          iconPath="/linkedin.svg"
        />
        <SocialBox
          href="https://github.com/derSchinas"
          title="GitHub"
          thumbnail="/Github.webp"
          iconPath="/github.svg"
        />
        <SocialBox
          href="https://www.instagram.com/der_schinas/"
          title="Instagram"
          thumbnail="/Instagram.webp"
          iconPath="/instagram.svg"
        />
      </div>
    </section>
  );
}
