<template>
  <div class="hello">
	<p>윗몸일으키기 횟수 측정</p>
    <div>
    	<span class='sketch' id="sketch1">standard</span>
		<br>
	  	 
	</div>
		 
	
	<video id='standard' controls width="0" height="0">
    <source src="../../assets/sit_up1.mp4"
            type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
	</video>
	 
	<b-button variant="primary" @click.prevent="get_count">횟수 측정 종료</b-button>
	  <p>횟수</p>
	  <p id='count_part'></p>
  </div>
</template>

<script>
	import sketch from './sketch_sit_up.js'
	import p5 from 'p5'
	import axios from 'axios'
	
	var keyboardEvent = document.createEvent("KeyboardEvent");
var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";

	
	
	export default{
		data(){
			return{
				count:0
			}
		},
		methods:{
			get_count: function() {
				
					keyboardEvent[initMethod](
					  "keydown", // event type: keydown, keyup, keypress
					  true,      // bubbles
					  true,      // cancelable
					  window,    // view: should be window
					  false,     // ctrlKey
					  false,     // altKey
					  false,     // shiftKey
					  false,     // metaKey
					  40,        // keyCode: unsigned long - the virtual key code, else 0
					  0          // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
					);
					document.dispatchEvent(keyboardEvent);
				
					let sit_up_count_temp= document.getElementById('count_part').innerHTML;
				
				
			}
		},
		mounted(){
			
		
			let myp5=new p5(sketch,document.getElementById('sketch1'));
	

			
			
			
			
		}
	}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sketch {
   width: 650px;
   height:400px;
   margin: 10;	
	margin-left:20%;
   left: 0;
   top: 0;
   border: 1px solid black;
	display:block;
}
</style>
