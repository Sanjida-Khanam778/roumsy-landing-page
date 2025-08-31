import logo1 from "../../assets/images/logo/logo1.png";
import logo2 from "../../assets/images/logo/logo2.png";
import logo3 from "../../assets/images/logo/logo3.png";
import logo4 from "../../assets/images/logo/logo4.png";
export default function Logo() {
  return (
   <div className="bg-[#F9FAFB] ">
     <div className="flex justify-evenly w-9/12 mx-auto items-center py-8">
      <div>
        <img src={logo1} alt="" />
      </div>
      <div>
        <img src={logo2} alt="" />
      </div>
      <div>
        <img src={logo3} alt="" />
      </div>
      <div>
        <img src={logo4} alt="" />
      </div>
    </div>
   </div>
  );
}
