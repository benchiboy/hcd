<template>
  <div >
		<div style="" class="text-left ml-3 m">
			<strong class="text-primary border-left  border-success">查询条件</strong>
		</div>
		<b-container fluid class="mt-2">
		<b-row>
		</b-row>
  		<b-row>
  
	  <b-col md="2" class="my-1">
        <b-form-group label-cols-sm="3" label="类型" class="mb-0">
           <b-input-group>
           	<b-form-select v-model="form.product_type" :options="productTypeOptions" change="onProductTypeChange">
           		<option slot="first" :value="null">-- 全部 --</option>
           	</b-form-select>
    			 </b-input-group>
        </b-form-group>
      </b-col>

	  <b-col md="2" class="my-1">
        <b-form-group label-cols-sm="3" label="地区" class="mb-0">
           <b-input-group>
           	<b-form-select v-model="form.region" :options="regionOptions" change="onRegionChange">
           		<option slot="first" :value="null">-- 全部 --</option>
           	</b-form-select>
    			 </b-input-group>
        </b-form-group>
      </b-col>
		
	 <b-col md="3" class="my-1">
        <b-form-group label-cols-sm="3" label="序列号" class="mb-0">
			 <b-input-group>
					<b-form-input v-model="form.sn" placeholder="设备序列号"></b-form-input>
			 </b-input-group>
			</b-form-group>
	</b-col>
		
	<b-col md="2" class="my-1">
				<b-form-group label-cols-sm="3" label="医院" class="mb-0">
					<b-input-group>
						<b-form-input v-model="form.hospital" placeholder="医院"></b-form-input>
					</b-input-group>
				</b-form-group>
	</b-col>
    
	<b-col md="2" class="my-1">
				<b-form-group label-cols-sm="3" label="等级" class="mb-0">
					<b-input-group>
						<b-form-select v-model="form.hcd_class" :options="hcdclassOptions" change="onHcdclassChange">
							<option slot="first" :value="null">-- 全部 --</option>
						</b-form-select>
					</b-input-group>
				</b-form-group>
	</b-col>
	
	<b-col md="1" class="my-1">
			<b-button  @click="onSearchData">查询</b-button>
	</b-col>
	</b-row>
    <!-- Main table element 
			per-page=0 禁止内部分页功能
			thead-class="table-danger"
		-->
    <b-table
		ref="table"
		class="mt-1 "
		striped hover
		caption-html="<strong class='text-primary border-left  border-success'>设备列表</strong>"
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
		<h5>没有查询到设备数据！</h5>
	</template>
		
	<template slot="index" slot-scope="data" >
        {{ data.index + 1 }}
     </template>

	<template slot="hospital" slot-scope="row">
			<span>{{row.value}}</span>
	 </template>
	  
      <template slot="is_online" slot-scope="row">
     	<span  v-if="row.value==true" >在线</span>
		<span  v-if="row.value==false"  calss="border-primary">下线</span>
	  </template>
		
	</b-table>
		
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
		<b-button > <span class="pl-2 pr-2">新增设备</span></b-button>
		<b-button ><span class="pl-2 pr-2">导入设备</span></b-button>
	  </b-col>
    </b-row>

		
  </b-container>
	
	<div  class="text-center text-danger  loading"  v-show="is">
		<b-spinner class="align-middle"  role="status" >
		</b-spinner>
		<strong>loading...</strong>
	</div>
	
	
	</div>
</template>

<script>
  import GLOBAL from './Global.js'
  import Util from './Util.js';
  export default {
    data() {
      return {
				isBusy: false,
		items:  [
			
			    ],
        fields: [
					'index',
					{ key: 'product_type', 	label: '设备类型' },
					{ key: 'sn', 			label: '序列号', sortable: true, sortDirection: 'desc' },
					{ key: 'region', 		label: '所在地区' },
					{ key: 'hospital', 		label: '所在医院' },
					{ key: 'hcd_class',		label:'等级', sortable: true},
   					{ key: 'online_time', 	label: '最近在线时间' },
					{ key: 'is_online', 		label: '在线状态' },
				],

				form:{
					token:'123',
					user_id:100,
					sort_fld: null,
					sort_mode:null,
					sn:'',
					product_type:'',
					hcd_class:'',
					hospital:'',
					region:'',
					target_page: 1,
					page_size: 5,
				},

        totalRows: 1,
        currentPage: 1,
        perPage: 5,
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
		
		regionOptions() {
				// Create an options list from our fields
				return  [
					{ text: '北京', value: '北京' },
					{ text: '上海', value: '上海' },
					{ text: '重庆', value: '重庆' },
				]
			},
		productTypeOptions() {
				// Create an options list from our fields
				return  [
          { text: 'mLabs', value: 'a' },
          { text: 'qLabs', value: 'b' },
					{ text: 'uLabs', value: 'c' },
        ]
			},
		
		hcdclassOptions() {
				// Create an options list from our fields
			return  [
					{ text: 'A类', value: 'z' },
					{ text: 'B类', value: 'a' },
					{ text: 'C类', value: 'b' },
				]
			}
    },
    mounted() {
		// Set the initial number of items
		console.log("------>",this.$route.params.region)
		if (this.$route.params.region!=null){
			this.form.region=this.$route.params.region
		}
		
		Util.$emit('setCurrIndex',2);
		//this.getDataList("id","asc",this.currentPage,this.perPage)
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
				//that.isBusy=true
				this.$axios.post(GLOBAL.URL_DEVICELIST, 
									JSON.stringify(this.form),
									{headers: {'Content-Type': 'application/json'}})
							.then(function (response) {
								console.log("========>",response.data)
								that.items=response.data.data.device_list
								console.log(that.items)

								for (var i=0;i<that.items.length;i++){
									if (that.items[i].is_online=='0'){
										that.items[i]._cellVariants={ is_online: 'danger'}
									}else{
										that.items[i]._cellVariants={ is_online: 'secondary'}
									}
								}
								that.totalRows = response.data.total
									//that.currentPage=pageNo
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
			alert(filteredItems.sn)
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
			alert(JSON.stringify(this.form))
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
