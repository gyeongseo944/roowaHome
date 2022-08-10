import "./Contact.scss";

function Contact() {
  const onClick = async () => {
    try {
      const res = await fetch("http://localhost:6000/api/check");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={onClick}>++++</button>
    </div>
  );
}

export default Contact;
