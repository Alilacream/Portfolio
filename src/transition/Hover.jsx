import {motion} from "motion/react"


export default function Hover({children}) {
    return (
            <motion.div className="hover" 
            initial={{opacity:0}}
            whileInView={{opacity: 1}}
            viewport={{once: true, amount:0.3}}
            >
                {children}
            </motion.div>
    )
}