<template>

   <div>
	<b-container fluid class="mt-2">

	<b-row>
	  <b-col md="5" class="my-1">
		<b-row>
		   <b-col md="4" class="my-1">
				<h6>仪器类别:</h6>
		   </b-col>
		   <b-col md="8" class="my-1" style="text-align:left;">
				<span>{{deviceInfo.product_type}}</span>
			</b-col>
		</b-row>
			<b-row>
		   <b-col md="4" class="my-1">
				<h6>产品型号:</h6>
		   </b-col>
		   <b-col md="8" class="my-1" style="text-align:left;">
				<span>{{deviceInfo.product_name}}</span>
			</b-col>
		</b-row>
		<b-row>
		   <b-col md="4" class="my-1">
				<h6>本机编号:</h6>
		   </b-col>
		   <b-col md="8" class="my-1" style="text-align:left;">
				<span>{{deviceInfo.sn}}</span>
			</b-col>
		</b-row>
		<b-row>
		   <b-col md="4" class="my-1">
				<h6>设备等级:</h6>
		   </b-col>
		   <b-col md="8"  style="text-align:left;">
				<span>{{deviceInfo.hcd_class}}</span>
			</b-col>
		</b-row>
		<b-row>
		   <b-col md="4" class="my-1">
				<h6>出厂日期:</h6>
		   </b-col>
		   <b-col md="8" class="my-1" style="text-align:left;">
				<span>{{deviceInfo.device_time}}</span>
			</b-col>
		</b-row>
		<b-row>
		   <b-col md="4" class="my-1">
				<h6>所在地区:</h6>
		   </b-col>
		   <b-col md="8" class="my-1" style="text-align:left;">
				<span>{{deviceInfo.region}}</span>
			</b-col>
		</b-row>
		<b-row>
		   <b-col md="4" class="my-1">
				<h6>所在医院:</h6>
		   </b-col>
		   <b-col md="8" class="my-1" style="text-align:left;">
				<span>{{deviceInfo.hospital}}</span>
			</b-col>
		</b-row>
		
		<b-row>
		   <b-col md="4" class="my-1">
				<h6>上线时间:</h6>
		   </b-col>
		   <b-col md="8" class="my-1" style="text-align:left;">
				<span>{{deviceInfo.install_date}}</span>
			</b-col>
		</b-row>
		
		<b-row>
		   <b-col md="4" class="my-1">
				<h6>运行状态:</h6>
		   </b-col>
		   <b-col md="8" class="my-1 " style="text-align:left; color: green;" >
				<span>{{deviceInfo.is_online}}</span>
			</b-col>
		</b-row>
	  </b-col >
	 
	  <b-col md="7" class="my-1">
		<img src="../assets/m-lab.png"></img>
	  </b-col>	
	
	 </b-row>
	  <b-row class="d-flex justify-content-center ">
		  <div  class="mt-5">
				<b-button >
					<span class="pl-2 pr-2">编辑</span>
				</b-button>
			  </div>
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
			form:{
				token:'123',
				user_id:100,
				sort_fld: null,
				sort_mode:null,
				sn:'014000I0700016',
				type:'',
				status:'',
				page_no: 1,
				page_size: 8,
			},
			deviceInfo:{}
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      },
		
    },
    mounted() {
		console.log("==========>9999999")
		if (this.$route.params.sn!=null){
			alert(this.$route.params.sn)
		}
		//this.getDataList("id","asc",this.currentPage,this.perPage)
	},
	created() {
		console.log("==========>1111119999999")
	},
    methods: {
			getDataList(sortFld,sortMode,pageNo,pageSize){
				var that=this;
				this.form.sort_fld=sortFld
				this.form.sort_mode=sortMode
				this.form.page_no=pageNo
				this.form.page_size=pageSize
				this.form.no=this.deviceNo
				
				this.form.type=this.deviceTypeSelected
				this.form.status=this.deviceStatusSelected
				
				//that.isBusy=true
				this.$axios.post(GLOBAL.URL_DEVICE_BASEINFO, 
									JSON.stringify(this.form),
									{headers: {'Content-Type': 'application/json'}})
							.then(function (response) {
								that.deviceInfo=response.data.data
							})
							.catch(function (error) {
								console.log("---->=========>",error);
				}); 		
			},
			
   
			
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
