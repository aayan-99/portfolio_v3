import ContactForm from "../components/contactpage/ContactForm";
import { motion } from "framer-motion";
import { pageTransitions } from "../utils/framerAnimationsConstants";

const ContactPage = () => {

  const { initial, animate, transition } = pageTransitions;

  return (
    <motion.div initial={{ opacity: initial }} animate={{ opacity: animate }} transition={{ duration: transition }}  className='w-full py-16 md:py-[120px] bg-[color:var(--primary-color)] flex justify-center items-center mt-20'>
      <div className='w-full flex flex-col justify-center items-center gap-6 md:gap-16 px-5 md:px-0'>
        <span className="flex justify-center items-center gap-2">
          <span className="w-4 h-4 mt-[3px] bg-[color:var(--secondary-color)]"></span>
          <h1 className="text-[26px] lg:text-[30px] font-[700]">Let's talk</h1>
        </span>
        <div className="w-full max-w-[800px]">
          <ContactForm />
        </div>
      </div>
    </motion.div>
  )
}

export default ContactPage