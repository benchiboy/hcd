<template>
 
	<div>
		
		<!-- <svg class="icon">
		  <use xlink:href="open-iconic.svg#account-login"  class="icon-account-login"></use>
		</svg>
		 -->
		<div style="margin-left: 5px;margin-right: 5px;" >
				
					<b-navbar toggleable="lg" type="dark" variant="info" >
						<b-navbar-brand href="#">深圳微点生物技术有限公司</b-navbar-brand>
		
						<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
						<b-collapse id="nav-collapse" is-nav>
							<b-navbar-nav>
								<b-nav-item href="#">Link</b-nav-item>
							</b-navbar-nav>
		
							<!-- Right aligned nav items -->
							
							<b-navbar-nav class="ml-auto">
								<b-navbar-nav  :class="active_id=='map'?'addclass':''" @click="menuclick('map')">
										<b-nav-item href="#/Home/Map" >
											<b-span class="text-white font-weight-bold text-decoration-none">设备地图 </b-span>
										</b-nav-item>
								</b-navbar-nav >
								<b-navbar-nav :class="active_id=='devicelist'?'addclass':''"  @click="menuclick('devicelist')">
										<b-nav-item href="#/Home/DeviceList" id="devicelist">
											<b-span class="text-white font-weight-bold">设备列表 </b-span>
										</b-nav-item>
								</b-navbar-nav>
								<b-navbar-nav :class="active_id=='analysis'?'addclass':''" @click="menuclick('analysis')">
										<b-nav-item href="#/Home/Analysis">
											<b-span class="text-white font-weight-bold">设备分析 </b-span>
										</b-nav-item>
								</b-navbar-nav>
						
								<b-navbar-nav :class="active_id=='decision'?'addclass':''"  @click="menuclick('decision')">
										<b-nav-item href="#/Home/Decision">
											<b-span class="text-white font-weight-bold">设备决策</b-span>
										</b-nav-item>
								</b-navbar-nav>
						
								<b-navbar-nav :class="active_id=='manage'?'addclass':''"  @click="menuclick('manage')">
										<b-nav-item href="#/Home/Manage">
											<span class="text-white font-weight-bold">设备管理</span>
										</b-nav-item>
								</b-navbar-nav>
						
								<b-navbar-nav >
										<b-img class="rounded-circle" style="width: 40px; height:40px"  src="https://picsum.photos/125/125/?image=58" alt="Center image"></b-img>
								</b-navbar-nav>
						
					
								<b-nav-item-dropdown right>
									<template slot="button-content">
										<em>
												<span class="text-danger font-weight-bold">
												{{nick_name}}
												</span>
										</em></template>
									<b-dropdown-item href="#">账户信息</b-dropdown-item>
									<b-dropdown-item href="#">退出</b-dropdown-item>
								</b-nav-item-dropdown>
						
						
						
						
					
							</b-navbar-nav>
							
						
						</b-collapse>
					</b-navbar>
	</div>
		
	<div class="homebox">
		<router-view/>
	</div>

	</div>

</template>
<script>	

export default {
  name: 'Home',
  data () {
		return {
			 active_id:'',
			 nick_name:'晓明',
			 avatar:'',
		}
  },
	mounted() {
		this.nick_name=this.$route.params.nick_name
	},
	methods: {
		menuclick(event) {
				this.active_id = event;
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
.homebox{
	 margin-left: 5px;
	 margin-right: 5px;
	 margin-top: 5px;
	 border: 1px solid #ddd;
}
.addclass{
	 border-bottom: 2px solid red;
}
.icon {
  width: 16px;
  height: 16px;
	
}
.icon-account-login {
  fill: #f00;
}

</style>
