import './App.css';
import Field from './components/Field';

function App() {
  return (
    <div className="App">
      <div><h1>Employee Form</h1></div>
      <form action="" className='form'>
        <Field fname="FirstName" />
        <Field fname="MiddleName" />
        <Field fname="LastName" />
        <Field fname="Birthdate" />
        <Field fname="Email" />
        <Field fname="Phone Number" />
        <Field fname="Select Gender" />
        <Field fname="Start Time" />
        <Field fname="End Time" />
        <Field fname="Job Position" />
        <Field fname="Select Teams" />
        <Field fname="Select Designation"/>
        <Field fname="Billable Hours"/>
      </form>
      <button>Submit</button>
    </div>
  );
}

export default App;
