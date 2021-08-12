import PropTypes from 'prop-types';
import React from 'react';
import { Notes } from '../../components/Notes/Notes';
import {noteAPI} from '../../data/noteAPI';

export const NotesView = () => {
    return (
        <>
            {noteAPI.map(e =>
                <Notes
                    img={e.img}
                    title={e.title}
                    lead={e.lead}
                    text={e.text}
                />
            )}
        </>
    )
}

Notes.PropTypes = {
    img: PropTypes.string,
    name: PropTypes.string.isRequired,
    lead: PropTypes.string,
    text: PropTypes.string.isRequired
};


