import { AnimateComponent } from "../components/AnimateComponent";
import useLocales from "../hooks/useLocales";
import "../styles/sections/testimonials.scss";

export function TestimonialCard({
  person,
  index,
}: {
  person: {
    name: string;
    link: string;
    photo: string;
  };
  index: number;
}) {
  const { t } = useLocales();

  return (
    <AnimateComponent
      className="testimonials_item"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8 * ((index + 1) / 4) },
        },
      }}
    >
      <div className="testimonials_item_content">
        <p className="text description">
          "{t(`sections.testimonials.list.${person.name}.text`)}"
        </p>
        <a className="profile" target="_blank" href={person.link}>
          <img
            className="logo"
            src={person.photo}
            alt={
              t("sections.testimonials.alt") +
              t(`sections.testimonials.list.${person.name}.fullName`)
            }
          />
          <div className="info">
            <p className="redirect-link name">
              {t(`sections.testimonials.list.${person.name}.fullName`)}
            </p>
            <p className="role">
              {t(`sections.testimonials.list.${person.name}.role`)}
            </p>
          </div>
        </a>
      </div>
    </AnimateComponent>
  );
}
