import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl font-semibold">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Button
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Button
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-3xl font-semibold mb-4">Find Us On</h2>
        <a
          className="p-4 flex items-center gap-3 rounded-t-lg border border-neutral"
          href=""
        >
          <FaFacebook />
          facebook
        </a>
        <a
          className="p-4 flex items-center gap-3 border-x border-neutral"
          href=""
        >
          <FaTwitter />
          Twitter
        </a>
        <a
          className="p-4 flex items-center gap-3 rounded-b-lg border border-neutral"
          href=""
        >
          <FaInstagram />
          Instagram
        </a>
      </div>

      <div className="bg-gray-200 p-4 mb-6 rounded-md">
        <h2 className="text-3xl font-semibold mb-4">Q Zone</h2>
        <div>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
