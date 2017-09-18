<template>
	<div>
		<div id='recommendBox'>
			<ul class='recommendContent'>
				<li class='recommend-top' @click="tiaost">
					<a href="">
						<div class='number'>{{order}}</div>
						<div class='location'>
							<h2>{{place}}</h2>
							<p>{{address}}<span>{{ kilometer}}</span></p>
						</div>
						<div class='arrow'>&gt;</div>
					</a>
				</li>
				<li class='recommend-bot'>
					<div class='headPic'>
						<i></i>
						<i></i>
						<i></i>
						<i></i>
						<i></i>
					</div>
					<div class='viewNum'>今天有<span>{{people}}</span>人浏览</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import "../../../../../static/css/past24hours-t.css";
	export default{
		props:{
			order:{},
			place:{},
			address:{},
			kilometer:{},
			people:{}
		},
		methods : {
			tiaost : function(){
				location.href='#/Strategy_t'
			}
		}
		
	}
</script>

<style scoped>
	
</style>