import Logo from "../assets/Vira.svg";
import { motion } from "framer-motion";
export default function Loader() {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-black z-[200000]">
      <div className="bg-[#024A32] h-full w-full flex flex-col items-center justify-center">
        <div className="text-white font-medium overflow-hidden">
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
              velocity: 50,
            }}
          >
            <div className="flex items-center justify-center">
              <div className="w-fit">
                <img src={Logo} alt="" />
              </div>
            </div>
          </motion.div>
          <div className="overflow-hidden mt-">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 1.2,
                ease: [0, 0.71, 0.2, 1.01],
                velocity: 50,
              }}
            >
              <p>Providing a space where</p>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 1.3,
                ease: [0, 0.71, 0.2, 1.01],
                velocity: 50,
              }}
            >
              <p>everyone belongs</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
