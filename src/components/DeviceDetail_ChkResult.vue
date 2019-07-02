<template>

   <div>
	<b-container fluid class="mt-2">
	  <b-row>
	<b-col md="3" class="my-1">
	  <b-form-group label-cols-sm="4" label="芯片批号" class="mb-0">
	     <b-input-group>
	     	<b-form-select v-model="form.product_type" :options="batchNoOptions" change="onProductTypeChange">
	     		<option slot="first" :value="null">-- 全部 --</option>
	     	</b-form-select>
	    			 </b-input-group>
	  </b-form-group>
	 </b-col >
		 
	<b-col md="3" class="my-1">
	  <b-form-group label-cols-sm="4" label="检测项目" class="mb-0">
	     <b-input-group>
	     	<b-form-select v-model="form.product_type" :options="itemOptions" change="onProductTypeChange">
	     		<option slot="first" :value="null">-- 全部 --</option>
	     	</b-form-select>
	    </b-input-group>
	  </b-form-group>
	 </b-col >

	 <b-col md="4" class="my-1">
	  <b-form-group label-cols-sm="4" label="检测日期" class="mb-0">
	     <b-input-group>
	     	<b-form-input v-model="form.result_date" id="check_date" type="date"></b-form-input>
	    </b-input-group>
	  </b-form-group>
	   </b-col >
		   
	<b-col md="2" class="my-1">
		<b-button  @click="Test"> 查询</b-button>
	</b-col >
	  
	</b-row>
	</b-container>
	
	
	<b-table
		ref="table"
		class="mt-1 "
		striped hover
		caption-top="true"
		show-empty
		style="text-align: left;"
	    stacked="md"
		:busy.sync="isBusy"
		:items="items"
		:fields="fields"
		:current-page="currentPage"
		:per-page=0
		:filter="filter"
		:sort-by.sync="sortBy"
		:sort-desc.sync="sortDesc"
		:sort-direction="sortDirection"
		head-variant="primary"
		thead-class="table-primary"
		@filtered="onFiltered"
		@row-dblclicked="onDbClicked"
		@sort-changed="onSorted"
    >
	<template slot="HEAD_index" slot-scope="data">
		{{data.label}}
    </template>
	<template slot="empty" slot-scope="scope">
		<h4>没有发现数据！</h4>
	</template>
	<template slot="index" slot-scope="data" >
        {{ data.index + 1 }}
    </template>
    
	<template slot="status" slot-scope="row">
		<span  v-if="row.value=='z'" style="border: 1px solid red;">正常</span>
		<span  v-if="row.value!='z'"  calss="border-primary">故障</span>
	</template>
	
	
	</b-table>
	
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
			<b-button  ><span class=" pl-2 pr-2 ">推送文件</span></b-button>
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
		value: 33.333333333,
        max: 50,
		isBusy: false,
        items: [
				 
				 {"chip_id":'1100000001',
				  "chip_lot":'00000002',
				  "project_name":'PIC',
				  "sample_type":'全血',
				  "product_date":'2017-12-12',
				  "active_date":'2018-12-12',
				  "chip_install_date":'2012-12-12'}
				],
        
		fields: [
					{ key: 'sn', 		label: '芯片批次编号', sortable: true, sortDirection: 'desc' },
					{ key: 'projectName',	label:'项目', sortable: true},
					{ key: 'resultTime', 	label: '检测时间' },
					{ key: 'resultUnit', 	label: '检测结果' },
					{ key: 'userId', 		label: '用户ID' },
				],

				form:{
					user_id:100,
					sort_fld: null,
					sort_mode:null,
					sn:'011401K0500031',
					type:'',
					status:'',
					page_no: 1,
					page_size: 8,
					result_date:'',
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
		itemOptions() {
				// Create an options list from our fields
			return  [
				{ text: 'PCT', value: 'z' },
				{ text: 'D-DIMER', value: 'a' },
				{ text: 'TNI-CKMB-MYO', value: 'b' },
				{ text: 'NT-proBNP', value: 'b' },
				{ text: 'BNP', value: 'b' },
				{ text: 'AMH', value: 'b' },
			]
		},
		batchNoOptions() {
			// Create an options list from our fields
			return  [
				{ text: '999971', value: 'z' },
				{ text: '999973', value: 'a' },
				{ text: '999979', value: 'b' },
			]
		}
    },
    mounted() {
		let that=this;
		if (this.$route.params.sn!=null){
				this.form.sn=this.$route.params.sn
		}
		Util.$on('setDeviceSn_ChkResult', function (sn) {
			that.setDeviceSn(sn)
		})  
		this.form.result_date=getCurrDate()
		this.getDataList("id","asc",this.currentPage,this.perPage)
	},
    
	methods: {
			setDeviceSn(sn){
				this.form.sn=sn;
			},
			onSearchData(){
				this.getDataList("id","desc",this.currentPage,5)
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
				this.$axios.post(GLOBAL.URL_DEVICE_RESULTLIST, 
									JSON.stringify(this.form),
									{headers: {'Content-Type': 'application/json'}})
							.then(function (response) {
									that.items=response.data.data.result_list
									console.log(response.data.data)
									console.log(that.items)
							
							//that.totalRows = response.data.total
							//that.currentPage=pageNo
							//	that.isBusy=false
							})
							.catch(function (error) {
								console.log("---->=========>",error);
				}); 		
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
