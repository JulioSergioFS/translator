import { AnimateComponent } from "../components/AnimateComponent";
import { ServiceCard } from "../components/ServiceCard";
import { services } from "../constants/services";
import useLocales from "../hooks/useLocales";
import "../styles/sections/services.scss";

export function Services() {
  const { t } = useLocales();

  return (
    <div className="content">
      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        }}
      >
        <h2 className="title title-service">{t("sections.services.title")}</h2>
      </AnimateComponent>

      <div className="services">
        {services.map((service, index) => (
          <ServiceCard key={service.name} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}
