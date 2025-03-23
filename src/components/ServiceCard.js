import { useSpring, animated } from "@react-spring/web";

const ServiceCard = ({ title, description }) => {
  const [props, api] = useSpring(() => ({
    from: { scale: 1 },
    config: { tension: 280, friction: 60 },
  }));

  const handleHover = () => api.start({ scale: 1.05 });
  const handleLeave = () => api.start({ scale: 1 });

  return (
    <animated.div
      className="p-4 sm:p-6 bg-white rounded-lg shadow-md border border-gray-200"
      style={props}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
    </animated.div>
  );
};

export default ServiceCard;
