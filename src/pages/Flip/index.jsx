import AdSection from '../../components/AdSection';
import GameSection from '../../components/GameSection';
function Flip() {
  return (
    <div className="mt-10 md:mt-20 xl:px-[15%] px-5 py-20">
      <div className="flex flex-col gap-10">
        <AdSection />
        <GameSection />
      </div>
    </div>
  );
}

export default Flip;
