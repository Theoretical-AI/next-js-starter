import Styles from '../styles/components.module.css';

import BasicForm from '../components/basicInfo';
import EntryForm from '../components/entryInfo';
import CustomizedAppbar from '../components/appbar';
import VaccinationForm from '../components/vaccination';
import ApplicationForm from '../components/form';

const Home = () => (
  <div className="home">
    <CustomizedAppbar />
    <h1>Welcome to OIA System for Entry Permit Application</h1>
    <h3>
      Please fill-up the form below to complete your entry permit application
    </h3>
    <div className={Styles.form_layout}>
      <ApplicationForm />
    </div>
  </div>
);

export default Home;
