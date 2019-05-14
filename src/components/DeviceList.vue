<template>
  <div >
		
		 <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col md="6" class="my-1">
        <b-form-group label-cols-sm="3" label="Filter" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col md="6" class="my-1">
        <b-form-group label-cols-sm="3" label="Sort" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortBy" :options="sortOptions">
              <option slot="first" :value="null">-- none --</option>
            </b-form-select>
            <b-form-select v-model="sortDesc" :disabled="!sortBy" slot="append">
              <option :value="false">Asc</option> <option :value="true">Desc</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col md="6" class="my-1">
        <b-form-group label-cols-sm="3" label="Sort direction" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortDirection" slot="append">
              <option value="asc">Asc</option> <option value="desc">Desc</option>
              <option value="last">Last</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col md="6" class="my-1">
        <b-form-group label-cols-sm="3" label="Per page" class="mb-0">
          <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table
      show-empty
      stacked="md"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      @filtered="onFiltered"
    >
      <template slot="name" slot-scope="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template slot="isActive" slot-scope="row">
        {{ row.value ? 'Yes :)' : 'No :(' }}
      </template>

      <template slot="actions" slot-scope="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          Info modal
        </b-button>
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
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
        ></b-pagination>
      </b-col>
    </b-row>

    <!-- Info modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
  </b-container>
	
	
	</div>
</template>

<script>
  import GLOBAL from './Global.js'

  export default {
    data() {
      return {
        items: [
 
					{ isActive: false, d_type_na:"qLab", device_id:"12121212" ,province_na:"四川",hospital:"四川第一人民医院",d_status_na:"运行良好",d_strategy:"保持",	d_person:"王大成"},
			{ isActive: false, d_type_na:"qLab", device_id:"12121212" ,province_na:"四川",hospital:"四川第一人民医院",d_status_na:"运行良好",d_strategy:"保持",	d_person:"王大成"},
			{ isActive: false, d_type_na:"qLab", device_id:"12121212" ,province_na:"四川",hospital:"四川第一人民医院",d_status_na:"运行良好",d_strategy:"保持",	d_person:"王大成"},
			{ isActive: false, d_type_na:"qLab", device_id:"12121212" ,province_na:"四川",hospital:"四川第一人民医院",d_status_na:"运行良好",d_strategy:"保持",	d_person:"王大成"},
			{ isActive: false, d_type_na:"qLab", device_id:"12121212" ,province_na:"四川",hospital:"四川第一人民医院",d_status_na:"运行良好",d_strategy:"保持",	d_person:"王大成"},
			{ isActive: false, d_type_na:"qLab", device_id:"12121212" ,province_na:"四川",hospital:"四川第一人民医院",d_status_na:"运行良好",d_strategy:"保持",	d_person:"王大成"},
			{ isActive: false, d_type_na:"qLab", device_id:"12121212" ,province_na:"四川",hospital:"四川第一人民医院",d_status_na:"运行良好",d_strategy:"保持",	d_person:"王大成"},
			{ isActive: false, d_type_na:"qLab", device_id:"12121212" ,province_na:"四川",hospital:"四川第一人民医院",d_status_na:"运行良好",d_strategy:"保持",	d_person:"王大成"},
			{ isActive: false, d_type_na:"qLab", device_id:"12121212" ,province_na:"四川",hospital:"四川第一人民医院",d_status_na:"运行良好",d_strategy:"保持",	d_person:"王大成"},
			{ isActive: false, d_type_na:"qLab", device_id:"12121212" ,province_na:"四川",hospital:"四川第一人民医院",d_status_na:"运行良好",d_strategy:"保持",	d_person:"王大成"},
			{ isActive: false, d_type_na:"qLab", device_id:"12121212" ,province_na:"四川",hospital:"四川第一人民医院",d_status_na:"运行良好",d_strategy:"保持",	d_person:"王大成"},
			{ isActive: false, d_type_na:"qLab", device_id:"12121212" ,province_na:"四川",hospital:"四川第一人民医院",d_status_na:"运行良好",d_strategy:"保持",	d_person:"王大成"},
			{ isActive: false, d_type_na:"qLab", device_id:"12121212" ,province_na:"四川",hospital:"四川第一人民医院",d_status_na:"运行良好",d_strategy:"保持",	d_person:"王大成"},
			{ isActive: false, d_type_na:"qLab", device_id:"12121212" ,province_na:"四川",hospital:"四川第一人民医院",d_status_na:"运行良好",d_strategy:"保持",	d_person:"王大成"},
			{ isActive: false, d_type_na:"qLab", device_id:"12121212" ,province_na:"四川",hospital:"四川第一人民医院",d_status_na:"运行良好",d_strategy:"保持",	d_person:"王大成"},
			{ isActive: false, d_type_na:"qLab", device_id:"12121212" ,province_na:"四川",hospital:"四川第一人民医院",d_status_na:"运行良好",d_strategy:"保持",	d_person:"王大成"},
																							
        ],
        fields: [
					{ key: 'd_type_na', 	label: '设备类型' },
					{ key: 'device_id', 	label: '设备序列号', sortable: true, sortDirection: 'desc' },
          { key: 'province_na',	label:'所在地区', sortable: true, class: 'text-center' },
       		{ key: 'hospital', 		label: '所在医院' },
					{ key: 'd_status_na', label: '设备状态' },
    			{ key: 'd_strategy', 	label: '决策' },
					{ key: 'd_person', 		label: '责任人' }
					
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 10,
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
    
				this.$axios.post(GLOBAL.URL_DEVICELIST)
							.then(function (response) {
								
								console.log("---->=========>OK");
							})
							.catch(function (error) {
								console.log("---->=========>",error);
				}); 		
					
		//	this.totalRows = this.items.length
			
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
