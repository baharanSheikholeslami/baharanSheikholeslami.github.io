import Image from "next/image";

const HomePageModule = () => {
  return (
    <div className="bg-white flex justify-center">
      <div className="md:w-[90%] w-full !bg-[#F5F5F5] md:rounded-2xl rounded-none">
        <div className="w-full bg-[#202E39] h-[80px] md:rounded-t-2xl rounded-none flex items-center text-2xl text-white px-8">
          <p>HOME</p>
        </div>
        <div className="md:p-15 px-4 py-15">
          <div className="mt-8">
            <section
              id="home"
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            >
              <div>
                <div className="flex flex-row items-end gap-4">
                  <Image
                    unoptimized
                    priority
                    src={"/assets/Welcome.svg"}
                    alt="welcome logo"
                    width={220}
                    height={80}
                  />
                  <text className="text-2xl">I’m</text>
                </div>
                <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                  Baharan Sheikholeslami
                </h1>
                <p className="bg-white rounded-xl shadow-md p-6 text-lg leading-relaxed">
                  Hi, I'm Baharan, 22 years old. I'm a junior front-end
                  developer and currently studying computer engineering at
                  Amirkabir University of Technology in Iran. I’m really
                  passionate about web development and love building clean,
                  responsive user interfaces. As I continue learning both in
                  university and through real-world projects, I’m always looking
                  for new challenges and opportunities to grow my skills,
                  especially in modern front-end frameworks.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  unoptimized
                  priority
                  src={"/assets/profile.png"}
                  alt="profile img"
                  width={270}
                  height={200}
                  className="md:block hidden"
                />
              </div>
            </section>
            <section className="md:mt-16 bg-gray-200 rounded-2xl p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">✨ My Hobbies</h2>
              <p className="text-md leading-relaxed text-gray-700">
                Outside of coding, I have a bunch of hobbies that keep me
                inspired and balanced. I love exploring digital art and
                design—it’s a fun way to mix creativity with tech. I also enjoy
                reading, especially books that dive into psychology,
                self-growth, or science fiction. Music is a big part of my day
                too; whether I'm working or relaxing, there's usually something
                playing in the background. And when I need a break from screens,
                I like going for walks or hanging out with friends.
              </p>
            </section>

            <Image
              unoptimized
              priority
              src={"/assets/profile.png"}
              alt="profile img"
              width={270}
              height={200}
              className="md:hidden block mt-4 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePageModule;
