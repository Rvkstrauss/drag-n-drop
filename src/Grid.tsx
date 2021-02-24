import React, { useEffect, useState } from 'react';
import { StyledGrid, GridPage, StyledCard } from './styles';

import './Grid.scss'
    const items = [
        { number: "1", color: "red"},
        { number: "2", color: "orange"},
        { number: "3", color: "pink"},
        { number: "4", color: "purple"},
        { number: "6", color: "blue"},
        { number: "7", color: "yellow"},
        { number: "8", color: "green"},
        { number: "9", color: "gray"},
        { number: "10", color: "brown"},
        { number: "11", color: "black"},
        { number: "12", color: "white"},
        { number: "13", color: "red"},
        { number: "14", color: "orange"},
        { number: "15", color: "pink"},
        { number: "16", color: "purple"},
        { number: "17", color: "blue"},
        
   ]

   interface Card {
       number: string;
       color: string;
   }

   interface GridState {
    startPosition: null | number;
    endPosition: null | number;
    isMoving: boolean;
    order: Card[];
    updatedOrder: Card[];
   }
   
   const initialState: GridState = {
    startPosition: null,
    endPosition: null,
    isMoving: false,
    order: [],
    updatedOrder: []
   }

   const Grid: React.FC = () => {
    
    const [list, setList] = useState(items);
    const [dragAndDrop, setDragAndDrop] = useState(initialState);
    
    
    const onDragStart = (event: any) => {
     const initialPosition = Number(event.currentTarget.dataset.position);
     
     setDragAndDrop({
      ...dragAndDrop,
      startPosition: initialPosition,
      isMoving: true,
      order: list
     });
    }
    
    const onDragOver = (event: any) => {
        event.preventDefault();
        
        let newList = dragAndDrop.order;
        
        const startPosition = dragAndDrop.startPosition; 
    
        const endPosition = Number(event.currentTarget.dataset.position); 
    
        const itemDragged = newList[Number(startPosition)];
        const remainingItems = newList.filter((item, index) => index !== startPosition);
    
        newList = [
            ...remainingItems.slice(0, endPosition),
            itemDragged,
            ...remainingItems.slice(endPosition)
        ];
        
        if (endPosition !== dragAndDrop.endPosition){
            setDragAndDrop({
            ...dragAndDrop,
            updatedOrder: newList,
            endPosition
            })
        }
   
    }
    
    const onDrop = (event: any) => {
     
     setList(dragAndDrop.updatedOrder);
     
     setDragAndDrop({
      ...dragAndDrop,
      startPosition: null,
      endPosition: null,
      isMoving: false
     });
    }
   
   
    const onDragLeave = () => {
      setDragAndDrop({
      ...dragAndDrop,
      endPosition: null
     });
     
    }
    
    useEffect( () => {
     console.log("List updated!");
    }, [list])
    
    return (
        <GridPage>
        <StyledGrid>
            {list.map( (item, index) => {
                return(
                    <StyledCard 
                        key={index}
                        
                        data-position={index}
                        draggable
                        
                        onDragStart={onDragStart}
                        onDragOver={onDragOver}
                        onDrop={onDrop}
                        
                        onDragLeave={onDragLeave}
                        style={{backgroundColor: item.color}}
                        className={dragAndDrop.endPosition === Number(index) ? 'dropArea' : ''}
                    />
                )
            })}
        </StyledGrid>
        </GridPage>
    );
   
}
export default Grid;