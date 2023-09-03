interface SkillCardProps {
  icon: React.ReactNode;
  label: string;
}

export const SkillCard = ({ icon, label }: SkillCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 border border-zinc-500 w-max min-w-[150px] p-2 rounded-md hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500">
      {icon}
      <span>{label}</span>
    </div>
  );
};
