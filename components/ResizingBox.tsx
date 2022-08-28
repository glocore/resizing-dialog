import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { PropsWithChildren } from "react";
import useMeasure from "react-use-measure";

export interface ResizingBoxProps extends PropsWithChildren {
  direction: -1 | 1;
}

export default function ResizingBox({ direction, children }: ResizingBoxProps) {
  const [ref, { height, width }] = useMeasure({ offsetSize: true });

  return (
    <MotionConfig transition={{ duration }}>
      <motion.div
        animate={{ height: height || "auto" }}
        className="overflow-hidden relative"
      >
        <AnimatePresence initial={false} custom={{ direction, width }}>
          <motion.div
            key={JSON.stringify(children, ignoreCircularReferences())}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={{ direction, width }}
          >
            <div ref={ref} className={`${height ? "absolute" : "relative"}`}>
              {children}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </MotionConfig>
  );
}

const duration = 0.25;

const variants = {
  enter: ({ direction, width }: { width: number; direction: -1 | 1 }) => ({
    opacity: 0,
    x: (width / 3) * direction,
  }),
  center: { opacity: 1, x: 0 },
  exit: ({ direction, width }: { width: number; direction: -1 | 1 }) => ({
    opacity: 0,
    x: -(width / 3) * direction,
  }),
};

/*
  Replacer function to JSON.stringify that ignores
  circular references and internal React properties.

  https://github.com/facebook/react/issues/8669#issuecomment-531515508
*/
const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key: string, value: unknown) => {
    if (key.startsWith("_")) return; // Don't compare React's internal props.
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    } else if (typeof value === "symbol") {
      const stringified = `$$Symbol:${Symbol.keyFor(value)}`;
      return stringified;
    } else if (key === "type") {
      if (typeof value === "string") return value;
      if (typeof value === "function") {
        seen.add(value);
        return value.name;
      }
    }
    return value;
  };
};
