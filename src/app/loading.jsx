import { FadeLoader } from "react-spinners";

const loading = () => {
  return (
    <div className=" isolate aspect-video h-screen bg-primary-color backdrop-blur w-full flex justify-center items-center">
      <FadeLoader color="#36d7b7" />
    </div>
  );
};

export default loading;
