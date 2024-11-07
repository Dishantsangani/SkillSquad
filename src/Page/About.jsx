import React from "react";
import profile from "../assets/my-photo.png";
import { BlurText } from "../assets/Animation's/BlurText";

function About() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            What our
            <span className="text-blue-500 ">
              <BlurText text=" Clients" className="custom-class" delay={50} />
            </span>
            say
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>
          <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
              <p className="leading-loose text-gray-500 dark:text-gray-300">
                “At SkillSquad, we are committed to streamlining workflows and
                optimizing productivity. Our platform is designed to enhance
                team collaboration, skill development, and project management
                through intuitive tools and features”.
              </p>
              <div className="flex items-center mt-6">
                <img
                  className="object-cover rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div className="mx-4">
                  <h1 className="font-semibold text-blue-500">Robbert</h1>
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    Marketing Manager at Stech
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
              <p className="leading-loose text-gray-500 dark:text-gray-300">
                “Whether you're onboarding new employees or upskilling your
                current team, SkillSquad ensures everyone stays aligned with
                clear goals, measurable progress, and seamless integration into
                your existing systems.”.
              </p>
              <div className="flex items-center mt-6">
                <img
                  className="object-cover rounded-full w-14 h-14"
                  src={profile}
                  alt=""
                />
                <div className="mx-4">
                  <h1 className="font-semibold text-blue-500">
                    Dishant Sangani
                  </h1>
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    Founder Of SkillSquad
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
