<template>
	<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
	    <!-- Add icons to the links using the .nav-icon class
	         with font-awesome or any other icon font library -->
	    <li class="nav-item has-treeview menu-open">
	      	<router-link to="/" class="nav-link">
		       	<i class="nav-icon fa fa-dashboard"></i>
		       	<p>
		        	Dashboard
		       	</p>
	      	</router-link>
	    </li>
	    <li class="nav-item">
	        <router-link to="/Costumers" class="nav-link">
		       	<i class="nav-icon fa fa-dashboard"></i>
		       	<p>
		        	Costumers
		       	</p>
	      	</router-link>
	    </li>
    </ul>
</template>