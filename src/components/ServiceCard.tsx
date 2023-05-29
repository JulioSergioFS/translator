import useLocales from "../hooks/useLocales";
import { AnimateComponent } from "./AnimateComponent";

export function ServiceCard({
  service,
  index,
}: {
  service: {
    name: string;
    photo: string;
  };
  index: number;
}) {
  const { t } = useLocales();

  return (
    <AnimateComponent
      className="services_item"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8 * ((index + 1) / 4) },
        },
      }}
    >
      <div className="services_item_content">
        <img
          className="logo"
          src={service.photo}
          alt={t(`sections.services.list.${service.name}`)}
        />
        <h5 className="text">{t(`sections.services.list.${service.name}`)}</h5>
      </div>
    </AnimateComponent>
  );
}
