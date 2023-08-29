export const LeaveCard = ({ label }: { label: string }) => {
  return (
    <div className="w-40 animate-flying-card h-10 absolute right-8 z-10 flex items-center justify-center font-semibold md:flex items-center justify-center bg-gradient-to-bl from-sky-500 via-sky-900 to-black p-4 rounded-tl-3xl rounded-br-3xl">
      {label}
    </div>
  );
};
