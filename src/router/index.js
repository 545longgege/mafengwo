import Vue from 'vue'
import Router from 'vue-router'

import Destination_z from '../components/destination-z/destination-z.vue'
import Tour_z from '../components/tour-z/tour-z.vue'
import Special_z from '../components/special-z/special-z.vue'
import Spot_z from '../components/spot-z/spot-z.vue'

import Home_y from '../components/home-y/yHomeComponent.vue'
import Notes_y from '../components/notesContent-y/notes.vue'
import WengMain_y from '../components/wengweng-y/ywengComponent.vue'
import Visa_y from '../components/visa-y/yvisaComponent.vue'
import Ticket_y from '../components/ticket-y/yticketComponent.vue'
import Traffic_y from '../components/traffic-y/traffic.vue'


import Tripshop_t from '../components/tripShop/tripShop.vue'
import TripInfo_t from '../components/tripInfo/tripInfo.vue'
import Strategy_t from '../components/strategy/strategy.vue'
import Past24hours_t from '../components/past24hours/past24hours.vue'
import DeliciousFood_t from '../components/deliciousFood/deliciousFood.vue'
import Remark_t from '../components/remark/remark.vue'

import Strategy_c from '../components/strategy-c/strategy.vue'
import Hotel_c from '../components/hotel-c/hotel.vue'
import Condition_c from '../components/condition-c/condition.vue'
import Comment_c from '../components/comment-c/comment.vue'
import Qa_c from '../components/qa-c/qa.vue'
import StrategyList_c from '../components/strategyList-c/strategyList.vue'


import Loginz_g from '../components/welcome-g/welcome_compont.vue'
import LocalCar_g from '../components/localCar-g/localCar_component.vue'
import TopspeedRes_g from '../components/topspeedRes-g/topspeedRes_component.vue'
import Hotel_g from '../components/hotel-g/hotel_component.vue'
import Register_g from '../components/register-g/register_component.vue'



import Location_x from '../components/location-x/localtion-fine.vue'
import Search_x from '../components/search-x/search-x.vue'
import Travalnote_x from '../components/traval-note-x/traval-note.vue'
import Ticket_x from '../components/ticket-x/ticket-x.vue'
import Searchticket_x from '../components/search-ticket-x/search-ticket.vue'
import Hotplaymethod_x from '../components/hotplay-method-x/hotplay-x.vue'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home_y
    },
    {
    	path: '/Notes_y',
      component: Notes_y
    },
	{
    	path: '/Visa_y',
      component: Visa_y
    },
	{
    	path: '/Ticket_y',
      component: Ticket_y
    },
	{
    	path: '/Traffic_y',
      component: Traffic_y
    },
	
    {
    	path: '/WengMain_y',
      component: WengMain_y    //杨亚楠
    },
    {
    	path: '/Destination_z',
      component: Destination_z
    },
    {
    	path: '/Special_z',
      component: Special_z
    },
    {
    	path: '/Spot_z',
      component: Spot_z
    },
    {
    	path: '/Tour_z',
      component: Tour_z
    },												//周泽超
    {
    	path: '/Tripshop_t',
      component: Tripshop_t
    },
    {
    		path: '/TripInfo_t',
      component: TripInfo_t
    },
	{
		path: '/Past24hours_t',
      component: Past24hours_t
	},
	{
		path: '/DeliciousFood_t',
      component: DeliciousFood_t
	},
	{
		path: '/Remark_t',
      component: Remark_t
	},
	
    {
    		path: '/Strategy_t',
      component: Strategy_t
    },												//朱婷
	{
		path : '/Hotel_c',
		component : Hotel_c
	},
	{
		path : '/Comment_c',
		component : Comment_c
	},
	{
		path : '/Condition_c',
		component : Condition_c
	},
	{
		path : '/Qa_c',
		component : Qa_c
	},
	{
		path : '/StrategyList_c',
		component : StrategyList_c
	},
    {
    	path: '/Strategy_c',
      component: Strategy_c
    },												//曹璐
    {
    	path: '/Loginz_g',
      component: Loginz_g
    },
    {
    	path: '/Hotel_g',
      component: Hotel_g
    },	
	{
    	path: '/LocalCar_g',
      component: LocalCar_g
    },
	{
    	path: '/Register_g',
      component: Register_g
    },

    {
		path : '/TopspeedRes_g',
		component: TopspeedRes_g					//枭斐
	},
	{
		path : '/Location_x',
		component: Location_x
	},
	{
		path : '/Search_x',
		component: Search_x
	},
	{
		path : '/Travalnote_x',
		component: Travalnote_x
	},
	{
		path : '/Ticket_x',
		component: Ticket_x
	},
	{
		path : '/Searchticket_x',
		component: Searchticket_x
	},
	{
		path : '/Hotplaymethod_x',
		component: Hotplaymethod_x
	}
  ]
})
