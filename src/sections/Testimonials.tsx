import { Carousel } from "react-responsive-carousel";
import { AnimateComponent } from "../components/AnimateComponent";
import { TestimonialCard } from "../components/TestimonialCard";
import { testimonials } from "../constants/testimonials";
import useLocales from "../hooks/useLocales";
import "../styles/sections/testimonials.scss";

export function Testimonials({ isMobile }: { isMobile?: boolean }) {
  const { t } = useLocales();

  return (
    <div className="content">
      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        }}
      >
        <h2 className="title">{t("sections.testimonials.title")}</h2>
      </AnimateComponent>

      {isMobile ? (
        <div className="testimonials">
          {testimonials.map((person, index) => (
            <TestimonialCard key={person.name} person={person} index={index} />
          ))}
        </div>
      ) : (
        <AnimateComponent
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <Carousel
            className="testimonials carousel"
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            interval={4000}
          >
            {testimonials.map((person, index) => (
              <TestimonialCard
                key={person.name}
                person={person}
                index={index}
              />
            ))}
          </Carousel>
        </AnimateComponent>
      )}
    </div>
  );
}
