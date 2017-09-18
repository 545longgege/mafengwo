<template>
	<div>
		<div id='userRemarkBox'>
			<dl class='starLevel'>
				<dt style=":background-image: url(bgPic)">
					<!--<img :src="bgPic" alt="" />-->
				</dt>
				<dd>
					<p>Lv{{levelNum}}<span>{{dateTime}}</span></p>
					<div class='iconBox'>
						<i class='iconfont icon-xing'></i>
						<i class='iconfont icon-xing'></i>
						<i class='iconfont icon-xing'></i>
						<i class='iconfont icon-xing'></i>
						<i class='iconfont icon-xing'></i>
					</div>
				</dd>
			</dl>
			<div class='txt'>{{msg}}
			</div>
			<div class='userPic'>
				<ul>
					<li>
						<img :src="picSrc1"/>
					</li>
					<li>
						<img :src="picSrc2"/>
					</li>
					<li>
						<img :src="picSrc3"/>
					</li>
				</ul>
			</div>
			<div class='shopReply'>
				<div class='shopReplyContent'>
					<em><i>{{reply}}</i>
							{{replyTxt}}
					</em>
				</div>		
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import "../../../../../static/font/iconfont.css";
	export default{
		props:{
			levelNum:{},
			dateTime:{},
			msg:{},
			bgPic:{},
			reply:{},
			replyTxt:{},
			picSrc1:{},
			picSrc2:{},
			picSrc3:{}
			
		},
		data:function(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	
</style>