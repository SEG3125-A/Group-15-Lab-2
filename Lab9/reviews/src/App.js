import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import ReviewCard from './components/ReviewCard';
import Review from './components/Review';
//import { reviews } from './reviews';



function App() {
 const [reviews, setReviews] = useState([
  // C'était un très bon film
  // Un film fantastique
  // Pas très bon
  // bon film...
    ['John', 'Mad Max','2024-01-01','Very good movie'],
    ['Mary', 'Home Alone','2024-01-01','great movie'],
    ['Benson', 'Fast and Furious','2024-01-01','not so great'],
    ['Diana', 'Gran Turismo','2024-01-01','nice movie...']
  ]);
  const [language, setLanguage] = useState(true);

  const addReview = (names, media,date, review) => {
    setReviews([[names, media, date, review], ...reviews]);
  }
  return (
    <div >
      <div style={{ height: 60, width: '100%', backgroundColor: 'red', color: 'white', padding: 3, display: 'flex',justifyContent: 'space-between' }}>
        {/* Commentaire */}
        <h2 style={{marginLeft: 5}}>Review</h2>
        {'     '}
        <button style = {{marginLeft: 520, height: 40, width: 100, marginTop: 10, backgroundColor: 'white', borderRadius: 10}} onClick={() =>setLanguage(!language)}>
          Translate {language ? '(FR)' : '(EN)'}
          </button> 
        <div>
        </div>
    </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <div>
        <ReviewCard addReview={addReview} language={language}/>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: 120}}>
        {reviews.map((review, index) => (
      <Review
        //key={index}
        name={review[0]}
        media={review[1]}
        date={review[2]}
        review={review[3]}
        language={language}
      />
    ))}
        </div>
      
      </div>
      
      
    </div>
  );
}

export default App;
