import React, {useEffect, useState} from "react";
import BubbleSort from "./BubbleSort";
import CocktailSort from "./CockTailSort";
import CountingSort from "./CountingSort";
import HeapSort from "./HeapSort";
import InsertionSort from "./InsertionSort";
import QuickSort from "./QuickSort";
import SelectionSort from "./SelectionSort";

// const [unsortedArray,setUnsortedArray] = useState([]);
// const [sortedArray, setSortedArray] = useState([]);
// const [elapsedtime, setElapsedTime] = useState();


function DisplayAlgo(input){

    for(let i =0; i<20; i++){
        unsortedArray[i] = i+1;
    }
    shuffle(unsortedArray);
    let startTime;
    let endTime;
    console.log("shuffled:", unsortedArray.toString())

    function handleSort(){
        switch(input.algo){
            case 'bubble':
                startTime = performance.now();
                setSortedArray(BubbleSort(unsortedArray.slice(0)));
                endTime = performance.now();
                setElapsedTime(endTime-startTime);
                break;
            case 'cocktail':
                return <h1>cocktail</h1>;
            case 'counting':
                return <h1>counting</h1>;
            case 'heap':
                return <h1>heap</h1>;
            case 'insertion':
                return <h1>insertion</h1>;
            case 'quick':
                return <h1>quick</h1>;
            case 'selection':
                return <h1>selection</h1>;
        }
    }

    return 0;

    return(
        <div className = "algo-container">
            
            <label for= "unsorted-array">Randomly Generated and Unsorted Array:</label>
            <div className="algo-list" id="unsorted-array">{unsortedArray.toString()}</div>

            <div className="algo-results-container">
                <button className="sort-button" onClick={handleSort()}>SORT</button>
                <div className="algo-results">Elapsed Time: {elapsedtime}</div>
            </div>
            {sortedArray.length!=0 && 
                <>
                    <label for= "sorted-array">Sorting Algorithm Results:</label>
                    <div className="algo-list" id="sorted-array">{sortedArray.toString()}</div>
                </>}
            <div></div>
            
        </div>
    )
}

function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export default DisplayAlgo;