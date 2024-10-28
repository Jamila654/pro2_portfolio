"use client";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="home mt-14">
      <section className="first" id="/">
        <div className="intro" data-aos="fade-down">
          <h1>
            Hey! I am <br /> a Web Developer
          </h1>
          <h3>
            currently pursuing a path to become a full-stack developer. With a
            keen interest in both front-end and back-end technologies, I enjoy
            building responsive, user-friendly websites and applications. I'm
            excited to continue expanding my skills and taking on new challenges
            in the world of full-stack development!
          </h3>
          <div className="buttons">
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover="hover"
              className="download"
            >
              <a href="/Resume.pdf" download>
                Download CV
              </a>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover="hover"
              className="hire"
            >
              <a href="mailto:nurjamila1@gmail.com?subject=Hiring Inquiry&body=Hi Jamila,">
                Hire Me
              </a>
            </motion.button>
          </div>
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          // style={{ rotate: 0, x: "calc(50vh - 100px)" }}
          className="profile flex items-center justify-center w-[250px] h-[250px] py-5 md:py-0 md:w-[350px] md:h-[350px] rounded-full"
        >
          <div className="pic">
            <Image
              src={"/profile.avif"}
              alt="pic"
              width={100}
              height={100}
              className=" w-[200px] h-[200px]  md:w-[300px] md:h-[300px] rounded-full"
            ></Image>
          </div>
        </motion.div>
      </section>
      <section className="about" id="about">
        <div className="content" data-aos="fade-down">
          <div className="h1 text-center">About me</div>
          <p>
            I am currently pursuing a Bachelor’s degree in Cybersecurity at DHA
            Suffa University, where I am dedicated to enhancing my skills and
            knowledge in this critical field. Alongside my studies, I proudly
            serve as a student leader in the Governor Sindh IT Program, where I
            contribute to fostering innovation and collaboration among my peers.
            I completed my O Levels and A Levels in Malaysia, which provided me
            with a diverse educational background. As a passionate frontend
            developer, I am actively on a journey to expand my expertise and
            transition into a full stack developer, eager to tackle new
            challenges in the ever-evolving tech landscape.
          </p>
        </div>
      </section>
      <section className="projects" id="edu">
        <h1 className=" text-center">Projects</h1>
        <div className="cards md:pl-[100px]">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="card w-[350px] h-[430px] bg-[#459fab] flex flex-col items-center justify-center gap-4 rounded-[10px]"
          >
            <div className="image"><Image src={'/currency.avif'} alt="currency" width={100} height={50} className=" w-full h-full rounded-[10px]"></Image></div>
            <div className="des"><p className=" text-center text-white w-[300px]">I created a currency converter application using Next.js. It allows users to quickly convert between different currencies with real-time exchange rates, providing an intuitive and responsive interface for easy currency calculations.</p></div>
            <div className="link">
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover="hover"
              className="hire"
            >
              <a href="https://18-curency-converter-nextjs.vercel.app/" target="blank" className=" text-blue-700 font-bold text-xl underline">
                Currency Converter
              </a>
            </motion.button>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="card w-[350px] h-[430px] bg-[#459fab] flex flex-col items-center justify-center gap-4 rounded-[10px]"
          >
            <div className="image w-[90%] h-[170px]"><Image src={'/movie.jpeg'} alt="movie" width={100} height={100} className=" w-full h-full rounded-[10px]"></Image></div>
            <div className="des"><p className=" text-center text-white w-[300px]">I created a movie search application using Next.js. It enables users to quickly search for movies, displaying detailed information like ratings, genres, and descriptions in real-time. The app offers a user-friendly and responsive interface for seamless movie discovery.</p></div>
            <div className="link">
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover="hover"
              className="hire"
            >
              <a href="https://16-movie-search-nextjs.vercel.app/" target="blank" className=" text-blue-700 font-bold text-xl underline">
                Movie Search
              </a>
            </motion.button>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="card w-[350px] h-[430px] bg-[#459fab] flex flex-col items-center justify-center gap-4 rounded-[10px]"
          >
            <div className="image w-[90%] h-[170px]"><Image src={'/notes.avif'} alt="currency" width={100} height={50} className=" w-full h-full rounded-[10px]"></Image></div>
            <div className="des"><p className=" text-center text-white w-[300px]">I created a notes app using Next.js. It allows users to easily create, edit, and organize notes, helping to keep track of tasks and ideas. The app offers a simple, responsive interface for smooth note-taking and efficient organization.</p></div>
            <div className="link">
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover="hover"
              className="hire"
            >
              <a href="https://20-notes-app-nextjs.vercel.app/" target="blank" className=" text-blue-700 font-bold text-xl underline">
                Notes App
              </a>
            </motion.button>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="card w-[350px] h-[430px] bg-[#459fab] flex flex-col items-center justify-center gap-4 rounded-[10px]"
          >
            <div className="image w-[90%] h-[150px]"><Image src={'/quiz.png'} alt="currency" width={100} height={50} className=" w-full h-full rounded-[10px]"></Image></div>
            <div className="des"><p className=" text-center text-white w-[300px]">I developed a quiz app using Next.js. It enables users to test their knowledge on various topics with interactive quizzes, featuring multiple-choice questions and real-time score updates. The app provides a user-friendly, responsive interface for an engaging quiz experience.</p></div>
            <div className="link">
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover="hover"
              className="hire"
            >
              <a href="https://24-quiz-app-nextjs.vercel.app/" target="blank" className=" text-blue-700 font-bold text-xl underline">
                Quiz App
              </a>
            </motion.button>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="card w-[350px] h-[430px] bg-[#459fab] flex flex-col items-center justify-center gap-4 rounded-[10px]"
          >
            <div className="image w-[90%] h-[170px]"><Image src={'/snake.jpg'} alt="currency" width={100} height={50} className=" w-full h-full rounded-[10px]"></Image></div>
            <div className="des"><p className=" text-center text-white w-[300px]">I built a classic snake game using Next.js. Players control a growing snake to collect points while avoiding obstacles, with real-time score tracking and smooth controls. The game provides a simple, responsive interface for an enjoyable retro gaming experience.</p></div>
            <div className="link">
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover="hover"
              className="hire"
            >
              <a href="https://26-snake-game-nextjs.vercel.app/" target="blank" className=" text-blue-700 font-bold text-xl underline">
                Snake Game
              </a>
            </motion.button>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="card w-[350px] h-[430px] bg-[#459fab] flex flex-col items-center justify-center gap-4 rounded-[10px]"
          >
            <div className="image w-[90%] h-[170px]"><Image src={'/Random User Generator .webp'} alt="currency" width={100} height={50} className=" w-full h-full rounded-[10px]"></Image></div>
            <div className="des"><p className=" text-center text-white w-[300px]">I developed a random user generator using Next.js. This app generates profiles with names, photos, and contact details, offering a quick and seamless way to create random user data. The interface is responsive, making it easy to browse and explore generated profiles.</p></div>
            <div className="link">
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover="hover"
              className="hire"
            >
              <a href="https://29-random-user-generator-nextjs.vercel.app/" target="blank" className=" text-blue-700 font-bold text-xl underline">
                Random User Generator
              </a>
            </motion.button>
            </div>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
  <h1>Contact Me</h1>
  <div className="form" data-aos="fade-down">
  <form action="https://formspree.io/f/mzzbdkvw" method="post">
  <div className="field first-name">
    <label htmlFor="first-name">First Name</label>
    <input type="text" name="first-name" id="first-name" required placeholder="Adam" />
  </div>
  <div className="field second-name">
    <label htmlFor="second-name">Last Name</label>
    <input type="text" name="second-name" id="second-name" required placeholder="John" />
  </div>
  <div className="field email">
    <label htmlFor="email">Email</label>
    <input type="email" name="email" id="email" required placeholder="abc@gmail.com"/>
  </div>
  <div className="field subject">
    <label htmlFor="subject">Subject</label>
    <input type="text" name="subject" id="subject" required placeholder="Hiring Inquiry" />
  </div>
  <div className="field text-area">
    <label htmlFor="message">Message</label>
    <textarea name="message" id="message" cols={50} rows={10} required placeholder="Hi,Jamila"></textarea>
  </div>
  <button type="submit" className="submit-button">Submit</button>
</form>
  </div>
</section>

    </div>
  );
}
