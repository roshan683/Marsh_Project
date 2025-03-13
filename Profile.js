export function Profile() {
  return (
    <>
      <h1>profile card challenge</h1>
      <ProfileCard
        name="Bob"
        age={25}
        greeting={
          <div>
            <strong>hello bob keep up the great work</strong>
          </div>
        }
      >
        {/*passing jsx as props */}
        <p>you can pass jsx elemnts as  props,  using props.children you can pass jsx as properties</p>
        <button>Contact</button>
      </ProfileCard>
      <ProfileCard1
        name="Roshan"
        age={23}
        greeting={
          <div>
            <strong>hello Roshan keep up the great work</strong>
          </div>
        }
      ></ProfileCard1>
    </>
  );
}

function ProfileCard(props) {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <p>Age:{props.age}</p>
      <div>{props.greeting}</div>
      <div>{props.children}</div>
    </>
  );
}
function ProfileCard1(props) {
    const{name,age,greeting}=props;
    return (
      <>
      {/*using destructuring */}
      
        <h2>Name: {name}</h2>
        <p>Age:{age}</p>
        <div>{greeting}</div>
        <div>{props.children}</div>
      </>
    );
  }
export default Profile;
