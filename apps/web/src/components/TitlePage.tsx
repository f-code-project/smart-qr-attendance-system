const TitlePage = ({ title, description }: { title: string; description: string }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm opacity-60 mt-1">{description}</p>
    </div>
  );
};

export default TitlePage;
