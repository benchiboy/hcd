<template>
	

	
	
  <div class="m-20 " >
	
	
	

<div>
  

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Name"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="nameState"
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
	
	
<div>
	
	<div class="d-flex justify-content-center mt-2 mb-2">
		<b-input-group class="w-25">
      <b-input-group-text slot="prepend">登录名称</b-input-group-text>
				<b-form-input type="text" min="0.00"></b-form-input>
			<b-input-group-append>
				<b-button variant="outline-secondary">查询</b-button>
			</b-input-group-append>
		</b-input-group>
	</div>		
				
  <div>
    <b-card-group deck class="m-2">
      <b-card
        border-variant="primary"
        header="李晓明"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
	    >
				<b-card-text>
				
				<div class="d-flex justify-content-between">
					<span><h6>登录账号:</h6></span><span>admin</span>
				</div>
				
					<div class="d-flex justify-content-between">
						<span><h6>上次登录时间:</h6></span><span>2018-12-12 12:12:12</span>
					</div>
					<div class="d-flex justify-content-between">
						<span><h6>用户状态:</h6></span><span>正常</span>
					</div>
					<div class="d-flex justify-content-between">
						<span><h6>权限:</h6></span><span>设备地图、设备分析</span>
					</div>
				
				<div class="d-flex justify-content-end">
						
				<b-button-group size="sm"  class="mt-2" >
					
				<b-button variant="outline-primary" class="mr-3">
						<img  src="../assets/icon_trashcan.png" alt="Image 1" width="30" height="30" class=""></img>
				</b-button>
				
				<b-button variant="outline-primary">
					<img  src="../assets/icon_dispose.png" alt="Image 1" width="30" height="30" class=""></img>
				</b-button>
					
					
				</b-button-group>
				</div>
		
				</b-card-text>
			</b-card>

      <b-card
        border-variant="secondary"
        header="李晓明"
        header-border-variant="secondary"
        align="center"
      >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card border-variant="success" header="Success" align="center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
			
			<b-card border-variant="success" header="Success" align="center">
				<b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
			</b-card>
			
    </b-card-group>
  </div>
  
	<div>
	    <b-card-group deck class="m-2 w-25">
	      <b-card
	        border-variant="primary"
	        header="新增用户"
	        header-bg-variant="primary"
	        header-text-variant="white"
	        align="center"
					
	      >
	      <b-card-text></b-card-text>
					
					<b-button variant="outline-primary">
						<img  src="../assets/icon_addperson.png" alt="Image 1" width="30" height="30" class=""></img>
					</b-button>
						
						
	      </b-card>
	
	      
	    </b-card-group>
	  </div>
	
	
	
	
  </div>




	


	
	</div>
	
	
</template>

<script>
  export default {
    data() {
      return {
       
      
      }
    },
    computed: {
     
    },
    mounted() {
     
    },
    methods: {
      
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
</style>
