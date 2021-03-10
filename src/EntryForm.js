import { useState } from 'react';


function EntryForm(props) {
  const [entryDate, setEntryDate] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmitEntry = (e) => {
    e.preventDefault();
    console.log('submitting new entry...')
    if ([entryDate, amount, category, description].some(i => i === '')) {
        return;
    }
    const newEntry = {
        EntryDate: entryDate,
        Amount: (amount * 100).toString(),
        Category: category,
        Description: description
    };
    // config for POST
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEntry)
    }
    // post to db
    fetch(`${props.api}/insert.json`, config)
      .then( response => response.json() )
      .then( responseData => {
        console.log(responseData)
        props.addEntry(newEntry);
        setEntryDate('');
        setAmount('');
        setCategory('');
        setDescription('');
      })
      .catch( err => console.log('something went wrong...:', err) )
  }

  return (
    <div>
      <h2>Insert a budget entry</h2>
      <form onSubmit={handleSubmitEntry}>
        <label className="entry-form">entry date</label>
        <input
          name="entryDate"
          type="text"
          value={entryDate}
          onChange={e => setEntryDate(e.target.value)} />
          <br />
          <label className="entry-form">amount</label>
          <input
            name="amount"
            type="text"
            value={amount}
            onChange={e => setAmount(e.target.value)}/>
          <br />
          <label className="entry-form">category</label>
          <input
            name="category"
            type="text"
            value={category}
            onChange={e => setCategory(e.target.value)} />
          <br />
          <label className="entry-form">description</label>
          <input
            name="description"
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default EntryForm;
