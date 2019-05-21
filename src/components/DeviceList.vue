<template>
	
  <div >
		<b-container fluid class="mt-2">
    <!-- User Interface controls -->
    <b-row>
      <b-col md="3" class="my-1">
        <b-form-group label-cols-sm="2" label="国家" class="mb-0">
           <b-input-group>
           	<b-form-select v-model="countrySelected" :options="countryOptions">
           		<option slot="first" :value="null">-- 全部 --</option>
           	</b-form-select>
           	
					 
					 </b-input-group>
        </b-form-group>
      </b-col>

			<b-col md="3" class="my-1">
        <b-form-group label-cols-sm="2" label="地区" class="mb-0">
        
				 <b-input-group>
         	<b-form-select v-model="areaSelected" :options="areaOptions">
         		<option slot="first" :value="null">-- 全部 --</option>
         	</b-form-select>
				
				 
         </b-input-group>
				 
        </b-form-group>
      </b-col>

      <b-col md="3" class="my-1">
        <b-form-group label-cols-sm="3" label="设备类型" class="mb-0">
          <b-input-group>
            <b-form-select v-model="deviceTypeSelected" :options="deviceTypeOptions">
              <option slot="first" :value="null">-- 全部 --</option>
            </b-form-select>
				  
          </b-input-group>
        </b-form-group>
      </b-col>
			
			<b-col md="3" class="my-1">
				<b-form-group label-cols-sm="3" label="设备状态" class="mb-0">
					<b-input-group>
						<b-form-select v-model="deviceStatusSelected" :options="deviceStatusOptions">
							<option slot="first" :value="null">-- 全部 --</option>
						</b-form-select>
		
						<b-input-group-append>
							<b-button  @click="filter = ''">查询</b-button>
						</b-input-group-append>
						
					</b-input-group>
				</b-form-group>
			</b-col>

    </b-row>

    <!-- Main table element 
			per-page=0 禁止内部分页功能
		-->
    <b-table
			ref="table"
			class="mt-2"
			striped hover
      show-empty
      stacked="md"
			:busy.sync="isBusy"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page=0
      :filter="filter"
			head-variant="info"
		  :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      @filtered="onFiltered"
			@row-dblclicked="onDbClicked"
			@sort-changed="onSorted"
    >
      <template slot="dname" slot-scope="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template slot="isActive" slot-scope="row">
        {{ row.value ? 'Yes :)' : 'No :(' }}
      </template>

      <template slot="oper" slot-scope="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          修改
        </b-button>
      
				<b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
					删除
				</b-button>
	    </template>

      <template slot="row-details" slot-scope="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
			
		
			
		</b-table>
		
			

		<b-row>
      <b-col md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          class="my-0"
					@change="onChange"
        ></b-pagination>
      </b-col>
    </b-row>

    <!-- Info modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
		
  </b-container>
	
	
	<div  class="text-center text-danger  loading"  v-show="isBusy">
		<b-spinner class="align-middle"  role="status" >
		</b-spinner>
		<strong>loading...</strong>
	</div>
	
	
	</div>
</template>

<script>
  import GLOBAL from './Global.js'

  export default {
    data() {
      return {
				isBusy: false,
        items: [
				{id:"qLab", no:"00000001",device_name:"四2222川",type:"四川第一人民医院",status:"运行良好",country:"保持",	addr:"王大成",oper:"王大成"},
				{id:"qLab", no:"00000001",device_name:"四2222川",type:"四川第一人民医院",status:"运行良好",country:"保持",	addr:"王大成",oper:"王大成"},
				{id:"qLab", no:"00000001",device_name:"四2222川",type:"四川第一人民医院",status:"运行良好",country:"保持",	addr:"王大成",oper:"王大成"},
				{id:"qLab", no:"00000001",device_name:"四2222川",type:"四川第一人民医院",status:"运行良好",country:"保持",	addr:"王大成",oper:"王大成",_cellVariants: { status: 'danger' }},
				{id:"qLab", no:"00000001",device_name:"四2222川",type:"四川第一人民医院",status:"运行良好",country:"保持",	addr:"王大成",oper:"王大成"},
		
				],
        fields: [
					{ key: 'id', 	label: '设备类型' },
					{ key: 'no', 	label: '设备序列号', sortable: true, sortDirection: 'desc' },
					{ key: 'device_name',label:'设备序列号111', sortable: true},
   				{ key: 'type', 		label: '所在医院' },
					{ key: 'status', label: '设备状态' },
    			{ key: 'country', 	label: '决策' },
					{ key: 'addr', 		label: '责任人' },
					{ key: 'oper', 		label: '操作' }
	      ],

				form:{
					user_id:100,
					sort_fld: null,
					sort_mode:null,
					page_no: 1,
					page_size: 5,
				},

        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
        sortBy: null,

				countrySelected:'',
				areaSelected:'',
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
					{ text: '运行良好', value: 'a' },
					{ text: '使用不足', value: 'b' },
					{ text: '警告', value: 'c' },
					{ text: '紧急', value: 'd' },
					{ text: '闲置', value: 'e' },
					
				]
			}
    },
    mounted() {
		  // Set the initial number of items
			this.getDataList("id","asc",this.currentPage,this.perPage)
			
	  },
    methods: {
			
			getDataList(sortFld,sortMode,pageNo,pageSize){
				var that=this;
				this.form.sort_fld=sortFld
				this.form.sort_mode=sortMode
				this.form.page_no=pageNo
				this.form.page_size=pageSize
				that.isBusy=true
				this.$axios.post(GLOBAL.URL_DEVICELIST, 
									JSON.stringify(this.form))
							.then(function (response) {
									that.items=response.data.List
									that.totalRows = response.data.total
// 									that.currentPage=pageNo
									that.isBusy=false
// 									that.perPage=pageSize
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
						this.getDataList(ctx.sortBy,"desc",ctx.currentPage,ctx.perPage)
				}else{
						this.getDataList(ctx.sortBy,"asc",ctx.currentPage,ctx.perPage)
				}
			},
			
			onChange(page){
				console.log("=======>",page)
				this.getDataList("id","desc",page,5)
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
</style>
