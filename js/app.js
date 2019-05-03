//vue app for vue todo in development mode, use npm & Vue CLI for deployment
//©2019 M J Livesey
var app = new Vue({
	el:"#app",	
	data:{
		todoData:[],
		newTodo:"",
		filter:"all",
		index:{model:-1, view:-1},
		editText:""
	},
	template:`
	<div>
	<h1>Vue todo</h1>
	<div class="todoapp" v-on:mousedown="preventHighlight($event)">
	<input v-model="newTodo" v-on:keydown.enter="itemAdd()" class="new-todo" placeholder="What needs to be done?" name="todo" value="" autofocus>
	<div id="toggleAll" v-on:click="toggleAll()">&#10095</div>
	<ul v-on:click="itemClickHandler($event)" v-on:dblclick="itemDoubleClickHandler($event)" id="todoList" ref="list">
		<li 
			v-for="(item, i) in filteredtodoData" 
			v-bind:key="i"
			v-bind:class="(index.view === i)?'edit-item':(item.completed)?'completed-todo':'still-todo'" 
			:id="item.id"
			>
			<span v-if="index.view !== i" class="todo-item-text">{{item.title}}</span>
			<input v-else v-on:blur="cancelEdit()" v-on:keydown.enter="itemChange()" v-model="editText" placeholder="enter todo title">	
		</li>
	</ul>
	<div id="todoButtonArea">
		<div id="itemCount">{{getTodoCount}}</div>
		<div id="todoFilterArea">
		<div v-on:click="filter = 'all'" v-bind:class="(filter === 'all')?'todo-filters filter-active':'todo-filters'">All</div>
		<div v-on:click="filter = 'active'" v-bind:class="(filter === 'active')?'todo-filters filter-active':'todo-filters'">Active</div>
		<div v-on:click="filter = 'completed'" v-bind:class="(filter === 'completed')?'todo-filters filter-active':'todo-filters'">Completed</div>
	</div>
		<div v-on:click="clearCompleted()" v-show="getCompletedCount > 0" id="clearCompleted">Clear completed</div>
	</div>
	</div>	
	<footer id="todoFooter">
		<p>Vue todo by M J Livesey</p>
		<p>Double-click to change item</p>
		<p>&copy; 2019 Polymathic Design</p>
	</footer>
	</div>
	`,
	methods:{
		//delete item and toggle item on click, use offsetX to determine if click is first 50px or last 50px of box
		itemClickHandler:function(e){
			this.index.model = this.todoData.findIndex((v) => (v.id === e.target.id));
			if (this.index.model !== -1){
				if (e.target.offsetWidth-e.offsetX < 50){this.todoData.splice(this.index.model,1)} 
				else if (e.offsetX < 50){this.todoData[this.index.model].completed = !this.todoData[this.index.model].completed;this.todoData.splice(this.index.model,1,this.todoData[this.index.model]);}
			}
			this.index.model = -1;	
		},
		//double click to edit item, only allow edit if text is clicked
		itemDoubleClickHandler:function(e){
			if (e.target.offsetWidth-e.offsetX > 70 && e.offsetX > 70){
				e.preventDefault(); 
				this.index.model = this.todoData.findIndex((v) => (v.id === e.target.id));
				this.index.view = Array.from(app.$refs.list.children).findIndex((v) => (v.id === e.target.id));
				if (this.index.view !== -1){this.$nextTick(() => app.$refs.list.childNodes[this.index.view].children[0].focus()); };
			}
		},
		//cancel the edit by clickling anywhere else i.e. blur
		cancelEdit:function(){
			this.index.model=-1;this.index.view=-1;
		},
		//change the item title after double-click edit
		itemChange:function(){
			if (this.editText != ""){
			this.todoData[this.index.model].title = this.editText;
			this.todoData.splice(this.index.model,1,this.todoData[this.index.model])
			}
			this.index.model=-1;this.index.view=-1;
		},
		//add an item on Enter key press if not blank
		itemAdd:function(){
				let newId = this.todoData.length === 0?0:Number(this.todoData[this.todoData.length-1].id)+1;
				this.todoData.push({title:this.newTodo, completed:false, id:newId.toString()});this.newTodo = "";
		},
		//clear all the completed todos, return filtered array of completed false
		clearCompleted:function(){
			this.todoData = this.todoData.filter(function(v){return v.completed === false});
		},
		toggleAll:function(){
			let completedCount = 0;
			this.todoData.forEach(function(v){if (v.completed === true){completedCount++}});
			if (completedCount >= this.todoData.length/2){
			this.todoData.forEach(function(v){v.completed = false});
			//model.save(); 
			//return false;
			}else{
			this.todoData.forEach(function(v){v.completed = true});
			//return true;
			}
		},
		//prevent the blue highlight when doubleclick
		preventHighlight:function(e){
			if (e.detail > 1){e.preventDefault();}
		}
	},
	computed:{
		getTodoCount:function(){
			var count=0;
			this.todoData.forEach(function(v){if (v.completed === false){count++}})
			return count === 1?`${count} item left`:`${count} items left`; 
		},
		getCompletedCount:function(){
			var count=0;
			this.todoData.forEach(function(v){if (v.completed === true){count++}})
			return count; 
		},
		filteredtodoData:function(){
			return this.todoData.filter(
					(v) => {if (this.filter === "all" || 
						(this.filter === 'active' && v.completed === false) || 
						(this.filter === 'completed' && v.completed === true)
			){return v}});
		}
	},
	watch:{
		todoData:{
			handler: function(oldTodoData,newTodoData){
				if (newTodoData === undefined){			
					if (localStorage.todoData === undefined){localStorage.todoData = JSON.stringify(this.todoData);}
					else {this.todoData = JSON.parse(localStorage.todoData);}
				}
				else {localStorage.todoData = JSON.stringify(this.todoData);}
			},
			immediate:true,
			deep:true
		},
		filter:{
			handler:function(oldFilter,newFilter){
				if (newFilter === undefined){
					if (localStorage.todoFilter === undefined){localStorage.todoFilter = this.filter;}
					else {this.filter = localStorage.todoFilter}
					}
				else {localStorage.todoFilter = this.filter;}
			},
			immediate:true
		}
	}
})