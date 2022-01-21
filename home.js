function Home() {
  return (
      <Card
          bgcolor="primary"
          txtcolor="white"
          header="Bad Bank"
          title="Welcome to BadBank"
          text="Please select an option from the menu"
          body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
      />
  );
}
