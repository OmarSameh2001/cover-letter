import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from 'next/dynamic';
import Image from "next/image";
const MyStepper = dynamic(() => import('./components/stepper/stepper'), {
  ssr: false,
});
export default function Home() {
  return (
    <div>
      <Image
        src="/static/cover1.jpg"
        alt="cover letter"
        style={{ width: "100vw", height: "100vh", objectFit: "cover", zIndex: -999, position: "absolute", opacity: 0.2 }}
        width={1920}
        height={1080}
      />
      <MyStepper />
    </div>
  );
}
