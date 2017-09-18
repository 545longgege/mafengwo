<template>
	<div style="width:100%;flex:1;overflow: auto;">
		<section>
			<v-food v-for="n in lists" :picSrc="n.picSrc" :titile="n.titile" :percent="n.percent"></v-food>
		</section>
	</div>
</template>

<script type='text/ecmascript-6'>
	import vFood from './secContentComponent/foods-t.vue';
	import '../../../../node_modules/axios/dist/axios.js';
	import axios from 'axios';
	
	export default{
		data:function(){
			return{
				lists:[]
			}
		},
		components:{
			vFood
		},
		methods:{
			getData:function(){
				axios.get("../../../../../static/js/deliciousFood-t.json")
				.then((res)=>{
					this.lists=res.data;
				})
			}
		},
		created:function(){
			this.getData()
		}
	}
</script>

<style scoped>
	section{
	    width:90%;
	    margin:0 auto;
	    display: flex;
	    flex-wrap: wrap;
	    justify-content: space-between;
	    margin-top:.2rem;
	}
</style>