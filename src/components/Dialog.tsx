import { useEffect, useRef } from "react";

export function Dialog(props: any) {
  const ref = useRef(null);
  const { onClickOutside, hasBackground } = props;

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // @ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <div
      ref={ref}
      className={`dialog-list open${
        !hasBackground ? " border-and-background" : ""
      }`}
    >
      {props.children}
    </div>
  );
}
