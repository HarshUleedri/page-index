import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface PageIndexProps {
  postions?: "BottomLeft" | "BottomRight" | "TopLeft" | "TopRight";
  headinItems: { id: number; heading: string }[];
}
const PositionValue = {
  BottomLeft: "left-10 bottom-10",
  TopLeft: "left-10 top-10",
  BottomRight: "right-10 bottom-10",
  TopRight: "top-10 right-10",
};

const PageIndex = ({
  postions = "BottomLeft",
  headinItems,
}: PageIndexProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [progressValue, setProgressValue] = useState<number>(0);

  const getScrolledProgress = () => {
    const maximumScrollLength =
      document.documentElement.scrollHeight - window.innerHeight;

    if (maximumScrollLength <= 0) {
      setProgressValue(100);
      return;
    }

    const progress: number = (window.scrollY / maximumScrollLength) * 100;

    setProgressValue(Math.round(progress));
  };

  useEffect(() => {
    document.addEventListener("scroll", getScrolledProgress);
    return () => document.removeEventListener("scroll", getScrolledProgress);
  }, []);

  return (
    <motion.div
      layout
      style={{
        position: "fixed",
      }}
      className={`${PositionValue[postions]}  `}
    >
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={` ${isOpen ? " p-4" : " px-4 py-1"} rounded-2xl flex flex-col  w-full gap-4 h-full bg-neutral-900 text-neutral-100 font-mono`}
      >
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="index-list"
              // initial={{
              //   height: 0,
              //   opacity: 0,
              // }}
              // animate={{
              //   height: "auto",
              //   opacity: 1,
              // }}

              // transition={{
              //   height: { duration: 0.3, ease: "easeInOut" },
              //   opacity: { duration: 0.2, ease: "easeInOut" },
              // }}
              transition={{
                opacity: { duration: 1 },
              }}
              className="overflow-hidden overflow-y-auto max-h-52 flex flex-col w-full scrollbar-thin scrollbar-thumb-neutral-700 gap-4 items-start "
            >
              {headinItems.map((val, idx) => (
                <div
                  onClick={() => {
                    document.getElementById(`${val.id}`)?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                  className="hover:text-neutral-100 text-neutral-500 px-2  rounded "
                >
                  <span className="pr-1">
                    {String(idx + 1).padStart(2, "0")}.{" "}
                  </span>
                  {val.heading}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div className={`flex  gap-4 items-center  `}>
          <motion.div layout className="flex items-center gap-2">
            Index
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-3"
            >
              <path d="M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z"></path>
            </motion.svg>
          </motion.div>

          <motion.div
            layout
            className="bg-neutral-500 rounded-full  leading-5 px-2 "
          >
            {progressValue}%
          </motion.div>
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default PageIndex;
