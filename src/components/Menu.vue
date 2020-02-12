<template>

   <div>

	<b-container fluid class="mt-2">
	  <b-row>
	<b-col md="4" class="my-1">
	  <b-form-group label-cols-sm="4" label="角色名称" class="mb-0">
			<b-input-group>
	     		<b-form-input  v-model="form.role_name" type="text"></b-form-input>
			</b-input-group>
	  </b-form-group>
	 </b-col >
		 
	
	<b-col md="2" class="my-1">
		<b-button> 查询</b-button>
	</b-col >
	</b-row>
	</b-container>
	
	<b-container fluid class="mt-2">
	<b-row class="d-flex  align-items-center">
		<b-col md="3" class="my-1">
			<div>
				<img src="../assets/log_folder.jpg" width="80px" height="80px">
				</img>
			</div>
			<div>
				2018-12-12 12:12:12.log
			</div>
		</b-col>	
		<b-col md="3" class="my-1">
			<div>
				<img src="../assets/log_folder.jpg" width="80px" height="80px">
				</img>
			</div>
			<div>
				2018-12-12 12:12:12.log
			</div>
		</b-col>	
			<b-col md="3" class="my-1">
			<div>
				<img src="../assets/log_folder.jpg" width="80px" height="80px">
				</img>
			</div>
			<div>
				2018-12-12 12:12:12.log
			</div>
		</b-col>	
			<b-col md="3" class="my-1">
			<div>
				<img src="../assets/log_folder.jpg" width="80px" height="80px">
				</img>
			</div>
			<div>
				2018-12-12 12:12:12.log
			</div>
		</b-col>	
	</b-row>
	
	
	</b-container>

	
	<b-container fluid class="mt-2">
	<b-row class="d-flex  align-items-center">
		<b-col md="4" class="my-1">
			<strong>
				数据总共：{{totalRows}}条，每页{{perPage}}条，当前页：{{currentPage}}
			</strong>
		</b-col>
		<b-col md="4" class="my-1">
		  <b-pagination
		    v-model="currentPage"
		    :total-rows="totalRows"
		    :per-page="perPage"
		    class="my-0"
			@change="onChange"
		  ></b-pagination>
		</b-col>
		
		<b-col md="4" class="my-1">
			<b-button   v-b-modal.modal-getconfig_file ><span class="pl-2 pr-2">新增</span></b-button>
		</b-col>
	</b-row>

	</b-container>
  

   </div>
   
</template>

<script>
  import GLOBAL from './Global.js'
  import {getCurrDate} from './Global.js'
  import Util from './Util.js';
  
  export default {
    data() {
      return {
				isBusy: false,
        items: [
			
				],
       

				form:{
					"token":'123',
					user_id:100,
					sort_fld: null,
					sort_mode:null,
					role_name:'',
					status:'',
					target_page: 1,
					page_size: 8,
				},

        totalRows: 1,
        currentPage: 1,
        perPage: 8,
        pageOptions: [8, 10, 15],
        sortBy: null,
	
	
			
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }
      }
    },
   
    
    mounted() {
		  // Set the initial number of items
		this.form.begin_date=getCurrDate()
		this.form.end_date=getCurrDate()
		let that=this;
		if (this.$route.params.sn!=null){
			this.form.sn=this.$route.params.sn
		}
		Util.$on('setDeviceSn_RunLog', function (sn) {
			that.setDeviceSn(sn)
		})  
		this.getDataList("id","asc",this.currentPage,this.perPage)
			
	},
    methods: {
		
			getDataList(sortFld,sortMode,pageNo,pageSize){
				var that=this;
			
				//that.isBusy=true
				this.$axios.post(GLOBAL.URL_DEVICE_LOGLIST, 
									JSON.stringify(this.form),
									{headers: {'Content-Type': 'application/json'}})
							.then(function (response) {
									that.items=response.data.List

								
									//that.currentPage=pageNo
							//	that.isBusy=false
							})
							.catch(function (error) {
								console.log("---->=========>",error);
				}); 		
			},
			
     
			onDbClicked(filteredItems) {
				console.log(filteredItems)
				alert(filteredItems.no)
			},
			
	
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
