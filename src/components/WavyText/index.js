import { motion } from "framer-motion";

const WavyText = ({
    text,
    delay = 0,
    className,
    duration = 0.05,
    ...props
}) => {
    const letters = Array.from(text);

    const boxVariants = {
        hidden: {
            opacity: 0,
        },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: duration, delayChildren: i * delay },
        }),
    };

    const childVariants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
    };

    return (
        <motion.h1
            variants={boxVariants}
            initial="hidden"
            animate={"visible"}
            className={className}
            {...props}
        >
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    variants={childVariants}
                    style={{ display: "inline-block" }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.h1>
    );
};

export default WavyText;
