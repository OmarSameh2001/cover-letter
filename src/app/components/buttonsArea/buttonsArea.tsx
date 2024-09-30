"use client";
interface ButtonAreaProps {
  step: number;
  handleNext: () => void | Promise<void>;
  handleBack: () => void | Promise<void>;
  handleSubmit: (e: any) => void | Promise<void>;
  handleDelete: () => void | Promise<void>;
  isLocal: boolean;
}
function ButtonsArea({
  step,
  handleNext,
  handleBack,
  handleSubmit,
  handleDelete,
  isLocal,
}: ButtonAreaProps) {
  return (
    <div>
      
    </div>
  );
}

export default ButtonsArea;
