import './App.css';
import TableauReport from 'tableau-react';


//how the fxn are defined, when and why you use that
window.onload = () => {
  //window.onload? called when the page gets loadded 
  //grabbing all the data switcher attributes: Home, Analysis, Factors and Conclusion
  const tab_switchers = document.querySelectorAll('[data-switcher]');

  for (let i = 0; i < tab_switchers.length; i++) { // 4 tab switchers
    // tab switchers is list in js
    const tab_switcher = tab_switchers[i];
    console.log(tab_switcher);
    //tab switcher is one object
    const page_id = tab_switcher.dataset.tab; //getting the data tab we gave in html (id)

    const activate = () => {
      document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
      //deactivate the current tab
      tab_switcher.parentNode.classList.add('is-active');
      //activate a new tab (tab that gets clicked), parent.node to get li...

      SwitchPage(page_id);
    }

    tab_switcher.addEventListener('click', activate);


  }


}



function SwitchPage(page_id) {
  //console.log(page_id);

  const current_page = document.querySelector('.pages .page.is-active');
  //deactivate current page
  current_page.classList.remove('is-active');

  //the page we are switching to
  //allows us to add variables inside our strings 
  //if the data page is equal to the page id we're passing trough, that will be our next page
  const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
  next_page.classList.add('is-active'); //activate next page 
}

function App() {
  const options = {
    width: 1000,
    height: 1700
  };

  return (
    <div className="App">
      <TableauReport
        options={options}
        url="https://public.tableau.com/views/NetMigration_16808155097060/ErrorDashboard?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
      />
      <p>Our study finds that the convergence time is 132 years, meaning that in the year 2151, all states are predicted to have a similar population of 14,795,131. Initially, California, Texas, Nevada, Oregon, and Hawaii were the states with the largest migration inflow  and the District of Columbia, Delaware, Alaska, Wyoming, and Rhode Island experienced the largest migration inflow. Due to different rates of increase and decrease in population for each state, the ranking of state by population changes over time.  We also found that although Markov chain models do not accurately predict population changes over time, our predictions are comparable to the actual population, where an increase in the predicted population indicates an increase in the actual population and vice versa.  These results are presented on an interactive ReactJS website.</p>

    </div>

  );
}





export default App;

//what is the difference between id, attribute and class?
//data-switcher data-tab="1"; what's the diffence bn these two items?