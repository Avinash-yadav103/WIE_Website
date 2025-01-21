import "./Teams.css";
import Card from "./Card";

const Teams = () => {
  const teamMembers = [
    {
      name: "Risshi Raj Sen",
      position: "President",
      image: "https://placehold.co/350x350",
    },
    {
      name: "Avinash Yadav",
      position: "Vice President",
      image: "https://placehold.co/350x350",
    },
    {
      name: "Nandini Sharma",
      position: "Secretary",
      image: "https://placehold.co/350x350",
    },
    {
      name: "Shreya Singh",
      position: "Treasurer",
      image: "https://placehold.co/350x350",
    },
    {
      name: "Risshi Raj Sen",
      position: "President",
      image: "https://placehold.co/350x350",
    },
    {
      name: "Avinash Yadav",
      position: "Vice President",
      image: "https://placehold.co/350x350",
    },
  ];
  return (
    <>
      <div className="teams-main-wrapper">
        <div className="teams-left-wrapper">
          <h2>MEET OUR TEAM</h2>
        </div>
        <div className="teams-right-wrapper">
        <div className="teams-container">
          <div className="teams-heading" style={{color : "#D16B88"}}>Board</div>
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              name={member.name}
              position={member.position}
              image={member.image}
              color="#D16B88"
            />
          ))}
        </div>
        <div className="teams-container">
          <div className="teams-heading"  style={{color : "skyblue"}}>Tech</div>
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              name={member.name}
              position={member.position}
              image={member.image}
              color="skyblue"
            />
          ))}
        </div>
        <div className="teams-container">
          <div className="teams-heading" style={{color : "orange"}}>Management</div>
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              name={member.name}
              position={member.position}
              image={member.image}
              color="orange"
            />
          ))}
        </div>
        
        </div>
      </div>
    </>
  );
};

export default Teams;
