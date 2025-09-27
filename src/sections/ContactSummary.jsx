import Marquee from "../components/Marquee";

const ContactSummary = () => {
  const items = [
    "Crush on Open Source",
    "Perseverance",
    "Hardwork",
    "Consistency",
    "Skill",
    "Trust",
    "Collaboration",
  ];
  return (
    <section className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16">
      <Marquee items={items}>
        <div className="overflow-hidden text-center font-light contact-text-responsive">
          <p>
            "Let's build a <br />
            <span className="font-normal">memorable</span> &{" "}
            <span className="italic">inspiring</span>
            <br />
            web application <span className="text-gold">together</span>"
          </p>
        </div>
      </Marquee>
    </section>
  );
};

export default ContactSummary;
