function Balance() {
  const [show, setShow]          = React.useState(true);
  const [status, setStatus]      = React.useState('');
  const [name, setName]          = React.useState('');
  const [balance, setBalance]  = React.useState('');
  const ctx = React.useContext(UserContext);

  // variables will later be state managed and become global in context.js
  let userName = ctx.users[0].name;
  let balance = ctx.users[0].balance;

  // validation function used in handleCreate
  function validate(field, label) {
      if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''), 3000);
          return false;
      }
      return true;
  }

  function handleSubmit() {
      console.log(name, balance);
      if (!validate(name,     'name'))     return;
      if (!validate(balance, 'balance')) return;
      setShow(false);
  }

  function clearForm() {
      //setName('');
      //setBalance('');
      setShow(true);
  }

  return (
      <Card
        bgcolor="primary"
        header="Check Balance"
        status={status}
        body={show ? (
            <>
            Select Account<br/>
            <input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={e => setName(e.currentTarget.value)}/><br/>
            {/* create a box showing the balance of the account selected */}
            
           /*<button type="submit" className="btn btn-light" onClick={handleSubmit} >Submit to Display Balance</button>
            </>
        ) : (
            <>
            <h5>Success</h5>
            Balance for Account           {balance} <br/><br/>
            <button type="submit" className="btn btn-light" onClick={clearForm} >Continue to Account</button>
            </>
        )}
      
      />
  )
}
