<template>
	<div style="width:100%;flex:1;overflow: auto;">
		<section>
			<v-recommend v-for="n in lists" :order="n.order" :place="n.place" :address="n.address" :kilometer="n.kilometer" :people="n.people">
			</v-recommend>
		</section>
	</div>
</template>

<script type='text/ecmascript-6'>
	import "../../../../static/css/past24hours-t.css";
	import vRecommend from './secContentComponent/recommend-t.vue';
	import "../../../../node_modules/axios/dist/axios.js";
	import axios from 'axios';
	export default{
		data:function(){
			return{
				lists:[]
			}
			
		},
		components:{
			vRecommend
		},
		methods:{
			getData:function(){
				axios.get('../../../../../static/js/recommend-t.json')
				.then((res)=>{
					this.lists = res.data
				})
			}
		},
		created:function(){
			this.getData();
		},
	}
</script>

<style scoped>
	
</style>