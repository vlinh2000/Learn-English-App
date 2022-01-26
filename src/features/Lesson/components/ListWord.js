import React from 'react';
import styled from 'styled-components';
import Word from './Word';
import AddNewWord from './AddNewWord';
import { message } from 'antd';
import { WordApi } from 'api/WordApi';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchWords } from '../lessionSlice';

ListWord.propTypes = {

};
const ListWordStyled = styled.div`
    text-align:center;
`;
function ListWord(props) {

    const { words } = props;

    const { lessonId } = useParams();

    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = React.useState(false);

    const [isVisible, setIsVisible] = React.useState(false);

    const [isEdit, setIsEdit] = React.useState(false);

    const [wordSelected, setWordSelected] = React.useState({});

    const handleAdd = () => {
        setIsVisible(true);
        setIsEdit(false);
        setWordSelected({})
    }

    const handleEdit = _id => {
        setIsVisible(true);
        setIsEdit(true);
        setWordSelected(words.find(word => word._id === _id))
    }

    const handleDelete = _id => {
        const deleteWord = async () => {
            try {
                setIsLoading(true);
                const response = await WordApi.delete(_id);

                message.success(response.message);
                setIsLoading(false);
                dispatch(fetchWords({ lessonId }));
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        }
        deleteWord();
    }

    return (
        <>
            <ListWordStyled>
                {words.map(word =>
                    <Word word={word} key={word._id} isLoading={isLoading} onEdit={handleEdit} onDelete={handleDelete} />
                )}
            </ListWordStyled>
            <AddNewWord
                onAdd={handleAdd}
                word={wordSelected}
                isEdit={isEdit}
                isVisible={isVisible}
                setIsVisible={setIsVisible} />
        </>
    );
}

export default ListWord;