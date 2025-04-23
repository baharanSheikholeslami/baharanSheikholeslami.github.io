import Image from "next/image";
const ProjectsPageModule = () => {
  return (
    <div className="bg-white flex justify-center">
      <div className="md:w-[90%] w-full !bg-[#F5F5F5] md:rounded-2xl rounded-none">
        <div className="w-full bg-[#202E39] h-[80px] md:rounded-t-2xl rounded-none flex items-center text-2xl text-white px-8">
          <p>PROJECTS</p>
        </div>
        <div className="md:p-15 px-4 py-15">
          <div className="flex flex-col gap-4">
            <div className="flex md:flex-row flex-col gap-4 justify-between">
              <div className="bg-white text-black p-4 rounded-2xl md:w-[49%] w-full flex flex-col gap-2">
                <p className="font-bold">
                  <span className="text-2xl font-extrabold italic text-[#1FC0BF]">
                    P
                  </span>
                  roject 1
                </p>
                <Image
                  priority
                  src={"/assets/hamrahtel.svg"}
                  alt="logo"
                  width={100}
                  height={60}
                />
                <p className="font-bold text-[#FF6224]">HAMRAHTEL</p>
                One of the projects I’ve worked on is the front-end development
                of the Hamrahtel website, an online platform for selling mobile
                phones and accessories. My role was to help build a smooth,
                user-friendly interface that makes browsing and shopping easy
                and intuitive. I worked with technologies like HTML, CSS,
                JavaScript, and React to create responsive layouts and
                interactive components. A big focus of the project was making
                the user experience seamless across different devices, and I
                also paid close attention to design consistency and performance
                optimization. It was a great opportunity to apply my skills in a
                real-world e-commerce project and collaborate with a team of
                developers and designers.
                <a
                  href="https://hamrahtel.com/"
                  className="text-[#1FC0BF] font-bold"
                >
                  {" "}
                  <span className=" text-black">visit: </span>Hamrahtel
                </a>
              </div>

              <div className="bg-white text-black p-4 rounded-2xl md:w-[49%] w-full flex flex-col gap-2">
                <p className="font-bold">
                  <span className="text-2xl font-extrabold italic text-[#1FC0BF]">
                    P
                  </span>
                  roject 2
                </p>
                <Image
                  priority
                  src={"/assets/GSM.png"}
                  alt="logo"
                  width={100}
                  height={60}
                />
                <p className="font-bold text-[#197BFF]">GSM</p>
                I’ve also been involved in the front-end development of GSM.ir,
                a well-known tech news and product review website in Iran. My
                main goal was to help improve the user interface and make the
                site more modern, responsive, and easy to navigate. I worked
                with React and styled-components to build reusable UI elements
                and ensure consistency across pages. Since GSM.ir has a lot of
                content—like articles, product comparisons, and specs—I focused
                on creating clean layouts and enhancing readability on both
                desktop and mobile. It was a challenging but really rewarding
                experience, especially working on performance improvements and
                implementing features that make the site more interactive and
                engaging for users.
                <a href="https://gsm.ir/" className="text-[#1FC0BF] font-bold">
                  {" "}
                  <span className=" text-black">visit: </span>GSM
                </a>
              </div>
            </div>
            <div>
              <div className="bg-white text-black p-4 rounded-2xl md:w-[49%] w-full flex flex-col gap-2">
                <p className="font-bold">
                  <span className="text-2xl font-extrabold italic text-[#1FC0BF]">
                    P
                  </span>
                  roject 3
                </p>
                <Image
                  priority
                  src={"/assets/product-plan.png"}
                  alt="logo"
                  width={100}
                  height={60}
                />
                <p className="font-bold text-[#F9AD2A]">PRODUCT PLAN</p>I
                recently did an internship as a product designer, which gave me
                a great opportunity to explore the design side of tech more
                deeply. During the internship, I worked closely with both
                developers and product managers to design user-centered
                solutions—from wireframes to high-fidelity mockups. I learned a
                lot about user research, UI/UX principles, and how to think
                critically about product features and user flows. Tools like
                Figma became part of my daily workflow, and I really enjoyed the
                creative process of turning ideas into intuitive designs. It was
                a valuable experience that helped me better understand the full
                product development cycle and how design plays a key role in
                shaping digital experiences.
                <a
                  href="https://productplan.ir/"
                  className="text-[#1FC0BF] font-bold"
                >
                  {" "}
                  <span className=" text-black">visit: </span>Product-plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsPageModule;
