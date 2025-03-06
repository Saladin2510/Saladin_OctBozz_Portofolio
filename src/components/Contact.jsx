import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { GundamCanvas} from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    // const { target } = e;
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Silahkan isi form jika ingin menanyakan sesuatu 🤗");
      return;
    }

    setLoading(true);

    const serviceId = 'service_6z8x3l1';
    const templateId = 'template_kqgkvv6';
    const publicKey = '2khxibUzfq_Jv9hzU';

    const templateParams = {
      from_name: form.name,
      to_name: "Saladin Octiano Bonanza",
      from_email: form.email,
      to_email: "saladinob2510@gmail.com",
      message: form.message,
    }


    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(
        () => {
          setLoading(false);
          alert("Terima Kasih. Saya akan jawab secepatnya! 😎");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, ada yang bermasalah. silahkan coba lagi. 😢");
        });
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Silahkan Hubungi</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Nama Anda</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Siapa nama keren anda?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email anda</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Apa alamat email anda?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Pesan Anda</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Apa ada yang ingin anda bicarakan?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Mengirimkan..." : "Kirim"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <GundamCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
