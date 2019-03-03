/********************************************** 
browSynth
https://github.com/devjanaprime/browSynth
**********************************************/

let ctx = new AudioContext();
let oscillators = [];
let scale = noteFrequencies;
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
        oscillators[ i ].osc.frequency.value = scale[ frequencyIndex ];
        console.log( frequencyIndex );
        // type
        const waveIndex = parseInt( event.clientY * 4 / window.innerHeight );
        oscillators[ i ].osc.type = oscTypes[ waveIndex ];
    } //end for 
}

let setScale = ( intervals ) => {
    let i = 0;
    let j = 0;
    while( i< noteFrequencies.length ){
        scale.push( noteFrequencies[ i ] );
        i+= intervals[ j ];
        if( j >= intervals.length ){
            j = 0 ;
        } 
        j++;
    } //end for
} //end setScale

setScale( [ 2,2,1,2,2,2,1 ]);
