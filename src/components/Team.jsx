import { useOutletContext } from "react-router-dom";
import TeamMember from "../components/TeamMember";

const Team = () => {
  const { people } = useOutletContext();
  console.log(people);

  return (
    <section className="pb-8 px-8">
      {/* title div */}
      <div className="text-center max-w-[1200px] mx-auto">
        <h1 className="text-[#9e1918] text-3xl font-extrabold">
          Meet our team
        </h1>
        <div className="h-1 w-48 bg-[#9e1918] mx-auto mt-1"></div>
        <p className="mt-4 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          adipisci totam explicabo beatae, doloremque repellendus. Eveniet
          veniam dolore ad distinctio iusto sed provident eos in magni, vero
          reiciendis inventore quisquam? Maxime a sint mollitia tenetur ipsa
          tempora harum autem, ullam laborum est adipisci iste atque quas
          excepturi modi. Esse, magnam?
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto mt-8">
        <div className="grid gap-8 md:grid-cols-2">
          {people.map((person) => {
            return <TeamMember key={person.id} {...person} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Team;
