import './App.css';
import {useEffect} from 'react';
import { fetchStreets } from './store/reducers/streets';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHouses } from './store/reducers/houses';
import { fetchFlats } from './store/reducers/flats';
import { fetchInhabitants } from './store/reducers/inhabitants';

function App() {
  const dispatch = useDispatch();
  const streets = useSelector(state=>state.streetReducer);
  const houses = useSelector(state=>state.houseReducer) || null;
  const flats = useSelector(state=>state.flatReducer) || null;

  useEffect(() => {
    dispatch(fetchStreets());
    console.log('App.js is running');
  }, []);
  
  const handleStreetChange = (id) => {
    dispatch(fetchHouses(id));
  };

  const handleHouseChange = (id) => {
    dispatch(fetchFlats(id));
    console.log('House id: ',id);
  };
  const handleFlatChange = (id) => {
    dispatch(fetchInhabitants(id));
    console.log('Flat id: ',id);
  };

  return (
    <div className="App">
      <select onChange={(event)=>handleStreetChange(event.target.value)}>
        {streets.map((street) => <option value={street.id} key={street.id}>{street.name}</option>)}
      </select>
      { houses &&
        <select onChange={(event)=>handleHouseChange(event.target.value)}>
          {houses.map((house) => <option value={house.id} key={house.id}>{house.name}</option>)}
        </select>
      }
      { flats &&
        <select onChange={(event)=>handleFlatChange(event.target.value)}>
          {flats.map((flat) => <option value={flat.id} key={flat.id}>{flat.name}</option>)}
        </select>
      }
     
    </div>
  );
}

export default App;
