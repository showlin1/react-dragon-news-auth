import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
// import bg1 from '../../../assets/bg.png';

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 mb-6">
                <h2 className="text-3xl font-bold mb-3">Login With</h2>
                <button className="btn btn-outline w-full mb-3">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full mb-3">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>
            <div className="p-4 mb-6">
                <h2 className="text-3xl font-bold mb-3">Find Us On</h2>
                <a className="p-4 flex items-center border rounded-t-lg text-lg" href="">
                    <FaFacebook className="mr-3"></FaFacebook>
                    Facebook
                </a>
                <a className="p-4 flex items-center border-x  text-lg" href="">
                    <FaTwitter className="mr-3"></FaTwitter>
                    Twitter
                </a>
                <a className="p-4 flex items-center border rounded-b-lg text-lg" href="">
                    <FaInstagram className="mr-3"></FaInstagram>
                    Instagram
                </a>
            </div>
            {/* q zone */}
            <div className="p-4 mb-6 bg-[#F3F3F3]">
                <h2 className="text-3xl font-bold mb-3">Q Zone</h2>
                <img className="mb-4" src={qZone1} alt="" />
                <img className="mb-4" src={qZone2} alt="" />
                <img className="mb-4" src={qZone3} alt="" />
            </div>
            <div className="px-4 py-6 bg-[#05001D50] text-center" >
                <h3 className="text-2xl text-white text-center font-bold mb-4">Create an Amazing Newspaper</h3>
                <p className="px-4 text-xl text-white font-bold text-center mb-4">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="btn btn-secondary">Learn More</button>
            </div>
        </div>
    );
};

export default RightSideNav;