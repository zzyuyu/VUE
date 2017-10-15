<template>
	<div>		
		<router-link to="/time-entries/log-time" v-if="$route.path !== '/time-entries/log-time'" class="btn btn-primary"
		>创建1</router-link>
		
		<logtime v-else v-on:add="timeUpdate"></logtime>

		<hr>
		
		<div class="time-entries">
			<p v-if="!timeEntries.length">
				<strong>还么有任何任务</strong>
			</p>
			<div class="list-group">
				<div class="list-group-item row" v-for="timeEntry in timeEntries">
					<div class="col-sm-2 user-details">
						<img :src="timeEntry.user.image" class="avatar img-circle img-resonsive">
						<p class="text-center">
							<strong>
								{{timeEntry.user.name}}
							</strong>
						</p>
					</div>
					<div class="col-sm-2 text-center time-block">
						<h3 class="list-group-item-text total-time"> 
							<i class="glyphicon glyphicon-time"></i>
							{{timeEntry.totalTime}}
						</h3>
						<p class="label label-primary text-center">
							<i class="glyphicon glyphicon-calendar"></i>
							{{timeEntry.date}}
						</p>
					</div>
					<div class="col-sm-7 comment-section"> 
						<p>{{ timeEntry.comment }}</p> 
					</div> 
					<div class="col-sm-1"> 
						<button class="btn btn-xs btn-danger delete-button" @click="deleteTimeEntry(timeEntry)"> X </button> 
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Logtime from './LogTime.vue'
	export default{
		name:'timeEntries',
		data:function(){
			//模拟数据
			var existingEntry={
				user:{
					name:'老王',
					email:'laowang@qq.com',
					image:'http://p1.so.qhimgs1.com/bdr/_240_/t01c8038021893a8fcd.jpg'
				},
				comment:'拉我是一个乐于助人的好人',
				totalTime:3,
				date:'2017-7-15'
			}
			return {
				timeEntries:[existingEntry]
			}
		},
		components:{
			Logtime
		},
		methods:{
			deleteTimeEntry:function(timeEntry){
				this.$emit('pushdata')
				var index=this.timeEntries.indexOf(timeEntry);
				if(window.confirm('确定要删除吗？')){
					this.timeEntries.splice(index,1);
					this.$emit('deleteTime',timeEntry);
				}
			},
			timeUpdate:function(timeEntry){
				this.timeEntries.push(timeEntry);
				
				console.log(this.timeEntries)
				return true;
			}
		}
	}
</script>

<style>
	.avatar{
		height:75px;
		margin:10px auto;
	}
	.user-details{
		background-color:#f5f5f5;
		border-right:1px solid #ddd;
		margin:-10px 0;
	}
	.time-block{
		padding:10px;
	}
	.comment-section{
		padding:20px;
	}
</style>
