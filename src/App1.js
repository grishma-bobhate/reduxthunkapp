import React, { useEffect}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from './redux/actions/userActions';
import User from './components/User';
const App1 = () => {
    const dispatch = useDispatch()
    const userList = useSelector(state => state.userList)
    const {loading, users, error} = userList

    useEffect(() =>{
        dispatch(userActions())
    },[dispatch])
  return (<>

      <h1> Redux Thunk Tutorial </h1>
      {loading ? <h2>Loading...</h2>: error ? <h2>{error}</h2>:
      <User users ={users} />
      }
      </>
  );
}

export default App1;
