<template>
  <div >
	<div class="d-flex justify-content-center">
	    <b-modal
	  		id="manage-modal-add"
	  		ref="modal"
	  		title="新增系统"
	  		scrollable
	  		@show="showModalAdd"
	  		@hidden="hiddenModal"
	  		size="lg"
	  		@ok="handleAddOk"
	      >
			<template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
				<b-button size="md" variant="success" @click="ok()">
					确定
				</b-button>
				<b-button size="md" variant="danger" @click="cancel()">
					取消
				</b-button>
			</template>
	        <form ref="form" @submit.stop.prevent="handleOk" >
	  			<label for="feedback-user">模块名称</label>
					<b-input v-model="form.group_name" :state="group_name_state" id="feedback-user">
					</b-input>
				<b-form-invalid-feedback :state="group_name_state">
					模块名称不能为空,长度在4到30字符之间.
				</b-form-invalid-feedback>
				<b-form-valid-feedback :state="group_name_state">
					校验通过
				</b-form-valid-feedback>
				
				<label for="feedback-memo">模块说明</label>
				<b-textarea v-model="form.group_memo"  id="feedback-memo">
				</b-textarea>
			</form>
			
			<div class="mt-1 " >
				<div class="d-flex justify-content-between">
				 <label class="text-primary">系统模块包括的菜单：</label>
				 <b-button size="sm" variant="outline-info"" class="mb-1" @click="addSubItem()">
					<b-icon font-scale="1.5" icon="plus" aria-hidden="true"></b-icon>
					<span class="sr-only">Help</span>
				 </b-button>
				</div>
				<b-form inline class="mt-1 d-flex justify-content-between" v-for="subItem in subList" >
					<label class="sr-only" for="inline-form-input-username">菜单名称</label>
					<b-input-group prepend="菜单名称" class="mb-2 mr-sm-2 mb-sm-0">
					  <b-input id="inline-form-input-username" v-model="subItem.menu_name" placeholder="输入菜单名称"></b-input>
					</b-input-group>

					<label class="sr-only" for="inline-form-input-username">Username</label>
					<b-input-group prepend="菜单地址" >
					  <b-input id="inline-form-input-username" v-model="subItem.url" style="width: 300px;" placeholder="菜单的Url"></b-input>
					</b-input-group>
						
					 <b-button size="sm" variant="outline-info"" class="ml-2" @click="delSubItem()">
						<b-icon  font-scale="1.5" icon="trash" aria-hidden="true"></b-icon>
						<span class="sr-only">Help</span>
					</b-button>
				</b-form>
	  	</div >

	    </b-modal>
		
		
		  <b-modal
			id="manage-modal-edit"
			ref="modal"
			title="新增系统"
			scrollable
			@show="showModalEdit"
			@hidden="hiddenModal"
			size="lg"
			@ok="handleEditOk"
		  >
			<template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
				<b-button size="md" variant="success" @click="ok()">
					确定
				</b-button>
				<b-button size="md" variant="danger" @click="cancel()">
					取消
				</b-button>
			</template>
		    <form ref="form" @submit.stop.prevent="handleOk" >
				<label for="feedback-user">模块名称</label>
					<b-input v-model="form.group_name" :state="group_name_state" id="feedback-user">
					</b-input>
				<b-form-invalid-feedback :state="group_name_state">
					模块名称不能为空,长度在4到30字符之间.
				</b-form-invalid-feedback>
				<b-form-valid-feedback :state="group_name_state">
					校验通过
				</b-form-valid-feedback>
				
				<label for="feedback-memo">模块说明</label>
				<b-textarea v-model="form.group_memo"  id="feedback-memo">
				</b-textarea>
			</form>
			
			<div class="mt-1 " >
				<div class="d-flex justify-content-between">
				 <label class="text-primary">系统模块包括的菜单：</label>
				 <b-button size="sm" variant="outline-info"" class="mb-1" @click="addSubItem()">
					<b-icon font-scale="1.5" icon="plus" aria-hidden="true"></b-icon>
					<span class="sr-only">Help</span>
				 </b-button>
				</div>
				<b-form inline class="mt-1 d-flex justify-content-between" v-for="subItem in subList" >
					<label class="sr-only" for="inline-form-input-username">菜单名称</label>
					<b-input-group prepend="菜单名称" class="mb-2 mr-sm-2 mb-sm-0">
					  <b-input id="inline-form-input-username" v-model="subItem.menu_name" placeholder="输入菜单名称"></b-input>
					</b-input-group>
		
					<label class="sr-only" for="inline-form-input-username">Username</label>
					<b-input-group prepend="菜单地址" >
					  <b-input id="inline-form-input-username" v-model="subItem.url" style="width: 300px;" placeholder="菜单的Url"></b-input>
					</b-input-group>
						
					 <b-button size="sm" variant="outline-info"" class="ml-2" @click="delSubItem()">
						<b-icon  font-scale="1.5" icon="trash" aria-hidden="true"></b-icon>
						<span class="sr-only">Help</span>
					</b-button>
				</b-form>
		</div >
		
		</b-modal>

	</div>
		
	<div style="" class="text-left ml-3 m">
		<strong class="text-primary border-left  border-success">查询条件</strong>
	</div>
		<b-container fluid class="mt-2">
			<b-row>
			</b-row>
		<b-row>
		<b-col md="4" class="my-1">
			<b-form-group label-cols-sm="3" label="系统名称" class="mb-0">
				<b-input-group>
					<b-form-input v-model="search.group_name" placeholder="系统名称"></b-form-input>
				</b-input-group>
			</b-form-group>
		</b-col>
		<b-col md="1" class="my-1">
				<b-button variant="outline-info"  @click="onSearchData">
					<b-icon  font-scale="1.5" icon="search" aria-hidden="true"></b-icon>
				</b-button>
		</b-col>
	</b-row>
 
	 <b-table
		ref="table"
		class="mt-1 "
		bordered
		striped hover
		caption-html="<strong class='text-primary border-left  border-success'>系统列表</strong>"
		caption-top="true"
		show-empty
	    stacked="md"
		:busy.sync="isBusy"
		:items="items"
		:fields="fields"
		:current-page="form.page_no"
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
	
	 <template v-slot:cell(index)="data">
        {{ data.index + 1 }}
      </template>
	  
	<template slot="empty" slot-scope="scope">
		<h5>没有查询到设备数据！</h5>
	</template>

	<template v-slot:cell(status)="data">
     	<span  v-if="data.value=='e'" >启用</span>
		<span  v-if="data.value=='b'"  calss="border-primary">禁用</span>
	</template>
	
	<template v-slot:cell(oper)="data">
		 <b-button size="sm" variant="outline-info"" v-b-modal.manage-modal-edit class="ml-2" @click="getInfo(data.item.id)">
			<b-icon  font-scale="1.5" icon="pencil" aria-hidden="true"></b-icon>
			<span class="sr-only">Help</span>
		</b-button>
		
		 <b-button size="sm" variant="outline-info"" class="ml-2" @click="delInfo(data.item.id,data.item.group_name)">
			<b-icon  font-scale="1.5" icon="trash" aria-hidden="true"></b-icon>
			<span class="sr-only">Help</span>
		</b-button>
	</template>
	</b-table>

	<b-row class="d-flex  align-items-center">
		<b-col md="4" class="my-1">
			<strong>
				数据总共：{{totalRows}}条，每页{{search.page_size}}条，当前页：{{search.page_no}}
			</strong>
		</b-col>

		<b-col md="4" class="my-1">
			<b-pagination
			  v-model="search.page_no"
			  :total-rows="totalRows"
			  :per-page="search.page_size"
			  class="my-0"
			  @change="onChange"
			></b-pagination>
		</b-col>
		 <b-col md="4" class="my-1">
			<b-button v-b-modal.manage-modal-add variant="outline-info">  
			<b-icon  font-scale="1.5" icon="plus" aria-hidden="true"></b-icon>
			新增系统</b-button>
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
		items:  [],
        fields: [
				'index',
				{ key: 'group_name', 	label: '系统名称' },
				{ key: 'status', 		label: '状态' },
				{ key: 'created_time', 	label: '创建时间' },
				{ key: 'oper', 			label: '操作' },
   			],
		form:{
				id:0,
				status:'',
				group_name:'',
				group_memo:'',
		},
		post_form:{
			group:this.form,
			list:[],
		},
		search:{
				sort_fld: null,
				sort_mode:null,
				id:0,
				status:'',
				group_name:'',
				group_memo:'',
				page_no: 1,
				page_size: 5,
		},
		subList:[
			{menu_name:'',url:''}
		],
	    totalRows: 1,
        pageOptions: [8, 10, 15],
        sortBy: null,
	    sortDesc: false,
        sortDirection: 'asc',
        filter: null,
		isSubmit:false,
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
		group_name_state() {
			if  (!this.isSubmit){
				return null;
			}
			return this.form.group_name.length > 4 && this.form.group_name.length < 13
		},
    },
    mounted() {
		// console.log("------>",this.$route.params.region)
		// if (this.$route.params.region!=null){
		// 	this.form.region=this.$route.params.region
		// }
		// Util.$emit('setCurrIndex',2);
		this.getList()
	},

    methods: {
		statusColor(item) {
			return item.type
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
					this.getList(ctx.sortBy,"desc",ctx.currentPage,5)
			}else{
					this.getList(ctx.sortBy,"asc",ctx.currentPage,5)
			}
		},
		
		addSubItem() {
			this.subList.push({menu_name:'',url:''})
		},
		
		delSubItem() {
			this.subList.pop()
		},
			
		onHovered(ctx) {
			console.log("=======>",ctx)
		},

		onChange(page){
			this.search.page_no=page
			this.getList()
		},
		onSearchData(){
			this.search.page_no=1
			this.getList()
		},
		
		checkFormValidity() {
			const valid = this.$refs.form.checkValidity()
			console.log("checkFormValidity===",valid)
			return valid
		},
	  
		handleAddOk(evt) {
			this.isSubmit=true
			if (!this.group_name_state){
				evt.preventDefault()
				return
			}
			if (!this.checkFormValidity()) {
				return
			}
			this.$nextTick(() => {
			this.$refs.modal.hide()
				this.addInfo()
				this.toast("新增成功")
			})
		},
			
		handleEditOk(evt) {
			this.isSubmit=true;
			evt.preventDefault()      
			if (!this.checkFormValidity()) {
				return
			}
			this.$nextTick(() => {
				this.$refs.modal2.hide()
				this.setInfo()
				this.toast("修改成功")
			})
		},
		
		showModalAdd(evt) {
			this.isSubmit=false;
			this.form.group_name=""
			this.form.group_memo=""
			this.subList=[{menu_name:'',menu_url:''}]
		},
		
		showModalEdit(evt) {
		
		},
			
		toast(tip) {
				this.$bvToast.toast(tip, {
				title: `执行结果`,
				toaster: 'b-toaster-top-center',
				solid: true,
				variant: 'info',
				autoHideDelay:1000,
				appendToast: false
			})
		},
		
		hiddenModal(evt) {
			//showModal(evt)
		},
			
		prevPage() {
			if (this.search.page_no>1){
				this.search.page_no--
				this.getList()
			}
		},
		
		goPage(pageNo) {
			this.search.page_no=pageNo
			this.getList()
		},
		nextPage() {
			console.log("this.totalPage",this.totalPage,this.search.page_no)
			if (this.search.page_no<this.totalPage){
				this.search.page_no++
				this.getList()
			}
		},
		/**/
		getList(){
			var that=this;
			//that.isBusy=true
			this.$axios.post(GLOBAL.URL_GETGROUP_LIST, 
						JSON.stringify(this.search),
						{headers: {'Content-Type': 'application/json'}})
						.then(function (response) {
							console.log("========>",response.data)
							that.items=response.data.list
							that.totalRows = response.data.total
						})
				.catch(function (error) {
					console.log("---->=========>",error);
			}); 		
		},
		/* 新增*/
		addInfo() {
			var that=this;
			this.post_form.list=this.subList
			this.post_form.group=this.form
			console.log(JSON.stringify(this.post_form))
			this.$axios.post(GLOBAL.URL_ADDGROUP, 
								JSON.stringify(this.post_form))
								.then(function (response) {
									that.search.page_no=1
									that.search.sort_fld="id"
									that.search.sort_mode="desc"
									that.getList();
							})
				.catch(function (error) {
			}); 		
		},
		/* 修改提交*/
		setInfo() {
			var that=this;
			this.$axios.post(GLOBAL.URL_SETGROPP, 
							JSON.stringify(this.form))
							.then(function (response) {
								that.getList();
							})
				.catch(function (error) {
						console.log("=========>",error);
				}); 		
			},
			
		/* 得到用户信息*/
		getInfo(id) {
			var that=this;
			this.form.id=id
			this.$axios.post(GLOBAL.URL_GETGROUP, 
						JSON.stringify(this.form))
						.then(function (response) {
							that.form.group_name=response.data.group_name
						})
				.catch(function (error) {
						console.log("=========>",error);
				}); 		
		},
			
		/* 删除信息*/
		delInfo(id,desc) {
			var that=this;
			let tip='你确认要删除 '+desc+' 吗?'
			this.$bvModal.msgBoxConfirm(tip, {
				title: '删除确认',
				size: 'sm',
				buttonSize: 'sm',
				okVariant: 'danger',
				okTitle: '确定',
				cancelTitle: '取消',
				footerClass: 'p-2',
				hideHeaderClose: false,
				centered: true
			}) 
			.then(value => {
				if (value){
					this.form.id=id,
					this.$axios.post(GLOBAL.URL_DELGROUP,JSON.stringify(this.form))
							.then(function (response) {
								that.getList();
							})
							.catch(function (error) {
									console.log("=========>",error);
							}); 		
						}
				})
				.catch(err => {
					// An error occurred
			})
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
