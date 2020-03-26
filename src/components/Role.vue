<template>
  <div >
	<div class="d-flex justify-content-center">
	    <b-modal
	  		id="manage-modal-add"
	  		ref="modal"
	  		title="新增角色管理"
	  		scrollable
	  		@show="showModalAdd"
	  		@hidden="hiddenModal"
	  		size="lg"
	  		@ok="handleAddOk">
			<template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
				<b-button size="md" variant="success" @click="ok()">
					确定
				</b-button>
				<b-button size="md" variant="danger" @click="cancel()">
					取消
				</b-button>
			</template>
	        <form ref="form" @submit.stop.prevent="handleOk" >
	  			<label for="role_name">角色名称</label>
					<b-input autofocus=true  v-model="form.role_name" 
					:state="role_name_state" id="role_name"  >
					</b-input>
				<b-form-invalid-feedback :state="role_name_state">
					模块名称不能为空且不能重复！
				</b-form-invalid-feedback>
				<b-form-valid-feedback :state="role_name_state">
					校验通过
				</b-form-valid-feedback>
			</form>
			<div class="mt-1 " >
				<div class="d-flex justify-content-between">
				 <label class="text-primary">系统模块包括的菜单：</label>
				</div>
				<b-form  class="mt-1 d-inline">
					<div v-for=" item in menuList">
					<label :for="item.group.group_no">{{item.group.group_name}}</label>
						<b-form-checkbox-group
							:id="item.group.group_no"
							v-model="menu_no"
							:options="item.list"
							switches
						></b-form-checkbox-group>				
					 </b-form-group>
					</div>
				</b-form>
	  	 	</div > 
	    </b-modal>

			<b-modal
			id="manage-modal-edit"
			ref="modal2"
			title="修改组"
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
	  			<label for="role_name">角色名称</label>
					<b-input autofocus=true  v-model="form.role_name" 
					:state="role_name_state" id="role_name"  >
					</b-input>
				<b-form-invalid-feedback :state="role_name_state">
					模块名称不能为空且不能重复！
				</b-form-invalid-feedback>
				<b-form-valid-feedback :state="role_name_state">
					校验通过
				</b-form-valid-feedback>
			</form>
			<div class="mt-1 " >
				<div class="d-flex justify-content-between">
				 <label class="text-primary">系统模块包括的菜单：</label>
				</div>
				<b-form  class="mt-1 d-inline">
					<div v-for=" item in menuList">
					<label :for="item.group.group_no">{{item.group.group_name}}</label>
						<b-form-checkbox-group
							:id="item.group.group_no"
							v-model="menu_no"
							:options="item.list"
							switches
						></b-form-checkbox-group>				
					 </b-form-group>
					</div>
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
			sort-icon-left
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
			<b-button size="sm" variant="outline-info" v-b-modal.manage-modal-edit class="ml-2" @click="getInfo(data.item.id)">
				<b-icon  font-scale="1.5" icon="pencil" aria-hidden="true"></b-icon>
				<span class="sr-only">Help</span>
			</b-button>
			
			<b-button size="sm" variant="outline-info" class="ml-2" @click="delInfo(data.item.id,data.item.group_name)">
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
		menu_no:[],

		isBusy: false,
		items:  [],
        fields: [
				'index',
				{ key: 'role_no', 	label: '角色编号' },
				{ key: 'role_name', 	label: '角色名称' },
				{ key: 'status', 	label: '状态' },
				{ key: 'oper', 			label: '操作' },   			
			],
		form:{
			id:0, 
			corp_no:"",
			role_no:0, 
			role_name:"",
			created_time:0, 
			status:"",
			sort:0, 
			updated_time:0, 
			version:0, 
					
		},
		post_form:{
			role:this.form,
			list:[],
		},
		search:{
				sort_fld: "id",
				sort_mode:"desc",
				corp_no:"",
				role_no:0, 
				role_name:"",
				status:"",
				sort:0, 
				version:0, 
				page_no: 1,
				page_size: 7,
		},
		subList:[
			{
				corp_no:"",
				role_no:0, 
				menu_no:0, 
				version:0, 
			}
		],
		menuList:[],
	    totalRows: 1,
        pageOptions: [8, 10, 15],
        sortBy: null,
	    sortDesc: false,
        sortDirection: 'asc',
        filter: null,
		isSubmit:false,
		checkPass:true,
		isRepeat:false,
	    infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }
      }
    },
    computed: {
		sortOptions() {
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
			return this.form.group_name.length!=""
		},
	},
	
    mounted() {
		this.getList()
		this.getListEx()
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
			
		},
			
		onSorted(ctx) {
			if (ctx.sortDesc){			
				this.search.sort_mode="desc"
			}else{
				this.search.sort_mode="asc"
			}
			this.search.sort_fld=ctx.sortBy
			this.search.page_no=1
			this.getList();
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
			return valid
		},
	
		handleAddOk(evt) {
			this.isSubmit=true
			this.checkPass=true
		
			if (!this.checkFormValidity()) {
				return
			}
			this.$nextTick(() => {
			this.$refs.modal.hide()
				this.addInfo()
			})
		},

		handleEditOk(evt) {
			this.isSubmit=true;
			
	
			this.$nextTick(() => {
				this.$refs.modal2.hide()
				this.setInfo()
			})
		},
		
		showModalAdd(evt) {
			this.isSubmit=false;
			this.form.role_name=""
			this.menu_no=[]
			this.subList=[]
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
			this.$axios.post(GLOBAL.URL_GETROLE_LIST, 
						JSON.stringify(this.search),
						{headers: {'Content-Type': 'application/json'}})
						.then(function (response) {
							that.items=response.data.list
							that.totalRows = response.data.total
						})
				.catch(function (error) {
					that.toast("出错了:"+error)
			}); 		
		},

		/**/
		getListEx(){
			var that=this;
			//that.isBusy=true
			this.$axios.post(GLOBAL.URL_GETGROUP_LISTEX, 
						JSON.stringify(this.search),
						{headers: {'Content-Type': 'application/json'}})
						.then(function (response) {
							console.log(response.data)
							that.menuList=response.data.list
						})
				.catch(function (error) {
					that.toast("出错了:"+error)
			}); 		
		},
		/* 新增*/
		addInfo() {
			var that=this;
			for(let i = 0,len =this.menu_no.length;i<len;i++){
				this.subList.push({"menu_no":this.menu_no[i]})
			}
			this.post_form.list=this.subList
			this.post_form.role=this.form
			this.$axios.post(GLOBAL.URL_ADDROLE, 
								JSON.stringify(this.post_form))
								.then(function (response) {
							if (response.data.err_code=="0000"){
								that.toast(response.data.err_msg)
								that.search.page_no=1
								that.search.sort_fld="id"
								that.search.sort_mode="desc"
								that.getList();
							}else{
								that.toast(response.data.err_msg)
							}
						})
				.catch(function (error) {
						that.toast("出错了:"+error)
			}); 		
		},
		/* 修改提交*/
		setInfo() {
			var that=this;
			for(let i = 0,len =this.menu_no.length;i<len;i++){
				this.subList.push({"menu_no":this.menu_no[i]})
			}
			this.post_form.list=this.subList
			this.post_form.role=this.form
			this.$axios.post(GLOBAL.URL_SETROLE, 
							JSON.stringify(this.post_form))
							.then(function (response) {
								if (response.data.err_code=="0000"){
									that.toast(response.data.err_msg)
									that.getList();
								}else{
									that.toast(response.data.err_msg)
								}
							})
				.catch(function (error) {
						that.toast("出错了:"+error)
				}); 		
			},
			
		/* 得到用户信息*/
		getInfo(id) {
			var that=this;
			this.form.id=id
			this.menu_no=[]
			this.$axios.post(GLOBAL.URL_GETROLE, 
						JSON.stringify(this.form))
						.then(function (response) {
							that.form=response.data.role
							that.subList=response.data.list
							for(let i = 0,len =that.subList.length;i<len;i++){
								that.menu_no.push(that.subList[i].menu_no)
							}
						})
				.catch(function (error) {
						that.toast("出错了:"+error)
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
					this.$axios.post(GLOBAL.URL_DELROLE,JSON.stringify(this.form))
							.then(function (response) {
								if (response.data.err_code=="0000"){
									that.toast(response.data.err_msg)
									that.getList();
								}else{
									that.toast(response.data.err_msg)
								}
							})
							.catch(function (error) {
								that.toast("出错了:"+error)
							}); 		
						}
				})
				.catch(err => {
					
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
