<template>
	<div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Custumers</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <!-- Main content -->
        <section class="content">     
            <div class="container-fluid">
            	<div class="card-body">
            		<div :class="classinf2" v-show='alerter2'>
				        <button type="button" class="close" aria-label="Close"><span aria-hidden="true" @click="alerter2= false">&times;</span></button>
				        <h4>Alert!</h4>

				        <p>{{isialert2}}</p>
				    </div>
            		<button type="button" @click="addnew()" class="btn btn-info" data-toggle="modal" data-target="#modal-default">
		                Add
		            </button>
		            <br>
					<table class="table table-bordered table-hover">
		                <thead>
			                <tr>
			                  <th>No</th>
			                  <th>Name</th>
			                  <th>DOB</th>
			                  <th>Phone Number</th>
			                  <th>Email</th>
			                  <th>Gender</th>
			                  <th>Action</th>
			                </tr>
		                </thead>
		                <tbody>
		                	<template v-for="(cust, index) in custall">
		                		<tr>
			                		<td>{{index+1}}</td>
			                		<td>{{cust.FirstName}} {{cust.LastName}}</td>
			                		<td>{{cust.DOB}}</td>
			                		<td>{{cust.Phone}}</td>
			                		<td>{{cust.Email}}</td>
			                		<td v-if="cust.Gender == 1">Male</td>
			                		<td v-if="cust.Gender == 2">Female</td>
			                		<td>
			                			<button type="button" class="btn btn-success" data-toggle="modal" data-target="#modal-default" @click="editcust(cust)">
							                Edit
							            </button>
			                			<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modalconf" @click="confirming(cust.CostumerID,cust.FirstName)">
							                Delete
							            </button>							            
			                		</td>
		                		</tr>
		                	</template>
		                </tbody>
		            </table>
		        </div>
			</div>
		</section>

		<div class="modal fade" id="modal-default">
          	<div class="modal-dialog">
            	<div class="modal-content">
              		<div class="modal-header">
                		<h4 class="modal-title">{{ judul }}</h4>
                		<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              		</div>
              		<div class="modal-body">
              			<div :class="classinf" v-show='alerter'>
				          <button type="button" class="close" aria-label="Close"><span aria-hidden="true" @click="alerter= false">&times;</span></button>
				          <h4>Alert!</h4>

				          <p>{{isialert}}</p>
				        </div>
                		<div class="card-body">
                			<input type="hidden" v-model="idnew" class="form-control" id="inputEmail3" placeholder="First Name">
			                <div class="form-group">
			                    <label for="inputEmail3" class="col-sm-12 control-label">First Name</label>
			                    <div class="col-sm-12">
			                	    <input type="text" v-model="fname" v-validate="'required'" data-vv-name="First Name" class="form-control" id="inputEmail3" placeholder="First Name">
			                	    <span style="color:red">{{errors.first('First Name')}}</span>
			                    </div>
			                </div>
			                <div class="form-group">
			                    <label for="inputEmail3" class="col-sm-12 control-label">Last Name</label>
			                    <div class="col-sm-12">
			                	    <input type="text" v-model="lname" class="form-control" id="inputEmail3" placeholder="Last Name">
			                    </div>
			                </div>			                
			                <div class="form-group">
			                    <label for="inputEmail3" class="col-sm-12 control-label">Company Name</label>
			                    <div class="col-sm-12">
			                	    <input type="text" v-model="compname" class="form-control" id="inputEmail3" placeholder="Company Name">
			                    </div>
			                </div>
			                <div class="form-group">
			                    <label for="inputEmail3" class="col-sm-12 control-label">Date Of Birth</label>
			                    <div class="col-sm-12">
					                <input type="date" v-validate="'required'" data-vv-name="Date Of Birth" v-model="date" class="form-control float-right" id="tanggal">
					                <span style="color:red">{{errors.first('Date Of Birth')}}</span>
					            </div>
			                </div>		                
			                <div class="form-group">
			                    <label for="inputEmail3" class="col-sm-12 control-label">Gender</label>
			                    <div class="col-sm-12">
			                	    <select v-model="gender" v-validate="'required'" data-vv-name="Gender" class="form-control select2" style="width: 100%;">
					                    <option value="" selected="selected">..:: Select One ::..</option>
					                    <option value="1">Male</option>
					                    <option value="2">Female</option>
					                </select>
					                <span style="color:red">{{errors.first('Gender')}}</span>
			                    </div>
			                </div>
			                <div class="form-group">
			                    <label for="inputEmail3" class="col-sm-12 control-label">Email address</label>
			                    <div class="col-sm-12">
			                    	<input type="email" v-validate="'required||email'" data-vv-name="Email" v-model="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
					                <span style="color:red">{{errors.first('Email')}}</span>
			                	</div>
			                </div>
			                <div class="form-group">
			                    <label for="inputEmail3" class="col-sm-12 control-label">Phone Number</label>
			                    <div class="col-sm-12">
			                    	<input type="number" v-validate="'required'" data-vv-name="Phone Number" v-model="phone" class="form-control" id="exampleInputEmail1" placeholder="Enter Phone">
					                <span style="color:red">{{errors.first('Phone Number')}}</span>
			                	</div>
			                </div>
			            </div>
              		</div>
              		<div class="modal-footer">
                		<button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                		<button type="button" class="btn btn-primary" @click="saveall(cha)">Save changes</button>
              		</div>
           		</div>
            <!-- /.modal-content -->
          	</div>
          <!-- /.modal-dialog -->
        </div>

		<div class="modal fade" id="modalconf">
          	<div class="modal-dialog">
            	<div class="modal-content">
              		<div class="modal-header">
              			<h4 class="modal-title">Confirm</h4>
                		<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              		</div>
              		<div class="modal-body">
              			<input type="hidden" v-model="iddel" class="form-control" id="inputEmail3" placeholder="First Name">
              			{{messageconf}}
              		</div>
              		<div class="modal-footer">
              			<button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                		<button type="button" class="btn btn-primary" data-dismiss="modal" @click="destroycust(iddel)">Confirm</button>
              		</div>
              	</div>
            </div>
        </div>

	</div>
</template>
<script type="text/javascript">
      $(function () {
        $('select').select2()
        $('#tanggal').daterangepicker()
        $('.table').DataTable()
      })
</script>
<script type="text/javascript">

import Vue from 'vue'
import axios from 'axios'
import store from '../store/index.js'

export default {
	$_veeValidate: {
      validator: 'new'
    },
    mounted(){
    	this.getdata()
    },
	data(){
		return{
			judul: 'Tambah Custumer Baru',
			fname: '',
			lname: '',
			date: '',
			gender: '',
			email: '',
			phone: '',
			classinf: 'callout callout-info',
			alerter: false,
			isialert: 'this is where alert goes to',
			classinf2: 'callout callout-info',
			alerter2: false,
			isialert2: 'this is where alert goes to',
			compname: '',
			custall:[],
			messageconf: '',
			iddel:'',
			cha: '',
			idnew: ''
		}
	},
	methods: {
		addnew(){
			this.judul= 'Add New Custumer'
			this.cha = 'add_new'
			this.clear()
		},
		confirming(ids,name){
			this.iddel = ids
			this.messageconf = 'Do you want delete customer '+name+' ?'
		},
		editcust(data){
			this.judul = 'Edit Custumer'
			this.cha = 'editing'
			this.idnew = data.CostumerID
			this.fname = data.FirstName
			this.lname = data.LastName
			this.date = data.DOB
			this.gender = data.Gender
			this.email = data.Email
			this.phone = data.Phone
			this.compname = data.CompanyName

			console.log(data)
		},
		destroycust(id){
			axios.get(axiosurl + 'delcustomer/'+ id ,{
				headers: {
				    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
				}
			})
			.then(function (res) {
				this.alerter2 = true
				this.classinf2 = 'callout callout-danger'
				this.isialert2 = 'Custumer successfully deleted!'

				this.getdata()

				console.log(res)
				this.clear()
			}.bind(this))
		},
		saveall(c){
			let data = {
				FirstName: this.fname,
				LastName: this.lname,
				DOB: this.date,
				Gender: this.gender,
				Email: this.email,
				Phone: this.phone,
				CompanyName: this.compname
			}

			this.$validator.validateAll().then((result) => {
				if (!result) {
					this.alerter = true
					this.classinf = 'callout callout-danger'
					this.isialert = 'There is empty field, please try again!!'
				}
				else{
					if (c == 'add_new') {
						axios.post(axiosurl + 'savecustomer', data,{
							headers: {
							    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
							}
						})
					    .then(function (res) {
					    	this.alerter = true
							this.classinf = 'callout callout-info'
							this.isialert = 'Custumer ' + res.data.FirstName + ' successfully added!'

							store.commit('SAVE_CUST',res.data)

							this.getdata()

							console.log(res)
							this.clear()
						}.bind(this))
					}
					else if(c == 'editing'){
						let id = this.idnew

						axios.post(axiosurl + 'editcustomer/'+ id , data,{
							headers: {
							    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
							}
						})
					    .then(function (res) {
					    	this.alerter = true
							this.classinf = 'callout callout-info'
							this.isialert = 'Custumer ' + res.data.FirstName + ' successfully edited!'

							store.commit('SAVE_CUST',res.data)

							this.getdata()

							console.log(res)
							this.clear()
						}.bind(this))
					}
					else{
						this.alerter = true
						this.classinf = 'callout callout-danger'
						this.isialert = 'There is no method for function, please try again!!'
					}
				}
			})
		},
		getdata(){
			this.custall = []
			axios.get(axiosurl + 'getcustomerall',{
				headers: {
				    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
				}
			})
			.then(function (res) {
				$.each(res.data, function(i,datas){
					this.custall.push(datas)
					console.log(datas)
				}.bind(this))
			}.bind(this))
		},
		fetchdataafterins(data){
			$.each(data, function(i,datas){
				this.custall.push(datas)
				console.log(datas)
			}.bind(this))
		},
		clear(){
			this.fname = ''
			this.lname = ''
			this.date = ''
			this.gender = ''
			this.email = ''
			this.phone = ''
			this.compname = ''

		}
	}
}
</script>