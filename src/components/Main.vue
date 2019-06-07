<template>
 <div>
 	<div class="" >
		<b-navbar toggleable="lg" type="dark" variant="dark" class="navbar-inverse" >
			<b-navbar-brand href="#">深圳微点生物技术有限公司</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-button   variant="dark" @click="onMenuCollapse">
							<img  src="../assets/menu.png" alt="Image 1" width="25" height="25" class="">
							</img>
					</b-button>
				</b-navbar-nav>
				<b-navbar-nav class="ml-auto">
					<b-navbar-nav  id="map" >
							<b-nav-item href="#/Home/Map" >
								<b-span class="text-white font-weight-bold text-decoration-none">修改密码 </b-span>
							</b-nav-item>
					</b-navbar-nav >
				<b-navbar-nav  id="map" >
						<b-nav-item href="#" >
							<b-span class="text-white font-weight-bold text-decoration-none">admin </b-span>
						</b-nav-item>
				</b-navbar-nav >
					<b-navbar-nav >
							<b-img class="rounded-circle" style="width: 40px; height:40px"  src="https://picsum.photos/125/125/?image=58" alt="Center image"></b-img>
					</b-navbar-nav>
					<b-nav-item-dropdown right>
						<b-dropdown-item  @click="onQuit">退出</b-dropdown-item>
				</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
 </div>
 
 <b-container fluid >
		<b-row class="menuBox">
				<b-col :md="menuCols"  class=" bg-secondary ">
					<div v-show="isCollapse">
							<div >
								<span>
								<b-button v-b-toggle.collapse-1 pill variant="primary" block 
								class="mt-2 d-flex justify-content-between " @click="onMenuClick(0)">
								 <img  src="../assets/device.png" alt="Image 1" width="20" height="20" class="">
								 </img>
								 <span >设备管理</span>
									<img  src="../assets/arrow_up.png" alt="Image 1" 
											width="20" height="20" class="" v-show="isMenuUpClick[0]">
									</img>
									<img  src="../assets/arrow_down.png" alt="Image 1" 
											width="20" height="20" class="" v-show="isMenuDownClick[0]">
									</img>
								</b-button>
								</span>
								 <b-collapse id="collapse-1"  accordion="my-accordion" class="m-2">
										<b-button block  pill variant="success">设备档案</b-button>
										<b-button block pill variant="info">设备升级</b-button>
										<b-button block  pill variant="info">设备维护</b-button>
								</b-collapse>
							</div>
							<div>
								<span>
								<b-button v-b-toggle.collapse-2 pill variant="primary" block 
								class=" mt-2 d-flex justify-content-between " @click="onMenuClick(1)">
									<img  src="../assets/icon_addperson.png" alt="Image 1" width="20" height="20" class="">
									</img>
									<span >用户管理</span>
									<img  src="../assets/arrow_up.png" alt="Image 1" 
												width="20" height="20" class="" v-show="isMenuUpClick[1]">
									</img>
									<img  src="../assets/arrow_down.png" alt="Image 1" 
												width="20" height="20" class="" v-show="isMenuDownClick[1]">
									</img> 
								</b-button>
								</span>
								<b-collapse id="collapse-2"  accordion="my-accordion" class="m-2">
										<b-button block pill variant="success">账户列表</b-button>
										<b-button block pill variant="info">角色管理</b-button>
										<b-button block pill variant="info">操作管理</b-button>
										<b-button block pill variant="info">修改密码</b-button>
								</b-collapse>
							</div>
								<div >
									<span>
									<b-button v-b-toggle.collapse-3 pill variant="primary" block 
									class=" mt-2 d-flex justify-content-between " @click="onMenuClick(2)">
										<img  src="../assets/icon_addperson.png" alt="Image 1" width="20" height="20" class="">
										</img>
									<span >设备分析</span>
										<img  src="../assets/arrow_up.png" alt="Image 1" 
													width="20" height="20" class="" v-show="isMenuUpClick[2]">
										</img>
										<img  src="../assets/arrow_down.png" alt="Image 1" 
													width="20" height="20" class="" v-show="isMenuDownClick[2]">
										</img> 
									</b-button>
									</span>
									<b-collapse id="collapse-3"  accordion="my-accordion" class="m-2">
											<b-button block pill variant="success">个体分析</b-button>
											<b-button block pill variant="info">整体分析</b-button>
											<b-button block pill variant="info">设备分布统计</b-button>
											<b-button block pill variant="info">设备决策分析</b-button>
									</b-collapse>
								</div>
					</div>
				</b-col>
				<b-col :md="contentCols">
					<router-view/>
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
				menuCols:2,
				contentCols:10,
				isCollapse:true,
				isMenuUpClick:[true,true,true],
				isMenuDownClick:[false,false,false],
			}
    },
    mounted() {
			this.$router.push({name:'DeviceList',params:{}});
		},
    methods: {
			onMenuClick(i){
				//this.isMenuUpClick[0]=!(this.isMenuUpClick[0])
				this.$set(this.isMenuUpClick, i, !(this.isMenuUpClick[i])); //
				//this.isMenuDownClick[0]=!(this.isMenuDownClick[0])
				this.$set(this.isMenuDownClick, i, !(this.isMenuDownClick[i])); //
				for(var t=0;t<this.isMenuUpClick.length;t++){
					 if (t!=i){
						 this.$set(this.isMenuUpClick, t, true); //
						 //this.isMenuDownClick[0]=!(this.isMenuDownClick[0])
						 this.$set(this.isMenuDownClick, t, false); //
					 }
				}
			},
			onMenuCollapse(){
				if (this.isCollapse){
					 this.menuCols=0;
					 this.contentCols=12;
				}else{
						this.menuCols=2;
						this.contentCols=10;
				}
				this.isCollapse=!this.isCollapse
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
.menuBox{
	 height: 100%;
	 width: 100%;
	 padding: 0;
	 position: fixed;
	 background:bg-secondary;
	
}


</style>
