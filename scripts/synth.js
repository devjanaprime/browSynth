/********************************************** 
browSynth
https://github.com/devjanaprime/browSynth
**********************************************/

let ctx = new AudioContext();
let oscillators = [];
let scale = [];
const oscTypes = [ 'sine', 'square', 'sawtooth', 'triangle' ];
addOscillator = () =>{
    let newTone = {
        osc: ctx.createOscillator(),
        gain: ctx.createGain(),
        active: true,
        freq: 1000
    }        
    newTone.osc.connect( newTone.gain );
    newTone.gain.connect( ctx.destination );
    newTone.osc.start();
    oscillators.push( newTone );
} //end add oscillator

window.onmousemove = event => {
    for( i in oscillators ){
        // frequency
        const frequencyIndex = parseInt( scale.length * ( event.clientX / window.innerWidth ) )
        oscillators[ i ].osc.frequency.value = scale[ frequencyIndex ].frequency;
        console.log( frequencyIndex );
        // type
        const waveIndex = parseInt( event.clientY * 4 / window.innerHeight );
        oscillators[ i ].osc.type = oscTypes[ waveIndex ];
    } //end for 
}

let addNoteToScale = ( newNote ) => {
    for( note of notes ){
        if( note.names.includes( newNote ) ) scale.push( note );
    }
    scale.sort(function(a, b){
        return a.frequency-b.frequency
    })
}

let setScale = ( scaleNames ) => {
    scale = [];
    for( scaleName of scaleNames ){
        if( scales)
    }
}