import { styled } from '@mui/material/styles';

import { Box } from "@mui/material"
import Note from './Note';
import { DataContext } from '../../context/DataProvider';


const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));


const Notes = () => {
    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Form />
                { notes.length > 0 ? 
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <Grid container style={{ marginTop: 16}}
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                {
                                    notes.map((note, index) => (
                                        <Draggable key={note.id} draggableId={note.id} index={index}>
                                            {(provided, snapshot) => (
                                                <Grid ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    item
                                                >
                                                    <Note note={note} />
                                                </Grid>
                                            )}
                                        </Draggable >
                                    ))
                                }
                                </Grid>
                            )}
                        </Droppable >
                    </DragDropContext>
                : <EmptyNotes /> }
            </Box>
        </Box>
    )
}

export default Notes;
