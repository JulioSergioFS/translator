import { m, useAnimation, Variants } from "framer-motion";
import { InView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 0, y: 100 },
};

export const AnimateComponent = ({
  children,
  className,
  disabled,
  variants,
}: {
  children: any;
  className?: string;
  disabled?: boolean;
  variants?: Variants;
}) => {
  const control = useAnimation();

  return (
    <InView onChange={(inView) => inView && control.start("visible")}>
      {({ ref }) => (
        <m.div
          className={className || ""}
          ref={ref}
          variants={disabled ? undefined : { ...boxVariant, ...variants }}
          initial="hidden"
          animate={disabled ? { opacity: 1 } : control}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {children}
        </m.div>
      )}
    </InView>
  );
};
