// import React from "react";
// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { textVariant } from "../utils/motion";

// const Tech = () => {
//   return (
//       <div className='flex flex-wrap justify-center gap-10'>
//         <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} `}>Tech Toolbox</p>
//         <h2 className={`${styles.sectionHeadText}`}>My Skillset.</h2>
//       </motion.div>
//       <div className='flex flex-row flex-wrap justify-center gap-10'>
//         {technologies.map((technology, index) => (
//           <div className='w-28 h-28' key={index}>
//             <BallCanvas icon={technology.icon} />
//           </div>
//         ))}
//       </div>
//       </div>
//   );
// };

// export default SectionWrapper(Tech, "skills"); 

import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
      <div className='flex flex-wrap justify-center gap-10'>
        <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Tech Toolbox</p>
        <h2 className={`${styles.sectionHeadText}`}>My Skillset.</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology, index) => (
          <div className='w-28 h-28 flex items-center justify-center' key={index}>
            <img src={technology.icon} alt={technology.name} className='w-full h-full object-contain' />
          </div>
        ))}
      </div>
      </div>
  );
};

export default SectionWrapper(Tech, "skills");