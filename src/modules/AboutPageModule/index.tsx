import Image from "next/image";
const AboutPageModule = () => {
  return (
    <div className="bg-white flex justify-center">
      <div className="md:w-[90%] w-full !bg-[#F5F5F5] md:rounded-2xl rounded-none">
        <div className="w-full bg-[#202E39] h-[80px] md:rounded-t-2xl rounded-none flex items-center text-2xl text-white px-8">
          <p>ABOUT ME</p>
        </div>
        <div className="md:p-15 px-4 py-15">
          <div className="w-full bg-[#1FC0BF] rounded-2xl py-4 flex flex-row justify-center md:items-center items-start gap-4">
            <Image
              unoptimized
              priority
              src={"/assets/music.svg"}
              alt="logo"
              width={143}
              height={143}
            />
            <div className="w-[60%] text-white">
              <p className="text-white text-2xl font-extrabold">
                My Taste Of Music
              </p>
              For me, music is more than just background noise—it’s a source of
              energy, focus, and emotional connection. Whether I’m coding,
              designing, or just taking a break, having music around helps me
              stay in the zone. It boosts my creativity, lifts my mood, and
              sometimes even inspires ideas I wouldn’t have had otherwise. I
              love how different genres can match different states of
              mind—there’s always a song that fits the moment.
            </div>
          </div>

          <div className="flex flex-col mt-18 gap-5">
            <div className="flex md:flex-row gap-5 flex-col justify-between">
              <div className="bg-white md:w-[49%] w-full text-black rounded-2xl">
                <div
                  className="bg-cover bg-center h-[100px] w-full rounded-t-2xl shadow-md"
                  style={{ backgroundImage: "url('/assets/addin.jpg')" }}
                ></div>
                <div className="px-4 py-5">
                  <p className="text-2xl font-bold">Adiin By Otto A Totland</p>
                  ​"Companion" is a serene solo piano piece by Norwegian
                  composer Otto A. Totland, featured on his 2021 album of the
                  same name. Recorded on a vintage upright piano at Berlin’s
                  Funkhaus Saal 3, the track exemplifies Totland's minimalist
                  approach, embracing the natural sounds of the instrument—such
                  as the mechanical noises of the hammers and the subtle use of
                  the sustain pedal—to create an intimate and contemplative
                  atmosphere.
                  <a href="https://open.spotify.com/track/60Wh77e7OunMYGiW4qLWZK">
                    <Image
                      unoptimized
                      priority
                      src={"/assets/play.svg"}
                      alt="logo"
                      width={64}
                      height={64}
                      className="float-right my-4"
                    />
                  </a>
                </div>
              </div>

              <div className="bg-white md:w-[49%] w-full text-black rounded-2xl">
                <div
                  className="bg-conic bg-top h-[100px] w-full rounded-t-2xl shadow-md"
                  style={{ backgroundImage: "url('/assets/Mina.jpg')" }}
                ></div>
                <div className="px-4 py-5">
                  <p className="text-2xl font-bold">
                    Mina By Christophe Rezai{" "}
                  </p>
                  "Mina" is a poignant instrumental track by composer Christophe
                  Rezai, featured as the third piece on his 2011 album
                  Canaan.The composition showcases Rezai's minimalist approach,
                  blending gentle piano melodies with subtle orchestration to
                  evoke deep emotional resonance.
                  <a href="https://open.spotify.com/track/5sh7886NziXcQGfv5Yq8ko">
                    <Image
                      unoptimized
                      priority
                      src={"/assets/play.svg"}
                      alt="logo"
                      width={64}
                      height={64}
                      className="float-right my-4"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row gap-5 flex-col justify-between">
              <div className="bg-white md:w-[49%] w-full text-black rounded-2xl">
                <div
                  className="bg-cover bg-center h-[100px] w-full rounded-t-2xl shadow-md"
                  style={{ backgroundImage: "url('/assets/idea10.jpg')" }}
                ></div>
                <div className="px-4 py-5">
                  <p className="text-2xl font-bold">
                    Idea 10 By Gibran Alcocer
                  </p>
                  ​"Idea 10" is a minimalist piano composition by Mexican
                  pianist and composer Gibran Alcocer.Composed in the natural G
                  minor scale, "Idea 10" features a simple yet emotionally
                  resonant melody, primarily utilizing piano with subtle
                  percussion elements.The composition's popularity has led to
                  various reinterpretations and arrangements, including solo
                  piano renditions and ambient covers .​
                  <a href="https://open.spotify.com/track/1lb3H41lbvAN28N7yqRNL9">
                    <Image
                      unoptimized
                      priority
                      src={"/assets/play.svg"}
                      alt="logo"
                      width={64}
                      height={64}
                      className="float-right my-4"
                    />
                  </a>
                </div>
              </div>

              <div className="bg-white md:w-[49%] w-full text-black rounded-2xl">
                <div
                  className="bg-conic bg-top h-[100px] w-full rounded-t-2xl shadow-md"
                  style={{ backgroundImage: "url('/assets/transciense.jpeg')" }}
                ></div>
                <div className="px-4 py-5">
                  <p className="text-2xl font-bold">
                    Transience by Yannick Lowack
                  </p>
                  ​"Transience" is a solo piano composition by Yannick Lowack,
                  released on October 8, 2023. This 2-minute piece blends
                  minimalist classical elements with ambient textures, creating
                  a reflective and emotionally resonant atmosphere. Its gentle
                  melodies and subtle dynamics evoke a sense of impermanence and
                  introspection.
                  <a href="https://open.spotify.com/track/65lYbLoubih0ZSuuZEneSl">
                    <Image
                      unoptimized
                      priority
                      src={"/assets/play.svg"}
                      alt="logo"
                      width={64}
                      height={64}
                      className="float-right my-4"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPageModule;
