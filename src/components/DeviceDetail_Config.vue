<template>

   <div>
		<div style="" class="text-left ml-3 m">
			<strong class="text-primary border-left  border-success">查询条件</strong>
		</div>
	
	<b-container fluid class="mt-2">
		<b-row>
		   <b-col md="4" class="my-1">
			<b-form-group label-cols-sm="4" label="设备序列号" class="mb-0">
					 <b-input-group>
							<b-form-input v-model="deviceNo" placeholder="设备序列号"></b-form-input>
					 </b-input-group>
					</b-form-group>
			</b-col>
		</b-row>
	</b-container>

	 
   </div>
</template>

<script>
  import GLOBAL from './Global.js'

  export default {
    data() {
      return {
				isBusy: false,
      }
    },
   
    methods: {
			
		
			onSearchData(){
				this.getDataList("id","desc",this.currentPage,5)
			}
			
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.map{
	height: 650px;
	width:auto;
	border: 1px solid red;
}
.loading{
		position: absolute;
		z-index: 1999;
		top: 300px;
		left: 400px;
		width: 20%;
}

.statusColor{
	background: red;
	background-color: #42B983;
}
</style>
