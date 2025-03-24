import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineSteps = [
  {
    title: "Enter Phone Number",
    description: "Provide your phone number to start the registration process.",
    icon: "📱",
  },
  {
    title: "Verify OTP",
    description: "Enter the OTP sent to your phone to verify your identity.",
    icon: "🔒",
  },
  {
    title: "Add Details",
    description: "Fill in your name, address, and other details.",
    icon: "📝",
  },
  {
    title: "Choose Locality",
    description: "Select your area to find vendors near you.",
    icon: "📍",
  },
  {
    title: "Browse Meals",
    description: "Explore a variety of meals and select your favorites.",
    icon: "🍽️",
  },
  {
    title: "Confirm Order",
    description: "Review your order and confirm delivery details.",
    icon: "✅",
  },
];

const Timeline = () => {
  const stepsRef = useRef([]);

  useEffect(() => {
    stepsRef.current.forEach((step, index) => {
      const isLeft = index % 2 === 0;
      gsap.fromTo(
        step,
        { x: isLeft ? -100 : 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );

      const icon = step.querySelector(".icon");
      gsap.fromTo(
        icon,
        { scale: 0, rotation: 0 },
        {
          scale: 1,
          rotation: 360,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <div className="py-12 sm:py-16 bg-white">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-12 text-center">
        How It Works
      </h2>
      <div className="relative max-w-3xl mx-auto px-2 sm:px-0">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-600 hidden sm:block"></div>
        {timelineSteps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (stepsRef.current[index] = el)}
            className={`flex flex-col sm:flex-row items-center mb-8 sm:mb-12 ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >
            <div className="w-full sm:w-1/2 px-4 mb-4 sm:mb-0">
              <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 flex justify-center">
              <div className="icon w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl">
                {step.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
