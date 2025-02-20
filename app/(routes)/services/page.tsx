
import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <div>
            <TransitionPage />
            <CircleImage />
            <AvatarServices />

            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
                <div className="max-w-[450px] mt-20 md:mt-0">
<h1 className="text-2xl leading-light text-center md:text-left md:text-4xl md:mb-5">
Mis  {" "}
<span className="font-bold text-blue-500">
servicios.
</span>
</h1>
<p className="mb-3 text-xl text-gray-300">
Ofrezco mi servicios como desarrollador full stack.
</p>
<button className="px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-500/65">Contacta conmigo</button>
                </div>
                
            </div>

            <div>
            <SliderServices />        
            </div>

        </div>
    );
}

export default ServicesPage;