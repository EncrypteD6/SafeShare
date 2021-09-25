import NavBar from "../Navbar/Navbar";

const Result = (props) => {
  return (
    <>
      <NavBar />
      <div>{props.url}</div>
    </>
  );
};

export default Result;
