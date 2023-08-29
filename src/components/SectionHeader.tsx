interface SectionHeaderProps {
  icon: React.ReactNode;
  label: string;
}

export const SectionHeader = ({ icon, label }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col mb-6 text-center font-thin border-b border-dashed border-neutral-600 pt-2 pb-6">
      <div className="flex items-center space-x-4 justify-center">
        {icon}
        <h1 className="text-4xl font-bold">{label}</h1>
      </div>
    </div>
  );
};
