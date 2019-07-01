<template>
   <div>
	
	<b-modal centered id="modal-getconfig_file" title="执行步骤">
			<div class="d-flex justify-content-between">
				<div>
					<b-button  variant="danger" class="rounded-circle">
						1
					</b-button>
					连接服务器
				</div>
				<div>
					<b-button  variant="danger" class="rounded-circle">
						2
					</b-button>
					提取数据
				</div>
				<div>
					<b-button  variant="danger" class="rounded-circle">
						3
					</b-button>
					完整确认
				</div>
			</div>
			<b-progress :max="max" class="mt-4">
				<b-progress-bar :value="value" :label="`${((value / max) * 100).toFixed(2)}%`"></b-progress-bar>
			</b-progress>
	</b-modal>
  
	<b-table
		ref="table"
		class="mt-1 "
		striped hover
		caption-top="true"
		show-empty
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
	
	<template slot="row-details" slot-scope="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
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
			<b-button  v-b-modal.modal-getconfig_file ><span class="pl-2 pr-2">数据获取</span></b-button>
			<b-button   ><span class=" pl-2 pr-2 ">推送文件</span></b-button>
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
		
		value: 33.333333333,
        max: 50,
		isBusy: false,
        items: [{"chip_id":'00000001',
				 "chip_lot":'00000002',
				 "project_name":'PIC',
				 "sample_type":'全血',
				 "product_date":'2017-12-12',
				 "active_date":'2018-12-12',
				 "chip_install_date":'2012-12-12'}
				,
				{"chip_id":'00000001',
				 "chip_lot":'00000002',
				 "project_name":'PIC',
				 "sample_type":'全血',
				 "product_date":'2017-12-12',
				 "active_date":'2018-12-12',
				 "chip_install_date":'2012-12-12'}
				,
				{"chip_id":'00000001',
				 "chip_lot":'00000002',
				 "project_name":'PIC',
				 "sample_type":'全血',
				 "product_date":'2017-12-12',
				 "active_date":'2018-12-12',
				 "chip_install_date":'2012-12-12'}
				,
				{"chip_id":'00000001',
				 "chip_lot":'00000002',
				 "project_name":'PIC',
				 "sample_type":'全血',
				 "product_date":'2017-12-12',
				 "active_date":'2018-12-12',
				 "chip_install_date":'2012-12-12'},
				 ,
				 {"chip_id":'00000001',
				  "chip_lot":'00000002',
				  "project_name":'PIC',
				  "sample_type":'全血',
				  "product_date":'2017-12-12',
				  "active_date":'2018-12-12',
				  "chip_install_date":'2012-12-12'}
				 ,
				 {"chip_id":'00000001',
				  "chip_lot":'00000002',
				  "project_name":'PIC',
				  "sample_type":'全血',
				  "product_date":'2017-12-12',
				  "active_date":'2018-12-12',
				  "chip_install_date":'2012-12-12'}
				],
        
		fields: [
					'index',
					{ key: 'chip_id', 		label: '芯片ID' },
					{ key: 'chip_lot', 		label: '批号', sortable: true, sortDirection: 'desc' },
					{ key: 'project_name',	label:'项目', sortable: true},
					{ key: 'sample_type', 	label: '样本类型' },
					{ key: 'product_date', 	label: '生产日期' },
					{ key: 'active_date', 	label: '有效日期' },
					{ key: 'chip_install_date', 		label: '安装日期' },
				],

				form:{
					token:'123',
					user_id:100,
					sort_fld: null,
					sort_mode:null,
					sn:'011401K0500031',
					type:'',
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
		this.getDataList("id","asc",this.currentPage,this.perPage)
	  },
    methods: {
			
			
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
				this.$axios.post(GLOBAL.URL_DEVICE_CHIPLIST, 
									JSON.stringify(this.form),
									{headers: {'Content-Type': 'application/json'}})
							.then(function (response) {
									that.items=response.data.data
									
									console.log("====>",that.items)

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
