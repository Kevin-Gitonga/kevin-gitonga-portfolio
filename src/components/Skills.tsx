import { skills } from "@/content/site";
import { Section, Tag } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools and practices I work with"
      intro="Grouped by discipline, from enterprise ETL and BI to cloud-native data platforms."
      className="border-t border-line/60"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {skills.map((group, i) => (
          <section
            key={group.category}
            aria-labelledby={`skills-${group.category}`}
            className={`reveal rounded-xl border border-line bg-navy-900/70 p-6 ${
              i < 3 ? "lg:col-span-2" : "lg:col-span-3"
            } ${i === skills.length - 1 ? "sm:col-span-2" : ""}`}
          >
            <h3 id={`skills-${group.category}`} className="font-semibold text-ink">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}
