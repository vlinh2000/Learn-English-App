import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

ListItem.propTypes = {

};


function ListItem(props) {
    const { lessons } = props;


    return (
        <div>
            {
                lessons.map((lesson, index) => <Item key={index} lesson={lesson} />)
            }

        </div>
    );
}

export default ListItem;