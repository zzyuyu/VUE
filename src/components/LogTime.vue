<template>
	<div class="form-horizontal" >
		<div class="form-group row">
			<div class="col-sm-6">
				<label>日期</label>
				<input type="date" class="form-control" v-model="timeEntry.date" placeholder="Date">			
			</div>
			<div class="col-sm-6">
				<label>时间</label>
				<input type="number" class="form-control" v-model="timeEntry.totalTime" placeholder="Hours">
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-12">
				<label>备注</label>
				<input type="text" class="form-control" v-model="timeEntry.comment" placeholder="Comment">
			</div>
		</div>
		<a class="btn btn-primary" v-on:click="save">保存</a>
		<router-link to="/time-entries" class="btn btn-danger">取消</router-link>
		<hr>
	</div>
</template>

<script>
	export default {
		name:'logTime',
		data:function(){
			return {
				timeEntry:{
					user:{
						name:'小明',
						email:'xiaoming@qq.com',
						image:'http://p1.so.qhimgs1.com/bdr/_240_/t014a541ad0de62259d.jpg'
					},
					date:null,
					totalTime:null,
					comment:null
				}
			}
		},
		methods:{
			save:function(){				
				this.$emit('add',this.timeEntry);
				this.timeEntry={
					user:{
						name:'小明',
						email:'xiaoming@qq.com',
						image:'./static/img/02.jpg'
					},
					date:null,
					totalTime:null,
					comment:null
				};
			}
		}
	}

</script>
