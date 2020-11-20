import * as ml5 from 'ml5';
//for push up

export default async function main(sketch){
	let video;
	let poseNet;
	let pose;
	let skeleton; 
	let video_path;
	let pose_array=[];
	
	let width=0,height=0;
	
	var comp;
	var start_flag;
	var count;
	var count_flag;
	var videoIsPlaying;
	sketch.setup=async function() {
	
	count=0;
	start_flag=false;
	videoIsPlaying=false;
	count_flag=false;
	sketch.createCanvas(640, 360);
	video_path=document.getElementById('standard').getElementsByTagName("source")[0].src	

	video = sketch.createVideo(video_path,vidLoad);
	
		
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
	
	video.hide();
	}
	
	function vidLoad(){
		console.log('video load');
		video.stop();
 		video.loop();
		videoIsPlaying=true;
	}
	
	sketch.keyPressed=async function(){
		if(videoIsPlaying){
			video.pause();
			videoIsPlaying=false;
			poseNet.removeListener('pose', gotPoses);
			
			// Put the object into storage
localStorage.setItem('standard_pose', JSON.stringify(pose_array));


		}else{
			video.loop();
			videoIsPlaying=true;
		}
	}
	//10sec 30~40 array;
	function gotPoses(poses) {
		//머리부분의 포지션들과 손목의 포지션을 비교
		let temp;
	  if (poses.length > 0) {
		let head,hand;
		  let pose_score;
	 
		pose = poses[0].pose;
		skeleton = poses[0].skeleton;
		  //console.log('pose_data ',pose);
		 pose_array.push(pose);
		  temp=pose_array.length;
		  pose_score=pose.score;
		  if(start_flag==false){
				head=(pose.leftEar.y+pose.leftEye.y+pose.nose.y+pose.rightEar.y+pose.rightEye.y)/5;
		  hand=(pose.leftWrist.y+pose.rightWrist.y)/2;
		  comp=(head+hand)/2;
			  start_flag=true;
			}
		  
		  if(start_flag==true&&pose_score>0.25){
			  
			  head=(pose.leftEar.y+pose.leftEye.y+pose.nose.y+pose.rightEar.y+pose.rightEye.y)/5;
			   console.log(head,comp,count_flag,pose_score);
		  if(head>=comp&&count_flag==false){
				 count_flag=true;
		  }
		  
		  
		  if(head<=comp&&count_flag==true){
			count=count+1;
			  document.getElementById('count_part').innerText = count;
			  count_flag=false;
			}
		  
		  }
			  
				  
			  
		 
		  
	  }
	}
	
	function mousePressed(){
	  vidLoad();
	}

	function modelLoaded() {
	  console.log('poseNet ready');
	}
	
	sketch.draw=async function() {
	sketch.image(video, 0, 0);

	  if (pose) {
		let eyeR = pose.rightEye;
		let eyeL = pose.leftEye;
		let d = sketch.dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);
		sketch.fill(255, 0, 0);
		sketch.ellipse(pose.nose.x, pose.nose.y, d);
		sketch.fill(0, 0, 255);
		sketch.ellipse(pose.rightWrist.x, pose.rightWrist.y, 32);
		sketch.ellipse(pose.leftWrist.x, pose.leftWrist.y, 32);

		for (let i = 0; i < pose.keypoints.length; i++) {
		  let x = pose.keypoints[i].position.x;
		  let y = pose.keypoints[i].position.y;
		  sketch.fill(0, 255, 0);
		  sketch.ellipse(x, y, 16, 16);
		}

		for (let i = 0; i < skeleton.length; i++) {
		  let a = skeleton[i][0];
		  let b = skeleton[i][1];
		  sketch.strokeWeight(2);
		  sketch.stroke(255);
		  sketch.line(a.position.x, a.position.y, b.position.x, b.position.y);
		}
	  }
}
	
}



	

