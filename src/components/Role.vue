<template>

   <div>

	<b-container fluid class="mt-2">
	  <b-row>
	<b-col md="4" class="my-1">
	  <b-form-group label-cols-sm="4" label="开始日期" class="mb-0">
			<b-input-group>
	     		<b-form-input  v-model="form.begin_date" type="date"></b-form-input>
			</b-input-group>
	  </b-form-group>
	 </b-col >
		 
	<b-col md="4" class="my-1">
	  <b-form-group label-cols-sm="4" label="结束日期" class="mb-0">
	     <b-input-group>
			<b-form-input   v-model="form.end_date"  type="date"></b-form-input>
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
			<b-button   v-b-modal.modal-getconfig_file ><span class="pl-2 pr-2">数据获取</span></b-button>
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
        fields: [
					'index',
					{ key: 'id', 			label: 'ID值',},
					{ key: 'no', 			label: '设备序列号', sortable: true, sortDirection: 'desc' },
					{ key: 'device_name',label:'设备名称', sortable: true},
					{ key: 'type', 		label: '设备类型' },
					{ key: 'status', 	label: '设备状态' },
					{ key: 'country', label: '决策' },
					{ key: 'addr', 		label: '责任人' },
					{ key: 'oper', 		label: '操作'}
	      ],

				form:{
					"token":'123',
					user_id:100,
					sort_fld: null,
					sort_mode:null,
					sn:'011401K0500031',
					begin_date:'',
					end_date:'',
					status:'',
					target_page: 1,
					page_size: 8,
				},

        totalRows: 1,
        currentPage: 1,
        perPage: 8,
        pageOptions: [8, 10, 15],
        sortBy: null,
	
		deviceNo:'',
		deviceTypeSelected:'',
		deviceStatusSelected:'',
			
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
    computed: {
		
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      },
			countryOptions() {
				// Create an options list from our fields
				return  [
          { text: '中国', value: 'e' },
          { text: '日本', value: 'd' },
					{ text: '美国', value: 'f' },
        ]
			},
			areaOptions() {
				// Create an options list from our fields
				return  [
					{ text: '北京', value: 'a' },
					{ text: '上海', value: 'b' },
					{ text: '重庆', value: 'c' },
				]
			},deviceTypeOptions() {
				// Create an options list from our fields
				return  [
          { text: 'mLabs', value: 'a' },
          { text: 'qLabs', value: 'b' },
					{ text: 'uLabs', value: 'c' },
        ]
			},
			deviceStatusOptions() {
				// Create an options list from our fields
				return  [
					{ text: '运行良好', value: 'z' },
					{ text: '使用不足', value: 'a' },
					{ text: '警告', value: 'b' },
				]
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
			setDeviceSn(sn){
				this.form.sn=sn;
			},
			statusColor(item) {
				return item.type
			},
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
				this.$axios.post(GLOBAL.URL_DEVICE_LOGLIST, 
									JSON.stringify(this.form),
									{headers: {'Content-Type': 'application/json'}})
							.then(function (response) {
									that.items=response.data.List

									if (that.items[2].type=='a'){
										that.items[2]._cellVariants={ type: 'primary'}
								
									}else{
										that.items[2]._cellVariants={ type: 'danger'}
									}

									that.totalRows = response.data.total
									//that.currentPage=pageNo
							//	that.isBusy=false
							})
							.catch(function (error) {
								console.log("---->=========>",error);
				}); 		
			},
			
      info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
			
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
   
			onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
	
			onDbClicked(filteredItems) {
				console.log(filteredItems)
				alert(filteredItems.no)
			},
			
			onSorted(ctx) {
				console.log("=======>",ctx)
				if (ctx.sortDesc){				
						this.getDataList(ctx.sortBy,"desc",ctx.currentPage,5)
				}else{
						this.getDataList(ctx.sortBy,"asc",ctx.currentPage,5)
				}
			},
			
			onHovered(ctx) {
				console.log("=======>",ctx)
			
			},
			
			
			onChange(page){
				this.getDataList("id","desc",page,5)
			},
			
			onDeviceTypeChange(value){
				alert(this.deviceStatusSelected)
			},
			
			onDeviceStatusChange(value){
		
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
