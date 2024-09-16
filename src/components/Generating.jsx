import { loading } from '../assets';

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ''
      } text-base`}
    >
      <img src={loading} alt="loading" className="w-5 h-5 mr-4 animate-spin" />
      AI is generating
      <span className="text-n-1/60 animate-pulse px-0.5">|</span>
    </div>
  );
};

export default Generating;
