<template>
	<div>
		<div id='allBuyBox'>
			<v-guessHeader title="大家都在买"></v-guessHeader>
			<div id='allBuyListsContent'>
				<v-allBuyLists v-for="n in lists" :title="n.sonTitle" :price="n.sonPrice" :vSrc="n.sonSrc">	
				</v-allBuyLists>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import vGuessHeader from './guessHeader-t.vue';
	import vAllBuyLists from './allBuyLists-t.vue';
	import '../../../../../node_modules/axios/dist/axios.js';
	import axios from 'axios';
	export default{
		data:function(){
			return{
				lists:[]   
			}
		},
		methods:{
			getData:function(){
				axios.get('../../../../../static/js/allBuyLists-t.json')
				.then((res)=>{
//					console.log(res.data)
					this.lists = res.data;
				})
			}
		},
		created:function(){
			this.getData();
		},
		components:{
			vGuessHeader,
			vAllBuyLists
		}
	}
</script>

<style scoped>
	#allBuyListsContent{
		width:95%;
		margin:0 auto;
		display:flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
</style>