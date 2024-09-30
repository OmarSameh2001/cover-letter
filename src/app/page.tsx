//import MyStepper from "./components/stepper/stepper";
import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from 'next/dynamic';
const MyStepper = dynamic(() => import('./components/stepper/stepper'), {
  ssr: false,
});
export default function Home() {
  return (
    <div>
      <img
        src=".\static\cover1.jpg"
        alt="cover letter"
        style={{ width: "100vw", height: "100vh", objectFit: "cover", zIndex: -999, position: "absolute", opacity: 0.2 }}
      />
      <MyStepper />
    </div>
  );
}
