import { FadeLoader } from "react-spinners";

const loading = () => {
  return (
    <div className=" isolate aspect-video h-screen app-shell backdrop-blur w-full flex justify-center items-center">
      {/* --accent (#d946ef); react-spinners needs a literal value. */}
      <FadeLoader color="#d946ef" />
    </div>
  );
};

export default loading;
