import React from 'react';
import ListItem from '../components/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLessons, GetLessons } from '../LessionSlice';

MainPage.propTypes = {

};



function MainPage(props) {
    const dispatch = useDispatch();
    const { lessons } = useSelector(state => state.homeInfo);

    React.useEffect(() => {
        dispatch(fetchLessons());
    }, [])

    return (
        <div style={{ width: "90%", margin: '3rem auto' }}>
            <ListItem lessons={lessons} />
        </div>
    );
}

export default MainPage;