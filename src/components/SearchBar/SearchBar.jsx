import "./SearchBar.css";
import bgImage from "../../assets/icons/bg.jpg"; 

const SearchBar = () => {

// Отримуємо актуальну дату
  const now = new Date();
//   const options = { year: 'numeric', month: 'long' };
//   const dateOptions = { weekday: 'long', day: 'numeric' };
  
  const monthYear = now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const weekdayDay = now.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric' });

  return (
    <div 
      className="search"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay"></div>

      <div className="search__content">
        <h1>Weather dashboard</h1>
        <div className="search__content_inside">
            <p>Create your personal list of favorite cities and always be aware of the weather.</p>
         
         <div className="data__day">
          <div className="date__month-year">{monthYear}</div>
          <div className="date__weekday-day">{weekdayDay}</div>
        
        </div>
        </div>
        

        <div className="search__box">
          <input type="text" placeholder="Search city..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;