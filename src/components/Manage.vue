<template>
	

	
  <div >
	
	
	<div>
  <b-tabs
    active-nav-item-class="font-weight-bold text-uppercase text-danger"
    active-tab-class="font-weight-bold text-success"
    content-class="mt-3" >
   

		<b-tab title="个体分析" active>
			<div>
			<b-card no-body>
				<b-tabs pills card vertical>
					<b-tab title="设备身份" active><b-card-text>Tab Contents 1</b-card-text></b-tab>
					<b-tab title="设备配置"><b-card-text>Tab Contents 2</b-card-text></b-tab>
					<b-tab title="监控预警"><b-card-text>Tab Contents 3</b-card-text></b-tab>
				</b-tabs>
			</b-card>
		</div>
		
		</b-tab>
    <b-tab title="整体分析"><p>I'm the second tab</p></b-tab>
				
  </b-tabs>
</div>

	</div>
</template>

<script>
  export default {
    data() {
      return {
       
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
        sortBy: null,
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
      }
    },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length
    },
    methods: {
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
</style>
